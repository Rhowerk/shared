// ═══════════════════════════════════════════════════════════
// @pracio/shared — content-prompts
// ═══════════════════════════════════════════════════════════
// AI-Prompt-Templates pro Block-Typ + Tonalität.
// Zwei Modi:
//   Batch  → Wizard Provisioning (alle Blöcke einer Seite)
//   Single → Portal Dashboard ("Neuen Vorschlag" für einen Block)
// ═══════════════════════════════════════════════════════════

import type { ResolvedBlock } from './block-resolver.ts'
import { getEmployerContext, getWert, type EmployerContext } from './employer-context.ts'
import { getBenefitLabels } from './benefit-catalog.ts'

// ── Types ──

export type TonalityPreset = 'herzlich' | 'fachlich' | 'entspannt' | 'verlaesslich'

export interface PromptContext {
  praxisName: string
  fachrichtung: string
  praxisGroesse: string         // 'einzelpraxis' | 'klein' | 'mittel' | 'gross' | 'mvz'
  ort: string
  plz?: string
  arztName?: string             // "Dr. med. Max Müller"
  tonality: TonalityPreset
  formalStyle: 'du' | 'sie'
  employerContext?: EmployerContext
}

export interface BlockPromptRequest {
  contentKey: string
  context: PromptContext
  blockSpecific?: Record<string, any>  // Benefits, Werte, Job-Titel, etc.
  regenerate?: boolean
  previousContent?: string
}

// ── Tonalitäts-Instruktionen ──

export const TONALITY_INSTRUCTIONS: Record<TonalityPreset, string> = {
  herzlich: `Stil: Warmherzig, einladend, emotional. Du-Anrede bevorzugt.
Satzlänge: Mittel, fließend. Wortwahl: persönlich, nahbar.
Verwende: "wir", "unser Team", "gemeinsam", "bei uns".
Vermeide: Steife Formulierungen, Nominalstil, Bürokratendeutsch.
Beispiel-Ton: "Werde Teil unseres Teams!"`,

  fachlich: `Stil: Professionell, modern, kompetent. Sie-Anrede standard.
Satzlänge: Klar und präzise. Wortwahl: sachlich, strukturiert.
Verwende: "Fachkompetenz", "auf höchstem Niveau", "qualifiziert".
Vermeide: Übertriebene Emotionalität, Slang, Ausrufezeichen.
Beispiel-Ton: "Ihre Karriere in der modernen Medizin."`,

  entspannt: `Stil: Locker, direkt, auf den Punkt. Du-Anrede.
Satzlänge: Kurz, manchmal fragmentarisch. Aktive Sprache.
Verwende: "Kein Schnickschnack", "Klar.", "Einfach gut."
Vermeide: Lange verschachtelte Sätze, Marketing-Floskeln, Füllwörter.
Beispiel-Ton: "Guter Job gesucht? Haben wir."`,

  verlaesslich: `Stil: Bodenständig, seriös, vertrauenswürdig. Mischform Sie/Du.
Satzlänge: Mittel, ruhig. Wortwahl: "beständig", "seit Jahren", "Vertrauen".
Verwende: "solide", "verlässlich", "bewährt", "auf uns ist Verlass".
Vermeide: Hipster-Sprache, Übertreibungen, reißerische Formulierungen.
Beispiel-Ton: "Gute Arbeit braucht gute Bedingungen."`,
}

// ── Praxisgröße-Kontext ──

const PRAXIS_GROESSE_CONTEXT: Record<string, string> = {
  einzelpraxis: 'Einzelpraxis. Verwende "Ich" statt "Wir". Persönlich, kurze Wege.',
  klein: 'Kleines Team (2-5). "In unserem kleinen Team". Familiär, jeder kennt jeden.',
  mittel: 'Mittelgroßes Team (6-15). "In unserem Team". Kollegial, strukturiert aber persönlich.',
  gross: 'Großes Team (16+). "In unserem Unternehmen". Professionell, Entwicklungsmöglichkeiten.',
  mvz: 'MVZ/Netzwerk. "In unserem Verbund". Standortvorteile, fachlicher Austausch, zentrale Verwaltung.',
  gemeinschaftspraxis: 'Gemeinschaftspraxis. "Wir" und Teamarbeit betonen.',
}

