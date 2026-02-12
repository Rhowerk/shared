# @pracio/shared — Integration Guide

**Für:** Dashboard-Chat (Portal my.pracio.de)
**Stand:** 11.02.2026

---

## Was ist das?

`@pracio/shared` ist ein TypeScript-Package mit 5 Modulen die sowohl im Wizard (wiz.pracio.de) als auch im Portal (my.pracio.de) laufen. Zero Dependencies, isomorph (Node + Browser).

**Installation im Portal-Repo:**
```bash
npm install git+https://github.com/pracio/shared.git#main
```

**Import:**
```typescript
// Alles auf einmal
import { resolveKarriereBlocks, BENEFITS, assignSurfaces } from '@pracio/shared'

// Oder gezielt ein Modul
import { resolveKarriereBlocks } from '@pracio/shared/block-resolver'
import { BENEFITS, getBenefitsByCategory } from '@pracio/shared/benefit-catalog'
```

---

## Die 5 Module

### 1. `block-resolver` — Welche Blöcke auf welche Seite

**Kernidee:** Der Arzt gibt Daten ein, nicht Struktur. Der Resolver entscheidet anhand der vorhandenen Daten welche Blöcke mit welcher Variante auf eine Seite kommen.

**Funktionen:**
- `resolveHomepageBlocks(input)` → Startseite (5-7 Blöcke)
- `resolveKarriereBlocks(input)` → Karriereseite (5-7 Blöcke)
- `resolveTeamBlocks(input)` → Team-Seite (3 Blöcke)
- `resolveServiceDetailBlocks(input)` → Leistungs-Detailseite (3 Blöcke)
- `resolveJobDetailBlocks(input)` → Stellen-Detailseite (3-4 Blöcke)
- `extractResolverInput(wizardData)` → Extrahiert Input aus Wizard-Daten/wizard_data JSON

**Jeder aufgelöste Block hat:**
```typescript
{
  collection: 'block_imageList',     // Directus Block-Typ
  role: 'highlight',                 // Für Surface-Zuweisung
  variant: 'grid-2',                // Template-Variante (NEU)
  contentKey: 'careerBenefits',      // Welcher AI-Text hier reinkommt
  label: 'Was wir bieten',          // Dashboard-Anzeigename (kein Tech-Jargon)
  required: true,                    // Pflicht oder datenabhängig?
  condition: '5 Benefits → 2er Grid' // Debug-Info
}
```

**Varianten pro Block-Typ:**
| Block-Typ | Varianten | Wann welche? |
|---|---|---|
| `block_imageText` | `default`, `text-only`, `reversed` | `text-only` wenn kein Bildmaterial |
| `block_imageList` | `grid-2`, `grid-3`, `cards` | Anzahl Items bestimmt Grid |
| `block_banner` | `cta`, `karriere` | Rolle bestimmt Variante |
| `block_text` | `default`, `intro` | `intro` für Karriere-Einleitung (größer) |
| `block_teamList` | `grid`, `compact` | `compact` wenn keine Team-Fotos |

**Varianz-Mechanik (automatisch):**
- Hat der Arzt Team-Mitglieder → Team-Block erscheint
- Hat er Karriere aktiv → Karriere-Teaser auf Homepage
- Hat er Werte ausgefüllt → Werte-Block auf Karriereseite
- Hat er Zitate → Zitate-Block auf Karriereseite
- Mehr als 4 Leistungen → 3er-Grid statt 2er-Grid
- Keine Fotos → text-only / compact Varianten

**Dashboard-Nutzung:**
```typescript
import { resolveKarriereBlocks, extractResolverInput } from '@pracio/shared/block-resolver'

// Daten aus wizard_data JSON (auf general Collection gespeichert)
const wizardData = await fetchWizardData(tenantId)
const input = extractResolverInput(wizardData)

// Blöcke auflösen
const blocks = resolveKarriereBlocks(input)

// → Wireframe-Vorschau rendern
// → Beim "Veröffentlichen": Directus-Blöcke erstellen/aktualisieren
```

