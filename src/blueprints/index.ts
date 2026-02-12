// ═══════════════════════════════════════════════════════════
// @pracio/shared — Blueprint Loader
// Single Source of Truth für alle Blueprint-Daten
// ═══════════════════════════════════════════════════════════

import type { Blueprint, ServiceItem, ServiceCategory, BlueprintSEO, EmployerData, AIContext } from './types.js'
import { HEALTHCARE_BLUEPRINTS } from './healthcare/index.js'
import { getBlueprintId } from '../registry.js'

// ── All blueprints across all industries ──

const ALL_BLUEPRINTS: Record<string, Blueprint> = {
  ...HEALTHCARE_BLUEPRINTS,
  // Zukünftig: ...LEGAL_BLUEPRINTS,
}

// ═══════════════════════════════════════════════════════════
// Blueprint Loader
// ═══════════════════════════════════════════════════════════

/**
 * Lädt einen Blueprint für eine Fachrichtung.
 * Nutzt die Fallback-Kette aus der Registry.
 * Gibt null zurück wenn kein Blueprint existiert.
 */
export function getBlueprint(fachrichtung: string): Blueprint | null {
  const normalized = fachrichtung.toLowerCase().trim()

  // Direkt vorhanden?
  if (ALL_BLUEPRINTS[normalized]) return ALL_BLUEPRINTS[normalized]

  // Fallback über Registry
  const fallbackId = getBlueprintId(normalized)
  if (fallbackId && ALL_BLUEPRINTS[fallbackId]) return ALL_BLUEPRINTS[fallbackId]

  return null
}

/**
 * Gibt alle verfügbaren Blueprint-IDs zurück.
 */
export function getAvailableBlueprintIds(): string[] {
  return Object.keys(ALL_BLUEPRINTS)
}

/**
 * Gibt alle Blueprints zurück.
 */
export function getAllBlueprints(): Record<string, Blueprint> {
  return ALL_BLUEPRINTS
}

// ═══════════════════════════════════════════════════════════
// Service Helpers
// ═══════════════════════════════════════════════════════════

/**
 * Alle Services eines Blueprints als flache Liste.
 */
export function getBlueprintServices(blueprint: Blueprint | null): ServiceItem[] {
  if (!blueprint?.services) return []
  return blueprint.services.flatMap(cat => cat.items || [])
}

/**
 * Services gruppiert nach Kategorie.
 */
export function getServicesByCategory(blueprint: Blueprint | null): ServiceCategory[] {
  if (!blueprint?.services) return []
  return blueprint.services
}

/**
 * Einzelnen Service nach Name finden.
 */
export function findService(blueprint: Blueprint | null, name: string): ServiceItem | null {
  if (!blueprint?.services) return null
  const lower = name.toLowerCase()
  for (const cat of blueprint.services) {
    for (const item of cat.items) {
      if (item.name.toLowerCase() === lower) return item
    }
  }
  return null
}

// ═══════════════════════════════════════════════════════════
// SEO Helpers
// ═══════════════════════════════════════════════════════════

/**
 * Generiert SEO-Daten aus Blueprint-Templates.
 */
export function generateSEO(
  blueprint: Blueprint | null,
  data: { praxis_name: string; ort: string; telefon?: string; adresse?: string }
): { title: string; description: string; keywords: string[] } {
  const replace = (template: string) =>
    template
      .replace(/\{praxis_name\}/g, data.praxis_name)
      .replace(/\{ort\}/g, data.ort)
      .replace(/\{telefon\}/g, data.telefon || '')
      .replace(/\{adresse\}/g, data.adresse || '')

  if (!blueprint?.seo) {
    return {
      title: `${data.praxis_name} | ${data.ort}`,
      description: `${data.praxis_name} in ${data.ort}. Jetzt Termin vereinbaren!`,
      keywords: [],
    }
  }

  return {
    title: replace(blueprint.seo.title_template),
    description: replace(blueprint.seo.description_template),
    keywords: blueprint.seo.keywords.map(k => replace(k)),
  }
}

