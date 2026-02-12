// ═══════════════════════════════════════════════════════════
// dry-test-provision.ts
// ═══════════════════════════════════════════════════════════
// Testet alle @pracio/shared Funktionen genau so wie
// provision.post.ts sie nutzt — ohne Directus, Mittwald,
// AI-API oder sonstige externe Calls.
//
// Ausführen:
//   node --experimental-strip-types --experimental-transform-types dry-test-provision.ts
//
// Oder im Wizard-Repo (nach yarn add):
//   npx tsx dry-test-provision.ts
// ═══════════════════════════════════════════════════════════

import {
  // Blueprint
  getBlueprint,
  getBlueprintServices,
  generateSEO as generateBlueprintSEO,
  buildAIContext,
  findService,
  getAvailableBlueprintIds,
  // Registry
  resolveFachrichtung,
  getFeaturedFachrichtungen,
  getMoreFachrichtungen,
  getBlueprintId,
  getFachrichtungLabel,
  // Surface
  getBlockSurfaceConfig,
  // Block Resolver
  resolveHomepageBlocks,
  resolveKarriereBlocks,
  extractResolverInput,
  // Surface Engine
  assignSurfaces,
  // Content Prompts
  buildBlockPrompt,
  buildBatchPrompt,
  mapTonalityToPreset,
  // Benefits + Werte
  BENEFITS,
  WERTE_CATALOG,
  getBenefitLabels,
  // Employer
  getAufgaben,
  getBenefitKontext,
  getVerbotenePhrases,
} from './src/index.ts'

// ═══════════════════════════════════════════════════════════
// Test Helpers
// ═══════════════════════════════════════════════════════════

let passed = 0
let failed = 0

function assert(condition: boolean, msg: string) {
  if (condition) {
    passed++
    console.log(`  ✅ ${msg}`)
  } else {
    failed++
    console.log(`  ❌ ${msg}`)
  }
}

function section(name: string) {
  console.log(`\n━━━ ${name} ━━━`)
}

// ═══════════════════════════════════════════════════════════
// Mock Wizard Data (wie es aus dem Frontend kommt)
// ═══════════════════════════════════════════════════════════

const MOCK_WIZARD_DATA = {
  praxisName: 'Praxis Dr. Testfall',
  vorname: 'Max',
  nachname: 'Testfall',
  email: 'max@testfall.de',
  telefon: '0341 1234567',
  strasse: 'Teststraße',
  hausnummer: '42',
  plz: '04103',
  ort: 'Leipzig',
  fachrichtung: 'orthopaedie',
  formalStyle: 'sie',
  genderStyle: 'neutral',
  services: [
    { name: 'Rückenschmerzen', selected: true },
    { name: 'Knieschmerzen', selected: true },
    { name: 'Stoßwellentherapie', selected: true },
    { name: 'Akupunktur', selected: true },
    { name: 'Sportmedizin', selected: false },
  ],
  features: {
    karriere: true,
    teamMembers: [
      { vorname: 'Max', nachname: 'Testfall', rolle: 'Facharzt für Orthopädie' },
      { vorname: 'Anna', nachname: 'Muster', rolle: 'MFA' },
    ],
    jobs: [
      { title: 'MFA in Vollzeit (m/w/d)', selected: true },
    ],
    employerProfile: {
      benefits: ['fortbildung_bezahlt', 'flexible_arbeitszeiten', 'moderne_ausstattung'],
      werte: ['teamzusammenhalt', 'eigenverantwortung'],
    },
  },
  colorScheme: {
    id: 'custom',
    name: 'Aktiv Orange',
    primary: '#E67E22',
    secondary: '#FFF8F0',
    _v2: {
      seed: { primaryHue: 30, primaryChroma: 80, radius: 8 },
      surfaces: { hero: 'bold', highlight: 'accent', cta: 'accent' },
      dividerType: 'wave',
    },
  },
  multilingual: true,
  languages: ['de-DE', 'en-US', 'tr-TR'],
}

const data = MOCK_WIZARD_DATA

console.log('╔═══════════════════════════════════════════════════════════╗')
console.log('║   DRY-RUN: Wizard Provisioning mit @pracio/shared       ║')
console.log('╚═══════════════════════════════════════════════════════════╝')

