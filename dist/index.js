// ═══════════════════════════════════════════════════════════
// @pracio/shared — Main Index
// Single Source of Truth für Wizard + Portal
// ═══════════════════════════════════════════════════════════
// ── Block Resolver ──
export { resolveHomepageBlocks, resolveKarriereBlocks, resolveTeamBlocks, resolveServiceDetailBlocks, resolveJobDetailBlocks, extractResolverInput, } from './block-resolver.js';
// ── Surface Engine ──
export { assignSurfaces, getBlockSurfaceConfig, } from './surface-engine.js';
// ── Content Prompts ──
export { buildBlockPrompt, buildBatchPrompt, mapTonalityToPreset, TONALITY_INSTRUCTIONS, } from './content-prompts.js';
// ── Benefit Catalog ──
export { BENEFITS, BENEFIT_CATEGORIES, getBenefitsByCategory, getBenefitLabels, getBenefit, validateBenefits, } from './benefit-catalog.js';
// ── Werte Catalog ──
export { WERTE_CATALOG, getWert, getWerteLabels } from './employer-context.js';
// ── Registry (ersetzt fachrichtungMapping.ts) ──
export { REGISTRY, INDUSTRIES, resolveFachrichtung, getRegistryEntry, getBlueprintId, getFachrichtungLabel, getFeaturedFachrichtungen, getMoreFachrichtungen, getAllFachrichtungen, getFachrichtungenByIndustry, getValidFachrichtungIds, } from './registry.js';
// ── Blueprints ──
export { getBlueprint, getAvailableBlueprintIds, getAllBlueprints, getBlueprintServices, getServicesByCategory, findService, getBlueprintTeamPositions, generateSEO, buildAIContext, buildServicePrompt, getEmployerData, getAufgaben, getBenefitKontext, getVerbotenePhrases, HEALTHCARE_BLUEPRINTS, } from './blueprints/index.js';