---

### 2. `surface-engine` — Farben + Divider

**Kernidee:** Blockanzahl beeinflusst das visuelle Pattern. Wenige Blöcke = clean, viele = rhythmisch. Der Arzt entscheidet nichts davon.

**Pattern-Logik:**
- ≤5 Blöcke → Clean: fast alles `light`, nur Hero + CTA farbig
- 6-7 Blöcke → Rhythmisch: ein `highlight` in der Mitte
- 8+ Blöcke → Voll: mehrere Highlights, abwechselnd `light`/`soft`

**Funktionen:**
- `assignSurfaces(blocks, themeSurfaces, dividerType)` → NEU, blockanzahl-aware
- `getBlockSurfaceConfig(v2ThemeData)` → Legacy-kompatibel (Drop-in für alte blockSurfaceRules.ts)

**Surfaces (6 Modes):**
`light` | `soft` | `bold` | `dark` | `accent` | `rich-dark`

**Divider-Typen:**
`none` | `wave` | `wave-layered` | `tilt` | `curve` | `triangle` | `arrow` | `cloud`

**Dashboard-Nutzung:**
```typescript
import { assignSurfaces } from '@pracio/shared/surface-engine'

// blocks = Ergebnis von resolveKarriereBlocks()
// tenantTheme = aus general Collection (primary_hue, etc.)
const surfaces = assignSurfaces(blocks, tenantTheme.surfaces, tenantTheme.dividerType)

// surfaces[i].surface → 'light' | 'bold' | etc.
// surfaces[i].divider_type → 'wave' | null
// → Für Wireframe-Vorschau: Farbige Flächen pro Block
```

**Legacy-Kompatibilität:**
Die Funktion `getBlockSurfaceConfig()` hat exakt die gleiche API wie die bisherige `blockSurfaceRules.ts`. Im Wizard kann ein einfacher Import-Tausch gemacht werden:
```typescript
// Vorher:
import { getBlockSurfaceConfig } from './provision/blockSurfaceRules'

// Nachher:
import { getBlockSurfaceConfig } from '@pracio/shared/surface-engine'
// → Alles funktioniert wie bisher, plus neue assignSurfaces() Funktion
```

---

### 3. `content-prompts` — AI-Prompt-Templates

**Kernidee:** Prompt-Baukästen pro Block-Typ. Zwei Modi: Batch (Wizard) und Single (Dashboard).

**Funktionen:**
- `buildBlockPrompt(request)` → Prompt für EINEN Block (Portal: "Neuen Vorschlag")
- `buildBatchPrompt(blocks, context, blockData)` → Prompt für ALLE Blöcke (Wizard)
- `mapTonalityToPreset(tonalitySliders)` → Mappt Wizard-Slider auf 4 Presets

**Tonalitäts-Presets:**
| Preset | Stil | Anrede |
|---|---|---|
| `herzlich` | Warmherzig, einladend | Du |
| `fachlich` | Professionell, kompetent | Sie |
| `entspannt` | Locker, direkt | Du |
| `verlaesslich` | Bodenständig, seriös | Sie/Mischform |

**Dashboard-Nutzung (Einzelblock regenerieren):**
```typescript
import { buildBlockPrompt } from '@pracio/shared/content-prompts'
import { getEmployerContext } from '@pracio/shared/employer-context'

// User klickt "Neuen Vorschlag" beim Arbeitgeber-Intro
const { system, user } = buildBlockPrompt({
  contentKey: 'careerIntro',
  context: {
    praxisName: 'Praxis Dr. Müller',
    fachrichtung: 'orthopaedie',
    praxisGroesse: 'klein',
    ort: 'Leipzig',
    tonality: 'herzlich',
    formalStyle: 'du',
    employerContext: getEmployerContext('orthopaedie'),
  },
  regenerate: true,                    // ← Andere Variante!
  previousContent: 'Der bisherige Text...',  // ← Aktueller Text
})

// API-Call zu Claude
const response = await fetch('/api/content/regenerate', {
  method: 'POST',
  body: JSON.stringify({ system, user }),
})
// → Neuer Text, User kann akzeptieren oder verwerfen
```

