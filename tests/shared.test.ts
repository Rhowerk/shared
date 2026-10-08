// ═══════════════════════════════════════════════════════════
// @pracio/shared — Test Suite
// ═══════════════════════════════════════════════════════════
// Ausführen: node --experimental-strip-types --experimental-transform-types tests/shared.test.ts
// Oder:     npm test
// ═══════════════════════════════════════════════════════════

import { test, describe } from 'node:test'
import assert from 'node:assert/strict'

// ── Imports ──
import {
  BENEFITS, BENEFIT_CATEGORIES, getBenefitsByCategory,
  getBenefitLabels, getBenefit, validateBenefits,
} from '../src/benefit-catalog.ts'

import {
  WERTE_CATALOG, getWert, getWerteLabels,
  getEmployerContext, getAufgaben, getBenefitKontext,
  getAvailableFachrichtungen, getVerbotenePhrases,
} from '../src/employer-context.ts'

import {
  resolveHomepageBlocks, resolveKarriereBlocks,
  resolveTeamBlocks, resolveServiceDetailBlocks,
  resolveJobDetailBlocks, extractResolverInput,
  type BlockResolverInput,
} from '../src/block-resolver.ts'

import {
  assignSurfaces, getBlockSurfaceConfig,
  type ThemeSurfaces,
} from '../src/surface-engine.ts'

import {
  buildBlockPrompt, buildBatchPrompt, mapTonalityToPreset,
  TONALITY_INSTRUCTIONS,
} from '../src/content-prompts.ts'


// ╔══════════════════════════════════════════════════════════╗
// ║  1. BENEFIT CATALOG                                      ║
// ╚══════════════════════════════════════════════════════════╝

