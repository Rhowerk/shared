// Berufsgruppen (Spec 2026-10-12): Heilpraktiker als Sonderfall, Ärzte unverändert.
import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  REGISTRY, getRegistryEntry, getAllFachrichtungen, getFeaturedFachrichtungen, getMoreFachrichtungen,
  getSelectableFachrichtungen, isSelectableFachrichtung, berufsgruppeOf, istAerztlich,
  resolveFachrichtung, getFachrichtungLabel, getFachrichtungenByIndustry,
} from '../src/registry.ts'
import {
  getBlueprint, buildAIContext, getBlueprintServices, getBlueprintTeamPositions, getAvailableBlueprintIds,
  getAllBlueprints,
} from '../src/blueprints/index.ts'
import { arztBaseline, type ArztBaseline } from './arzt-baseline.ts'

const fixture: ArztBaseline = JSON.parse(readFileSync(new URL('./fixtures/arzt-baseline.json', import.meta.url), 'utf8'))

// 24.10.2026: „Psychotherapie / Psychiatrie“ ist getrennt. Psychiatrie ist eine eigene ärztliche Fachrichtung,
// die psychologische Psychotherapie bis Pracio 1.1 nicht auswählbar. Alles andere bleibt wie in der Baseline.
/** Baseline ohne alles, was vorher auf psychotherapie auflöste (Vergleich nur für die übrigen Fachrichtungen) */
function ohnePsycho(b: Omit<ArztBaseline, 'lists'>, vorher: Omit<ArztBaseline, 'lists'>) {
  const betroffen = (k: string) => vorher.resolve[k] === 'psychotherapie' || !(k in vorher.resolve)
  const ohneId = <T>(m: Record<string, T>) => Object.fromEntries(Object.entries(m).filter(([k]) => k !== 'psychotherapie'))
  return {
    ...b,
    ids: b.ids.filter(id => id !== 'psychotherapie'),
    resolve: Object.fromEntries(Object.entries(b.resolve).filter(([k]) => !betroffen(k))),
    labels: Object.fromEntries(Object.entries(b.labels).filter(([k]) => !betroffen(k))),
    blueprintIds: ohneId(b.blueprintIds), aiWebsite: ohneId(b.aiWebsite), aiKarriere: ohneId(b.aiKarriere),
    team: ohneId(b.team), aufgaben: ohneId(b.aufgaben), verboten: ohneId(b.verboten), seo: ohneId(b.seo),
  }
}
const nachTrennung = (l: string[]) => l.map(id => (id === 'psychotherapie' ? 'psychiatrie' : id))

describe('Arzt bleibt gleich (Baseline vor der Änderung)', () => {
  test('alle Ausgaben für die übrigen 24 Fachrichtungen sind identisch', () => {
    const { lists: jetztListen, ...jetzt } = arztBaseline(fixture.ids)
    const { lists: vorherListen, ...vorher } = fixture
    assert.deepEqual(ohnePsycho(jetzt, vorher), ohnePsycho(vorher, vorher))
    assert.deepEqual(jetztListen.featured, nachTrennung(vorherListen.featured))
    assert.deepEqual(jetztListen.more, vorherListen.more)
  })

  test('Auswahl-Liste: Psychiatrie statt Psychotherapie; Gesamtliste zusätzlich psychotherapie und hp_psychotherapie', () => {
    assert.deepEqual(getSelectableFachrichtungen().map(e => e.id), nachTrennung(fixture.lists.all))
    const alle = getAllFachrichtungen().map(e => e.id)
    assert.deepEqual(alle.filter(id => id !== 'psychotherapie'), [...nachTrennung(fixture.lists.all), 'hp_psychotherapie'])
    assert.ok(alle.includes('psychotherapie'))
  })
})

