# @pracio/shared v2.0 — Integration Guide

**Für:** Dashboard-Chat (Portal my.pracio.de)
**Stand:** 12.02.2026
**Repo:** https://github.com/pracio/shared (public)

---

## Was ist das?

`@pracio/shared` ist das zentrale Daten- und Logik-Package für das Pracio-System. Es enthält **alles** was Wizard und Portal über Fachrichtungen, Leistungen, Farben, AI-Textgenerierung und Seitenstruktur wissen müssen — als TypeScript, ohne externe Dependencies, isomorph (Node + Browser).

**Installation:**
```bash
yarn add https://github.com/pracio/shared.git#main
```

**Import:**
```typescript
// Alles aus einem Import
import {
  getBlueprint, getBlueprintServices, generateSEO, buildAIContext,
  resolveFachrichtung, getFeaturedFachrichtungen,
  resolveHomepageBlocks, resolveKarriereBlocks,
  assignSurfaces, getBlockSurfaceConfig,
  buildBlockPrompt, buildBatchPrompt,
  BENEFITS, getBenefitsByCategory,
  WERTE_CATALOG, getAufgaben, getVerbotenePhrases,
} from '@pracio/shared'

// Oder gezielt
import { getBlueprint } from '@pracio/shared/blueprints'
import { BENEFITS } from '@pracio/shared/benefit-catalog'
```

---

## Package-Struktur

```
@pracio/shared/                     (8.700 Zeilen TypeScript)
├── src/
│   ├── index.ts                    ← Re-exports alles
│   ├── registry.ts                 ← 25 Fachrichtungen mit Alias-Matching
│   ├── block-resolver.ts           ← Daten → Blockliste pro Seite
│   ├── surface-engine.ts           ← Surface-Zuweisung + Divider
│   ├── content-prompts.ts          ← AI-Prompt-Templates
│   ├── benefit-catalog.ts          ← 17 Benefits in 4 Kategorien
│   ├── employer-context.ts         ← 8 Werte-Definitionen
│   └── blueprints/
│       ├── types.ts                ← Blueprint-Interface
│       ├── index.ts                ← getBlueprint() + Helpers
│       └── healthcare/             ← 25 Fachrichtungs-Blueprints
│           ├── allgemeinmedizin.ts
│           ├── orthopaedie.ts
│           ├── zahnarzt.ts
│           └── ... (25 Dateien)
├── tests/shared.test.ts            ← 58 Unit-Tests
├── dry-test-provision.ts           ← Provisioning-Simulation (43 Tests)
└── package.json
```

---

## Die Module im Detail

### 1. Blueprints — Single Source of Truth pro Fachrichtung

Jeder Blueprint enthält ALLE Daten die das System über eine Fachrichtung braucht:

| Bereich | Inhalt | Beispiel (Orthopädie) |
|---|---|---|
| `meta` | ID, Name, Varianten, Icon | "Orthopädische Praxis", icon: "bone" |
| `colors` | Primary, Secondary, 4 Alternativen | #E67E22 (Orange), 4 Paletten |
| `services` | Leistungen gruppiert in Kategorien | 11 Services in 4 Kategorien |
| `faq` | Häufige Fragen gruppiert | "Was kostet eine Behandlung?" |
| `ai_context` | Tonalität, Zielgruppe, Kernbotschaften | "kompetent, motivierend, zuversichtlich" |
| `seo` | Title/Description Templates mit Platzhaltern | "{praxis_name} \| Orthopäde in {ort}" |
| `jobs` | Stellenanzeigen-Vorlagen | "MFA in Vollzeit (m/w/d)" |
| `employer` | Aufgaben pro Rolle, Stärken, verbotene Phrasen | MFA: "Röntgen-Assistenz, Gipsverbände..." |

**Kernfunktionen:**