// ── Block-spezifische Prompt-Templates ──

const BLOCK_PROMPTS: Record<string, {
  instruction: string
  outputFormat: string
  maxLength?: string
}> = {
  heroTitle: {
    instruction: 'Generiere eine Headline für die Startseite. Identität der Praxis transportieren — KEINE Willkommensfloskeln ("Willkommen", "Herzlich Willkommen" sind VERBOTEN).',
    outputFormat: '{ "heroTitle": "...", "heroSubtitle": "..." }',
    maxLength: 'Headline max 8 Wörter, Subtitle max 15 Wörter.',
  },
  aboutText: {
    instruction: 'Schreibe einen Willkommenstext über die Praxis (3-4 Sätze, 80-100 Wörter). Persönlich, nicht generisch.',
    outputFormat: '{ "aboutTitle": "...", "aboutText": "..." }',
  },
  careerHero: {
    instruction: `Generiere eine Karriereseiten-Headline. Muss zur Praxis und Fachrichtung passen.
VERBOTEN: "Werden Sie Teil unseres Teams" (zu generisch), "Karriere bei uns", "Wir suchen Sie".
Stattdessen: Fachrichtungsbezug, emotional, individuell.`,
    outputFormat: '{ "careerHeadline": "...", "careerSubline": "..." }',
    maxLength: 'Headline max 8 Wörter, Subline max 15 Wörter.',
  },
  careerIntro: {
    instruction: `Schreibe einen Arbeitgeber-Einleitungstext (4-5 Sätze, 80-100 Wörter).
Beschreibe warum es sich lohnt hier zu arbeiten. Fokus: Arbeitsatmosphäre, Team, Perspektive.
NICHT wiederholen was auf der Hauptseite steht.`,
    outputFormat: '{ "careerIntro": "..." }',
  },
  careerWerte: {
    instruction: `Schreibe pro Wert einen Textblock (Headline + 2-3 Sätze).
Wenn Freitext vorhanden → einweben als konkretes Detail.
Ohne Freitext → fachrichtungs- und größenspezifisch konkretisieren.
KEIN Marketing-Bla — Substanz, echte Aussagen.`,
    outputFormat: '{ "werte": [{ "title": "...", "text": "..." }, ...] }',
  },
  careerBenefits: {
    instruction: `Formuliere die Benefits als echte Sätze/Kurzblöcke, NICHT als Stichpunkte.
Kombiniere zusammengehörige Benefits zu Textblöcken (z.B. Arbeitszeit + Teilzeit = ein Block).
Passe den Ton an die Tonalität an. Nutze den Fachrichtungs-Kontext für konkrete Details.`,
    outputFormat: '{ "benefits": [{ "title": "...", "text": "..." }, ...] }',
  },
  careerZitate: {
    instruction: 'Team-Zitate werden NICHT umformuliert. Gib sie exakt wie eingegeben zurück. Nur offensichtliche Tippfehler korrigieren.',
    outputFormat: '{ "zitate": [{ "name": "...", "rolle": "...", "text": "..." }, ...] }',
  },
  karriereTeaser: {
    instruction: 'Kurzer Teaser-Text für den Karriere-Block auf der Startseite (1-2 Sätze). Macht neugierig auf die Karriereseite.',
    outputFormat: '{ "karriereTeaser": "..." }',
  },
  jobDescription: {
    instruction: `Schreibe eine Stellenbeschreibung im Arbeitgeber-Stil (60-80 Wörter, Fließtext).
Absatz 1: Wer ist die Praxis als Arbeitgeber? (2-3 Sätze)
Absatz 2: Was erwartet die Person? (1-2 Sätze, aus Fachrichtungs-Kontext)
Absatz 3: Welche Persönlichkeit suchen wir? (1 Satz)
KEINE spezifischen Geräte erfinden. KEINE Aufzählungen. Benefits NICHT rein — die kommen separat.`,
    outputFormat: '{ "jobDescription": "<p>...</p>" }',
  },
}