describe('Psychiatrie und Psychotherapie getrennt (24.10.2026)', () => {
  test('Psychiatrie: ärztlich, auswählbar, eigener Blueprint mit Facharzttitel', () => {
    const e = getRegistryEntry('psychiatrie')!
    assert.equal(e.label, 'Psychiatrie und Psychotherapie')
    assert.equal(berufsgruppeOf('psychiatrie'), 'arzt')
    assert.equal(isSelectableFachrichtung('psychiatrie'), true)
    const bp = getBlueprint('psychiatrie')!
    assert.equal(bp.meta.id, 'psychiatrie')
    assert.equal(bp.fachrichtung_titel.de_female, 'Fachärztin für Psychiatrie und Psychotherapie')
    assert.ok(getBlueprintServices(bp).some(s => s.name === 'Medikamentöse Behandlung'))
  })

  test('Psychiater und Psychosomatik lösen auf Psychiatrie auf', () => {
    for (const t of ['Psychiater', 'Psychiaterin', 'Psychiatrie', 'Facharzt für Psychiatrie und Psychotherapie',
      'Psychosomatische Medizin und Psychotherapie', 'Kinder- und Jugendpsychiatrie', 'Praxis für Psychiatrie']) {
      assert.equal(resolveFachrichtung(t), 'psychiatrie', t)
    }
  })

  test('psychologische Psychotherapie: nicht auswählbar, nie per Freitext, nie Psychiatrie', () => {
    const e = getRegistryEntry('psychotherapie')!
    assert.equal(e.selectable, false)
    assert.equal(e.featured, false)
    assert.equal(isSelectableFachrichtung('psychotherapie'), false)
    for (const t of ['Psychotherapeutin', 'Psychologische Psychotherapeutin', 'Praxis für Psychotherapie', 'Verhaltenstherapie']) {
      assert.equal(resolveFachrichtung(t), null, t)
    }
    // exakte ID bleibt für Admins und Bestandsdaten auflösbar
    assert.equal(resolveFachrichtung('psychotherapie'), 'psychotherapie')
    assert.ok(!getSelectableFachrichtungen().some(x => x.id === 'psychotherapie'))
  })
})

describe('Registry: Berufsgruppe und Auswahl', () => {
  test('hp_psychotherapie ist Heilpraktiker und nicht auswählbar', () => {
    const e = getRegistryEntry('hp_psychotherapie')!
    assert.equal(e.berufsgruppe, 'heilpraktiker')
    assert.equal(e.selectable, false)
    assert.equal(e.featured, false)
    assert.equal(e.label, 'Heilpraktiker/in für Psychotherapie')
  })

  test('berufsgruppeOf: Standard arzt, gesetzte Werte, unbekannt', () => {
    assert.equal(berufsgruppeOf('orthopaedie'), 'arzt')
    assert.equal(berufsgruppeOf('zahnarzt'), 'zahnarzt')
    assert.equal(berufsgruppeOf('psychotherapie'), 'psychotherapie')
    assert.equal(berufsgruppeOf('psychiatrie'), 'arzt')
    assert.equal(berufsgruppeOf('hp_psychotherapie'), 'heilpraktiker')
    assert.equal(berufsgruppeOf('HP_Psychotherapie'), 'heilpraktiker')
    assert.equal(berufsgruppeOf(''), 'arzt')
    assert.equal(berufsgruppeOf(null), 'arzt')
    assert.equal(berufsgruppeOf('unbekannt'), 'arzt')
    // Freitext ordnet nie Heilpraktiker zu; seit 24.10.2026 löst „Psychotherapie“ als Freitext nicht mehr auf, also arzt
    assert.equal(berufsgruppeOf('Heilpraktikerin für Psychotherapie'), 'arzt')
  })

  test('istAerztlich', () => {
    assert.equal(istAerztlich('arzt'), true)
    assert.equal(istAerztlich('zahnarzt'), true)
    assert.equal(istAerztlich('psychotherapie'), true)
    assert.equal(istAerztlich('heilpraktiker'), false)
    assert.equal(istAerztlich('therapie'), false)
  })

  test('hp_psychotherapie nur exakt per ID auflösbar, nie per Freitext', () => {
    assert.equal(resolveFachrichtung('hp_psychotherapie'), 'hp_psychotherapie')
    assert.equal(resolveFachrichtung('Heilpraktikerin für Psychotherapie'), null)
    assert.equal(resolveFachrichtung('psychotherapie heilpraktiker'), null)
    assert.equal(getFachrichtungLabel('hp_psychotherapie'), 'Heilpraktiker/in für Psychotherapie')
  })

  test('nicht auswählbare Einträge fehlen in allen Auswahl-Listen', () => {
    for (const liste of [getSelectableFachrichtungen(), getFeaturedFachrichtungen(), getMoreFachrichtungen()]) {
      assert.ok(!liste.some(e => e.id === 'hp_psychotherapie'))
    }
    assert.equal(isSelectableFachrichtung('hp_psychotherapie'), false)
    assert.equal(isSelectableFachrichtung('orthopaedie'), true)
    assert.equal(isSelectableFachrichtung('gibtsnicht'), false)
    assert.equal(isSelectableFachrichtung(''), false)
  })

  test('isSelectableFachrichtung normalisiert wie berufsgruppeOf (trim, klein)', () => {
    assert.equal(isSelectableFachrichtung('  Orthopaedie '), true)
    assert.equal(isSelectableFachrichtung('HP_Psychotherapie'), false)
    assert.equal(isSelectableFachrichtung(' hp_psychotherapie '), false)
    assert.equal(isSelectableFachrichtung('   '), false)
    assert.equal(isSelectableFachrichtung(null), false)
  })

  test('getFachrichtungenByIndustry liefert nur auswählbare, Arzt-Liste wie vorher', () => {
    assert.deepEqual(getFachrichtungenByIndustry('healthcare').map(e => e.id), nachTrennung(fixture.lists.all))
    assert.deepEqual(getFachrichtungenByIndustry('legal'), [])
  })

  test('nicht auswählbar sind nur Nicht-Ärzte und die psychologische Psychotherapie (bis Pracio 1.1)', () => {
    for (const e of REGISTRY) {
      if (e.selectable === false && e.id !== 'psychotherapie') assert.ok(!istAerztlich(e.berufsgruppe ?? 'arzt'), e.id)
    }
  })
})

