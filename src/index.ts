// ═══════════════════════════════════════════════════════════
// @pracio/shared — Main Index
// Single Source of Truth für Wizard + Portal
// ═══════════════════════════════════════════════════════════

// ── Block Resolver ──
export {
  resolveHomepageBlocks, resolveKarriereBlocks, resolveTeamBlocks,
  resolveServiceDetailBlocks, resolveJobDetailBlocks, extractResolverInput,
  type BlockRole, type ResolvedBlock, type BlockResolverInput,
} from './block-resolver.js'

// ── Surface Engine ──
export {
  assignSurfaces, getBlockSurfaceConfig,
  type SurfaceMode, type DividerType, type ThemeSurfaces, type V2ThemeData, type SurfaceAssignment,
} from './surface-engine.js'

// ── Content Prompts ──
export {
  buildBlockPrompt, buildBatchPrompt, mapTonalityToPreset, TONALITY_INSTRUCTIONS,
  type TonalityPreset, type PromptContext, type BlockPromptRequest,
} from './content-prompts.js'

// ── Benefit Catalog ──
export {
  BENEFITS, BENEFIT_CATEGORIES, getBenefitsByCategory, getBenefitLabels, getBenefit, validateBenefits,
  type BenefitItem, type BenefitCategory, type BenefitCategoryDef,
} from './benefit-catalog.js'

// ── Werte Catalog ──
export { WERTE_CATALOG, getWert, getWerteLabels, type WerteDef } from './employer-context.js'

// ── Registry (ersetzt fachrichtungMapping.ts) ──
export {
  REGISTRY, INDUSTRIES, resolveFachrichtung, getRegistryEntry, getBlueprintId,
  getFachrichtungLabel, getFeaturedFachrichtungen, getMoreFachrichtungen,
  getAllFachrichtungen, getFachrichtungenByIndustry, getValidFachrichtungIds,
  type RegistryEntry, type Industry,
} from './registry.js'

// ── Blueprints ──
export {
  getBlueprint, getAvailableBlueprintIds, getAllBlueprints,
  getBlueprintServices, getServicesByCategory, findService,
  generateSEO, buildAIContext, buildServicePrompt,
  getEmployerData, getAufgaben, getBenefitKontext, getVerbotenePhrases,
  HEALTHCARE_BLUEPRINTS,
  type Blueprint, type ServiceItem, type ServiceCategory,
  type BlueprintSEO, type EmployerData, type AIContext,
} from './blueprints/index.js'

export type {
  ImageRef, ColorAlternative, BlueprintColors,
  FAQItem, FAQCategory, JobTemplate, FachrichtungTitel,
} from './blueprints/types.js'