```typescript
import {
  getBlueprint,
  getBlueprintServices,
  findService,
  generateSEO,
  buildAIContext,
  getAufgaben,
  getBenefitKontext,
  getVerbotenePhrases,
  getAvailableBlueprintIds,
} from '@pracio/shared'

// Blueprint laden
const bp = getBlueprint('orthopaedie')
// bp.meta.name → "Orthopädische Praxis"
// bp.colors.primary → "#E67E22"
// bp.services → [{category: "Wirbelsäule & Rücken", items: [...]}]

// Alle Services als flache Liste
const services = getBlueprintServices(bp)
// → [{name: "Rückenschmerzen", default_description: "...", icon: "spine"}, ...]

// Service-Match (fuzzy)
const match = findService(bp, 'Rücken')
// → {name: "Rückenschmerzen", default_description: "...", icon: "spine"}

// SEO generieren
const seo = generateSEO(bp, { praxis_name: 'Dr. Müller', ort: 'Leipzig' })
// seo.title → "Dr. Müller | Orthopäde in Leipzig"
// seo.description → "Orthopädische Praxis Dr. Müller in Leipzig. ✓ Rückenschmerzen ✓ ..."

// AI-System-Prompt bauen (inkl. Employer-Kontext + verbotene Phrasen)
const systemPrompt = buildAIContext(bp, { praxis_name: 'Dr. Müller', ort: 'Leipzig' })
// → 1000 Zeichen Kontext: Fachrichtung, Tonalität, Kernbotschaften, Verbotenes

// Aufgaben für eine Rolle
getAufgaben('orthopaedie', 'MFA')
// → "Röntgen-Assistenz, Gipsverbände, Injektionsvorbereitung, ..."

// Benefit-Kontext (fachrichtungsspezifisch)
getBenefitKontext('orthopaedie', 'fortbildung_bezahlt')
// → "OP-Kurse, Manuelle Therapie, Sportmedizin-Zertifikate"

// Was die AI NICHT schreiben darf
getVerbotenePhrases('orthopaedie')
// → ["Diagnose und Behandlung von Patienten", "Betreuung orthopädischer Patienten"]
```

**Dashboard-Nutzung:**
- Leistungen anzeigen/bearbeiten → `getBlueprintServices(bp)` als Vorschlagsliste
- SEO-Felder vorbefüllen → `generateSEO(bp, {...})`
- AI-Content regenerieren → `buildAIContext(bp, {...})` als System-Prompt
- Karriere-Texte → `getAufgaben()` für rollenspezifische Job-Beschreibungen
- Benefit-Editor → `getBenefitKontext()` für fachrichtungsrelevante Beispiele

---

### 2. Registry — Fachrichtungs-Verzeichnis

25 Fachrichtungen mit Fuzzy-Matching, Alias-Listen, Featured/More-Gruppierung.

```typescript
import {
  resolveFachrichtung,
  getRegistryEntry,
  getFeaturedFachrichtungen,
  getMoreFachrichtungen,
  getFachrichtungLabel,
} from '@pracio/shared'

// Alias → kanonische ID
resolveFachrichtung('Hautarzt')     // → 'dermatologie'
resolveFachrichtung('Kinderärztin') // → 'kinderarzt'
resolveFachrichtung('Chirurg')      // → 'orthopaedie'

// Label für Anzeige
getFachrichtungLabel('hno')         // → 'HNO-Heilkunde'

// Für Dropdown/Auswahl
const featured = getFeaturedFachrichtungen()  // 14 häufigste
const more = getMoreFachrichtungen()          // 11 weitere
// Jeder: { id, label, icon, industry, featured }
```

---

### 3. Block Resolver — Daten → Seitenstruktur

Der Arzt gibt Daten ein (Benefits, Werte, Team-Fotos), der Resolver entscheidet welche Blöcke in welcher Variante auf eine Seite kommen.

```typescript
import { resolveHomepageBlocks, resolveKarriereBlocks, extractResolverInput } from '@pracio/shared'

// Input aus wizard_data extrahieren
const input = extractResolverInput(wizardData)

// Blöcke auflösen
const homepageBlocks = resolveHomepageBlocks(input)
const karriereBlocks = resolveKarriereBlocks(input)
```

**Jeder Block hat:**
```typescript
{
  collection: 'block_imageList',     // Directus Block-Typ
  role: 'highlight',                 // Für Surface-Zuweisung
  variant: 'grid-2',                 // Template-Variante
  contentKey: 'careerBenefits',      // Welcher AI-Text hier reinkommt
  label: 'Was wir bieten',          // Dashboard-Anzeigename (KEIN Tech-Jargon!)
  required: true,                    // Pflicht oder datenabhängig?
}
```

**Varianz-Logik (automatisch):**
- Team-Mitglieder vorhanden → Team-Block erscheint
- Karriere aktiv → Karriere-Teaser auf Homepage
- Werte ausgefüllt → Werte-Block auf Karriereseite
- Zitate vorhanden → Zitate-Block auf Karriereseite
- Mehr als 4 Leistungen → 3er-Grid statt 2er-Grid
- Keine Fotos → text-only / compact Varianten