describe('benefit-catalog', () => {
  test('hat 17 Benefits', () => {
    assert.equal(BENEFITS.length, 17)
  })

  test('hat 4 Kategorien', () => {
    assert.equal(BENEFIT_CATEGORIES.length, 4)
    const ids = BENEFIT_CATEGORIES.map(c => c.id)
    assert.deepEqual(ids, ['verguetung', 'arbeitszeit', 'entwicklung', 'extras'])
  })

  test('jeder Benefit hat id, label, category, icon', () => {
    for (const b of BENEFITS) {
      assert.ok(b.id, `Benefit missing id`)
      assert.ok(b.label, `Benefit ${b.id} missing label`)
      assert.ok(b.category, `Benefit ${b.id} missing category`)
      assert.ok(b.icon, `Benefit ${b.id} missing icon`)
    }
  })

  test('keine doppelten IDs', () => {
    const ids = BENEFITS.map(b => b.id)
    const unique = new Set(ids)
    assert.equal(ids.length, unique.size, `Doppelte IDs: ${ids.filter((id, i) => ids.indexOf(id) !== i)}`)
  })

  test('alle Benefits haben gültige Kategorie', () => {
    const validCats = new Set(BENEFIT_CATEGORIES.map(c => c.id))
    for (const b of BENEFITS) {
      assert.ok(validCats.has(b.category), `Benefit ${b.id} hat ungültige Kategorie: ${b.category}`)
    }
  })

  test('getBenefitsByCategory gruppiert korrekt', () => {
    const grouped = getBenefitsByCategory()
    assert.ok(grouped.verguetung.length >= 4)
    assert.ok(grouped.arbeitszeit.length >= 3)
    assert.ok(grouped.entwicklung.length >= 2)
    assert.ok(grouped.extras.length >= 4)
    // Summe = alle Benefits
    const total = Object.values(grouped).flat().length
    assert.equal(total, BENEFITS.length)
  })

  test('getBenefitLabels gibt Labels zurück', () => {
    const labels = getBenefitLabels(['flexible_arbeitszeiten', 'jobrad'])
    assert.equal(labels.length, 2)
    assert.equal(labels[0], 'Flexible Arbeitszeiten')
    assert.equal(labels[1], 'Jobrad')
  })

  test('getBenefitLabels gibt ID zurück wenn unbekannt', () => {
    const labels = getBenefitLabels(['flexible_arbeitszeiten', 'praxishund_erlaubt'])
    assert.equal(labels[1], 'praxishund_erlaubt')
  })

  test('validateBenefits trennt known/custom', () => {
    const result = validateBenefits(['flexible_arbeitszeiten', 'praxishund', 'jobrad'])
    assert.deepEqual(result.known, ['flexible_arbeitszeiten', 'jobrad'])
    assert.deepEqual(result.custom, ['praxishund'])
  })

  test('getBenefit findet einzelnen Benefit', () => {
    const b = getBenefit('jobrad')
    assert.ok(b)
    assert.equal(b!.label, 'Jobrad')
    assert.equal(b!.category, 'extras')
  })

  test('getBenefit gibt undefined für unbekannte ID', () => {
    assert.equal(getBenefit('nicht_existent'), undefined)
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  2. EMPLOYER CONTEXT                                     ║
// ╚══════════════════════════════════════════════════════════╝

describe('employer-context', () => {
  test('hat 8 Werte im Katalog', () => {
    assert.equal(WERTE_CATALOG.length, 8)
  })

  test('jeder Wert hat id, label, icon, prompt_hint', () => {
    for (const w of WERTE_CATALOG) {
      assert.ok(w.id, `Wert missing id`)
      assert.ok(w.label, `Wert ${w.id} missing label`)
      assert.ok(w.icon, `Wert ${w.id} missing icon`)
      assert.ok(w.prompt_hint, `Wert ${w.id} missing prompt_hint`)
    }
  })

  test('getWert findet Wert', () => {
    const w = getWert('teamzusammenhalt')
    assert.ok(w)
    assert.equal(w!.label, 'Starker Teamzusammenhalt')
  })

  test('getWerteLabels gibt Labels zurück', () => {
    const labels = getWerteLabels(['augenhoehe', 'offenheit'])
    assert.equal(labels[0], 'Augenhöhe & Wertschätzung')
    assert.equal(labels[1], 'Offenheit für Neues')
  })

  test('getEmployerContext für alle bekannten Fachrichtungen', () => {
    const fachrichtungen = getAvailableFachrichtungen()
    assert.ok(fachrichtungen.length >= 12, `Nur ${fachrichtungen.length} Fachrichtungen`)

    for (const fr of fachrichtungen) {
      const ctx = getEmployerContext(fr)
      assert.ok(ctx.fachrichtung, `${fr}: missing fachrichtung`)
      assert.ok(ctx.typisch, `${fr}: missing typisch`)
      assert.ok(Object.keys(ctx.aufgaben).length > 0, `${fr}: keine Aufgaben`)
      assert.ok(ctx.staerke, `${fr}: missing staerke`)
      assert.ok(ctx.verbotene_phrasen.length > 0, `${fr}: keine verbotenen Phrasen`)
    }
  })

  test('getEmployerContext gibt Fallback für unbekannte Fachrichtung', () => {
    const ctx = getEmployerContext('aliens_medizin')
    assert.ok(ctx.fachrichtung)
    assert.ok(ctx.typisch)
    assert.ok(ctx.aufgaben['mfa'])
  })

  test('getAufgaben normalisiert Rollenbezeichnungen', () => {
    const aufgaben = getAufgaben('orthopaedie', 'MFA')
    assert.ok(aufgaben.includes('Röntgen'), `Ortho MFA sollte Röntgen enthalten: ${aufgaben}`)

    const aufgabenArzt = getAufgaben('orthopaedie', 'Facharzt für Orthopädie')
    assert.ok(aufgabenArzt.length > 10)
  })

  test('getBenefitKontext gibt fachrichtungsspezifischen Kontext', () => {
    const kontext = getBenefitKontext('orthopaedie', 'fortbildung_bezahlt')
    assert.ok(kontext)
    assert.ok(kontext!.includes('OP-Kurse') || kontext!.includes('Manuelle Therapie'))
  })

  test('getBenefitKontext gibt null für unbekannten Benefit', () => {
    assert.equal(getBenefitKontext('orthopaedie', 'nicht_existent'), null)
  })

  test('getVerbotenePhrases enthält generische + fachrichtungsspezifische', () => {
    const phrasen = getVerbotenePhrases('orthopaedie')
    assert.ok(phrasen.length >= 2)
    // Muss generische Phrasen enthalten
    assert.ok(phrasen.some(p => p.includes('Diagnose und Behandlung')))
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  3. BLOCK RESOLVER                                       ║
// ╚══════════════════════════════════════════════════════════╝

// Test-Fixtures
const MINIMAL_INPUT: BlockResolverInput = {
  fachrichtung: 'allgemeinmedizin',
  praxisGroesse: 'einzelpraxis',
  ort: 'Leipzig',
  hasTeam: false,
  teamCount: 0,
  hasTeamPhotos: false,
  hasKarriere: false,
  hasBildmaterial: false,
  serviceCount: 3,
}

const FULL_INPUT: BlockResolverInput = {
  fachrichtung: 'orthopaedie',
  praxisGroesse: 'mittel',
  ort: 'München',
  hasTeam: true,
  teamCount: 6,
  hasTeamPhotos: true,
  hasKarriere: true,
  hasBildmaterial: true,
  serviceCount: 8,
  benefits: ['flexible_arbeitszeiten', 'teilzeit', 'fortbildung_bezahlt', 'jobrad', 'teamevents'],
  benefitCount: 5,
  werte: ['teamzusammenhalt', 'eigenverantwortung'],
  werteFreitext: 'Jeden Freitag kochen wir zusammen',
  zitate: [
    { name: 'Lisa M.', rolle: 'MFA', text: 'Bester Job den ich je hatte.' },
  ],
}

describe('block-resolver: Homepage', () => {
  test('Minimal-Input → 5 Pflicht-Blöcke', () => {
    const blocks = resolveHomepageBlocks(MINIMAL_INPUT)
    assert.equal(blocks.length, 5)

    // Reihenfolge prüfen
    assert.equal(blocks[0].collection, 'block_herobanner')
    assert.equal(blocks[1].collection, 'block_imageText')
    assert.equal(blocks[2].collection, 'block_imageList')
    assert.equal(blocks[3].collection, 'block_practice_info')
    assert.equal(blocks[4].collection, 'block_banner')
  })

  test('ohne Bild → imageText variant text-only', () => {
    const blocks = resolveHomepageBlocks(MINIMAL_INPUT)
    const aboutBlock = blocks.find(b => b.contentKey === 'aboutText')!
    assert.equal(aboutBlock.variant, 'text-only')
  })

  test('mit Bild → imageText variant default', () => {
    const blocks = resolveHomepageBlocks({ ...MINIMAL_INPUT, hasBildmaterial: true })
    const aboutBlock = blocks.find(b => b.contentKey === 'aboutText')!
    assert.equal(aboutBlock.variant, 'default')
  })

  test('≤4 Services → grid-2', () => {
    const blocks = resolveHomepageBlocks({ ...MINIMAL_INPUT, serviceCount: 4 })
    const servicesBlock = blocks.find(b => b.contentKey === 'services')!
    assert.equal(servicesBlock.variant, 'grid-2')
  })

  test('>4 Services → grid-3', () => {
    const blocks = resolveHomepageBlocks({ ...MINIMAL_INPUT, serviceCount: 7 })
    const servicesBlock = blocks.find(b => b.contentKey === 'services')!
    assert.equal(servicesBlock.variant, 'grid-3')
  })

  test('mit Team → Team-Block erscheint', () => {
    const blocks = resolveHomepageBlocks({ ...MINIMAL_INPUT, hasTeam: true, teamCount: 3 })
    assert.ok(blocks.some(b => b.contentKey === 'team'))
    assert.equal(blocks.length, 6)
  })

  test('Team mit Fotos → grid, ohne → compact', () => {
    const withPhotos = resolveHomepageBlocks({ ...MINIMAL_INPUT, hasTeam: true, teamCount: 3, hasTeamPhotos: true })
    assert.equal(withPhotos.find(b => b.contentKey === 'team')!.variant, 'grid')

    const noPhotos = resolveHomepageBlocks({ ...MINIMAL_INPUT, hasTeam: true, teamCount: 3, hasTeamPhotos: false })
    assert.equal(noPhotos.find(b => b.contentKey === 'team')!.variant, 'compact')
  })

  test('mit Karriere → Karriere-Teaser erscheint', () => {
    const blocks = resolveHomepageBlocks({ ...MINIMAL_INPUT, hasKarriere: true })
    assert.ok(blocks.some(b => b.contentKey === 'karriereTeaser'))
    assert.equal(blocks.length, 6)
  })

  test('Full-Input → 7 Blöcke (Team + Karriere)', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    assert.equal(blocks.length, 7)
    assert.ok(blocks.some(b => b.contentKey === 'team'))
    assert.ok(blocks.some(b => b.contentKey === 'karriereTeaser'))
  })

  test('jeder Block hat label (praxisnah, kein Tech-Jargon)', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    for (const b of blocks) {
      assert.ok(b.label, `Block ${b.collection} hat kein label`)
      assert.ok(!b.label.includes('block_'), `Label "${b.label}" enthält Tech-Jargon`)
      assert.ok(!b.label.includes('Block'), `Label "${b.label}" enthält "Block"`)
    }
  })

  test('erster Block ist immer hero, letzter immer cta', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    assert.equal(blocks[0].role, 'hero')
    assert.equal(blocks[blocks.length - 1].role, 'cta')
  })
})

describe('block-resolver: Karriere', () => {
  test('ohne Werte/Zitate → 4 Blöcke (Hero, Intro, Stellen, CTA)', () => {
    const blocks = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })
    assert.equal(blocks.length, 5) // Hero + Intro + Benefits + Jobs + CTA
  })

  test('mit Werten → Werte-Block erscheint', () => {
    const blocks = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      werte: ['teamzusammenhalt', 'augenhoehe'],
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })
    assert.ok(blocks.some(b => b.contentKey === 'careerWerte'))
  })

  test('2 Werte → grid-2, 3+ → grid-3', () => {
    const two = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      werte: ['teamzusammenhalt', 'augenhoehe'],
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })
    assert.equal(two.find(b => b.contentKey === 'careerWerte')!.variant, 'grid-2')

    const three = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      werte: ['teamzusammenhalt', 'augenhoehe', 'offenheit'],
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })
    assert.equal(three.find(b => b.contentKey === 'careerWerte')!.variant, 'grid-3')
  })

  test('mit Zitaten → Zitate-Block erscheint', () => {
    const blocks = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      zitate: [{ name: 'Lisa', rolle: 'MFA', text: 'Top!' }],
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })
    assert.ok(blocks.some(b => b.contentKey === 'careerZitate'))
  })

  test('Full-Input → 7 Blöcke', () => {
    const blocks = resolveKarriereBlocks(FULL_INPUT)
    assert.equal(blocks.length, 7)
    // Hero, Intro, Werte, Benefits, Zitate, Jobs, CTA
    const keys = blocks.map(b => b.contentKey)
    assert.ok(keys.includes('careerHero'))
    assert.ok(keys.includes('careerIntro'))
    assert.ok(keys.includes('careerWerte'))
    assert.ok(keys.includes('careerBenefits'))
    assert.ok(keys.includes('careerZitate'))
    assert.ok(keys.includes('jobList'))
    assert.ok(keys.includes('careerCta'))
  })

  test('>6 Benefits → grid-3, ≤6 → grid-2', () => {
    const few = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      benefits: ['a', 'b', 'c'], benefitCount: 3,
    })
    assert.equal(few.find(b => b.contentKey === 'careerBenefits')!.variant, 'grid-2')

    const many = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      benefits: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], benefitCount: 8,
    })
    assert.equal(many.find(b => b.contentKey === 'careerBenefits')!.variant, 'grid-3')
  })
})

