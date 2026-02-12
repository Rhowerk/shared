// ═══════════════════════════════════════════════════════════
// @pracio/shared — surface-engine
// ═══════════════════════════════════════════════════════════
// Surface-Zuweisung + Divider-Regeln.
// Ersetzt/erweitert die bestehende blockSurfaceRules.ts.
// NEU: Blockanzahl beeinflusst das visuelle Pattern.
//
// Rückwärtskompatibel: Wrapper-Funktion getBlockSurfaceConfig()
// kann die alte API bedienen.
// ═══════════════════════════════════════════════════════════

import type { ResolvedBlock, BlockRole } from './block-resolver.js'

// ── Types (kompatibel mit bestehendem System) ──

export type SurfaceMode = 'light' | 'soft' | 'bold' | 'dark' | 'accent' | 'rich-dark'
export type DividerType = 'none' | 'wave' | 'wave-layered' | 'tilt' | 'curve' | 'triangle' | 'arrow' | 'cloud'

export interface ThemeSurfaces {
  hero: SurfaceMode
  highlight: SurfaceMode
  cta: SurfaceMode
  footer: SurfaceMode
}

export interface V2ThemeData {
  seed: {
    primaryHue: number
    primaryChroma: number
    accentHue: number
    accentChroma: number
    neutralChroma: number
    radius: number
  }
  surfaces: ThemeSurfaces
  dividerType: DividerType
}

export interface SurfaceAssignment {
  surface: SurfaceMode
  divider_type: DividerType | null
  divider_height: number | null
  divider_width: number | null
  divider_flip: boolean
  divider_invert: boolean
}

// ── Block-Rolle Lookup (für Legacy-Kompatibilität) ──

const BLOCK_ROLE_MAP: Record<string, BlockRole> = {
  'block_herobanner': 'hero',
  'block_heroBannerTwoCols': 'hero',
  'block_imageText': 'content',
  'block_text': 'content',
  'block_teamList': 'content',
  'block_accordion': 'content',
  'block_practice_info': 'highlight',
  'block_imageList': 'content',
  'block_gallery': 'highlight',
  'block_cards': 'highlight',
  'block_features': 'highlight',
  'block_banner': 'cta',
  'block_cta': 'cta',
  'block_form': 'cta',
  'block_downloads': 'neutral',
  'block_jobList': 'content',
  'block_newsList': 'content',
  'block_downloadList': 'neutral',
  'block_services': 'content',
}

// ═══ KERN-LOGIK: Surface-Zuweisung ═══

/**
 * Weist allen Blöcken einer Seite Surfaces zu.
 * NEU: Blockanzahl beeinflusst das Pattern.
 *
 * - ≤5 Blöcke (kompakt): Clean — fast alles light, nur Hero + CTA farbig
 * - 6-7 Blöcke (mittel): Ein Highlight in der Mitte
 * - 8+ Blöcke (voll): Mehrere Highlights, rhythmische Abwechslung
 */
export function assignSurfaces(
  blocks: ResolvedBlock[],
  theme: ThemeSurfaces,
  dividerType: DividerType = 'none',
): SurfaceAssignment[] {
  const count = blocks.length

  // 1. Surface pro Block bestimmen
  const surfaces: SurfaceMode[] = blocks.map((block, i) => {
    // Hero → immer hero-surface
    if (block.role === 'hero') return theme.hero

    // CTA → immer cta-surface
    if (block.role === 'cta') return theme.cta

    // ── Kompakt (≤5 Blöcke): Clean ──
    if (count <= 5) {
      return block.role === 'highlight' ? theme.highlight : 'light'
    }

    // ── Mittel (6-7 Blöcke): Ein Highlight in der Mitte ──
    if (count <= 7) {
      const contentBlocks = blocks.filter(b => b.role !== 'hero' && b.role !== 'cta')
      const midIndex = Math.floor(contentBlocks.length / 2)
      const contentIndex = contentBlocks.indexOf(block)

      if (contentIndex === midIndex || block.role === 'highlight') {
        return theme.highlight
      }
      return contentIndex % 2 === 0 ? 'light' : 'soft'
    }

    // ── Voll (8+ Blöcke): Mehr Rhythmus ──
    if (block.role === 'highlight') return theme.highlight
    const pos = blocks
      .slice(0, i)
      .filter(b => b.role !== 'hero' && b.role !== 'cta')
      .length
    return pos % 2 === 0 ? 'light' : 'soft'
  })

  // 2. Divider-Zuweisung (nur bei Surface-Wechsel)
  return surfaces.map((surface, i) => {
    const nextSurface = i < surfaces.length - 1 ? surfaces[i + 1] : null
    const needsDivider = dividerType !== 'none'
      && nextSurface !== null
      && surface !== nextSurface

    return {
      surface,
      divider_type: needsDivider ? dividerType : null,
      divider_height: needsDivider
        ? (dividerType === 'wave-layered' ? 100 : 80)
        : null,
      divider_width: needsDivider ? 110 : null,
      divider_flip: true,
      divider_invert: false,
    }
  })
}