// ═══════════════════════════════════════════════════════════
// AI Context Helpers
// ═══════════════════════════════════════════════════════════

/**
 * Baut den System-Prompt für Claude aus Blueprint ai_context + employer.
 * Ersetzt die alte buildAIContext() aus blueprintHelpers.ts.
 */
export function buildAIContext(
  blueprint: Blueprint | null,
  data: { praxis_name: string; ort: string }
): string {
  if (!blueprint) {
    return `Du schreibst Texte für die Website einer Arztpraxis.\nPRAXIS: ${data.praxis_name} in ${data.ort}\nSchreibe authentisch, ohne Floskeln, patientenfreundlich.`
  }

  const ctx = blueprint.ai_context
  const emp = blueprint.employer

  let prompt = `Du schreibst Texte für die Website einer ${blueprint.meta.name}.\n\n`
  prompt += `PRAXIS: ${data.praxis_name} in ${data.ort}\n\n`
  prompt += `TONALITÄT: ${ctx.tone.join(', ')}\n`
  prompt += `ZIELGRUPPE: ${ctx.audience}\n`

  if (ctx.personality?.length) {
    prompt += `PERSÖNLICHKEIT: ${ctx.personality.join(', ')}\n`
  }

  if (ctx.key_messages.length) {
    prompt += `\nKERNBOTSCHAFTEN:\n${ctx.key_messages.map(m => `- ${m}`).join('\n')}\n`
  }

  if (ctx.language_style) {
    prompt += `\nSPRACHSTIL:\n`
    if (ctx.language_style.avoid.length) prompt += `- Vermeide: ${ctx.language_style.avoid.join(', ')}\n`
    if (ctx.language_style.prefer.length) prompt += `- Bevorzuge: ${ctx.language_style.prefer.join(', ')}\n`
  }

  if (emp.typisch) {
    prompt += `\nFACHRICHTUNGS-KONTEXT: ${emp.typisch}\n`
  }

  if (emp.verbotene_phrasen.length) {
    prompt += `\nVERBOTEN (diese Phrasen NICHT verwenden):\n${emp.verbotene_phrasen.map(p => `- "${p}"`).join('\n')}\n`
  }

  prompt += `\nSchreibe authentisch, ohne Floskeln, patientenfreundlich.`
  return prompt.trim()
}

/**
 * Gibt den AI-Prompt für einen bestimmten Service zurück.
 */
export function buildServicePrompt(blueprint: Blueprint | null, serviceName: string): string | null {
  const service = findService(blueprint, serviceName)
  if (!service?.ai_prompt) return null
  return service.ai_prompt
}

// ═══════════════════════════════════════════════════════════
// Employer Helpers (ehemals employer-context.ts)
// ═══════════════════════════════════════════════════════════

/**
 * Employer-Daten für eine Fachrichtung.
 */
export function getEmployerData(fachrichtung: string): EmployerData | null {
  const bp = getBlueprint(fachrichtung)
  return bp?.employer || null
}

/**
 * Aufgaben für eine bestimmte Rolle in einer Fachrichtung.
 */
export function getAufgaben(fachrichtung: string, rolle: string): string {
  const bp = getBlueprint(fachrichtung)
  if (!bp?.employer?.aufgaben) return ''

  // Normalize role: "MFA" → "mfa", "Facharzt für..." → "arzt"
  const lower = rolle.toLowerCase().trim()
  const aufgaben = bp.employer.aufgaben

  // Direct match
  if (aufgaben[lower]) return aufgaben[lower]

  // Fuzzy match
  if (lower.includes('mfa') || lower.includes('medizinische fachangestellte')) return aufgaben['mfa'] || aufgaben['zfa'] || ''
  if (lower.includes('zfa') || lower.includes('zahnmedizinische')) return aufgaben['zfa'] || aufgaben['mfa'] || ''
  if (lower.includes('arzt') || lower.includes('ärztin') || lower.includes('facharzt')) return aufgaben['arzt'] || ''
  if (lower.includes('azubi') || lower.includes('auszubildend')) return aufgaben['azubi'] || ''
  if (lower.includes('mtra') || lower.includes('radiolog')) return aufgaben['mtra'] || aufgaben['mfa'] || ''
  if (lower.includes('therapeut')) return aufgaben['therapeut'] || aufgaben['mfa'] || ''

  // Fallback: first available
  const keys = Object.keys(aufgaben)
  return keys.length > 0 ? aufgaben[keys[0]] : ''
}