describe('block-resolver: extractResolverInput', () => {
  test('extrahiert korrekt aus Wizard-Format', () => {
    const wizardData = {
      fachrichtung: 'orthopaedie',
      ort: 'Leipzig',
      services: [
        { name: 'Röntgen', selected: true },
        { name: 'MRT', selected: true },
        { name: 'Massage', selected: false },
      ],
      bildmaterial: { option: 'eigene' },
      contentProfile: { practiceType: 'gemeinschaftspraxis' },
      features: {
        karriere: true,
        teamMembers: [
          { name: 'Dr. Müller', foto: 'img.jpg' },
          { name: 'Lisa', foto: null },
        ],
        employerBranding: {
          benefits: { selected: ['flexible_arbeitszeiten', 'jobrad'] },
          werte: ['teamzusammenhalt'],
          werteFreitext: 'Freitags kochen',
          zitate: [{ name: 'Lisa', rolle: 'MFA', text: 'Top!' }],
        },
      },
    }

    const input = extractResolverInput(wizardData)
    assert.equal(input.fachrichtung, 'orthopaedie')
    assert.equal(input.ort, 'Leipzig')
    assert.equal(input.serviceCount, 2)
    assert.equal(input.hasBildmaterial, true)
    assert.equal(input.hasTeam, true)
    assert.equal(input.teamCount, 2)
    assert.equal(input.hasTeamPhotos, true)
    assert.equal(input.hasKarriere, true)
    assert.deepEqual(input.benefits, ['flexible_arbeitszeiten', 'jobrad'])
    assert.equal(input.benefitCount, 2)
    assert.deepEqual(input.werte, ['teamzusammenhalt'])
    assert.equal(input.werteFreitext, 'Freitags kochen')
    assert.equal(input.zitate!.length, 1)
  })

  test('handelt fehlende Daten graceful', () => {
    const input = extractResolverInput({})
    assert.equal(input.fachrichtung, '')
    assert.equal(input.hasTeam, false)
    assert.equal(input.serviceCount, 0)
    assert.equal(input.hasBildmaterial, false)
    assert.equal(input.benefits!.length, 0)
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  4. SURFACE ENGINE                                       ║
// ╚══════════════════════════════════════════════════════════╝

const DEFAULT_THEME: ThemeSurfaces = { hero: 'bold', highlight: 'soft', cta: 'accent', footer: 'light' }

describe('surface-engine: assignSurfaces', () => {
  test('kompakte Seite (5 Blöcke) → clean pattern', () => {
    const blocks = resolveHomepageBlocks(MINIMAL_INPUT)
    const surfaces = assignSurfaces(blocks, DEFAULT_THEME, 'wave')

    // Hero = bold
    assert.equal(surfaces[0].surface, 'bold')
    // Content = light (kompakt → alles light außer highlight)
    assert.equal(surfaces[1].surface, 'light')
    // Content (services) = light
    assert.equal(surfaces[2].surface, 'light')
    // Highlight = soft (highlight surface)
    assert.equal(surfaces[3].surface, 'soft')
    // CTA = accent
    assert.equal(surfaces[4].surface, 'accent')
  })

  test('volle Seite (7 Blöcke) → rhythmisches pattern', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    const surfaces = assignSurfaces(blocks, DEFAULT_THEME, 'wave')

    assert.equal(blocks.length, 7)
    // Hero = bold
    assert.equal(surfaces[0].surface, 'bold')
    // Letzter = accent (CTA)
    assert.equal(surfaces[surfaces.length - 1].surface, 'accent')
    // Mindestens ein soft/highlight dazwischen
    const midSurfaces = surfaces.slice(1, -1).map(s => s.surface)
    assert.ok(midSurfaces.includes('soft') || midSurfaces.includes('bold'))
  })

  test('divider nur bei Surface-Wechsel', () => {
    const blocks = resolveHomepageBlocks(MINIMAL_INPUT)
    const surfaces = assignSurfaces(blocks, DEFAULT_THEME, 'wave')

    for (let i = 0; i < surfaces.length - 1; i++) {
      if (surfaces[i].surface === surfaces[i + 1].surface) {
        assert.equal(surfaces[i].divider_type, null, `Block ${i} sollte keinen Divider haben (gleiche Surface)`)
      }
    }
  })

  test('divider_type = none → keine Divider', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    const surfaces = assignSurfaces(blocks, DEFAULT_THEME, 'none')

    for (const s of surfaces) {
      assert.equal(s.divider_type, null)
      assert.equal(s.divider_height, null)
    }
  })

  test('wave-layered → höhere Divider (100px statt 80px)', () => {
    const blocks = resolveHomepageBlocks(FULL_INPUT)
    const surfaces = assignSurfaces(blocks, DEFAULT_THEME, 'wave-layered')

    const withDivider = surfaces.filter(s => s.divider_type !== null)
    assert.ok(withDivider.length > 0, 'Sollte mindestens einen Divider haben')
    for (const s of withDivider) {
      assert.equal(s.divider_height, 100)
    }
  })
})

describe('surface-engine: Legacy getBlockSurfaceConfig', () => {
  test('forPage gibt gleiche Anzahl Ergebnisse wie Blöcke', () => {
    const cfg = getBlockSurfaceConfig()
    const blocks = [
      { collection: 'block_herobanner' },
      { collection: 'block_imageText' },
      { collection: 'block_practice_info' },
      { collection: 'block_banner' },
    ]
    const results = cfg.forPage(blocks)
    assert.equal(results.length, blocks.length)
  })

  test('forBlock gibt Surface zurück', () => {
    const cfg = getBlockSurfaceConfig()
    const result = cfg.forBlock('block_herobanner', 1, 5)
    assert.equal(result.surface, 'bold')
  })

  test('getGeneralColorFields gibt Seed-Werte', () => {
    const cfg = getBlockSurfaceConfig()
    const fields = cfg.getGeneralColorFields()
    assert.ok('primary_hue' in fields)
    assert.ok('primary_chroma' in fields)
    assert.ok('border_radius' in fields)
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  5. CONTENT PROMPTS                                      ║
// ╚══════════════════════════════════════════════════════════╝

describe('content-prompts', () => {
  test('4 Tonalitäts-Presets definiert', () => {
    assert.equal(Object.keys(TONALITY_INSTRUCTIONS).length, 4)
    assert.ok(TONALITY_INSTRUCTIONS.herzlich)
    assert.ok(TONALITY_INSTRUCTIONS.fachlich)
    assert.ok(TONALITY_INSTRUCTIONS.entspannt)
    assert.ok(TONALITY_INSTRUCTIONS.verlaesslich)
  })

  test('buildBlockPrompt gibt system + user zurück', () => {
    const result = buildBlockPrompt({
      contentKey: 'careerIntro',
      context: {
        praxisName: 'Praxis Dr. Test',
        fachrichtung: 'orthopaedie',
        praxisGroesse: 'klein',
        ort: 'Leipzig',
        tonality: 'herzlich',
        formalStyle: 'du',
      },
    })

    assert.ok(result.system.length > 100)
    assert.ok(result.user.length > 50)
    assert.ok(result.system.includes('Praxis Dr. Test'))
    assert.ok(result.system.includes('Leipzig'))
    assert.ok(result.system.includes('Orthopädie'))
    assert.ok(result.system.includes('Warmherzig'))
  })

  test('buildBlockPrompt mit regenerate referenziert alten Text', () => {
    const result = buildBlockPrompt({
      contentKey: 'careerIntro',
      context: {
        praxisName: 'Test', fachrichtung: 'orthopaedie',
        praxisGroesse: 'klein', ort: 'Leipzig',
        tonality: 'fachlich', formalStyle: 'sie',
      },
      regenerate: true,
      previousContent: 'Der alte Text hier',
    })

    assert.ok(result.user.includes('ANDERE Variante'))
    assert.ok(result.user.includes('Der alte Text hier'))
  })

  test('buildBlockPrompt enthält verbotene Phrasen', () => {
    const result = buildBlockPrompt({
      contentKey: 'careerIntro',
      context: {
        praxisName: 'Test', fachrichtung: 'orthopaedie',
        praxisGroesse: 'klein', ort: 'Leipzig',
        tonality: 'herzlich', formalStyle: 'du',
      },
    })

    assert.ok(result.system.includes('VERBOTEN'))
    assert.ok(result.system.includes('Diagnose und Behandlung'))
  })

  test('buildBlockPrompt mit Benefits', () => {
    const result = buildBlockPrompt({
      contentKey: 'careerBenefits',
      context: {
        praxisName: 'Test', fachrichtung: 'orthopaedie',
        praxisGroesse: 'klein', ort: 'Leipzig',
        tonality: 'herzlich', formalStyle: 'du',
      },
      blockSpecific: {
        benefits: ['flexible_arbeitszeiten', 'jobrad'],
      },
    })

    assert.ok(result.user.includes('Flexible Arbeitszeiten'))
    assert.ok(result.user.includes('Jobrad'))
  })

  test('buildBatchPrompt gibt system + user + outputKeys', () => {
    const blocks = resolveKarriereBlocks({
      ...MINIMAL_INPUT, hasKarriere: true,
      benefits: ['flexible_arbeitszeiten'], benefitCount: 1,
    })

    const result = buildBatchPrompt(blocks, {
      praxisName: 'Praxis Dr. Test',
      fachrichtung: 'allgemeinmedizin',
      praxisGroesse: 'einzelpraxis',
      ort: 'Leipzig',
      tonality: 'herzlich',
      formalStyle: 'du',
    })

    assert.ok(result.system.length > 100)
    assert.ok(result.user.length > 100)
    assert.ok(result.outputKeys.length > 0)
    assert.ok(result.outputKeys.includes('careerHero'))
    assert.ok(result.outputKeys.includes('careerIntro'))
  })

  test('mapTonalityToPreset mappt korrekt', () => {
    assert.equal(mapTonalityToPreset({ atmosphere: 1, language: 1, style: 3 }), 'herzlich')
    assert.equal(mapTonalityToPreset({ atmosphere: 5, language: 5, style: 3 }), 'fachlich')
    assert.equal(mapTonalityToPreset({ atmosphere: 3, language: 3, style: 1, demeanor: 1 }), 'entspannt')
    assert.equal(mapTonalityToPreset({ atmosphere: 3, language: 3, style: 5 }), 'verlaesslich')
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  6. DRY-RUN: Vollständiger Provisioning-Durchlauf       ║
// ╚══════════════════════════════════════════════════════════╝

describe('DRY-RUN: Provisioning-Simulation', () => {
  // Simuliert einen kompletten Wizard-Durchlauf ohne echte APIs
  const WIZARD_DATA = {
    praxisName: 'Orthopädie Praxis Dr. Müller',
    fachrichtung: 'orthopaedie',
    ort: 'Leipzig',
    plz: '04103',
    vorname: 'Max',
    nachname: 'Müller',
    titel: 'Dr. med.',
    anrede: 'herr',
    telefon: '0341 1234567',
    beschreibung: 'Wir sind eine moderne Orthopädie-Praxis mit Schwerpunkt Sportmedizin.',
    services: [
      { name: 'Sportmedizin', selected: true },
      { name: 'Manuelle Therapie', selected: true },
      { name: 'Röntgen', selected: true },
      { name: 'Stoßwellentherapie', selected: true },
      { name: 'Gelenksonografie', selected: true },
      { name: 'Chirotherapie', selected: false },
    ],
    bildmaterial: { option: 'eigene' },
    formalStyle: 'du',
    contentProfile: {
      practiceType: 'gemeinschaftspraxis',
      tonality: { atmosphere: 2, language: 2, demeanor: 2, attitude: 3, style: 2, approach: 2 },
      brandValues: ['vertrauen', 'patientennaehe'],
    },
    colorScheme: {
      _v2: {
        seed: { primaryHue: 180, primaryChroma: 0.14, accentHue: 160, accentChroma: 0.12, neutralChroma: 0.01, radius: 8 },
        surfaces: { hero: 'bold', highlight: 'soft', cta: 'accent', footer: 'light' },
        dividerType: 'wave' as const,
      },
    },
    features: {
      karriere: true,
      teamMembers: [
        { name: 'Dr. Max Müller', role: 'Facharzt für Orthopädie', foto: 'photo1.jpg' },
        { name: 'Lisa Schmidt', role: 'MFA', foto: 'photo2.jpg' },
        { name: 'Tom Weber', role: 'MFA', foto: null },
      ],
      selectedJobs: [
        { title: 'MFA (m/w/d) in Voll- oder Teilzeit' },
      ],
      employerBranding: {
        benefits: {
          selected: ['flexible_arbeitszeiten', 'teilzeit', 'fortbildung_bezahlt', 'jobrad', 'teamevents'],
          custom: ['Praxishund erlaubt'],
        },
        werte: ['teamzusammenhalt', 'eigenverantwortung'],
        werteFreitext: 'Jeden Freitag kochen wir zusammen. Im Sommer grillen wir auf der Dachterrasse.',
        zitate: [
          { name: 'Lisa S.', rolle: 'MFA seit 3 Jahren', text: 'Bester Job den ich je hatte. Das Team ist einfach super.' },
        ],
      },
    },
  }

  // Mock: Simuliert directusCreate — zählt nur
  const directusCalls: Array<{ collection: string; data: any }> = []
  function mockDirectusCreate(collection: string, data: any) {
    const id = `mock-${collection}-${directusCalls.length + 1}`
    directusCalls.push({ collection, data: { ...data, id } })
    return { id }
  }

  test('kompletter Durchlauf: Homepage + Karriere + Surfaces', () => {
    directusCalls.length = 0 // Reset

    // 1. Input extrahieren
    const input = extractResolverInput(WIZARD_DATA)

    // Assertions auf Input
    assert.equal(input.fachrichtung, 'orthopaedie')
    assert.equal(input.serviceCount, 5)
    assert.equal(input.hasTeam, true)
    assert.equal(input.teamCount, 3)
    assert.equal(input.hasTeamPhotos, true)
    assert.equal(input.hasKarriere, true)
    assert.equal(input.hasBildmaterial, true)
    assert.equal(input.benefitCount, 5)
    assert.equal(input.werte!.length, 2)
    assert.equal(input.zitate!.length, 1)

    // 2. Homepage Blöcke auflösen
    const homeBlocks = resolveHomepageBlocks(input)
    assert.equal(homeBlocks.length, 7) // Hero, About, Services(5→grid-3), Team, Karriere-Teaser, PraxisInfo, CTA

    // Varianten prüfen
    assert.equal(homeBlocks.find(b => b.contentKey === 'aboutText')!.variant, 'default') // hat Bilder
    assert.equal(homeBlocks.find(b => b.contentKey === 'services')!.variant, 'grid-3')   // 5 Services
    assert.equal(homeBlocks.find(b => b.contentKey === 'team')!.variant, 'grid')          // hat Fotos

    // 3. Karriere Blöcke auflösen
    const karriereBlocks = resolveKarriereBlocks(input)
    assert.equal(karriereBlocks.length, 7) // Hero, Intro, Werte, Benefits, Zitate, Jobs, CTA

    assert.equal(karriereBlocks.find(b => b.contentKey === 'careerWerte')!.variant, 'grid-2')    // 2 Werte
    assert.equal(karriereBlocks.find(b => b.contentKey === 'careerBenefits')!.variant, 'grid-2') // 5 Benefits (≤6)
    assert.equal(karriereBlocks.find(b => b.contentKey === 'careerZitate')!.variant, 'cards')

    // 4. Surfaces zuweisen
    const v2 = WIZARD_DATA.colorScheme._v2
    const homeSurfaces = assignSurfaces(homeBlocks, v2.surfaces, v2.dividerType)
    const karriereSurfaces = assignSurfaces(karriereBlocks, v2.surfaces, v2.dividerType)

    assert.equal(homeSurfaces.length, homeBlocks.length)
    assert.equal(karriereSurfaces.length, karriereBlocks.length)

    // Hero immer bold, CTA immer accent
    assert.equal(homeSurfaces[0].surface, 'bold')
    assert.equal(homeSurfaces[homeSurfaces.length - 1].surface, 'accent')
    assert.equal(karriereSurfaces[0].surface, 'bold')
    assert.equal(karriereSurfaces[karriereSurfaces.length - 1].surface, 'accent')

    // 5. Tonalität mappen
    const tonality = mapTonalityToPreset(WIZARD_DATA.contentProfile.tonality)
    assert.equal(tonality, 'herzlich') // atmosphere=2, language=2 → herzlich

    // 6. Batch-Prompt bauen (Karriere)
    const batchPrompt = buildBatchPrompt(karriereBlocks, {
      praxisName: WIZARD_DATA.praxisName,
      fachrichtung: WIZARD_DATA.fachrichtung,
      praxisGroesse: WIZARD_DATA.contentProfile.practiceType,
      ort: WIZARD_DATA.ort,
      plz: WIZARD_DATA.plz,
      arztName: `${WIZARD_DATA.titel} ${WIZARD_DATA.vorname} ${WIZARD_DATA.nachname}`,
      tonality,
      formalStyle: WIZARD_DATA.formalStyle as 'du',
    }, {
      careerBenefits: { benefits: input.benefits },
      careerWerte: { werte: input.werte, werteFreitext: input.werteFreitext },
      careerZitate: { zitate: input.zitate },
    })

    assert.ok(batchPrompt.system.includes('Orthopädie'))
    assert.ok(batchPrompt.system.includes('Leipzig'))
    assert.ok(batchPrompt.system.includes('Warmherzig'))
    assert.ok(batchPrompt.system.includes('VERBOTEN'))
    assert.ok(batchPrompt.user.includes('Flexible Arbeitszeiten'))
    assert.ok(batchPrompt.user.includes('Teamzusammenhalt'))
    assert.ok(batchPrompt.user.includes('Freitag kochen'))
    assert.ok(batchPrompt.outputKeys.length >= 3)

    // 7. Mock-Provisioning: Blöcke in "Directus" anlegen
    for (let i = 0; i < homeBlocks.length; i++) {
      const block = homeBlocks[i]
      // Block erstellen
      const created = mockDirectusCreate(block.collection, {
        title: `[AI-generated] ${block.label}`,
        tenant_id: 'test-tenant',
      })
      // Junction erstellen
      mockDirectusCreate('pages_translations_blocks', {
        item: created.id,
        collection: block.collection,
        sort: i + 1,
        tenant_id: 'test-tenant',
        variant: block.variant,
        content_role: block.role,
        ...homeSurfaces[i],
      })
    }

    // 14 Calls: 7 Blöcke + 7 Junctions
    assert.equal(directusCalls.length, 14)

    // Junction-Einträge prüfen
    const junctions = directusCalls.filter(c => c.collection === 'pages_translations_blocks')
    assert.equal(junctions.length, 7)

    // Erster Junction (Hero) hat surface=bold
    assert.equal(junctions[0].data.surface, 'bold')
    assert.equal(junctions[0].data.variant, 'default')
    assert.equal(junctions[0].data.content_role, 'hero')

    // Letzter Junction (CTA) hat surface=accent
    assert.equal(junctions[6].data.surface, 'accent')
    assert.equal(junctions[6].data.variant, 'cta')
    assert.equal(junctions[6].data.content_role, 'cta')

    console.log('\n📊 DRY-RUN Ergebnis:')
    console.log(`   Homepage:  ${homeBlocks.length} Blöcke`)
    console.log(`   Karriere:  ${karriereBlocks.length} Blöcke`)
    console.log(`   Directus:  ${directusCalls.length} API-Calls simuliert`)
    console.log(`   Tonalität: ${tonality}`)
    console.log(`   Prompt:    ${batchPrompt.system.length + batchPrompt.user.length} Zeichen`)
    console.log('')
    console.log('   Homepage-Aufbau:')
    homeBlocks.forEach((b, i) => {
      console.log(`     ${i + 1}. ${b.label.padEnd(25)} ${b.variant.padEnd(10)} → ${homeSurfaces[i].surface}${homeSurfaces[i].divider_type ? ' ◢' + homeSurfaces[i].divider_type : ''}`)
    })
    console.log('')
    console.log('   Karriere-Aufbau:')
    karriereBlocks.forEach((b, i) => {
      console.log(`     ${i + 1}. ${b.label.padEnd(25)} ${b.variant.padEnd(10)} → ${karriereSurfaces[i].surface}${karriereSurfaces[i].divider_type ? ' ◢' + karriereSurfaces[i].divider_type : ''}`)
    })
  })

  test('Varianz-Test: verschiedene Inputs → verschiedene Ergebnisse', () => {
    const inputs = [
      { label: 'Einzelpraxis ohne alles', input: MINIMAL_INPUT },
      { label: 'Klein mit Team', input: { ...MINIMAL_INPUT, hasTeam: true, teamCount: 2, hasTeamPhotos: false } },
      { label: 'Groß mit allem', input: FULL_INPUT },
      { label: 'MVZ viele Services', input: { ...MINIMAL_INPUT, praxisGroesse: 'mvz', serviceCount: 12, hasBildmaterial: true } },
    ]

    const results = inputs.map(({ label, input }) => {
      const blocks = resolveHomepageBlocks(input)
      return { label, blockCount: blocks.length, variants: blocks.map(b => b.variant) }
    })

    console.log('\n🎲 Varianz-Matrix:')
    for (const r of results) {
      console.log(`   ${r.label.padEnd(30)} → ${r.blockCount} Blöcke → [${r.variants.join(', ')}]`)
    }

    // Alle müssen unterschiedlich sein
    const blockCounts = results.map(r => r.blockCount)
    // Mindestens 2 verschiedene Blockzahlen
    const uniqueCounts = new Set(blockCounts)
    assert.ok(uniqueCounts.size >= 2, `Zu wenig Varianz in Blockzahlen: ${JSON.stringify(blockCounts)}`)

    // Verschiedene Varianten
    const variantSets = results.map(r => r.variants.join(','))
    const uniqueVariants = new Set(variantSets)
    assert.ok(uniqueVariants.size >= 2, 'Zu wenig Varianz in Varianten')
  })

  test('Legacy-Kompatibilität: getBlockSurfaceConfig identisch', () => {
    // Simuliert den alten Code aus provision.post.ts
    const v2Data = WIZARD_DATA.colorScheme._v2
    const cfg = getBlockSurfaceConfig(v2Data)

    const legacyBlocks = [
      { collection: 'block_herobanner' },
      { collection: 'block_imageText' },
      { collection: 'block_practice_info' },
      { collection: 'block_imageList' },
      { collection: 'block_banner' },
    ]

    const legacyResults = cfg.forPage(legacyBlocks)
    assert.equal(legacyResults.length, 5)
    assert.equal(legacyResults[0].surface, 'bold')  // Hero
    assert.equal(legacyResults[4].surface, 'accent') // CTA Banner

    // forBlock einzeln
    const heroResult = cfg.forBlock('block_herobanner', 1, 5, 'block_imageText')
    assert.equal(heroResult.surface, 'bold')

    console.log('\n✓ Legacy-API (getBlockSurfaceConfig) funktioniert identisch')
  })
})


// ╔══════════════════════════════════════════════════════════╗
// ║  BLUEPRINTS: Vorlagentexte, IGeL, KI-Kontext, Aufgaben   ║
// ╚══════════════════════════════════════════════════════════╝

import {
  getAllBlueprints, getBlueprint, getBlueprintServices, findService,
  buildAIContext, getAufgaben as getBlueprintAufgaben, HINTERGRUND_HINWEIS,
} from '../src/blueprints/index.ts'
import { getAufgaben as getLegacyAufgaben } from '../src/employer-context.ts'

// Vorlagentexte werden teils wörtlich übernommen → keine Anrede/Perspektive,
// keine HWG-heiklen Werbeversprechen.
const VERBOTEN_IN_VORLAGEN: Array<[string, RegExp]> = [
  ['wir/uns/unser', /\b(wir|Wir|uns|unser\w*|Unser\w*)\b/],
  ['Sie/Ihr', /\b(Sie|Ihr|Ihre|Ihren|Ihrem|Ihrer|Ihres|Ihnen)\b/],
  ['ich/mein', /\b(ich|Ich|mich|mein\w*|Mein\w*)\b/],
  ['du/dein', /\b(du|Du|dich|dir|Dir|dein\w*|Dein\w*)\b/],
  ['schnell', /schnell/i],
  ['sofort', /sofort/i],
  ['beste', /\bbest(e|en|er|es|möglich\w*)\b/i],
  ['modern/modernste', /\bmodern/i],
  ['schmerzfrei', /schmerzfrei/i],
  ['garantiert', /garantier/i],
  ['schonend/sanft', /schonend|\bsanft/i],
  ['perfekt/optimal', /perfekt|\boptimal/i],
  ['kurzfristig', /kurzfristig/i],
  ['rettet Leben', /rettet/i],
]

describe('blueprints: Leistungs-Vorlagentexte', () => {
  test('alle default_description sind neutral und HWG-sauber', () => {
    const fehler: string[] = []
    for (const [id, bp] of Object.entries(getAllBlueprints())) {
      for (const s of getBlueprintServices(bp)) {
        assert.ok(s.default_description.trim().length > 40, `${id}/${s.name}: Text zu kurz`)
        for (const [label, re] of VERBOTEN_IN_VORLAGEN) {
          if (re.test(s.default_description)) fehler.push(`${id}/${s.name}: „${label}“ → ${s.default_description}`)
        }
      }
    }
    assert.deepEqual(fehler, [], `Verbotene Formulierungen:\n${fehler.join('\n')}`)
  })

  test('IGeL-Markierung: eindeutige Selbstzahlerleistungen sind markiert', () => {
    const zahn = getBlueprint('zahnarzt')
    assert.equal(findService(zahn, 'Bleaching / Zahnaufhellung')?.igel, true)
    assert.equal(findService(zahn, 'Veneers')?.igel, true)
    assert.equal(findService(zahn, 'Wurzelbehandlung')?.igel, undefined)
    assert.equal(findService(getBlueprint('dermatologie'), 'Faltenbehandlung (Unterspritzung)')?.igel, true)
    assert.equal(findService(getBlueprint('orthopaedie'), 'Stoßwellentherapie')?.igel, true)
  })

  test('igel ist, wenn gesetzt, immer boolean true', () => {
    for (const [id, bp] of Object.entries(getAllBlueprints())) {
      for (const s of getBlueprintServices(bp)) {
        if ('igel' in s) assert.equal(s.igel, true, `${id}/${s.name}: igel muss true oder weggelassen sein`)
      }
    }
  })
})

describe('blueprints: buildAIContext', () => {
  const data = { praxis_name: 'Testpraxis', ort: 'Leipzig' }

  test('ohne Zweck: wie bisher, Kernbotschaften + Kontext als Hintergrund gekennzeichnet', () => {
    const bp = getBlueprint('orthopaedie')!
    const p = buildAIContext(bp, data)
    assert.ok(p.startsWith('Du schreibst Texte für die Website einer'))
    assert.ok(p.includes('PRAXIS: Testpraxis in Leipzig'))
    assert.ok(p.includes(`ZIELGRUPPE: ${bp.ai_context.audience}`))
    assert.ok(p.includes(`KERNBOTSCHAFTEN DER FACHRICHTUNG (${HINTERGRUND_HINWEIS})`))
    for (const m of bp.ai_context.key_messages) assert.ok(p.includes(`- ${m}`))
    assert.ok(p.includes(`FACHRICHTUNGS-KONTEXT (${HINTERGRUND_HINWEIS}): ${bp.employer.typisch}`))
    assert.ok(p.includes('SPRACHSTIL:'))
    assert.ok(p.endsWith('patientenfreundlich.'))
  })

  test('zweck website entspricht dem Aufruf ohne Option', () => {
    const bp = getBlueprint('zahnarzt')
    assert.equal(buildAIContext(bp, data, { zweck: 'website' }), buildAIContext(bp, data))
  })

  test('zweck karriere: ohne Patienten-Kernbotschaften, Zielgruppe Bewerber', () => {
    const bp = getBlueprint('zahnarzt')!
    const p = buildAIContext(bp, data, { zweck: 'karriere' })
    assert.ok(p.includes('Karriereseite und Stellenanzeigen'))
    assert.ok(p.includes('ZIELGRUPPE: Bewerberinnen und Bewerber'))
    assert.ok(!p.includes(bp.ai_context.audience), 'Patienten-Zielgruppe darf nicht drin sein')
    assert.ok(!p.includes('KERNBOTSCHAFTEN'))
    for (const m of bp.ai_context.key_messages) assert.ok(!p.includes(m), `Kernbotschaft im Karriere-Prompt: ${m}`)
    assert.ok(!p.includes('SPRACHSTIL:'))
    assert.ok(p.includes(`FACHRICHTUNGS-KONTEXT (${HINTERGRUND_HINWEIS})`))
    assert.ok(p.endsWith('bewerberorientiert.'))
  })

  test('ohne Blueprint: Fallback je Zweck', () => {
    assert.ok(buildAIContext(null, data).includes('patientenfreundlich'))
    const k = buildAIContext(null, data, { zweck: 'karriere' })
    assert.ok(k.includes('Bewerberinnen und Bewerber'))
    assert.ok(!k.includes('patientenfreundlich'))
  })

  test('Kernbotschaften und typisch ohne Ausstattungs-/Verfügbarkeitsversprechen', () => {
    const re = /schnell|sofort|modern|beste|sichtbar|sanft|schonend|rettet|High-Tech|in besten Händen/i
    for (const [id, bp] of Object.entries(getAllBlueprints())) {
      for (const m of bp.ai_context.key_messages) assert.ok(!re.test(m), `${id} Kernbotschaft: ${m}`)
      assert.ok(!re.test(bp.employer.typisch), `${id} typisch: ${bp.employer.typisch}`)
    }
  })
})

describe('blueprints: getAufgaben', () => {
  test('Auszubildende/r zur ZFA bekommt Azubi-Aufgaben, nicht ZFA-Aufgaben', () => {
    const bp = getBlueprint('zahnarzt')!
    const azubi = getBlueprintAufgaben('zahnarzt', 'Auszubildende/r zur ZFA (m/w/d)')
    assert.equal(azubi, bp.employer.aufgaben['azubi'])
    assert.notEqual(azubi, bp.employer.aufgaben['zfa'])
    assert.equal(getBlueprintAufgaben('zahnarzt', 'Ausbildung zur Zahnmedizinischen Fachangestellten'), bp.employer.aufgaben['azubi'])
    assert.equal(getBlueprintAufgaben('zahnarzt', 'Azubi'), bp.employer.aufgaben['azubi'])
  })

  test('Fachkräfte und Ärzte werden weiter korrekt zugeordnet', () => {
    const z = getBlueprint('zahnarzt')!
    assert.equal(getBlueprintAufgaben('zahnarzt', 'Zahnmedizinische Fachangestellte (ZFA)'), z.employer.aufgaben['zfa'])
    const o = getBlueprint('orthopaedie')!
    assert.equal(getBlueprintAufgaben('orthopaedie', 'MFA (m/w/d)'), o.employer.aufgaben['mfa'])
    assert.equal(getBlueprintAufgaben('orthopaedie', 'Auszubildende/r MFA'), o.employer.aufgaben['azubi'])
    assert.equal(getBlueprintAufgaben('orthopaedie', 'Facharzt/Fachärztin für Orthopädie'), o.employer.aufgaben['arzt'])
  })

  test('Legacy employer-context: Azubi ZFA ebenfalls korrekt', () => {
    const azubi = getLegacyAufgaben('zahnarzt', 'Auszubildende/r zur ZFA')
    assert.ok(azubi.includes('lernen') || azubi.includes('Grundlagen'), `Legacy Azubi ZFA: ${azubi}`)
    assert.ok(getLegacyAufgaben('zahnarzt', 'Zahnmedizinische Fachangestellte').includes('Stuhlassistenz'))
  })
})