// ═══════════════════════════════════════════════════════════
// 1. Registry
// ═══════════════════════════════════════════════════════════

section('1. REGISTRY')

const allIds = getAvailableBlueprintIds()
assert(allIds.length === 25, `25 Blueprints verfügbar (got: ${allIds.length})`)

const featured = getFeaturedFachrichtungen()
const more = getMoreFachrichtungen()
assert(featured.length + more.length === 25, `Featured (${featured.length}) + More (${more.length}) = 25`)

// Fuzzy resolve wie der Scanner es tut
assert(resolveFachrichtung('Hautarzt') === 'dermatologie', 'resolveFachrichtung("Hautarzt") → dermatologie')
assert(resolveFachrichtung('Chirurg') === 'orthopaedie', 'resolveFachrichtung("Chirurg") → orthopaedie')
assert(resolveFachrichtung('orthopaedie') === 'orthopaedie', 'resolveFachrichtung("orthopaedie") → orthopaedie')

// Fallback chain
assert(getBlueprintId('rheumatologie') === 'orthopaedie', 'Rheumatologie → Fallback Orthopädie')
assert(getBlueprintId('orthopaedie') === 'orthopaedie', 'Orthopädie → eigener Blueprint')

// ═══════════════════════════════════════════════════════════
// 2. Blueprint laden (wie provision.post.ts Zeile 124)
// ═══════════════════════════════════════════════════════════

section('2. BLUEPRINT LADEN')

const blueprint = getBlueprint(data.fachrichtung)
assert(blueprint !== null, `getBlueprint("${data.fachrichtung}") → nicht null`)
assert(blueprint!.meta.name === 'Orthopädische Praxis', `Blueprint name: ${blueprint!.meta.name}`)

const blueprintServices = getBlueprintServices(blueprint)
assert(blueprintServices.length === 11, `Blueprint Services: ${blueprintServices.length} (erwartet: 11)`)
console.log(`  📋 Services: ${blueprintServices.map(s => s.name).slice(0, 4).join(', ')} ...`)

// ═══════════════════════════════════════════════════════════
// 3. Farben (wie provision.post.ts Zeile 971)
// ═══════════════════════════════════════════════════════════

section('3. FARBEN (getBlueprintColors Ersatz)')

// Inline IIFE wie in der migrierten provision.post.ts
const colorScheme = (() => {
  if (!blueprint?.colors) return { primary: '#3b82f6', secondary: '#f0f9ff' }
  const selectedTheme = data.colorScheme?.name
  if (selectedTheme && blueprint.colors.alternatives) {
    const alt = blueprint.colors.alternatives.find(
      a => a.name.toLowerCase() === selectedTheme.toLowerCase()
    )
    if (alt) return { primary: alt.primary, secondary: alt.secondary }
  }
  return { primary: blueprint.colors.primary, secondary: blueprint.colors.secondary }
})()

assert(colorScheme.primary === '#E67E22', `Primary: ${colorScheme.primary} (Aktiv Orange matched)`)
assert(colorScheme.secondary === '#FFF8F0', `Secondary: ${colorScheme.secondary}`)

// Alternative Test
const altTest = blueprint!.colors.alternatives.find(a => a.name === 'Sportlich Blau')
assert(altTest?.primary === '#2980B9', `Alternative "Sportlich Blau": ${altTest?.primary}`)

// ═══════════════════════════════════════════════════════════
// 4. Services anreichern (wie provision.post.ts Zeile 2246)
// ═══════════════════════════════════════════════════════════

section('4. SERVICES ANREICHERN (enrichServicesWithDescriptions Ersatz)')

const enriched = data.services
  .filter(s => s.selected !== false)
  .map(s => {
    const match = findService(blueprint, s.name)
    return {
      name: s.name,
      description: match?.default_description || `${s.name} – Professionelle Behandlung.`,
      icon: match?.icon,
    }
  })

assert(enriched.length === 4, `4 Services angereichert (von 5 — 1 deselected)`)
assert(enriched[0].description.length > 20, `Rückenschmerzen hat Blueprint-Beschreibung (${enriched[0].description.length} chars)`)
assert(enriched[0].icon !== undefined, `Rückenschmerzen hat Icon: ${enriched[0].icon}`)
console.log(`  📋 Enriched: ${enriched.map(s => `${s.name} (${s.description.substring(0, 30)}...)`).join('\n              ')}`)