---

### 4. `benefit-catalog` — Benefit-Definitionen

**17 Standard-Benefits in 4 Kategorien:**

| Kategorie | Benefits |
|---|---|
| Vergütung & Sicherheit | Überdurchschnittliches Gehalt, Weihnachtsgeld, Erfolgsbeteiligung, Kita-Zuschuss, Betriebliche Altersvorsorge |
| Arbeitszeit & Flexibilität | Flexible Arbeitszeiten, Teilzeit, Keine Wochenenddienste, Überstundenausgleich |
| Entwicklung | Fortbildung bezahlt, Strukturierte Einarbeitung, Weiterbildungsermächtigung |
| Extras | Jobrad, Dienstwagen, Teamevents, Moderne Ausstattung, ÖPNV/Parkplätze |

**Jeder Benefit hat:** `id`, `label`, `category`, `icon` (Lucide icon name)

**Dashboard-Nutzung (Benefit-Editor):**
```typescript
import { BENEFITS, BENEFIT_CATEGORIES, getBenefitsByCategory } from '@pracio/shared/benefit-catalog'

// Gruppierte Checkboxen rendern
const grouped = getBenefitsByCategory()
// grouped.verguetung = [{ id: 'ueberdurchschnittliches_gehalt', label: '...', icon: 'trending-up' }, ...]
// grouped.arbeitszeit = [...]
// grouped.entwicklung = [...]
// grouped.extras = [...]

// Labels für gespeicherte IDs holen
import { getBenefitLabels } from '@pracio/shared/benefit-catalog'
getBenefitLabels(['flexible_arbeitszeiten', 'teilzeit'])
// → ['Flexible Arbeitszeiten', 'Teilzeit möglich']

// Validierung (bekannte vs. custom Benefits)
import { validateBenefits } from '@pracio/shared/benefit-catalog'
validateBenefits(['flexible_arbeitszeiten', 'Praxishund erlaubt'])
// → { known: ['flexible_arbeitszeiten'], custom: ['Praxishund erlaubt'] }
```

---

### 5. `employer-context` — Fachrichtungs-Wissen

**16 Fachrichtungen mit Employer-Kontext:**
Allgemeinmedizin, Orthopädie, Zahnmedizin, Pädiatrie, Dermatologie, Gynäkologie, HNO, Kardiologie, Neurologie, Urologie, Augenheilkunde, Psychotherapie, Physiotherapie, Ergotherapie, Radiologie, Anästhesie, Kieferorthopädie

**Pro Fachrichtung:**
- `typisch` — Was die Fachrichtung ausmacht (für AI-Kontext)
- `aufgaben` — Aufgabenbeschreibung pro Rolle (MFA, Arzt, Azubi, ZFA, etc.)
- `staerke` — USP als Arbeitgeber
- `benefit_kontexte` — Fachrichtungsspezifische Benefit-Details (z.B. "Fortbildung" → "OP-Kurse, Manuelle Therapie")
- `verbotene_phrasen` — Was die AI NICHT schreiben darf ("Diagnose und Behandlung von Patienten")

**Plus: Werte-Katalog (8 Werte):**
Augenhöhe, Fachliche Exzellenz, Familienfreundlichkeit, Teamzusammenhalt, Patientenfokus, Eigenverantwortung, Verlässlichkeit, Offenheit