**Dashboard-Nutzung:**
- Wireframe-Vorschau: Block-Labels als Inhaltsbereiche anzeigen
- "Veröffentlichen": Directus-Blöcke erstellen mit variant + content_role
- Beim Bearbeiten: `resolveXxxBlocks()` neu aufrufen wenn sich Daten ändern

---

### 4. Surface Engine — Farben + Divider

Weist jedem Block automatisch eine Surface-Farbe zu, basierend auf Blockanzahl und -Rolle.

```typescript
import { assignSurfaces } from '@pracio/shared'

const surfaces = assignSurfaces(blocks, themeSurfaces, 'wave')
// surfaces[i].surface → 'light' | 'bold' | 'soft' | 'accent' | ...
// surfaces[i].divider_type → 'wave' | null
```

**6 Surface-Modes:** `light`, `soft`, `bold`, `dark`, `accent`, `rich-dark`
**8 Divider-Typen:** `none`, `wave`, `wave-layered`, `tilt`, `curve`, `triangle`, `arrow`, `cloud`

**Legacy-kompatibel:** `getBlockSurfaceConfig(v2Theme)` hat exakt die gleiche API wie die alte `blockSurfaceRules.ts` im Wizard.

---

### 5. Content Prompts — AI-Prompt-Templates

Zwei Modi: Batch (alle Blöcke einer Seite) und Single (einen Block regenerieren).

```typescript
import { buildBlockPrompt, buildBatchPrompt, mapTonalityToPreset } from '@pracio/shared'

// Dashboard: "Neuen Vorschlag" für einen Block
const { system, user } = buildBlockPrompt({
  contentKey: 'careerIntro',
  context: {
    praxisName: 'Praxis Dr. Müller',
    fachrichtung: 'orthopaedie',
    praxisGroesse: 'klein',
    ort: 'Leipzig',
    tonality: 'herzlich',          // oder: 'fachlich', 'entspannt', 'verlaesslich'
    formalStyle: 'sie',
  },
  regenerate: true,                // → andere Variante als beim letzten Mal
  previousContent: 'Alter Text...',
})

// → system + user als Prompt an Claude senden
// → Neuer Text, User kann akzeptieren oder verwerfen
```

**Tonalitäts-Presets:**
| Preset | Stil |
|---|---|
| `herzlich` | Warmherzig, einladend, Du |
| `fachlich` | Professionell, kompetent, Sie |
| `entspannt` | Locker, direkt, Du |
| `verlaesslich` | Bodenständig, seriös, Sie |

---

### 6. Benefit Catalog — 17 Benefits in 4 Kategorien

```typescript
import { BENEFITS, BENEFIT_CATEGORIES, getBenefitsByCategory, getBenefitLabels, validateBenefits } from '@pracio/shared'

// Gruppierte Checkboxen rendern
const grouped = getBenefitsByCategory()
// grouped.verguetung → [{id: 'ueberdurchschnittliches_gehalt', label: '...', icon: 'trending-up'}, ...]
// grouped.arbeitszeit → [...]
// grouped.entwicklung → [...]
// grouped.extras → [...]

// Labels für gespeicherte IDs
getBenefitLabels(['flexible_arbeitszeiten', 'teilzeit'])
// → ['Flexible Arbeitszeiten', 'Teilzeit möglich']

// Validierung (bekannte vs. custom)
validateBenefits(['flexible_arbeitszeiten', 'Praxishund erlaubt'])
// → { known: ['flexible_arbeitszeiten'], custom: ['Praxishund erlaubt'] }
```

---

### 7. Werte-Katalog — 8 Arbeitgeber-Werte

```typescript
import { WERTE_CATALOG, getWert } from '@pracio/shared'

// Alle 8 Werte für Checkboxen
WERTE_CATALOG.forEach(w => {
  // w.id → 'teamzusammenhalt'
  // w.label → 'Starker Teamzusammenhalt'
  // w.icon → 'users'
  // w.prompt_hint → 'Füreinander da sein, gemeinsame Aktivitäten, ...'
})

// Einzeln abrufen
const wert = getWert('eigenverantwortung')
// wert.label → 'Eigenverantwortliches Arbeiten'
```

---

## Dashboard-Seiten und welche Module sie nutzen

### Karriere-Bereich
| Feature | Module |
|---|---|
| Stellen verwalten | `getBlueprint()` → `bp.jobs.templates` für Vorlagen |
| Benefits bearbeiten | `BENEFITS`, `getBenefitsByCategory()`, `getBenefitKontext()` |
| Arbeitgeberprofil | `WERTE_CATALOG`, `getAufgaben()` |
| Wireframe-Vorschau | `resolveKarriereBlocks()` + `assignSurfaces()` |
| Text regenerieren | `buildBlockPrompt()` mit `regenerate: true` |

