export type BlockRole = 'hero' | 'content' | 'highlight' | 'cta' | 'neutral';
export interface ResolvedBlock {
    collection: string;
    role: BlockRole;
    variant: string;
    contentKey: string;
    label: string;
    required: boolean;
    condition?: string;
}
export interface BlockResolverInput {
    fachrichtung: string;
    praxisGroesse: string;
    ort: string;
    hasTeam: boolean;
    teamCount: number;
    hasTeamPhotos: boolean;
    hasKarriere: boolean;
    hasBildmaterial: boolean;
    serviceCount: number;
    benefits?: string[];
    benefitCount?: number;
    werte?: string[];
    werteFreitext?: string;
    zitate?: Array<{
        name: string;
        rolle: string;
        text: string;
    }>;
}
/**
 * Extrahiert BlockResolverInput aus Wizard-Daten.
 * Funktioniert sowohl mit dem aktuellen OnboardingData-Format
 * als auch mit dem wizard_data JSON-Blob.
 */
export declare function extractResolverInput(data: Record<string, any>): BlockResolverInput;
export declare function resolveHomepageBlocks(input: BlockResolverInput): ResolvedBlock[];
export declare function resolveKarriereBlocks(input: BlockResolverInput): ResolvedBlock[];
export declare function resolveTeamBlocks(input: BlockResolverInput): ResolvedBlock[];
export declare function resolveServiceDetailBlocks(input: BlockResolverInput): ResolvedBlock[];
export declare function resolveJobDetailBlocks(input: BlockResolverInput): ResolvedBlock[];