**Dashboard-Nutzung:**
```typescript
import { getEmployerContext, getAufgaben, WERTE_CATALOG } from '@pracio/shared/employer-context'

// Employer-Kontext für AI-Prompts
const ctx = getEmployerContext('orthopaedie')
// ctx.typisch → "Manuelle Therapie, OP-Planung, ..."
// ctx.aufgaben.mfa → "Röntgen-Assistenz, Gipsverbände, ..."
// ctx.verbotene_phrasen → ["Diagnose und Behandlung von Patienten", ...]

// Aufgaben für eine bestimmte Rolle
getAufgaben('orthopaedie', 'MFA')
// → "Röntgen-Assistenz, Gipsverbände, Injektionsvorbereitung, ..."

// Werte-Checkboxen im Employer-Profil-Editor
WERTE_CATALOG.forEach(wert => {
  // wert.id → 'teamzusammenhalt'
  // wert.label → 'Starker Teamzusammenhalt'
  // wert.icon → 'users'
  // wert.prompt_hint → 'Füreinander da sein, gemeinsame Aktivitäten, ...'
})
```

---

## Datenfluss: Wizard → wizard_data → Portal

### Wizard speichert (auf general.wizard_data):
```json
{
  "fachrichtung": "orthopaedie",
  "praxisName": "Orthopädie Praxis Dr. Müller",
  "ort": "Leipzig",
  "features": {
    "karriere": true,
    "teamMembers": [...],
    "employerBranding": {
      "benefits": {
        "selected": ["flexible_arbeitszeiten", "teilzeit", "fortbildung_bezahlt", "jobrad"],
        "custom": ["Praxishund erlaubt"]
      },
      "werte": ["teamzusammenhalt", "eigenverantwortung"],
      "werteFreitext": "Jeden Freitag kochen wir zusammen",
      "zitate": [
        { "name": "Lisa M.", "rolle": "MFA", "text": "Bester Job den ich je hatte." }
      ]
    }
  },
  "contentProfile": {
    "practiceType": "gemeinschaftspraxis",
    "tonality": { "atmosphere": 2, "language": 2, "style": 2 }
  }
}
```

### Portal liest wizard_data und nutzt @pracio/shared:
```typescript
// 1. wizard_data laden
const wizardData = tenant.general.wizard_data

// 2. Input für Block-Resolver extrahieren
const input = extractResolverInput(wizardData)

// 3. Blöcke auflösen (z.B. für Karriereseite)
const blocks = resolveKarriereBlocks(input)

// 4. Surfaces zuweisen (für Wireframe-Vorschau)
const theme = { hero: 'bold', highlight: 'soft', cta: 'accent', footer: 'light' }
const surfaces = assignSurfaces(blocks, theme, 'wave')

// 5. Wireframe rendern
blocks.forEach((block, i) => {
  console.log(`${block.label} → ${block.variant} → surface: ${surfaces[i].surface}`)
})
// "Titelbild → default → surface: bold"
// "Wir als Arbeitgeber → intro → surface: light"
// "Was uns ausmacht → grid-2 → surface: soft"      ← weil Werte ausgefüllt
// "Was wir bieten → grid-2 → surface: highlight"     ← Mitte = highlight
// "Stimmen aus dem Team → cards → surface: soft"     ← weil Zitate vorhanden
// "Offene Stellen → default → surface: light"
// "Jetzt bewerben → cta → surface: accent"
```

---

## Directus-Schema Erweiterungen

### Neue Felder auf `pages_translations_blocks` (Junction):
```
variant: string (nullable)        — Template-Variante ('grid-2', 'text-only', etc.)
content_role: string (nullable)   — Semantische Rolle ('hero', 'content', 'highlight', 'cta')
```

### Erweiterung `career_settings`:
```
employer_level: integer           — 1 (Basis) oder 2 (erweitert) — rein intern, User sieht das nicht
werte: json                       — ["teamzusammenhalt", "eigenverantwortung"]
werte_freitext: text              — "Jeden Freitag kochen wir zusammen"
bewerbungsweg: string             — 'formular' | 'kontakt' | 'beides'
ansprechpartner_name: string
ansprechpartner_email: string
ansprechpartner_telefon: string
```

