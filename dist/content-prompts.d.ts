import type { ResolvedBlock } from './block-resolver.js';
import { type EmployerContext } from './employer-context.js';
export type TonalityPreset = 'herzlich' | 'fachlich' | 'entspannt' | 'verlaesslich';
export interface PromptContext {
    praxisName: string;
    fachrichtung: string;
    praxisGroesse: string;
    ort: string;
    plz?: string;
    arztName?: string;
    tonality: TonalityPreset;
    formalStyle: 'du' | 'sie';
    employerContext?: EmployerContext;
}
export interface BlockPromptRequest {
    contentKey: string;
    context: PromptContext;
    blockSpecific?: Record<string, any>;
    regenerate?: boolean;
    previousContent?: string;
}
export declare const TONALITY_INSTRUCTIONS: Record<TonalityPreset, string>;
export declare function buildBlockPrompt(req: BlockPromptRequest): {
    system: string;
    user: string;
};
export declare function buildBatchPrompt(blocks: ResolvedBlock[], context: PromptContext, blockData?: Record<string, any>): {
    system: string;
    user: string;
    outputKeys: string[];
};
/**
 * Mappt das bestehende Wizard TonalityProfile (Slider-Werte 1-5)
 * auf ein TonalityPreset.
 */
export declare function mapTonalityToPreset(tonality: {
    atmosphere?: number;
    language?: number;
    demeanor?: number;
    style?: number;
}): TonalityPreset;