// ═══════════════════════════════════════════════════════════
// 5. Surface Config (wie provision.post.ts Zeile 994)
// ═══════════════════════════════════════════════════════════

section('5. SURFACE CONFIG (getBlockSurfaceConfig)')

const v2Theme = data.colorScheme._v2
const surfaceCfg = getBlockSurfaceConfig(v2Theme as any)
assert(surfaceCfg !== null, 'getBlockSurfaceConfig() gibt Config zurück')
assert(typeof surfaceCfg.forPage === 'function', 'surfaceCfg.forPage() ist Funktion')
assert(typeof surfaceCfg.forBlock === 'function', 'surfaceCfg.forBlock() ist Funktion')

const mockBlocks = [
  { collection: 'block_herobanner', role: 'hero' as const },
  { collection: 'block_imagetext', role: 'content' as const },
  { collection: 'block_imagelist', role: 'content' as const },
  { collection: 'block_banner', role: 'highlight' as const },
  { collection: 'block_practice_info', role: 'content' as const },
  { collection: 'block_banner', role: 'cta' as const },
]
const homepageSurfaces = surfaceCfg.forPage(mockBlocks)
assert(homepageSurfaces.length === mockBlocks.length, `Homepage ${mockBlocks.length} Blöcke → ${homepageSurfaces.length} Surface-Einträge`)
console.log(`  🎨 Surfaces: ${homepageSurfaces.map((s, i) => `Block${i+1}=${s.surface}`).join(', ')}`)

// ═══════════════════════════════════════════════════════════
// 6. SEO (wie provision.post.ts Zeile 1620)
// ═══════════════════════════════════════════════════════════

section('6. SEO (generateBlueprintSEO)')

const seo = generateBlueprintSEO(blueprint, {
  praxis_name: data.praxisName,
  ort: data.ort,
  telefon: data.telefon,
  adresse: `${data.strasse} ${data.hausnummer}, ${data.plz} ${data.ort}`,
})

assert(seo.title.includes('Testfall'), `SEO Title enthält Praxisname: "${seo.title}"`)
assert(seo.title.includes('Leipzig'), `SEO Title enthält Ort: "${seo.title}"`)
assert(seo.description.length > 30, `SEO Description: ${seo.description.substring(0, 60)}...`)
assert(seo.keywords.length > 0, `SEO Keywords: ${seo.keywords.length} Stück`)

// ═══════════════════════════════════════════════════════════
// 7. AI Context (wie provision.post.ts Zeile für Content-Gen)
// ═══════════════════════════════════════════════════════════

section('7. AI CONTEXT (buildAIContext)')

const aiCtx = buildAIContext(blueprint, {
  praxis_name: data.praxisName,
  ort: data.ort,
})

assert(aiCtx.includes('Orthopädische Praxis'), 'AI Context enthält Fachrichtungs-Name')
assert(aiCtx.includes('Testfall'), 'AI Context enthält Praxisname')
assert(aiCtx.includes('Leipzig'), 'AI Context enthält Ort')
assert(aiCtx.includes('VERBOTEN'), 'AI Context enthält verbotene Phrasen')
assert(aiCtx.includes('Manuelle Therapie'), 'AI Context enthält Employer typisch')
console.log(`  📝 AI Context: ${aiCtx.length} Zeichen`)

// ═══════════════════════════════════════════════════════════
// 8. Employer-Daten (für Karriere-Generierung)
// ═══════════════════════════════════════════════════════════

section('8. EMPLOYER-DATEN')

const mfaAufgaben = getAufgaben('orthopaedie', 'MFA')
assert(mfaAufgaben.includes('Röntgen'), `MFA Aufgaben enthalten "Röntgen": ${mfaAufgaben.substring(0, 50)}...`)

const arztAufgaben = getAufgaben('orthopaedie', 'Facharzt für Orthopädie')
assert(arztAufgaben.includes('Diagnostik'), `Arzt Aufgaben enthalten "Diagnostik": ${arztAufgaben.substring(0, 50)}...`)

