export type BenefitCategory = 'verguetung' | 'arbeitszeit' | 'entwicklung' | 'extras';
export interface BenefitCategoryDef {
    id: BenefitCategory;
    label: string;
    icon: string;
}
export interface BenefitItem {
    id: string;
    label: string;
    category: BenefitCategory;
    icon: string;
}
export declare const BENEFIT_CATEGORIES: BenefitCategoryDef[];
export declare const BENEFITS: BenefitItem[];
/** Benefits gruppiert nach Kategorie */
export declare function getBenefitsByCategory(): Record<BenefitCategory, BenefitItem[]>;
/** Labels für eine Liste von Benefit-IDs */
export declare function getBenefitLabels(ids: string[]): string[];
/** Validierung: Welche IDs sind bekannt, welche custom? */
export declare function validateBenefits(ids: string[]): {
    known: string[];
    custom: string[];
};
/** Einzelnen Benefit per ID finden */
export declare function getBenefit(id: string): BenefitItem | undefined;
