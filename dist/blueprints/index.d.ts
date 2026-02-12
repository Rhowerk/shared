import type { Blueprint, ServiceItem, ServiceCategory, BlueprintSEO, EmployerData, AIContext } from './types.js';
import { HEALTHCARE_BLUEPRINTS } from './healthcare/index.js';
/**
 * Lädt einen Blueprint für eine Fachrichtung.
 * Nutzt die Fallback-Kette aus der Registry.
 * Gibt null zurück wenn kein Blueprint existiert.
 */
export declare function getBlueprint(fachrichtung: string): Blueprint | null;
/**
 * Gibt alle verfügbaren Blueprint-IDs zurück.
 */
export declare function getAvailableBlueprintIds(): string[];
/**
 * Gibt alle Blueprints zurück.
 */
export declare function getAllBlueprints(): Record<string, Blueprint>;
/**
 * Alle Services eines Blueprints als flache Liste.
 */
export declare function getBlueprintServices(blueprint: Blueprint | null): ServiceItem[];
/**
 * Services gruppiert nach Kategorie.
 */
export declare function getServicesByCategory(blueprint: Blueprint | null): ServiceCategory[];
/**
 * Einzelnen Service nach Name finden.
 */
export declare function findService(blueprint: Blueprint | null, name: string): ServiceItem | null;
/**
 * Generiert SEO-Daten aus Blueprint-Templates.
 */
export declare function generateSEO(blueprint: Blueprint | null, data: {
    praxis_name: string;
    ort: string;
    telefon?: string;
    adresse?: string;
}): {
    title: string;
    description: string;
    keywords: string[];
};
/**
 * Baut den System-Prompt für Claude aus Blueprint ai_context + employer.
 * Ersetzt die alte buildAIContext() aus blueprintHelpers.ts.
 */
export declare function buildAIContext(blueprint: Blueprint | null, data: {
    praxis_name: string;
    ort: string;
}): string;
/**
 * Gibt den AI-Prompt für einen bestimmten Service zurück.
 */
export declare function buildServicePrompt(blueprint: Blueprint | null, serviceName: string): string | null;
/**
 * Employer-Daten für eine Fachrichtung.
 */
export declare function getEmployerData(fachrichtung: string): EmployerData | null;
/**
 * Aufgaben für eine bestimmte Rolle in einer Fachrichtung.
 */
export declare function getAufgaben(fachrichtung: string, rolle: string): string;
/**
 * Benefit-Kontext für eine Fachrichtung.
 */
export declare function getBenefitKontext(fachrichtung: string, benefitId: string): string | null;
/**
 * Verbotene Phrasen für eine Fachrichtung.
 */
export declare function getVerbotenePhrases(fachrichtung: string): string[];
export interface TeamPositionSuggestion {
    label: string;
    category: 'arzt' | 'fachpersonal' | 'verwaltung' | 'ausbildung';
    aiPlaceholder: string;
}
/**
 * Positions-Vorschläge für die Team-Verwaltung.
 * Basiert auf employer.aufgaben Keys + fachrichtung_titel + jobs.templates.
 */
export declare function getBlueprintTeamPositions(fachrichtung: string): TeamPositionSuggestion[];
export type { Blueprint, ServiceItem, ServiceCategory, BlueprintSEO, EmployerData, AIContext };
export { HEALTHCARE_BLUEPRINTS };
