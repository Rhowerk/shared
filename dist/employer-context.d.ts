export interface WerteDef {
    id: string;
    label: string;
    icon: string;
    prompt_hint: string;
}
export declare const WERTE_CATALOG: WerteDef[];
export declare function getWert(id: string): WerteDef | undefined;
export declare function getWerteLabels(ids: string[]): string[];
export interface EmployerContext {
    fachrichtung: string;
    typisch: string;
    aufgaben: Record<string, string>;
    staerke: string;
    benefit_kontexte: Record<string, string>;
    verbotene_phrasen: string[];
}
/** Employer-Kontext für eine Fachrichtung (mit Fallback) */
export declare function getEmployerContext(fachrichtung: string): EmployerContext;
/** Aufgabenbeschreibung für eine Rolle in einer Fachrichtung */
export declare function getAufgaben(fachrichtung: string, rolle: string): string;
/** Fachrichtungsspezifischer Benefit-Kontext */
export declare function getBenefitKontext(fachrichtung: string, benefitId: string): string | null;
/** Alle verfügbaren Fachrichtungs-IDs */
export declare function getAvailableFachrichtungen(): string[];
/** Verbotene Phrasen für eine Fachrichtung */
export declare function getVerbotenePhrases(fachrichtung: string): string[];
