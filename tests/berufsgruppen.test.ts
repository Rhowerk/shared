// Berufsgruppen (Spec 2026-10-12): Heilpraktiker als Sonderfall, Ärzte unverändert.
import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  REGISTRY, getRegistryEntry, getAllFachrichtungen, getFeaturedFachrichtungen, getMoreFachrichtungen,
  getSelectableFachrichtungen, isSelectableFachrichtung, berufsgruppeOf, istAerztlich,
  resolveFachrichtung, getFachrichtungLabel,
} from '../src/registry.ts'
import { getBlueprintTeamPositions } from '../src/blueprints/index.ts'
import { arztBaseline, type ArztBaseline } from './arzt-baseline.ts'

const fixture: ArztBaseline = JSON.parse(readFileSync(new URL('./fixtures/arzt-baseline.json', import.meta.url), 'utf8'))

describe('Arzt bleibt gleich (Baseline vor der Änderung)', () => {
  test('alle Ausgaben für die 25 bisherigen Fachrichtungen sind identisch', () => {
    const { lists: jetztListen, ...jetzt } = arztBaseline(fixture.ids)
    const { lists: vorherListen, ...vorher } = fixture
    assert.deepEqual(jetzt, vorher)
    assert.deepEqual(jetztListen.featured, vorherListen.featured)
    assert.deepEqual(jetztListen.more, vorherListen.more)
  })

  test('Auswahl-Liste = bisherige Gesamtliste, Gesamtliste hat zusätzlich nur hp_psychotherapie', () => {
    assert.deepEqual(getSelectableFachrichtungen().map(e => e.id), fixture.lists.all)
    assert.deepEqual(getAllFachrichtungen().map(e => e.id), [...fixture.lists.all, 'hp_psychotherapie'])
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
    assert.equal(berufsgruppeOf('hp_psychotherapie'), 'heilpraktiker')
    assert.equal(berufsgruppeOf('HP_Psychotherapie'), 'heilpraktiker')
    assert.equal(berufsgruppeOf(''), 'arzt')
    assert.equal(berufsgruppeOf(null), 'arzt')
    assert.equal(berufsgruppeOf('unbekannt'), 'arzt')
    // Freitext bleibt bei der Psychotherapie-Fachrichtung (Scanner/Wizard ordnen nie Heilpraktiker zu)
    assert.equal(berufsgruppeOf('Heilpraktikerin für Psychotherapie'), 'psychotherapie')
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
    assert.equal(resolveFachrichtung('Heilpraktikerin für Psychotherapie'), 'psychotherapie')
    assert.equal(resolveFachrichtung('psychotherapie heilpraktiker'), 'psychotherapie')
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

  test('nur Nicht-Ärzte sind nicht auswählbar', () => {
    for (const e of REGISTRY) {
      if (e.selectable === false) assert.ok(!istAerztlich(e.berufsgruppe ?? 'arzt'), e.id)
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

  test('Rückgabe ist eine Kopie (Aufrufer dürfen nicht die Konstante verändern)', () => {
    const a = getBlueprintTeamPositions('hp_psychotherapie')
    a[0]!.label = 'x'
    assert.notEqual(getBlueprintTeamPositions('hp_psychotherapie')[0]!.label, 'x')
  })
})
