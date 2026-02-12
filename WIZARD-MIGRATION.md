# Wizard-Integration: @pracio/shared einbauen

**Schritt-für-Schritt Anleitung**

---

## 1. Repo erstellen + installieren

```bash
# Shared Package als eigenes Repo
cd pracio-shared/
git init
git add .
git commit -m "feat: @pracio/shared v1.0 — block-resolver, surface-engine, content-prompts, benefit-catalog, employer-context"
git remote add origin git@github.com:pracio/shared.git
git push -u origin main

# Im Wizard-Repo installieren
cd wizard-app/
npm install git+ssh://git@github.com:pracio/shared.git#main

# Tests lokal laufen lassen
cd pracio-shared/
npm test
```

---

## 2. Import-Tausch in provision.post.ts

### 2a. blockSurfaceRules.ts ersetzen

```diff
- import { getBlockSurfaceConfig } from './blockSurfaceRules'
+ import { getBlockSurfaceConfig } from '@pracio/shared/surface-engine'
```

Das war's. Die API ist identisch — `forBlock()`, `forPage()`, `getGeneralColorFields()` funktionieren wie bisher.

Die alte Datei `server/api/provision/blockSurfaceRules.ts` kann gelöscht werden (oder als Backup behalten).

### 2b. Neue Imports für spätere Nutzung

```typescript
// Noch nicht aktiv genutzt, aber verfügbar für Phase 2:
import {
  resolveHomepageBlocks,
  resolveKarriereBlocks,
  extractResolverInput,
  assignSurfaces,
} from '@pracio/shared'
```

---

## 3. Was sich JETZT ändert (Phase 1)

### Nur der Surface-Import

In Phase 1 tauschen wir **nur den Import** aus. Der restliche Code in `provision.post.ts` bleibt identisch. Das stellt sicher:

- Kein Risiko bei laufenden Provisioning-Jobs
- `getBlockSurfaceConfig()` verhält sich exakt gleich
- Tests bestehen (Legacy-Kompatibilität verifiziert)

```typescript
// provision.post.ts — einzige Änderung Phase 1:

// ALT:
import { getBlockSurfaceConfig } from './blockSurfaceRules'

// NEU:
import { getBlockSurfaceConfig } from '@pracio/shared/surface-engine'

// Rest bleibt IDENTISCH:
const surfaceCfg = getBlockSurfaceConfig(data.colorScheme?._v2)
const homeSurfaces = surfaceCfg.forPage(homeBlocks)
// ... etc.
```

---

## 4. Was sich SPÄTER ändert (Phase 2)

### Provisioning refactoren: Resolver statt fest kodiert

Wenn Phase 2 implementiert wird, ersetzt der Block-Resolver den fest kodierten Block-Aufbau:

```typescript
// provision.post.ts — Phase 2 Refactoring (NICHT jetzt)

import {
  resolveHomepageBlocks,
  resolveKarriereBlocks,
  extractResolverInput,
  assignSurfaces,
} from '@pracio/shared'

// --- VORHER (fest kodiert) ---
const heroBannerDE = await directusCreate('block_herobanner', { ... })
const imageTextDE = await directusCreate('block_imageText', { ... })
const practiceInfoDE = await directusCreate('block_practice_info', { ... })
const imageListDE = await directusCreate('block_imageList', { ... })
const bannerDE = await directusCreate('block_banner', { ... })

const homeBlocks = [
  { collection: 'block_herobanner', item: heroBannerDE.id },
  { collection: 'block_imageText', item: imageTextDE.id },
  { collection: 'block_practice_info', item: practiceInfoDE.id },
  { collection: 'block_imageList', item: imageListDE.id },
  { collection: 'block_banner', item: bannerDE.id },
]


// --- NACHHER (Resolver-driven) ---
const input = extractResolverInput(data)
const resolvedBlocks = resolveHomepageBlocks(input)
const surfaces = assignSurfaces(resolvedBlocks, v2Theme.surfaces, v2Theme.dividerType)

for (let i = 0; i < resolvedBlocks.length; i++) {
  const block = resolvedBlocks[i]
  const content = generatedContent[block.contentKey] || {}

  const created = await directusCreate(block.collection, {
    ...content,
    tenant_id: tenantId,
  })

  await directusCreate('pages_translations_blocks', {
    pages_translations_id: pageTrans.id,
    item: created.id,
    collection: block.collection,
    sort: i + 1,
    tenant_id: tenantId,
    variant: block.variant,        // ← NEU
    content_role: block.role,      // ← NEU
    ...surfaces[i],                // surface, divider_type, etc.
  })
}
```

### Voraussetzungen für Phase 2:
1. ✅ `@pracio/shared` installiert und Phase 1 live
2. ⬜ Directus Schema: `variant` + `content_role` Felder auf `pages_translations_blocks`
3. ⬜ Template: `ContentBlockBuilder.vue` reicht `:variant` Prop durch
4. ⬜ Template: Block-Komponenten (ImageText, ImageList, etc.) haben Variant-Handling
5. ⬜ AI-Content: `generateAIContent()` nutzt `buildBatchPrompt()` aus shared

---

## 5. Directus Schema-Änderungen

### Neue Felder auf `pages_translations_blocks`:

```
variant        → String, nullable, default null
content_role   → String, nullable, default null
```

Kann per Directus Admin UI oder per Migration angelegt werden:

```sql
ALTER TABLE pages_translations_blocks
  ADD COLUMN variant VARCHAR(50) DEFAULT NULL,
  ADD COLUMN content_role VARCHAR(20) DEFAULT NULL;
```

Diese Felder sind **optional** — bestehende Einträge ohne variant/content_role funktionieren weiter wie bisher (Templates nutzen 'default' als Fallback).

---

## 6. Zusammenfassung

| Phase | Was | Risiko | Aufwand |
|---|---|---|---|
| **Phase 1 (jetzt)** | Import-Tausch blockSurfaceRules → @pracio/shared | Null (API identisch) | 5 Minuten |
| **Phase 2 (später)** | Block-Resolver im Provisioning | Mittel | 1-2 Tage |
| **Phase 3 (später)** | Template-Varianten in Nuxt | Mittel | 2-3 Tage |
| **Phase 4 (später)** | Dashboard-Integration im Portal | Groß | 3-5 Tage |