describe('Team-Rollen Heilpraktiker', () => {
  test('keine Ärzte-, MFA-, ZFA- oder PA-Rollen, keine Gruppe arzt', () => {
    const p = getBlueprintTeamPositions('hp_psychotherapie')
    assert.ok(p.length >= 2)
    assert.ok(!p.some(x => x.category === 'arzt'), 'Gruppe arzt darf nicht vorkommen')
    for (const x of p) {
      assert.ok(!/MFA|ZFA|Physician|Arzt|Ärzt|Inhaber|Psychotherapeut/i.test(x.label), x.label)
    }
    assert.ok(p.some(x => x.label === 'Heilpraktiker/in für Psychotherapie'))
  })

  test('Groß-/Kleinschreibung der ID egal', () => {
    assert.deepEqual(getBlueprintTeamPositions('HP_Psychotherapie'), getBlueprintTeamPositions('hp_psychotherapie'))
    assert.ok(!getBlueprintTeamPositions(' HP_Psychotherapie ').some(x => x.category === 'arzt'))
  })

  test('Rückgabe ist eine Kopie (Aufrufer dürfen nicht die Konstante verändern)', () => {
    const a = getBlueprintTeamPositions('hp_psychotherapie')
    a[0]!.label = 'x'
    assert.notEqual(getBlueprintTeamPositions('hp_psychotherapie')[0]!.label, 'x')
  })
})

describe('Blueprint-IDs', () => {
  // Stand vor der Berufsgruppen-Änderung (25 Arzt-Blueprints)
  const VORHER = [
    'allgemeinmedizin', 'angiologie', 'augenheilkunde', 'dermatologie', 'endokrinologie', 'gastroenterologie',
    'gynaekologie', 'hno', 'kardiologie', 'kinderarzt', 'mkg', 'nephrologie', 'neurologie', 'nuklearmedizin',
    'onkologie', 'orthopaedie', 'phlebologie', 'plastische_chirurgie', 'pneumologie', 'psychotherapie',
    'rheumatologie', 'schmerztherapie', 'sportmedizin', 'urologie', 'zahnarzt',
  ]

  test('getAvailableBlueprintIds: ohne nicht auswählbare, Psychiatrie statt Psychotherapie', () => {
    const jetzt = nachTrennung(VORHER)
    assert.deepEqual(getAvailableBlueprintIds(), jetzt)
    assert.deepEqual(getAvailableBlueprintIds({ includeHidden: false }), jetzt)
  })

  test('getAvailableBlueprintIds({ includeHidden: true }) liefert alle Blueprints', () => {
    const alle = getAvailableBlueprintIds({ includeHidden: true })
    assert.deepEqual(alle, Object.keys(getAllBlueprints()))
    assert.deepEqual(alle.filter(id => VORHER.includes(id)), VORHER)
  })
})