// ═══ EINZELBLOCK-PROMPT (Portal: "Neuen Vorschlag") ═══

export function buildBlockPrompt(req: BlockPromptRequest): {
  system: string
  user: string
} {
  const ctx = req.context
  const ec = ctx.employerContext || getEmployerContext(ctx.fachrichtung)
  const template = BLOCK_PROMPTS[req.contentKey]

  const system = `Du bist ein erfahrener Texter für Arztpraxis-Websites.
Jede Praxis ist einzigartig — kein generischer Einheitsbrei.

Praxis: ${ctx.praxisName}
Fachrichtung: ${ec.fachrichtung} (${ec.typisch})
Größe: ${PRAXIS_GROESSE_CONTEXT[ctx.praxisGroesse] || ctx.praxisGroesse}
Ort: ${ctx.plz || ''} ${ctx.ort}
${ctx.arztName ? `Arzt/Ärztin: ${ctx.arztName}` : ''}

TONALITÄT:
${TONALITY_INSTRUCTIONS[ctx.tonality]}

ANREDE: Konsequent ${ctx.formalStyle === 'du' ? 'Du-Form' : 'Sie-Form'}.

REGELN:
- Individuell, nicht austauschbar
- Natürlich, keine Floskeln, kein KI-Sound
- "${ctx.ort}" in SEO-Texten erwähnen
${ec.verbotene_phrasen.length > 0 ? `\nVERBOTEN: ${ec.verbotene_phrasen.map(p => `"${p}"`).join(', ')}` : ''}`

  let userPrompt = template?.instruction || `Generiere Inhalt für: ${req.contentKey}`

  // Block-spezifische Daten einbauen
  if (req.blockSpecific) {
    if (req.blockSpecific.benefits) {
      const labels = getBenefitLabels(req.blockSpecific.benefits)
      userPrompt += `\n\nBenefits: ${labels.join(', ')}`
    }
    if (req.blockSpecific.werte) {
      const werteDetails = req.blockSpecific.werte.map((id: string) => {
        const w = getWert(id)
        return w ? `${w.label} (${w.prompt_hint})` : id
      })
      userPrompt += `\n\nWerte: ${werteDetails.join('; ')}`
    }
    if (req.blockSpecific.werteFreitext) {
      userPrompt += `\n\nBesonderheit des Arbeitsalltags: "${req.blockSpecific.werteFreitext}"`
    }
    if (req.blockSpecific.jobTitle) {
      userPrompt += `\n\nStelle: ${req.blockSpecific.jobTitle}`
      const aufgaben = ec.aufgaben
      userPrompt += `\n\nTypische Aufgaben in der ${ec.fachrichtung}: ${JSON.stringify(aufgaben)}`
    }
    if (req.blockSpecific.zitate) {
      userPrompt += `\n\nZitate (NICHT umformulieren, nur Tippfehler korrigieren): ${JSON.stringify(req.blockSpecific.zitate)}`
    }
  }

  // Regenerierung: andere Variante anfordern
  if (req.regenerate && req.previousContent) {
    userPrompt += `\n\n⚠️ Generiere eine DEUTLICH ANDERE Variante als:
"${req.previousContent}"
Andere Satzstruktur, andere Einstiegsformel, anderer Fokus. Nicht nur umformulieren — anders denken.`
  }

  if (template?.maxLength) {
    userPrompt += `\n\n${template.maxLength}`
  }

  userPrompt += `\n\nAntworte NUR mit validem JSON: ${template?.outputFormat || '{ "content": "..." }'}`

  return { system, user: userPrompt }
}

// ═══ BATCH-PROMPT (Wizard: alle Blöcke einer Seite) ═══