const fortbildung = getBenefitKontext('orthopaedie', 'fortbildung_bezahlt')
assert(fortbildung !== null && fortbildung.includes('OP-Kurse'), `Benefit-Kontext: ${fortbildung}`)

const phrasen = getVerbotenePhrases('orthopaedie')
assert(phrasen.length >= 2, `${phrasen.length} verbotene Phrasen`)

// ═══════════════════════════════════════════════════════════
// 9. Block Resolver + Surface Engine (Content v2)
// ═══════════════════════════════════════════════════════════

section('9. BLOCK RESOLVER + SURFACE ENGINE')

const resolverInput = extractResolverInput({
  fachrichtung: data.fachrichtung,
  services: data.services.filter(s => s.selected),
  hasTeamPhotos: true,
  hasBildmaterial: true,
  hasKarriere: data.features.karriere,
  hasWerte: (data.features.employerProfile?.werte?.length || 0) > 0,
  hasZitate: false,
  benefits: data.features.employerProfile?.benefits || [],
})

const homepageBlocks = resolveHomepageBlocks(resolverInput)
assert(homepageBlocks.length >= 5, `Homepage: ${homepageBlocks.length} Blöcke (min. 5)`)
assert(homepageBlocks[0].role === 'hero', `Erster Block ist Hero: ${homepageBlocks[0].role}`)
assert(homepageBlocks[homepageBlocks.length - 1].role === 'cta', `Letzter Block ist CTA`)

const karriereBlocks = resolveKarriereBlocks(resolverInput)
assert(karriereBlocks.length >= 3, `Karriere: ${karriereBlocks.length} Blöcke (min. 3)`)

// Surface assignment
const themeSurfaces = {
  hero: 'bold' as const,
  highlight: 'accent' as const,
  cta: 'accent' as const,
}
const surfaces = assignSurfaces(homepageBlocks, themeSurfaces, 'wave')
assert(surfaces.length === homepageBlocks.length, `${surfaces.length} Surface-Zuweisungen für ${homepageBlocks.length} Blöcke`)

console.log(`\n  Homepage-Aufbau:`)
homepageBlocks.forEach((block, i) => {
  const s = surfaces[i]
  const divider = s.divider_type ? ` ◢${s.divider_type}` : ''
  console.log(`    ${i + 1}. ${block.label.padEnd(28)} ${block.variant.padEnd(12)} → ${s.surface}${divider}`)
})

console.log(`\n  Karriere-Aufbau:`)
const karriereSurfaces = assignSurfaces(karriereBlocks, themeSurfaces, 'wave')
karriereBlocks.forEach((block, i) => {
  const s = karriereSurfaces[i]
  const divider = s.divider_type ? ` ◢${s.divider_type}` : ''
  console.log(`    ${i + 1}. ${block.label.padEnd(28)} ${block.variant.padEnd(12)} → ${s.surface}${divider}`)
})

// ═══════════════════════════════════════════════════════════
// 10. Content Prompts
// ═══════════════════════════════════════════════════════════

section('10. CONTENT PROMPTS')

const promptContext = {
  praxisName: data.praxisName,
  fachrichtung: data.fachrichtung,
  praxisGroesse: 'klein',
  ort: data.ort,
  tonality: 'herzlich' as const,
  formalStyle: 'sie' as const,
}

const blockPrompt = buildBlockPrompt({
  contentKey: 'careerIntro',
  context: promptContext,
})
assert(blockPrompt.system.length > 50, `Block-Prompt system: ${blockPrompt.system.length} chars`)
assert(blockPrompt.user.length > 20, `Block-Prompt user: ${blockPrompt.user.length} chars`)

const batchPrompt = buildBatchPrompt(homepageBlocks, promptContext)
assert(batchPrompt.system.length > 100, `Batch-Prompt system: ${batchPrompt.system.length} chars`)
assert(batchPrompt.outputKeys.length >= 1, `${batchPrompt.outputKeys.length} Output-Keys (nicht jeder Block braucht AI-Content)`)

// ═══════════════════════════════════════════════════════════
// 11. Alle 25 Blueprints — Vollständigkeits-Check
// ═══════════════════════════════════════════════════════════

section('11. ALLE 25 BLUEPRINTS — VOLLSTÄNDIGKEIT')