/**
 * Benefit-Kontext für eine Fachrichtung.
 */
export function getBenefitKontext(fachrichtung: string, benefitId: string): string | null {
  const bp = getBlueprint(fachrichtung)
  return bp?.employer?.benefit_kontexte?.[benefitId] || null
}

/**
 * Verbotene Phrasen für eine Fachrichtung.
 */
export function getVerbotenePhrases(fachrichtung: string): string[] {
  const bp = getBlueprint(fachrichtung)
  return bp?.employer?.verbotene_phrasen || []
}

// ═══════════════════════════════════════════════════════════
// Team Position Helpers
// ═══════════════════════════════════════════════════════════

export interface TeamPositionSuggestion {
  label: string
  category: 'arzt' | 'fachpersonal' | 'verwaltung' | 'ausbildung'
  aiPlaceholder: string  // Beispiel-Stichpunkte für KI-Input
}

/**
 * Positions-Vorschläge für die Team-Verwaltung.
 * Basiert auf employer.aufgaben Keys + fachrichtung_titel + jobs.templates.
 */
export function getBlueprintTeamPositions(fachrichtung: string): TeamPositionSuggestion[] {
  const bp = getBlueprint(fachrichtung)
  const positions: TeamPositionSuggestion[] = []
  
  // ── Ärzte-Positionen ──
  const titel = bp?.fachrichtung_titel
  if (titel) {
    positions.push({
      label: `${titel.de} / ${titel.de_female}`,
      category: 'arzt',
      aiPlaceholder: `z.B.: Seit 2015 niedergelassen, Schwerpunkt …, Fortbildungen in …, betreut …`,
    })
  } else {
    positions.push({
      label: 'Facharzt / Fachärztin',
      category: 'arzt',
      aiPlaceholder: 'z.B.: Seit 2015 niedergelassen, Schwerpunkt …, Fortbildungen in …',
    })
  }

  positions.push({
    label: 'Praxisinhaber/in',
    category: 'arzt',
    aiPlaceholder: 'z.B.: Gründung der Praxis 2010, besonderer Fokus auf …, Vision für die Praxis …',
  })

  // Weiterbildungsassistenz (wenn in jobs.templates)
  const hasWBA = bp?.jobs?.templates?.some(t => t.id.includes('weiterbildung'))
  if (hasWBA || bp?.employer?.aufgaben?.['arzt']) {
    positions.push({
      label: 'Weiterbildungsassistent/in',
      category: 'arzt',
      aiPlaceholder: 'z.B.: Seit 2023 in Weiterbildung, vorher … Klinik, interessiert sich besonders für …',
    })
  }

  // Angestellter Arzt
  positions.push({
    label: 'Angestellte/r Arzt/Ärztin',
    category: 'arzt',
    aiPlaceholder: 'z.B.: Seit 2020 im Team, vorher Oberarzt …-Klinik, Zusatzbezeichnung …, Schwerpunkt …',
  })

  // ── Fachpersonal ──
  const aufgaben = bp?.employer?.aufgaben || {}
  const aufgabenKeys = Object.keys(aufgaben)

  // MFA oder ZFA je nach Fachrichtung
  if (aufgabenKeys.includes('zfa') || fachrichtung.includes('zahn') || fachrichtung.includes('kiefer')) {
    positions.push({
      label: 'Zahnmedizinische Fachangestellte (ZFA)',
      category: 'fachpersonal',
      aiPlaceholder: `z.B.: Seit 2018 in der Praxis, ${aufgaben['zfa'] ? `Schwerpunkt: ${aufgaben['zfa'].split(',').slice(0, 2).join(', ')}` : 'Stuhlassistenz und Prophylaxe'}, Fortbildung …`,
    })
  } else if (aufgabenKeys.includes('mtra')) {
    positions.push({
      label: 'MTRA / Medizinisch-technische Radiologieassistentin',
      category: 'fachpersonal',
      aiPlaceholder: `z.B.: Seit 2017 im Team, ${aufgaben['mtra'] ? `spezialisiert auf ${aufgaben['mtra'].split(',').slice(0, 2).join(', ')}` : 'MRT/CT-Untersuchungen'}, Strahlenschutzkurs …`,
    })
  } else {
    positions.push({
      label: 'Medizinische Fachangestellte (MFA)',
      category: 'fachpersonal',
      aiPlaceholder: `z.B.: Seit 2019 im Team, ${aufgaben['mfa'] ? `Schwerpunkt: ${aufgaben['mfa'].split(',').slice(0, 2).join(', ')}` : 'Blutentnahmen, EKG, Patientenbetreuung'}, Fortbildung …`,
    })
  }

  positions.push({
    label: 'Leitende MFA / Praxismanagerin',
    category: 'fachpersonal',
    aiPlaceholder: 'z.B.: Seit 2015 im Team, seit 2020 leitend, koordiniert Praxisabläufe, Ansprechpartnerin für …, QM-Beauftragte',
  })

  // Therapeuten (wenn in aufgaben)
  if (aufgabenKeys.includes('therapeut')) {
    positions.push({
      label: 'Physiotherapeut/in',
      category: 'fachpersonal',
      aiPlaceholder: `z.B.: ${aufgaben['therapeut'] ? `Spezialisiert auf ${aufgaben['therapeut'].split(',').slice(0, 2).join(', ')}` : 'Manuelle Therapie, Krankengymnastik'}, … Jahre Berufserfahrung`,
    })
  }

  // Physician Assistant (modern, in größeren Praxen)
  positions.push({
    label: 'Physician Assistant (PA)',
    category: 'fachpersonal',
    aiPlaceholder: 'z.B.: PA-Studium 2022 abgeschlossen, unterstützt bei …, übernimmt eigenständig …',
  })

  // ── Verwaltung / Empfang ──
  positions.push({
    label: 'Empfang / Rezeption',
    category: 'verwaltung',
    aiPlaceholder: 'z.B.: Erster Kontakt für Patienten, Terminkoordination, spricht neben Deutsch auch …, sorgt für reibungslosen Ablauf',
  })

  positions.push({
    label: 'Praxismanager/in',
    category: 'verwaltung',
    aiPlaceholder: 'z.B.: Verantwortlich für Organisation und QM, optimiert Praxisabläufe, Abrechnung, Personalplanung',
  })

  positions.push({
    label: 'Verwaltung / Abrechnung',
    category: 'verwaltung',
    aiPlaceholder: 'z.B.: Zuständig für Privat- und Kassenabrechnung, Buchhaltung, Schriftverkehr mit Kostenträgern',
  })

  // ── Ausbildung ──
  const azubiLabel = aufgabenKeys.includes('zfa')
    ? 'Auszubildende/r ZFA'
    : 'Auszubildende/r MFA'

  positions.push({
    label: azubiLabel,
    category: 'ausbildung',
    aiPlaceholder: `z.B.: Im 2. Ausbildungsjahr, ${aufgaben['azubi'] ? aufgaben['azubi'].split(',').slice(0, 2).join(', ') : 'lernt alle Bereiche der Praxis kennen'}`,
  })

  return positions
}

// ═══════════════════════════════════════════════════════════
// Re-exports
// ═══════════════════════════════════════════════════════════

export type { Blueprint, ServiceItem, ServiceCategory, BlueprintSEO, EmployerData, AIContext }
export { HEALTHCARE_BLUEPRINTS }