export function buildBatchPrompt(
  blocks: ResolvedBlock[],
  context: PromptContext,
  blockData?: Record<string, any>,
): {
  system: string
  user: string
  outputKeys: string[]
} {
  const ec = context.employerContext || getEmployerContext(context.fachrichtung)

  const system = `Du bist ein erfahrener Texter für Arztpraxis-Websites.
Jede Praxis ist einzigartig — kein generischer Einheitsbrei.

Praxis: ${context.praxisName}
Fachrichtung: ${ec.fachrichtung} (${ec.typisch})
Größe: ${PRAXIS_GROESSE_CONTEXT[context.praxisGroesse] || context.praxisGroesse}
Ort: ${context.plz || ''} ${context.ort}
${context.arztName ? `Arzt/Ärztin: ${context.arztName}` : ''}

TONALITÄT:
${TONALITY_INSTRUCTIONS[context.tonality]}

ANREDE: Konsequent ${context.formalStyle === 'du' ? 'Du-Form' : 'Sie-Form'}.

REGELN:
- Individuell, nicht austauschbar
- Natürlich, keine Floskeln, kein KI-Sound
- Keine Phrasen-Wiederholungen zwischen den Texten
- "${context.ort}" in SEO-Texten erwähnen
${ec.verbotene_phrasen.length > 0 ? `\nVERBOTEN: ${ec.verbotene_phrasen.map(p => `"${p}"`).join(', ')}` : ''}`

  const outputKeys: string[] = []
  const textParts: string[] = []

  for (const block of blocks) {
    const template = BLOCK_PROMPTS[block.contentKey]
    if (!template) continue

    outputKeys.push(block.contentKey)
    let part = `**${block.contentKey}**: ${template.instruction}`

    if (template.maxLength) {
      part += ` ${template.maxLength}`
    }

    // Block-spezifische Daten
    const specific = blockData?.[block.contentKey]
    if (specific?.benefits) {
      const labels = getBenefitLabels(specific.benefits)
      part += `\nBenefits: ${labels.join(', ')}`
    }
    if (specific?.werte) {
      const werteDetails = specific.werte.map((id: string) => {
        const w = getWert(id)
        return w ? `${w.label} (${w.prompt_hint})` : id
      })
      part += `\nWerte: ${werteDetails.join('; ')}`
    }
    if (specific?.werteFreitext) {
      part += `\nBesonderheit: "${specific.werteFreitext}"`
    }

    textParts.push(part)
  }

  const outputTemplate = outputKeys.map(k => `"${k}": "..."`).join(',\n  ')

  const user = `Generiere folgende Texte:

${textParts.map((p, i) => `${i + 1}. ${p}`).join('\n\n')}

Antworte NUR mit validem JSON:
{
  ${outputTemplate}
}`

  return { system, user, outputKeys }
}

// ═══ TONALITÄTS-MAPPING (Wizard → Preset) ═══

/**
 * Mappt das bestehende Wizard TonalityProfile (Slider-Werte 1-5)
 * auf ein TonalityPreset.
 */
export function mapTonalityToPreset(tonality: {
  atmosphere?: number
  language?: number
  demeanor?: number
  style?: number
}): TonalityPreset {
  const avg = [
    tonality.atmosphere || 3,
    tonality.language || 3,
    tonality.demeanor || 3,
    tonality.style || 3,
  ].reduce((a, b) => a + b, 0) / 4

  // warm + einfach → herzlich
  if ((tonality.atmosphere || 3) <= 2 && (tonality.language || 3) <= 2) return 'herzlich'

  // sachlich + fachlich → fachlich
  if ((tonality.atmosphere || 3) >= 4 && (tonality.language || 3) >= 4) return 'fachlich'

  // modern + locker → entspannt
  if ((tonality.style || 3) <= 2 && (tonality.demeanor || 3) <= 2) return 'entspannt'

  // klassisch + seriös → verlässlich
  if ((tonality.style || 3) >= 4) return 'verlaesslich'

  // Default basierend auf Durchschnitt
  if (avg <= 2.5) return 'herzlich'
  if (avg >= 3.5) return 'fachlich'
  return 'verlaesslich'
}
