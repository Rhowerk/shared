export const angiologie = {
    "meta": {
        "id": "angiologie",
        "name": "Angiologische Praxis",
        "name_variants": [
            "Angiologe",
            "Gefäßpraxis",
            "Gefäßmedizin",
            "Praxis für Angiologie",
            "Gefäßchirurgische Praxis"
        ],
        "icon": "activity",
        "description": "Praxis für Angiologie und Gefäßmedizin"
    },
    "colors": {
        "primary": "#DC2626",
        "primary_light": "#EF4444",
        "primary_dark": "#B91C1C",
        "secondary": "#FEF2F2",
        "accent": "#2563EB",
        "alternatives": [
            {
                "name": "Gefäß-Rot",
                "primary": "#DC2626",
                "secondary": "#FEF2F2"
            },
            {
                "name": "Medizinisch Blau",
                "primary": "#2563EB",
                "secondary": "#EFF6FF"
            },
            {
                "name": "Professionell Dunkel",
                "primary": "#1E293B",
                "secondary": "#F8FAFC"
            },
            {
                "name": "Vertrauen Petrol",
                "primary": "#0D9488",
                "secondary": "#F0FDFA"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "angio-hero-1",
                "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
                "alt": "Gefäßmedizinische Beratung"
            }
        ],
        "imagetext": [
            {
                "id": "angio-team",
                "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
                "alt": "Angiologie-Team"
            }
        ],
        "imagelist": [
            {
                "id": "angio-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
                "alt": "Gefäßdiagnostik"
            }
        ],
        "banner": [
            {
                "id": "angio-banner",
                "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
                "alt": "Bewegung und Durchblutung"
            }
        ]
    },
    "services": [
        {
            "category": "Diagnostik",
            "icon_color": "#DC2626",
            "items": [
                {
                    "name": "Gefäßdiagnostik / Duplexsonographie",
                    "icon": "monitor",
                    "default_description": "Die farbcodierte Duplexsonographie stellt Arterien und Venen sowie den Blutfluss im Ultraschall dar. Damit lassen sich Verengungen, Verschlüsse und Thrombosen ohne Strahlenbelastung beurteilen."
                },
                {
                    "name": "ABI-Messung",
                    "icon": "activity",
                    "default_description": "Beim Knöchel-Arm-Index (ABI) wird der Blutdruck an Armen und Knöcheln verglichen. Die Messung gibt Hinweise auf Durchblutungsstörungen der Beine, etwa bei der Schaufensterkrankheit."
                },
                {
                    "name": "Carotis-Duplex",
                    "icon": "search",
                    "default_description": "Ultraschalluntersuchung der Halsschlagadern zur Beurteilung von Ablagerungen und Verengungen. Die Ergebnisse fließen in die Einschätzung des Schlaganfallrisikos und die Therapieplanung ein."
                }
            ]
        },
        {
            "category": "Therapie",
            "icon_color": "#2563EB",
            "items": [
                {
                    "name": "Periphere arterielle Verschlusskrankheit (pAVK)",
                    "icon": "shield",
                    "default_description": "Die periphere arterielle Verschlusskrankheit, auch Schaufensterkrankheit genannt, entsteht durch verengte Beinarterien. Zur Behandlung gehören je nach Stadium Gehtraining, Medikamente, die Behandlung von Risikofaktoren und gegebenenfalls gefäßerweiternde Eingriffe."
                },
                {
                    "name": "Thrombose-Diagnostik & Therapie",
                    "icon": "heart",
                    "default_description": "Bei Verdacht auf eine Venenthrombose werden Ultraschall und Laborwerte zur Abklärung eingesetzt. Je nach Befund folgt eine Behandlung mit gerinnungshemmenden Medikamenten und Kompression."
                },
                {
                    "name": "Wundmanagement / chronische Wunden",
                    "icon": "bandage",
                    "default_description": "Behandlung chronischer Wunden, die bei Durchblutungsstörungen entstehen oder schlecht heilen. Neben der Wundversorgung stehen die Abklärung und Behandlung der zugrunde liegenden Gefäßerkrankung im Mittelpunkt."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "fachkompetent",
            "beruhigend",
            "präzise",
            "vertrauensvoll"
        ],
        "audience": "Patienten mit Durchblutungsstörungen, Thrombosen, Schaufensterkrankheit,\nAortenaneurysmen, chronischen Wunden.",
        "key_messages": [
            "Durchblutungsstörungen erkennen und behandeln",
            "Abklärung bei Verdacht auf Thrombose",
            "Ultraschall als zentrale Untersuchungsmethode der Gefäßmedizin",
            "Gehstrecke und Mobilität im Alltag"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Angiologie & Gefäßmedizin in {ort}",
        "description_template": "Angiologische Praxis {praxis_name} in {ort}. ✓ Gefäßdiagnostik ✓ Thrombose ✓ pAVK-Behandlung. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Innere Medizin und Angiologie",
        "de_female": "Fachärztin für Innere Medizin und Angiologie",
        "en": "Angiologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Angiologie (m/w/d)",
                "employment_type": "fulltime",
                "category": "facharzt",
                "default_selected": false
            },
            {
                "id": "mfa",
                "title_de": "MFA in Vollzeit (m/w/d)",
                "employment_type": "fulltime",
                "category": "mfa",
                "default_selected": true
            },
            {
                "id": "mfa-gefaess",
                "title_de": "MFA Gefäßdiagnostik (m/w/d)",
                "employment_type": "fulltime",
                "category": "mfa",
                "default_selected": false
            },
            {
                "id": "ausbildung",
                "title_de": "Auszubildende MFA (m/w/d)",
                "employment_type": "apprenticeship",
                "category": "ausbildung",
                "default_selected": false
            }
        ],
        "additional_benefits": [
            "Duplexsonographie-Einarbeitung",
            "Wundmanagement-Fortbildung"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Gefäßdiagnostik, Duplexsonografie, Thrombose, pAVK, Wundversorgung",
        "aufgaben": {
            "mfa": "ABI-Messung, Duplexsonografie-Assistenz, Kompressionstherapie, Wundversorgung",
            "arzt": "Duplexsonografie, Angio-CT/MRT-Befundung, Interventionsplanung",
            "azubi": "ABI-Messung-Grundlagen, Patientenempfang, Kompressionsversorgung"
        },
        "staerke": "Bildgebende Diagnostik, interventionelle Gefäßmedizin",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Duplexsonografie, Wundmanagement, Gefäßmedizin",
            "moderne_ausstattung": "Farbduplex-Ultraschall, ABI-Messgerät, Oszillografie"
        },
        "verbotene_phrasen": [
            "Behandlung von Gefäßerkrankungen",
            "angiologische Versorgung"
        ]
    }
};
