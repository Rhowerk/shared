# @pracio/shared

Shared TypeScript modules for the Pracio website generation system. Used by both the **Wizard** (wiz.pracio.de) and the **Customer Portal** (my.pracio.de).

## What's in here?

| Module | Purpose | Lines |
|---|---|---|
| **Blueprints** | 25 healthcare specialty blueprints (services, colors, SEO, AI context, employer data) | ~6,400 |
| **Registry** | Fachrichtung resolution with alias matching, industry support | ~360 |
| **Block Resolver** | Data → page block structure (Homepage, Karriere, Team, etc.) | ~380 |
| **Surface Engine** | Automatic surface color + divider assignment per block | ~250 |
| **Content Prompts** | AI prompt templates for text generation (batch + single block) | ~330 |
| **Benefit Catalog** | 17 standard benefits in 4 categories | ~100 |
| **Werte Catalog** | 8 employer values with prompt hints | ~100 |

**Total: ~8,700 lines TypeScript, zero external dependencies.**

## Install

```bash
yarn add https://github.com/pracio/shared.git#main
```

## Usage

```typescript
import {
  getBlueprint, getBlueprintServices, resolveFachrichtung,
  resolveHomepageBlocks, assignSurfaces, buildBlockPrompt,
  BENEFITS, WERTE_CATALOG,
} from '@pracio/shared'

const bp = getBlueprint('orthopaedie')
// bp.meta.name → "Orthopädische Praxis"
// bp.services → 11 services in 4 categories
// bp.employer.aufgaben.mfa → "Röntgen-Assistenz, ..."
```

## Test

```bash
# Unit tests (58 tests)
yarn test

# Provisioning dry-run (43 tests, simulates full flow)
npx tsx dry-test-provision.ts
```

## Architecture

```
src/
├── index.ts                    ← Re-exports everything
├── registry.ts                 ← 25 specialties with alias matching
├── block-resolver.ts           ← Data → block list per page
├── surface-engine.ts           ← Surface assignment + dividers
├── content-prompts.ts          ← AI prompt builders
├── benefit-catalog.ts          ← 17 benefits, 4 categories
├── employer-context.ts         ← 8 employer values
└── blueprints/
    ├── types.ts                ← Blueprint interface
    ├── index.ts                ← getBlueprint() + helpers
    └── healthcare/             ← 25 specialty files
        ├── allgemeinmedizin.ts
        ├── orthopaedie.ts
        └── ...
```

Ships TypeScript directly — no build step needed. Nuxt/tsx handle it natively.
