// ═══════════════════════════════════════════════════════════
// @pracio/shared — Index
// ═══════════════════════════════════════════════════════════
// Re-exports all modules for convenience.
//
// Usage:
//   import { resolveHomepageBlocks } from '@pracio/shared'
//   // oder gezielt:
//   import { resolveHomepageBlocks } from '@pracio/shared/block-resolver'
// ═══════════════════════════════════════════════════════════

export {
  // Block Resolver
  resolveHomepageBlocks,
  resolveKarriereBlocks,
  resolveTeamBlocks,
  resolveServiceDetailBlocks,
  resolveJobDetailBlocks,
  extractResolverInput,
  type ResolvedBlock,
  type BlockResolverInput,
  type BlockRole,
} from './block-resolver.ts'

export {
  // Surface Engine
  assignSurfaces,
  getBlockSurfaceConfig,
  type SurfaceMode,
  type DividerType,
  type ThemeSurfaces,
  type V2ThemeData,
  type SurfaceAssignment,
} from './surface-engine.ts'

export {
  // Content Prompts
  buildBlockPrompt,
  buildBatchPrompt,
  mapTonalityToPreset,
  TONALITY_INSTRUCTIONS,
  type TonalityPreset,
  type PromptContext,
  type BlockPromptRequest,
} from './content-prompts.ts'

export {
  // Benefit Catalog
  BENEFITS,
  BENEFIT_CATEGORIES,
  getBenefitsByCategory,
  getBenefitLabels,
  getBenefit,
  validateBenefits,
  type BenefitItem,
  type BenefitCategory,
  type BenefitCategoryDef,
} from './benefit-catalog.ts'

export {
  // Employer Context
  WERTE_CATALOG,
  getWert,
  getWerteLabels,
  getEmployerContext,
  getAufgaben,
  getBenefitKontext,
  getAvailableFachrichtungen,
  getVerbotenePhrases,
  type WerteDef,
  type EmployerContext,
} from './employer-context.ts'
