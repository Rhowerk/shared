// ═══════════════════════════════════════════════════════════
// @pracio/shared — benefit-catalog
// ═══════════════════════════════════════════════════════════
// Benefit-Definitionen mit IDs, Labels, Kategorien und Icons.
// Verwendet im Wizard (Checkboxen) und Portal (Benefit-Editor).
// Zero dependencies. Isomorph (Node + Browser).
// ═══════════════════════════════════════════════════════════
// ── Kategorien ──
export const BENEFIT_CATEGORIES = [
    { id: 'verguetung', label: 'Vergütung & Sicherheit', icon: 'banknote' },
    { id: 'arbeitszeit', label: 'Arbeitszeit & Flexibilität', icon: 'clock' },
    { id: 'entwicklung', label: 'Entwicklung', icon: 'graduation-cap' },
    { id: 'extras', label: 'Extras', icon: 'gift' },
];
// ── Benefit-Katalog (17 Standard-Benefits) ──
export const BENEFITS = [
    // Vergütung & Sicherheit
    { id: 'ueberdurchschnittliches_gehalt', label: 'Überdurchschnittliches Gehalt', category: 'verguetung', icon: 'trending-up' },
    { id: 'weihnachtsgeld', label: 'Weihnachtsgeld / Urlaubsgeld', category: 'verguetung', icon: 'gift' },
    { id: 'erfolgsbeteiligung', label: 'Umsatz- oder Erfolgsbeteiligung', category: 'verguetung', icon: 'percent' },
    { id: 'kita_zuschuss', label: 'Kita-Zuschuss', category: 'verguetung', icon: 'baby' },
    { id: 'betriebliche_altersvorsorge', label: 'Betriebliche Altersvorsorge', category: 'verguetung', icon: 'shield' },
    // Arbeitszeit & Flexibilität
    { id: 'flexible_arbeitszeiten', label: 'Flexible Arbeitszeiten', category: 'arbeitszeit', icon: 'clock' },
    { id: 'teilzeit', label: 'Teilzeit möglich', category: 'arbeitszeit', icon: 'clock-3' },
    { id: 'keine_wochenenddienste', label: 'Keine Wochenend-/Notdienste', category: 'arbeitszeit', icon: 'calendar-off' },
    { id: 'ueberstundenausgleich', label: 'Überstundenausgleich', category: 'arbeitszeit', icon: 'scale' },
    // Entwicklung
    { id: 'fortbildung_bezahlt', label: 'Fort- und Weiterbildung (bezahlt & freigestellt)', category: 'entwicklung', icon: 'book-open' },
    { id: 'strukturierte_einarbeitung', label: 'Strukturierte Einarbeitung', category: 'entwicklung', icon: 'list-checks' },
    { id: 'weiterbildungsermaechtigung', label: 'Weiterbildungsermächtigung vorhanden', category: 'entwicklung', icon: 'award' },
    // Extras
    { id: 'jobrad', label: 'Jobrad', category: 'extras', icon: 'bike' },
    { id: 'dienstwagen', label: 'Dienstwagen / Praxisauto', category: 'extras', icon: 'car' },
    { id: 'teamevents', label: 'Teamevents', category: 'extras', icon: 'users' },
    { id: 'moderne_ausstattung', label: 'Moderne Praxisausstattung', category: 'extras', icon: 'monitor' },
    { id: 'oepnv_parkplaetze', label: 'Gute ÖPNV-Anbindung / Parkplätze', category: 'extras', icon: 'map-pin' },
];
// ── Hilfsfunktionen ──
/** Benefits gruppiert nach Kategorie */
export function getBenefitsByCategory() {
    const grouped = {
        verguetung: [],
        arbeitszeit: [],
        entwicklung: [],
        extras: [],
    };
    for (const b of BENEFITS) {
        grouped[b.category].push(b);
    }
    return grouped;
}
/** Labels für eine Liste von Benefit-IDs */
export function getBenefitLabels(ids) {
    return ids.map(id => {
        const found = BENEFITS.find(b => b.id === id);
        return found ? found.label : id;
    });
}
/** Validierung: Welche IDs sind bekannt, welche custom? */
export function validateBenefits(ids) {
    const knownIds = new Set(BENEFITS.map(b => b.id));
    return {
        known: ids.filter(id => knownIds.has(id)),
        custom: ids.filter(id => !knownIds.has(id)),
    };
}
/** Einzelnen Benefit per ID finden */
export function getBenefit(id) {
    return BENEFITS.find(b => b.id === id);
}
