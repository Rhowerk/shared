import type { ResolvedBlock, BlockRole } from './block-resolver.js';
export type SurfaceMode = 'light' | 'soft' | 'bold' | 'dark' | 'accent' | 'rich-dark';
export type DividerType = 'none' | 'wave' | 'wave-layered' | 'tilt' | 'curve' | 'triangle' | 'arrow' | 'cloud';
export interface ThemeSurfaces {
    hero: SurfaceMode;
    highlight: SurfaceMode;
    cta: SurfaceMode;
    footer: SurfaceMode;
}
export interface V2ThemeData {
    seed: {
        primaryHue: number;
        primaryChroma: number;
        accentHue: number;
        accentChroma: number;
        neutralChroma: number;
        radius: number;
    };
    surfaces: ThemeSurfaces;
    dividerType: DividerType;
}
export interface SurfaceAssignment {
    surface: SurfaceMode;
    divider_type: DividerType | null;
    divider_height: number | null;
    divider_width: number | null;
    divider_flip: boolean;
    divider_invert: boolean;
}
/**
 * Weist allen Blöcken einer Seite Surfaces zu.
 * NEU: Blockanzahl beeinflusst das Pattern.
 *
 * - ≤5 Blöcke (kompakt): Clean — fast alles light, nur Hero + CTA farbig
 * - 6-7 Blöcke (mittel): Ein Highlight in der Mitte
 * - 8+ Blöcke (voll): Mehrere Highlights, rhythmische Abwechslung
 */
export declare function assignSurfaces(blocks: ResolvedBlock[], theme: ThemeSurfaces, dividerType?: DividerType): SurfaceAssignment[];
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
export declare function getBlockSurfaceConfig(v2Data?: V2ThemeData): {
    forBlock: (collection: string, sortIndex: number, totalBlocks: number, nextCollection?: string) => SurfaceAssignment;
    forPage: (blocks: Array<{
        collection: string;
        role?: BlockRole;
    }>) => SurfaceAssignment[];
    getGeneralColorFields: () => {
        primary_hue: number;
        primary_chroma: number;
        accent_hue: number;
        accent_chroma: number;
        neutral_chroma: number;
        border_radius: number;
    };
    theme: V2ThemeData;
};