const issues: string[] = []
for (const id of allIds) {
  const bp = getBlueprint(id)
  if (!bp) { issues.push(`${id}: NULL`); continue }
  if (!bp.meta?.name) issues.push(`${id}: kein meta.name`)
  if (!bp.colors?.primary) issues.push(`${id}: keine primary color`)
  if (!bp.services?.length) issues.push(`${id}: keine services`)
  if (!bp.employer?.typisch) issues.push(`${id}: kein employer.typisch`)
  if (!bp.employer?.aufgaben || Object.keys(bp.employer.aufgaben).length === 0) issues.push(`${id}: keine aufgaben`)
  if (!bp.ai_context?.tone?.length) issues.push(`${id}: kein ai_context.tone`)
  if (!bp.seo?.title_template) issues.push(`${id}: kein seo.title_template`)
  if (!bp.fachrichtung_titel?.de) issues.push(`${id}: kein fachrichtung_titel.de`)
  if (!bp.jobs?.templates?.length) issues.push(`${id}: keine job templates`)
}

if (issues.length === 0) {
  assert(true, `Alle 25 Blueprints vollständig (meta, colors, services, employer, ai_context, seo, jobs) ✓`)
} else {
  assert(false, `${issues.length} Issues:`)
  issues.forEach(i => console.log(`    ⚠ ${i}`))
}

// Service-Count über alle Blueprints
let totalServices = 0
for (const id of allIds) {
  const bp = getBlueprint(id)!
  totalServices += getBlueprintServices(bp).length
}
console.log(`  📊 Gesamt: ${totalServices} Services über ${allIds.length} Blueprints`)

// ═══════════════════════════════════════════════════════════
// 12. Simulated Directus API Calls
// ═══════════════════════════════════════════════════════════

section('12. SIMULATED PROVISIONING (Directus-Calls)')

const apiCalls: string[] = []
function mockDirectusCreate(collection: string, data: Record<string, any>) {
  apiCalls.push(`POST ${collection}`)
  return { id: `mock-${collection}-${apiCalls.length}` }
}

// Simulate what provision.post.ts does
const tenant = mockDirectusCreate('tenants', { name: data.praxisName, slug: 'dr-testfall' })
const primaryColor = mockDirectusCreate('primary_colors', { color: colorScheme.primary })
const secondaryColor = mockDirectusCreate('secondary_colors', { color: colorScheme.secondary })
const practice = mockDirectusCreate('practice', { name: data.praxisName, address_street: data.strasse })
const navigation = mockDirectusCreate('navigation', { tenant_id: tenant.id })

// Pages + Blocks
const homepage = mockDirectusCreate('pages', { slug: '', name: 'Homepage' })
const homepageTrans = mockDirectusCreate('pages_translations', { page: homepage.id, language: 'de-DE' })

for (const block of homepageBlocks) {
  const blockEntry = mockDirectusCreate(block.collection, { content: '...' })
  mockDirectusCreate('pages_translations_blocks', {
    page_translation: homepageTrans.id,
    block: blockEntry.id,
    collection: block.collection,
    variant: block.variant,
    content_role: block.role,
  })
}

// Services
for (const s of enriched) {
  mockDirectusCreate('services', { name: s.name })
}

console.log(`  📡 ${apiCalls.length} Directus API-Calls simuliert:`)
const callCounts: Record<string, number> = {}
apiCalls.forEach(c => {
  const col = c.replace('POST ', '')
  callCounts[col] = (callCounts[col] || 0) + 1
})
Object.entries(callCounts).forEach(([col, count]) => {
  console.log(`     ${count}× ${col}`)
})

// ═══════════════════════════════════════════════════════════
// ERGEBNIS
// ═══════════════════════════════════════════════════════════

console.log('\n╔═══════════════════════════════════════════════════════════╗')
console.log(`║   ERGEBNIS: ${passed} passed, ${failed} failed${' '.repeat(Math.max(0, 30 - String(passed).length - String(failed).length))}║`)
console.log('╚═══════════════════════════════════════════════════════════╝')

if (failed > 0) {
  console.log('\n⚠️  Es gibt Fehler — bitte prüfen bevor du live provisionierst!')
  process.exit(1)
} else {
  console.log('\n✅ Alles grün — Migration sicher, du kannst live testen!')
  process.exit(0)
}
