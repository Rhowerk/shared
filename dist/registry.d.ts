/**
 * Berufsgruppe einer Fachrichtung (Spec Berufsgruppen 2026-10-12). Fehlt sie, gilt 'arzt'.
 * 'therapie' ist ein Vorgriff für Heilmittelerbringer (Physio-, Ergotherapie, Logopädie):
 * heute nutzt kein Registry-Eintrag den Wert, Konsumenten behandeln ihn wie 'heilpraktiker'
 * (nicht ärztlich, siehe istAerztlich).
 */
export type Berufsgruppe = 'arzt' | 'zahnarzt' | 'psychotherapie' | 'heilpraktiker' | 'therapie';
/** Berufsgruppen, für die alles wie bisher (ärztlich) bleibt */
export declare const AERZTLICHE_BERUFSGRUPPEN: readonly Berufsgruppe[];
export interface RegistryEntry {
    id: string;
    label: string;
    icon: string;
    industry: string;
    featured: boolean;
    blueprintFallback: string | null;
    aliases: string[];
    /** Berufsgruppe; fehlt = 'arzt'. Steuert Compliance, Wortwahl und Schema.org. */
    berufsgruppe?: Berufsgruppe;
    /** false = in keiner Auswahl für Praxen, Partner oder Scanner; setzen nur Admins. Fehlt = auswählbar. */
    selectable?: boolean;
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
/** Hauptfachrichtungen (für Wizard-Auswahl) – nur auswählbare */
export declare function getFeaturedFachrichtungen(): RegistryEntry[];
/** Weitere Fachrichtungen – nur auswählbare */
export declare function getMoreFachrichtungen(): RegistryEntry[];
/** Alle Fachrichtungen inkl. nicht auswählbarer (für Lookup/Admin; Auswahl-Listen: getSelectableFachrichtungen) */
export declare function getAllFachrichtungen(): RegistryEntry[];
/** Auswählbare Fachrichtungen einer Branche (nicht auswählbare wie hp_psychotherapie fehlen; Lookup: getAllFachrichtungen) */
export declare function getFachrichtungenByIndustry(industry: string): RegistryEntry[];
/** Alle gültigen IDs */
export declare function getValidFachrichtungIds(): string[];
/** Fachrichtungen für Auswahl-Listen (Wizard, Fachbereiche-Seite, Partner, Scanner) */
export declare function getSelectableFachrichtungen(): RegistryEntry[];
/** true, wenn die ID existiert und in Auswahl-Listen erscheinen darf */
export declare function isSelectableFachrichtung(id: string | null | undefined): boolean;
/** Berufsgruppe zu einer Fachrichtung (ID oder Freitext). Unbekannt oder leer = 'arzt'. */
export declare function berufsgruppeOf(input: string | null | undefined): Berufsgruppe;
/** Ärztliche Berufsgruppen behalten Wortwahl, Compliance und Schema wie bisher */
export declare function istAerztlich(b: Berufsgruppe): boolean;
