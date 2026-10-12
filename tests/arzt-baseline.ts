// Baseline „Arzt bleibt gleich“ (Spec Berufsgruppen 2026-10-12, harte Regel).
// arztBaseline() sammelt alle heutigen Ausgaben für die übergebenen Fachrichtungen.
// make-arzt-baseline.ts schreibt sie VOR der Berufsgruppen-Änderung nach
// tests/fixtures/arzt-baseline.json, berufsgruppen.test.ts vergleicht danach.
import {
  REGISTRY, resolveFachrichtung, getFachrichtungLabel, getFeaturedFachrichtungen,
  getMoreFachrichtungen, getAllFachrichtungen, getBlueprintId,
} from '../src/registry.ts'
import {
  getBlueprint, buildAIContext, getBlueprintTeamPositions, getAufgaben, getVerbotenePhrases, generateSEO,
} from '../src/blueprints/index.ts'

/** Freitexte, wie sie aus Scanner/Wizard kommen. 'hp_psychotherapie' fehlt bewusst: die ID löst nach der Änderung exakt auf. */
export const FREITEXT_EINGABEN = [
  'Heilpraktikerin für Psychotherapie', 'Heilpraktiker', 'Praxis für Psychotherapie',
  'Praxis für Orthopädie und Unfallchirurgie', 'Zahnarztpraxis Dr. Müller', 'therapie', 'psych',
  'Naturheilkunde', 'Physiotherapie', '', 'unbekannt',
]

const ROLLEN = ['MFA', 'ZFA', 'Auszubildende/r MFA', 'Facharzt', 'Therapeut', 'Empfang']
const DATEN = { praxis_name: 'Testpraxis', ort: 'Leipzig' }

export interface ArztBaseline {
  ids: string[]
  resolve: Record<string, string | null>
  labels: Record<string, string>
  blueprintIds: Record<string, string>
  aiWebsite: Record<string, string>
  aiKarriere: Record<string, string>
  team: Record<string, unknown>
  aufgaben: Record<string, Record<string, string>>
  verboten: Record<string, string[]>
  seo: Record<string, unknown>
  lists: { featured: string[]; more: string[]; all: string[] }
}

export function arztBaseline(ids: string[]): ArztBaseline {
  const eingaben = [
    ...ids,
    ...REGISTRY.filter(e => ids.includes(e.id)).flatMap(e => [e.label, ...e.aliases]),
    ...FREITEXT_EINGABEN,
  ]
  const resolve: Record<string, string | null> = {}
  const labels: Record<string, string> = {}
  for (const e of eingaben) {
    resolve[e] = resolveFachrichtung(e)
    labels[e] = getFachrichtungLabel(e)
  }
  const blueprintIds: Record<string, string> = {}
  const aiWebsite: Record<string, string> = {}
  const aiKarriere: Record<string, string> = {}
  const team: Record<string, unknown> = {}
  const aufgaben: Record<string, Record<string, string>> = {}
  const verboten: Record<string, string[]> = {}
  const seo: Record<string, unknown> = {}
  for (const id of [...ids, 'unbekannt']) {
    const bp = getBlueprint(id)
    blueprintIds[id] = getBlueprintId(id)
    aiWebsite[id] = buildAIContext(bp, DATEN)
    aiKarriere[id] = buildAIContext(bp, DATEN, { zweck: 'karriere' })
    team[id] = getBlueprintTeamPositions(id)
    aufgaben[id] = Object.fromEntries(ROLLEN.map(r => [r, getAufgaben(id, r)]))
    verboten[id] = getVerbotenePhrases(id)
    seo[id] = generateSEO(bp, DATEN)
  }
  return {
    ids,
    resolve, labels, blueprintIds, aiWebsite, aiKarriere, team, aufgaben, verboten, seo,
    lists: {
      featured: getFeaturedFachrichtungen().map(e => e.id),
      more: getMoreFachrichtungen().map(e => e.id),
      all: getAllFachrichtungen().map(e => e.id),
    },
  }
}