describe('Blueprint hp_psychotherapie', () => {
  const bp = getBlueprint('hp_psychotherapie')!
  const daten = { praxis_name: 'Testpraxis', ort: 'Leipzig' }

  test('existiert und ist kein Fallback auf psychotherapie', () => {
    assert.ok(bp)
    assert.equal(bp.meta.id, 'hp_psychotherapie')
  })

  test('KI-Kontext nennt die richtige Praxisart und nie Arzt', () => {
    const w = buildAIContext(bp, daten)
    assert.ok(w.startsWith('Du schreibst Texte für die Website einer Praxis für Psychotherapie nach dem Heilpraktikergesetz.'))
    assert.ok(!/arzt|ärzt|Arztpraxis/i.test(w), w)
  })

  test('keine geschützte Berufsbezeichnung in Name, Titel, SEO-Vorlagen und Leistungen', () => {
    const texte = [
      bp.meta.name, bp.meta.description, ...bp.meta.name_variants,
      bp.fachrichtung_titel.de, bp.fachrichtung_titel.de_female,
      bp.seo.title_template, bp.seo.description_template,
      ...getBlueprintServices(bp).flatMap(s => [s.name, s.default_description]),
    ]
    for (const t of texte) assert.ok(!/Psychotherapeut/i.test(t), t)
  })

  test('FAQ: 10–15 Fragen, Pflichtfragen vorhanden', () => {
    const fragen = bp.faq.flatMap(c => c.questions)
    assert.ok(fragen.length >= 10 && fragen.length <= 15, `Anzahl ${fragen.length}`)
    for (const f of fragen) assert.ok(f.answer.trim().length > 80, f.question)
    assert.ok(fragen.some(f => /112/.test(f.answer)), 'Notfall-Frage mit 112 fehlt')
    assert.ok(fragen.some(f => /Krankenkasse|Kasse/.test(f.question)), 'Kassen-Frage fehlt')
    assert.ok(fragen.some(f => /Psychotherapeutin/.test(f.question)), 'Frage „Ich suche eine Psychotherapeutin …“ fehlt')
  })

  test('keine Stellenvorlagen, keine Arbeitgeber-Aufgaben für MFA/ZFA', () => {
    assert.deepEqual(bp.jobs.templates, [])
    assert.deepEqual(Object.keys(bp.employer.aufgaben), [])
  })

  test('verbotene Phrasen enthalten die Berufsbezeichnung', () => {
    assert.ok(bp.employer.verbotene_phrasen.some(p => /Psychotherapeut/.test(p)))
  })

  // Entscheidungen Kevin 12.10.2026 zu den offenen Punkten der Recherche
  test('Paargespräche, Video und Hausbesuch sind keine Standardleistung', () => {
    const optional = getBlueprintServices(bp).filter(s => s.optional).map(s => s.name).sort()
    assert.deepEqual(optional, ['Hausbesuch', 'Paar- und Beziehungsgespräche', 'Sitzungen per Video'])
    const faq = bp.faq.flatMap(c => c.questions)
    assert.ok(!faq.some(f => /Video|Hausbesuch|Paar/.test(f.question + f.answer)), 'FAQ setzt Video/Hausbesuch/Paar als Angebot voraus')
  })

  test('Video nur nach persönlichem Kennenlernen', () => {
    const video = getBlueprintServices(bp).find(s => s.name === 'Sitzungen per Video')!
    assert.ok(/persönlichen Kennenlernen/.test(video.default_description))
  })

  test('GKV klar nein, Beihilfe Bund nein, Länder: Beihilfestelle fragen', () => {
    const faq = bp.faq.flatMap(c => c.questions)
    const gkv = faq.find(f => /gesetzliche Krankenkasse/.test(f.question))!
    assert.ok(gkv.answer.startsWith('Nein.'))
    const beihilfe = faq.find(f => /Beihilfe/.test(f.question))!
    assert.ok(/Bundes/.test(beihilfe.answer) && /nicht beihilfefähig/.test(beihilfe.answer))
    assert.ok(/Beihilfestelle/.test(beihilfe.answer))
  })

  test('„Klient/in“ bevorzugt, „Patient/in“ nicht verboten', () => {
    const { avoid, prefer } = bp.ai_context.language_style!
    assert.ok(prefer.some(p => /Klient/.test(p)))
    assert.ok(!avoid.some(p => /Patient\/in|Patientin|Patienten\b/.test(p) && !/Patientenakte/.test(p)))
    assert.ok(!bp.employer.verbotene_phrasen.some(p => /^Patient/.test(p)))
  })

  test('nicht auswählbar: fehlt in getAvailableBlueprintIds, nur mit includeHidden', () => {
    assert.ok(!getAvailableBlueprintIds().includes('hp_psychotherapie'))
    assert.ok(getAvailableBlueprintIds({ includeHidden: true }).includes('hp_psychotherapie'))
  })
})