### Seitenübersicht (Homepage, Team, etc.)
| Feature | Module |
|---|---|
| Block-Labels anzeigen | `resolveHomepageBlocks()` → `block.label` |
| Surface-Farben | `assignSurfaces()` → Farbige Vorschau |
| Service-Liste | `getBlueprintServices()` → Vorschlagsliste |
| SEO bearbeiten | `generateSEO()` → Vorbefüllung |

### Leistungen verwalten
| Feature | Module |
|---|---|
| Leistungen hinzufügen | `getBlueprintServices()` als Vorschlagsliste |
| Beschreibung generieren | `findService()` → `default_description` als Fallback |
| Kategorien | `bp.services` → Kategorie-Struktur |

---

## Datenfluss: Wizard → Portal

```
Wizard                          @pracio/shared                    Portal
──────                          ──────────────                    ──────

User füllt Wizard aus
        │
        ├─ fachrichtung ──────→ getBlueprint() ──────────────→ Blueprint-Daten
        ├─ benefits ──────────→ BENEFITS ─────────────────────→ Benefit-Editor
        ├─ werte ─────────────→ WERTE_CATALOG ────────────────→ Werte-Editor
        ├─ services ──────────→ getBlueprintServices() ───────→ Service-Editor
        │
        ▼
  Provisioning speichert
  wizard_data JSON auf
  general Collection
        │
        ▼
  Portal liest wizard_data
        │
        ├─ extractResolverInput() ──→ resolveKarriereBlocks() ──→ Wireframe
        ├─ buildAIContext() ────────→ Claude API ───────────────→ Texte
        └─ generateSEO() ──────────→ Meta-Tags ────────────────→ SEO
```

---

## API-Endpunkte die das Portal braucht

### POST /api/content/regenerate
```typescript
// Request: { tenantId, contentKey, previousContent }
// Backend:
//   1. wizard_data laden
//   2. bp = getBlueprint(wizardData.fachrichtung)
//   3. systemPrompt = buildAIContext(bp, {praxisName, ort})
//   4. {system, user} = buildBlockPrompt({contentKey, context, regenerate: true})
//   5. Claude API → neuer Text
// Response: { content: "Neuer Text..." }
```

### POST /api/career/update-blocks
```typescript
// Request: { tenantId, employerBranding: {benefits, werte, zitate} }
// Backend:
//   1. extractResolverInput(updatedData)
//   2. resolveKarriereBlocks(input) → neue Blockliste
//   3. Diff mit bestehenden Blöcken
//   4. Neue Blöcke: buildBlockPrompt() → AI-Content
//   5. Directus CRUD
```

---

## Directus-Schema Erweiterungen

### Neue Felder auf `pages_translations_blocks` (Junction):
```
variant: string (nullable)        — 'grid-2', 'text-only', 'reversed', etc.
content_role: string (nullable)   — 'hero', 'content', 'highlight', 'cta'
```

### Erweiterung `career_settings`:
```
werte: json                       — ["teamzusammenhalt", "eigenverantwortung"]
werte_freitext: text              — "Jeden Freitag kochen wir zusammen"
bewerbungsweg: string             — 'formular' | 'kontakt' | 'beides'
ansprechpartner_name: string
ansprechpartner_email: string
```

### Benefits (auf career_settings oder wizard_data):
```json
{
  "benefits_selected": ["flexible_arbeitszeiten", "fortbildung_bezahlt"],
  "benefits_custom": ["Praxishund erlaubt"]
}
```

---

## WICHTIG: Dashboard-Sprache

Der Arzt sieht im Dashboard **NIE** technische Begriffe. Statt:

| ❌ Technisch | ✅ Praxisnah |
|---|---|
| Block, Surface, Divider | Abschnitt, Bereich |
| Variante grid-2 | (wird nicht angezeigt) |
| content_role: highlight | (intern) |
| resolveKarriereBlocks() | "So wird deine Karriereseite aufgebaut" |
| buildBlockPrompt() | "↻ Neuen Vorschlag" Button |
| employer_level: 2 | "Arbeitgeberprofil erweitern" |

Die `label`-Felder der aufgelösten Blöcke sind bereits praxisnah formuliert:
"Willkommen", "Über uns", "Unsere Leistungen", "Was wir bieten", "Offene Stellen", etc.
