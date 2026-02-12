export interface RegistryEntry {
    id: string;
    label: string;
    icon: string;
    industry: string;
    featured: boolean;
    blueprintFallback: string | null;
    aliases: string[];
}
export interface Industry {
    id: string;
    label: string;
    icon: string;
}
export declare const INDUSTRIES: Industry[];
export declare const REGISTRY: RegistryEntry[];
/** Löst eine Fachrichtungs-Eingabe in eine ID auf (fuzzy) */
export declare function resolveFachrichtung(input: string): string | null;
/** Gibt den Registry-Eintrag für eine ID zurück */
export declare function getRegistryEntry(id: string): RegistryEntry | undefined;
/** Welchen Blueprint soll diese Fachrichtung nutzen? (Fallback-Kette) */
export declare function getBlueprintId(id: string): string;
/** Label für eine Fachrichtung */
export declare function getFachrichtungLabel(input: string): string;
/** Hauptfachrichtungen (für Wizard-Auswahl) */
export declare function getFeaturedFachrichtungen(): RegistryEntry[];
/** Weitere Fachrichtungen */
export declare function getMoreFachrichtungen(): RegistryEntry[];
/** Alle Fachrichtungen */
export declare function getAllFachrichtungen(): RegistryEntry[];
/** Fachrichtungen einer Branche */
export declare function getFachrichtungenByIndustry(industry: string): RegistryEntry[];
/** Alle gültigen IDs */
export declare function getValidFachrichtungIds(): string[];