### Benefits-Speicherung (auf career_settings oder wizard_data):
```json
{
  "benefits_selected": ["flexible_arbeitszeiten", "teilzeit", ...],
  "benefits_custom": ["Praxishund erlaubt"]
}
```

---

## Dashboard-Seiten die diese Module nutzen

### 1. Karriere-Bereich (Hauptseite)
- **Stellen verwalten** → bestehende Logik
- **Benefits bearbeiten** → `benefit-catalog` für Checkboxen
- **Arbeitgeberprofil** → `employer-context` (Werte-Checkboxen), `WERTE_CATALOG`
- **Wireframe-Vorschau** → `block-resolver` + `surface-engine`

### 2. Karriere erweitern (Mini-Wizard im Dashboard)
- Werte-Auswahl → `WERTE_CATALOG` für Checkboxen
- Freitext "Besonderes" → Gespeichert in career_settings
- Team-Zitate → Name + Rolle + Text
- "Vorschau aktualisieren" → `resolveKarriereBlocks()` + `assignSurfaces()`
- "Veröffentlichen" → Directus-Blöcke erstellen mit variant + surface

### 3. Text regenerieren ("Neuen Vorschlag")
- Klick auf "↻ Neuen Vorschlag" bei einem Textbereich
- `buildBlockPrompt()` mit `regenerate: true`
- API-Call zu Claude → neuer Text
- User akzeptiert oder verwirft

### 4. Seitenübersicht (alle Seiten)
- Pro Seite: `resolveXxxBlocks()` → Block-Labels als Inhaltsbereiche anzeigen
- "Über uns", "Unsere Leistungen", "Unser Team" etc.
- Jeder Bereich: [Bearbeiten] [↻ Neuen Vorschlag] [An/Aus]

---

## API-Endpunkte die das Portal braucht

### POST /api/content/regenerate
```typescript
// Request
{
  tenantId: string,
  contentKey: string,           // 'careerIntro', 'aboutText', etc.
  previousContent: string,      // Aktueller Text
}

// Backend:
// 1. wizard_data laden → PromptContext bauen
// 2. buildBlockPrompt({ contentKey, context, regenerate: true, previousContent })
// 3. Claude API call
// 4. Neuen Text zurückgeben

// Response
{
  content: string,              // Neuer generierter Text
  contentKey: string,
}
```

### POST /api/career/update-blocks
```typescript
// Request (wenn User "Veröffentlichen" klickt nach Profil-Änderung)
{
  tenantId: string,
  employerBranding: {
    benefits: { selected: string[], custom: string[] },
    werte: string[],
    werteFreitext: string,
    zitate: Array<{ name: string, rolle: string, text: string }>,
  }
}

// Backend:
// 1. extractResolverInput() mit neuen Daten
// 2. resolveKarriereBlocks() → neue Blockliste
// 3. Diff mit bestehenden Blöcken → neue erstellen, gelöschte entfernen
// 4. assignSurfaces() → Surfaces aktualisieren
// 5. Für neue Blöcke: buildBlockPrompt() → AI-Content generieren
// 6. Directus-Blöcke erstellen/aktualisieren
```

---

## File-Übersicht im Package

```
@pracio/shared/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts              ← Re-exports alles
│   ├── block-resolver.ts     ← Welche Blöcke auf welche Seite
│   ├── surface-engine.ts     ← Surface-Zuweisung (ersetzt blockSurfaceRules.ts)
│   ├── content-prompts.ts    ← AI-Prompt-Templates
│   ├── benefit-catalog.ts    ← 17 Benefits, 4 Kategorien
│   └── employer-context.ts   ← 16 Fachrichtungen + 8 Werte
└── dist/                     ← Compiled (nach npm run build)
```

Gesamt: ~1.200 Zeilen TypeScript, null externe Dependencies.