// ═══ LEGACY-KOMPATIBILITÄT ═══

/**
 * Wrapper der die alte blockSurfaceRules.ts API bedient.
 * Kann 1:1 als Drop-in Replacement verwendet werden:
 *
 *   // Vorher:
 *   import { getBlockSurfaceConfig } from './blockSurfaceRules.js'
 *
 *   // Nachher:
 *   import { getBlockSurfaceConfig } from '@pracio/shared/surface-engine'
 */
export function getBlockSurfaceConfig(v2Data?: V2ThemeData) {
  const theme: V2ThemeData = v2Data || {
    seed: {
      primaryHue: 180, primaryChroma: 0.14,
      accentHue: 200, accentChroma: 0.10,
      neutralChroma: 0.01, radius: 8,
    },
    surfaces: { hero: 'bold', highlight: 'soft', cta: 'accent', footer: 'light' },
    dividerType: 'wave',
  }

  /**
   * Berechnet Surface + Divider für einen einzelnen Block.
   * Legacy-API für bestehenden Code.
   */
  function forBlock(
    collection: string,
    sortIndex: number,
    totalBlocks: number,
    nextCollection?: string,
  ): SurfaceAssignment {
    const role = BLOCK_ROLE_MAP[collection] || 'content'
    const surface = getSurfaceForBlockLegacy(role, sortIndex, totalBlocks, theme.surfaces)

    let nextSurface: SurfaceMode | null = null
    if (nextCollection) {
      const nextRole = BLOCK_ROLE_MAP[nextCollection] || 'content'
      nextSurface = getSurfaceForBlockLegacy(nextRole, sortIndex + 1, totalBlocks, theme.surfaces)
    }

    const needsDivider = theme.dividerType !== 'none'
      && nextSurface !== null
      && surface !== nextSurface

    return {
      surface,
      divider_type: needsDivider ? theme.dividerType : null,
      divider_height: needsDivider
        ? (theme.dividerType === 'wave-layered' ? 100 : 80)
        : null,
      divider_width: needsDivider ? 110 : null,
      divider_flip: true,
      divider_invert: false,
    }
  }

  /**
   * Berechnet Surface + Divider für eine gesamte Seite.
   * Akzeptiert sowohl ResolvedBlock[] als auch das alte Format { collection: string }[].
   */
  function forPage(blocks: Array<{ collection: string; role?: BlockRole }>): SurfaceAssignment[] {
    // Wenn blocks ResolvedBlock[] sind (mit role), nutze die neue Logik
    if (blocks.length > 0 && 'role' in blocks[0] && blocks[0].role) {
      return assignSurfaces(blocks as ResolvedBlock[], theme.surfaces, theme.dividerType)
    }

    // Legacy: Alte Logik (collection-basiert)
    return blocks.map((block, i) => {
      const next = blocks[i + 1]
      return forBlock(block.collection, i + 1, blocks.length, next?.collection)
    })
  }

  function getGeneralColorFields() {
    const s = theme.seed
    return {
      primary_hue: s.primaryHue,
      primary_chroma: s.primaryChroma,
      accent_hue: s.accentHue,
      accent_chroma: s.accentChroma,
      neutral_chroma: s.neutralChroma,
      border_radius: s.radius,
    }
  }

  return { forBlock, forPage, getGeneralColorFields, theme }
}

// Legacy: Alte Surface-Logik (identisch mit bisheriger blockSurfaceRules.ts)
function getSurfaceForBlockLegacy(
  role: BlockRole | 'footer',
  sortIndex: number,
  totalBlocks: number,
  surfaces: ThemeSurfaces,
): SurfaceMode {
  if (role === 'hero') return surfaces.hero
  if (role === 'cta') return surfaces.cta
  if (role === 'footer') return surfaces.footer
  if (role === 'highlight') return surfaces.highlight

  const posAfterHero = sortIndex - 1
  const isEvenPos = posAfterHero % 2 === 0

  if (role === 'content') {
    return isEvenPos ? 'light' : 'soft'
  }

  return 'light'
}
