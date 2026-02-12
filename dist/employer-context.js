// ═══════════════════════════════════════════════════════════
// @pracio/shared — employer-context
// ═══════════════════════════════════════════════════════════
// Fachrichtungs-spezifischer Kontext für AI-Generierung.
// Pro Fachrichtung: typische Merkmale, Aufgaben pro Rolle,
// Arbeitgeber-Stärken, Benefit-Kontextualisierungen,
// verbotene generische Phrasen.
// Plus: Werte-Katalog für Employer Branding.
// ═══════════════════════════════════════════════════════════
export const WERTE_CATALOG = [
    {
        id: 'augenhoehe',
        label: 'Augenhöhe & Wertschätzung',
        icon: 'handshake',
        prompt_hint: 'Flache Hierarchien, Meinungen zählen, gegenseitiger Respekt',
    },
    {
        id: 'fachliche_exzellenz',
        label: 'Fachliche Exzellenz & Weiterentwicklung',
        icon: 'trophy',
        prompt_hint: 'Höchste fachliche Standards, kontinuierliche Fortbildung, Spezialisierung',
    },
    {
        id: 'familienfreundlich',
        label: 'Familienfreundlichkeit & Flexibilität',
        icon: 'heart',
        prompt_hint: 'Vereinbarkeit Familie & Beruf, flexible Modelle, Verständnis für private Situationen',
    },
    {
        id: 'teamzusammenhalt',
        label: 'Starker Teamzusammenhalt',
        icon: 'users',
        prompt_hint: 'Füreinander da sein, gemeinsame Aktivitäten, Zusammenhalt in stressigen Phasen',
    },
    {
        id: 'patientenfokus',
        label: 'Patient:innen im Mittelpunkt',
        icon: 'heart-pulse',
        prompt_hint: 'Zeit für Patienten, individuelle Betreuung, Qualität vor Quantität',
    },
    {
        id: 'eigenverantwortung',
        label: 'Eigenverantwortung & Gestaltungsfreiheit',
        icon: 'compass',
        prompt_hint: 'Eigene Ideen einbringen, Mitgestaltung, Verantwortung übernehmen',
    },
    {
        id: 'verlaesslichkeit',
        label: 'Verlässlichkeit & Stabilität',
        icon: 'anchor',
        prompt_hint: 'Sichere Anstellung, berechenbare Arbeitszeiten, beständiges Umfeld',
    },
    {
        id: 'offenheit',
        label: 'Offenheit für Neues',
        icon: 'lightbulb',
        prompt_hint: 'Neue Methoden willkommen, digitale Prozesse, Innovationsfreude',
    },
];
export function getWert(id) {
    return WERTE_CATALOG.find(w => w.id === id);
}
export function getWerteLabels(ids) {
    return ids.map(id => getWert(id)?.label || id);
}
const EMPLOYER_CONTEXTS = {
    allgemeinmedizin: {
        fachrichtung: 'Allgemeinmedizin',
        typisch: 'Langfristige Patientenbeziehungen, breites Spektrum, Hausarztmodell, Prävention und Chroniker-Betreuung',
        aufgaben: {
            mfa: 'Terminmanagement, Blutentnahmen, Impfungen, EKG, Lungenfunktion, Wundversorgung, Patientenbegleitung über Jahre hinweg',
            arzt: 'Eigenverantwortliche Sprechstunde, Vorsorge, Chroniker-Management, Hausbesuche, breites diagnostisches Spektrum',
            azubi: 'Rotation durch alle Bereiche: Labor, Empfang, Assistenz, Blutentnahme lernen',
        },
        staerke: 'Vielfalt im Alltag, enge Patientenbindung, kein Tag wie der andere',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Hausärztliche Fortbildungen, Sonografie-Kurse, Notfallmedizin, DMP-Schulungen',
            moderne_ausstattung: 'Digitales EKG, Sonografie, Laborschnelltests, elektronische Patientenakte',
        },
        verbotene_phrasen: [
            'Diagnose und Behandlung von Patienten',
            'Durchführung ärztlicher Anordnungen',
            'Betreuung von Patienten',
        ],
    },
    orthopaedie: {
        fachrichtung: 'Orthopädie',
        typisch: 'Manuelle Therapie, OP-Planung, Reha-Begleitung, sichtbare Behandlungserfolge',
        aufgaben: {
            mfa: 'Röntgen-Assistenz, Gipsverbände und Schienen, Injektionsvorbereitung, Stoßwellentherapie-Assistenz, Nachsorge-Koordination',
            arzt: 'Konservative und operative Therapie, Gelenksonografie, Schmerztherapie, Sportmedizin, manuelle Medizin',
            azubi: 'Röntgen-Assistenz lernen, Verbandstechnik, Patientenbetreuung prä/post-OP',
        },
        staerke: 'Sichtbare Behandlungserfolge, handwerkliche Medizin, aktive Patienten',
        benefit_kontexte: {
            fortbildung_bezahlt: 'OP-Kurse, Manuelle Therapie Zertifikate, Sportmedizin-Weiterbildung',
            moderne_ausstattung: 'Digitales Röntgen, 3D-Wirbelsäulenvermessung, Stoßwellentherapie, Ultraschall',
        },
        verbotene_phrasen: [
            'Diagnose und Behandlung von Patienten',
            'Betreuung orthopädischer Patienten',
            'Durchführung therapeutischer Maßnahmen',
        ],
    },
    zahnarzt: {
        fachrichtung: 'Zahnmedizin',
        typisch: 'Ästhetik und Funktion, Prophylaxe, moderne Technik, sichtbare Ergebnisse bei jedem Patienten',
        aufgaben: {
            zfa: 'Stuhlassistenz, Prophylaxe eigenständig durchführen, Röntgen, Abdrucknahme, Hygiene-Management, Abrechnung',
            zahnarzt: 'Konservierende Zahnheilkunde, Prothetik, Implantologie, Endodontie, ästhetische Zahnheilkunde',
            azubi: 'Stuhlassistenz, Instrumentenaufbereitung, Prophylaxe-Grundlagen, Abrechnung lernen',
        },
        staerke: 'Sofort sichtbare Ergebnisse, handwerkliche Präzision, dankbare Patienten',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Prophylaxe-Zertifizierungen, Implantologie-Kurse, Ästhetik-Fortbildungen',
            moderne_ausstattung: 'Digitaler Workflow, CAD/CAM, Intraoralscanner, schonende Behandlungsmethoden',
        },
        verbotene_phrasen: [
            'Behandlung von Zähnen',
            'zahnärztliche Versorgung von Patienten',
        ],
    },
    kinderarzt: {
        fachrichtung: 'Kinder- und Jugendmedizin',
        typisch: 'Arbeit mit Kindern und Familien, Einfühlungsvermögen, Prävention, Entwicklungsbegleitung',
        aufgaben: {
            mfa: 'U-Untersuchungen vorbereiten, Impfungen, Seh-/Hörtests, kindgerechte Betreuung im Wartezimmer, Elternberatung',
            arzt: 'Vorsorgeuntersuchungen, Akutsprechstunde, Entwicklungsdiagnostik, Impfberatung, Jugendmedizin',
            azubi: 'Kindgerechter Umgang lernen, Assistenz bei U-Untersuchungen, Labor-Grundlagen',
        },
        staerke: 'Kinder aufwachsen sehen, Familien begleiten, emotionaler Beruf mit Sinn',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Pädiatrische Notfälle, Entwicklungsdiagnostik, Impf-Updates',
            flexible_arbeitszeiten: 'Besonders wichtig: Praxiszeiten enden oft am frühen Nachmittag',
        },
        verbotene_phrasen: [
            'Behandlung von kleinen Patienten',
            'Betreuung von Kindern und Jugendlichen',
        ],
    },
    dermatologie: {
        fachrichtung: 'Dermatologie',
        typisch: 'Hautkrebsscreening, Allergologie, ästhetische Dermatologie, Kombination aus Medizin und Ästhetik',
        aufgaben: {
            mfa: 'Hautkrebs-Screening Vorbereitung, Lichttherapie-Betreuung, Allergietestungen, Lasertherapie-Assistenz',
            arzt: 'Dermatoskopie, Hautkrebsvorsorge, Allergologie, ästhetische Eingriffe, Lasermedizin',
            azubi: 'Hauttyp-Beurteilung, Allergietest-Vorbereitung, Lichttherapie-Assistenz',
        },
        staerke: 'Abwechslung zwischen medizinischer und ästhetischer Dermatologie',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Dermatoskopie-Kurse, Laser-Zertifikate, Allergologie-Weiterbildung',
            moderne_ausstattung: 'Hochauflösende Dermatoskopie, medizinische Laser, Lichttherapie-Kabinen',
        },
        verbotene_phrasen: [
            'Behandlung von Hauterkrankungen',
            'dermatologische Versorgung',
        ],
    },
    gynaekologie: {
        fachrichtung: 'Gynäkologie',
        typisch: 'Frauengesundheit über alle Lebensphasen, Schwangerschaftsbegleitung, Vorsorge, Vertrauensverhältnis',
        aufgaben: {
            mfa: 'Schwangerschaftsvorsorge-Assistenz, CTG-Überwachung, Abstrich-Vorbereitung, Ultraschall-Assistenz, einfühlsamer Empfang',
            arzt: 'Schwangerschaftsbegleitung, Krebsvorsorge, Hormonsprechstunde, Ultraschall-Diagnostik',
            azubi: 'Assistenz bei Untersuchungen, Labor, empathischer Patientenkontakt lernen',
        },
        staerke: 'Frauen in allen Lebensphasen begleiten, Vertrauensmedizin, Vorsorge rettet Leben',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Sonografie-Kurse, Kolposkopie, Pränataldiagnostik',
            teilzeit: 'Familienfreundliche Arbeitsmodelle sind in der Gynäkologie besonders verbreitet',
        },
        verbotene_phrasen: [
            'Betreuung gynäkologischer Patientinnen',
            'Durchführung von Vorsorgeuntersuchungen',
        ],
    },
    hno: {
        fachrichtung: 'HNO-Heilkunde',
        typisch: 'Sinnesorgane, Mikrochirurgie, Allergologie, Phoniatrie, breites Patientenspektrum von Kind bis Senior',
        aufgaben: {
            mfa: 'Hörtest und Tympanometrie, Allergietestung, Nasenendoskopie-Vorbereitung, Infusionstherapie',
            arzt: 'Endoskopische Diagnostik, Mikrochirurgie, Allergologie, Hörgeräteverordnung, Schwindel-Diagnostik',
            azubi: 'Hörtest-Durchführung lernen, Instrumentenaufbereitung, Endoskopie-Assistenz',
        },
        staerke: 'Abwechslungsreiches Spektrum, kleine Eingriffe mit großer Wirkung',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Audiometrie-Schulungen, Allergologie, Schlafmedizin',
            moderne_ausstattung: 'Digitale Endoskopie, Audiometrie-Kabine, Mikroskopiertechnik',
        },
        verbotene_phrasen: [
            'Behandlung von HNO-Erkrankungen',
            'Untersuchung des Hals-Nasen-Ohren-Bereichs',
        ],
    },
    kardiologie: {
        fachrichtung: 'Kardiologie',
        typisch: 'Herz-Kreislauf-Diagnostik, Langzeitbetreuung chronischer Herzpatienten, Prävention, Belastungsdiagnostik',
        aufgaben: {
            mfa: 'Ruhe- und Belastungs-EKG, Langzeit-EKG anlegen, Blutdruckmessung, Echokardiografie-Assistenz',
            arzt: 'Echokardiografie, Belastungsdiagnostik, Herzrhythmusanalyse, Herzinsuffizienz-Management',
            azubi: 'EKG-Technik lernen, Langzeitmessgeräte, Notfall-Basiswissen',
        },
        staerke: 'Lebensrettende Diagnostik, High-Tech-Medizin, langfristige Patientenbindung',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Echokardiografie-Kurse, Notfallmedizin, kardiovaskuläre Prävention',
            moderne_ausstattung: 'Hochauflösende Echokardiografie, Ergometrie, Langzeit-Monitoring',
        },
        verbotene_phrasen: [
            'Behandlung von Herzerkrankungen',
            'kardiologische Diagnostik und Therapie',
        ],
    },
    neurologie: {
        fachrichtung: 'Neurologie',
        typisch: 'Komplexe Diagnostik, Gesprächsmedizin, interdisziplinäre Zusammenarbeit, chronische Erkrankungen',
        aufgaben: {
            mfa: 'EEG-Ableitung, Nervenleitgeschwindigkeitsmessung, Infusionstherapie bei MS, Terminkoordination für komplexe Fälle',
            arzt: 'Neurologische Untersuchung, EEG-Befundung, MS-Therapie, Epilepsie-Management, Demenz-Diagnostik',
            azubi: 'EEG-Technik, NLG-Assistenz, Umgang mit chronisch kranken Patienten',
        },
        staerke: 'Detektiv-Arbeit bei komplexen Symptomen, langfristige Therapiebegleitung',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Elektrophysiologie, MS-Zertifizierung, Kopfschmerz-Spezialisierung',
            moderne_ausstattung: 'Digitales EEG, Elektroneurografie, Duplexsonografie',
        },
        verbotene_phrasen: [
            'Diagnose und Behandlung neurologischer Erkrankungen',
            'Betreuung neurologischer Patienten',
        ],
    },
    urologie: {
        fachrichtung: 'Urologie',
        typisch: 'Vorsorge, minimalinvasive Eingriffe, Kontinenz, Andrologie, oft schambesetzte Themen',
        aufgaben: {
            mfa: 'Ultraschall-Assistenz, Uroflowmetrie, Labor (PSA, Urin), einfühlsamer Patientenkontakt bei sensiblen Themen',
            arzt: 'Prostatavorsorge, Ultraschall-Diagnostik, Steintherapie, Kontinenzberatung, Andrologie',
            azubi: 'Labor, Ultraschall-Vorbereitung, diskreter Umgang mit Patienten lernen',
        },
        staerke: 'Vorsorge rettet Leben, breites Spektrum von Prävention bis OP-Planung',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Sonografie-Kurse, urologische Endoskopie, Andrologie',
            moderne_ausstattung: 'Hochauflösender Ultraschall, Uroflowmetrie, Labor',
        },
        verbotene_phrasen: [
            'Behandlung urologischer Erkrankungen',
            'urologische Versorgung',
        ],
    },
    augenheilkunde: {
        fachrichtung: 'Augenheilkunde',
        typisch: 'Sehkraft erhalten und verbessern, High-Tech-Diagnostik, Lasermedizin, Kombination aus Chirurgie und Konservativ',
        aufgaben: {
            mfa: 'Sehtest, Augeninnendruckmessung, OCT-Aufnahmen, Tropfen verabreichen, Kontaktlinsen-Anpassung assistieren',
            arzt: 'Spaltlampen-Untersuchung, OCT-Befundung, IVOM-Therapie, Laserbehandlung, Katarakt-OP-Planung',
            azubi: 'Sehtest-Durchführung, Geräte-Bedienung lernen, Patientenbetreuung',
        },
        staerke: 'Sehkraft schenken, modernste Diagnostik, dankbare Patienten',
        benefit_kontexte: {
            fortbildung_bezahlt: 'OCT-Schulungen, Laserkurse, Kontaktlinsen-Anpassung',
            moderne_ausstattung: 'OCT, Gesichtsfeldmessung, Funduskamera, Laser',
        },
        verbotene_phrasen: [
            'Behandlung von Augenerkrankungen',
            'augenärztliche Versorgung',
        ],
    },
    psychotherapie: {
        fachrichtung: 'Psychotherapie',
        typisch: 'Gesprächsmedizin, Verhaltenstherapie, tiefenpsychologische Verfahren, Burnout, Depression, Angststörungen',
        aufgaben: {
            mfa: 'Terminkoordination für Therapieplätze, Abrechnungswesen (EBM/GOÄ), Wartelisten-Management, einfühlsamer Erstkontakt',
            arzt: 'Diagnostische Erstgespräche, Therapieverfahren (VT, TP, AP), Krisenintervention, Gruppentherapie',
            azubi: 'Praxismanagement, Abrechnungs-Grundlagen, empathische Kommunikation',
        },
        staerke: 'Menschen in Krisen helfen, Therapieerfolge begleiten, sinnstiftende Arbeit',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Supervisionen, Therapieverfahren-Weiterbildung, Traumatherapie',
            flexible_arbeitszeiten: 'Therapiezeiten oft planbar, keine Notdienste',
        },
        verbotene_phrasen: [
            'Behandlung psychischer Erkrankungen',
            'psychotherapeutische Versorgung',
        ],
    },
    // ── Weitere Fachrichtungen (kompakter) ──
    physiotherapie: {
        fachrichtung: 'Physiotherapie',
        typisch: 'Patientennahe Arbeit, kreative Therapieansätze, Eigenverantwortung, sichtbare Fortschritte',
        aufgaben: {
            therapeut: 'Manuelle Therapie, Krankengymnastik, Lymphdrainage, Gruppentherapie, Reha-Begleitung',
            empfang: 'Terminplanung, Rezeptverwaltung, Patienten-Betreuung, Abrechnung',
        },
        staerke: 'Patienten wieder in Bewegung bringen, handwerkliche Therapie, Eigenständigkeit',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Manuelle Therapie Zertifikat, Bobath, PNF, Lymphdrainage',
        },
        verbotene_phrasen: ['Durchführung therapeutischer Maßnahmen'],
    },
    ergotherapie: {
        fachrichtung: 'Ergotherapie',
        typisch: 'Alltagskompetenz wiederherstellen, kreative Methoden, Pädiatrie bis Geriatrie',
        aufgaben: {
            therapeut: 'Handtherapie, pädiatrische Ergotherapie, Hirnleistungstraining, Alltagstraining, Arbeitsplatzberatung',
            empfang: 'Terminplanung, Therapiematerial-Verwaltung, Abrechnung',
        },
        staerke: 'Kreative Therapiemethoden, Alltags-Erfolge feiern, breites Patientenspektrum',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Handtherapie, SI-Therapie, Neurofeedback',
        },
        verbotene_phrasen: ['Durchführung ergotherapeutischer Maßnahmen'],
    },
    radiologie: {
        fachrichtung: 'Radiologie',
        typisch: 'High-Tech-Diagnostik, MRT/CT, keine direkte Patientenbindung aber Schlüsselrolle in Diagnostik',
        aufgaben: {
            mtra: 'MRT/CT-Untersuchungen durchführen, Patienten positionieren, Kontrastmittel-Gabe, Qualitätskontrolle',
            arzt: 'Befundung von MRT/CT/Röntgen, interdisziplinäre Fallbesprechungen, interventionelle Radiologie',
        },
        staerke: 'Modernste Technik, Detektiv-Arbeit im Bild, zentrale Rolle für andere Fachrichtungen',
        benefit_kontexte: {
            fortbildung_bezahlt: 'MRT-Protokollierung, CT-Spezialkurse, Strahlenschutz',
            moderne_ausstattung: 'High-End MRT und CT, digitales PACS, KI-gestützte Befundung',
        },
        verbotene_phrasen: ['Durchführung radiologischer Untersuchungen'],
    },
    anaesthesie: {
        fachrichtung: 'Anästhesiologie',
        typisch: 'Schmerztherapie, ambulante Anästhesie, Notfallmedizin, interdisziplinäre Schlüsselrolle',
        aufgaben: {
            mfa: 'Narkose-Vorbereitung, Monitoring-Überwachung, Aufwachraum-Betreuung, Notfallequipment-Checks',
            arzt: 'Anästhesie-Aufklärung, Narkoseführung, Schmerztherapie, Notfallmanagement',
        },
        staerke: 'Angstfreie Behandlung ermöglichen, Schmerzfreiheit schaffen, Teamwork im OP',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Notfallmedizin, Schmerztherapie-Zertifikat, Sedierungskurse',
        },
        verbotene_phrasen: ['Durchführung von Narkosen'],
    },
    kieferorthopaedie: {
        fachrichtung: 'Kieferorthopädie',
        typisch: 'Ästhetik und Funktion, Aligner-Therapie, Kinder und Erwachsene, langfristige Behandlungen',
        aufgaben: {
            zfa: 'Abdrucknahme, Bracket-Assistenz, Aligner-Ausgabe, Foto-Dokumentation, Patienten-Motivation',
            arzt: 'Behandlungsplanung, Bracket-Technik, Aligner-Therapie, KFO-Diagnostik mit FRS/OPG',
        },
        staerke: 'Lächeln schenken, sichtbare Transformation, dankbare Patienten (besonders Teenager)',
        benefit_kontexte: {
            fortbildung_bezahlt: 'Aligner-Zertifizierung, digitale KFO-Planung, Mini-Implantate',
            moderne_ausstattung: 'Intraoralscanner, 3D-Planung, digitaler Workflow',
        },
        verbotene_phrasen: ['Behandlung von Zahnfehlstellungen'],
    },
};
// ── Fallback für unbekannte Fachrichtungen ──
const FALLBACK_CONTEXT = {
    fachrichtung: 'Medizin',
    typisch: 'Patientenversorgung, interdisziplinäre Zusammenarbeit, Prävention und Therapie',
    aufgaben: {
        mfa: 'Patientenempfang, Terminmanagement, Assistenz bei Untersuchungen, Labor, Abrechnung',
        arzt: 'Diagnostik, Therapie, Patientenberatung, interdisziplinäre Zusammenarbeit',
        azubi: 'Rotation durch alle Praxisbereiche, Grundlagen der medizinischen Assistenz',
    },
    staerke: 'Sinnstiftende Arbeit, Patientenkontakt, vielfältige Aufgaben',
    benefit_kontexte: {},
    verbotene_phrasen: [
        'Diagnose und Behandlung von Patienten',
        'Betreuung von Patienten',
        'Durchführung ärztlicher Anordnungen',
    ],
};
// ── Hilfsfunktionen ──
/** Employer-Kontext für eine Fachrichtung (mit Fallback) */
export function getEmployerContext(fachrichtung) {
    return EMPLOYER_CONTEXTS[fachrichtung] || FALLBACK_CONTEXT;
}
/** Aufgabenbeschreibung für eine Rolle in einer Fachrichtung */
export function getAufgaben(fachrichtung, rolle) {
    const ctx = getEmployerContext(fachrichtung);
    // Rolle normalisieren: "MFA" → "mfa", "Zahnmedizinische Fachangestellte" → "zfa"
    const normalizedRolle = rolle.toLowerCase()
        .replace(/medizinische.?r?\s*fachangestellte.?r?/i, 'mfa')
        .replace(/zahnmedizinische.?r?\s*fachangestellte.?r?/i, 'zfa')
        .replace(/auszubildende.?r?/i, 'azubi')
        .replace(/fach.?rzt.*|.?rzt.*/i, 'arzt')
        .replace(/therapeut.*/i, 'therapeut')
        .replace(/mtra|mtla/i, 'mtra')
        .trim();
    return ctx.aufgaben[normalizedRolle]
        || ctx.aufgaben['mfa'] // Fallback auf MFA
        || FALLBACK_CONTEXT.aufgaben['mfa'];
}
/** Fachrichtungsspezifischer Benefit-Kontext */
export function getBenefitKontext(fachrichtung, benefitId) {
    const ctx = getEmployerContext(fachrichtung);
    return ctx.benefit_kontexte[benefitId] || null;
}
/** Alle verfügbaren Fachrichtungs-IDs */
export function getAvailableFachrichtungen() {
    return Object.keys(EMPLOYER_CONTEXTS);
}
/** Verbotene Phrasen für eine Fachrichtung */
export function getVerbotenePhrases(fachrichtung) {
    const ctx = getEmployerContext(fachrichtung);
    return [...ctx.verbotene_phrasen, ...FALLBACK_CONTEXT.verbotene_phrasen];
}
