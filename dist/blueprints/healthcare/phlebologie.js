export const phlebologie = {
    "meta": {
        "id": "phlebologie",
        "name": "Phlebologische Praxis",
        "name_variants": [
            "Phlebologe",
            "Venenpraxis",
            "Venenspezialist",
            "Praxis für Phlebologie",
            "Venenklinik"
        ],
        "icon": "activity",
        "description": "Praxis für Phlebologie und Venenmedizin"
    },
    "colors": {
        "primary": "#0D9488",
        "primary_light": "#2DD4BF",
        "primary_dark": "#0F766E",
        "secondary": "#F0FDFA",
        "accent": "#6366F1",
        "alternatives": [
            {
                "name": "Venen Türkis",
                "primary": "#0D9488",
                "secondary": "#F0FDFA"
            },
            {
                "name": "Medizinisch Blau",
                "primary": "#2563EB",
                "secondary": "#EFF6FF"
            },
            {
                "name": "Sanft Grün",
                "primary": "#16A34A",
                "secondary": "#F0FDF4"
            },
            {
                "name": "Elegant Dunkel",
                "primary": "#334155",
                "secondary": "#F8FAFC"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "phlebo-hero-1",
                "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
                "alt": "Venenuntersuchung"
            }
        ],
        "imagetext": [
            {
                "id": "phlebo-team",
                "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
                "alt": "Phlebologie-Team"
            }
        ],
        "imagelist": [
            {
                "id": "phlebo-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
                "alt": "Venendiagnostik"
            }
        ],
        "banner": [
            {
                "id": "phlebo-banner",
                "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
                "alt": "Leichte Beine"
            }
        ]
    },
    "services": [
        {
            "category": "Diagnostik",
            "icon_color": "#0D9488",
            "items": [
                {
                    "name": "Venen-Diagnostik / Duplexsonographie",
                    "icon": "monitor",
                    "default_description": "Die farbcodierte Duplexsonographie stellt Venen und den Blutfluss im Ultraschall dar. Damit lassen sich Krampfadern, undichte Venenklappen und Thrombosen beurteilen."
                },
                {
                    "name": "Thrombose-Diagnostik",
                    "icon": "search",
                    "default_description": "Bei Verdacht auf eine Venenthrombose werden Ultraschall und Laborwerte zur Abklärung eingesetzt. Je nach Befund folgt eine Behandlung mit gerinnungshemmenden Medikamenten und Kompression."
                }
            ]
        },
        {
            "category": "Therapie",
            "icon_color": "#6366F1",
            "items": [
                {
                    "name": "Krampfader-Behandlung (Varikose)",
                    "icon": "shield",
                    "default_description": "Krampfadern (Varizen) sind erweiterte Venen mit undichten Venenklappen und können Beschwerden wie schwere oder geschwollene Beine verursachen. Behandlungsmöglichkeiten sind Kompression, Verödung, kathetergestützte Verfahren wie Laser oder Radiofrequenz und die Operation."
                },
                {
                    "name": "Sklerotherapie (Verödung)",
                    "icon": "syringe",
                    "default_description": "Bei der Sklerotherapie wird ein Verödungsmittel, flüssig oder als Schaum, in die erkrankte Vene gespritzt. Die Behandlung erfolgt ohne Narkose; anschließend wird meist ein Kompressionsstrumpf getragen."
                },
                {
                    "name": "Endovenöse Lasertherapie",
                    "icon": "zap",
                    "default_description": "Bei der endovenösen Lasertherapie wird die erkrankte Vene über einen Katheter von innen verschlossen, ohne größeren Hautschnitt. Der Eingriff erfolgt in örtlicher Betäubung; ob die Krankenkasse die Kosten übernimmt, hängt von Kasse und Vertrag ab."
                },
                {
                    "name": "Besenreiser-Behandlung",
                    "icon": "star",
                    "default_description": "Besenreiser sind feine, erweiterte Venen in der Haut, die meist keine gesundheitlichen Beschwerden verursachen. Behandelt werden können sie mit Verödung oder Laser, oft in mehreren Sitzungen; als kosmetische Behandlung ist das eine Selbstzahlerleistung.",
                    "igel": true
                },
                {
                    "name": "Kompressionstherapie",
                    "icon": "heart",
                    "default_description": "Medizinische Kompressionsstrümpfe unterstützen den Rückfluss des Blutes in den Venen. Zur Versorgung gehören Verordnung, Auswahl der Kompressionsklasse und Hinweise zum richtigen Anziehen."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "fachkompetent",
            "beruhigend",
            "lösungsorientiert",
            "modern"
        ],
        "audience": "Patienten mit Krampfadern, Besenreisern, schweren Beinen,\nThrombose-Vorgeschichte, Lymphödemen.",
        "key_messages": [
            "Venengesundheit und Beschwerden der Beine",
            "Abklärung von Krampfadern und Thrombosen",
            "Behandlungsmöglichkeiten verständlich erklärt",
            "Kompression als Basis der Venentherapie"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Phlebologie & Venenmedizin in {ort}",
        "description_template": "Venenpraxis {praxis_name} in {ort}. ✓ Krampfadern ✓ Besenreiser ✓ Lasertherapie. Für schöne und gesunde Beine!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Phlebologie",
        "de_female": "Fachärztin für Phlebologie",
        "en": "Phlebologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Phlebologie (m/w/d)",
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
                "id": "ausbildung",
                "title_de": "Auszubildende MFA (m/w/d)",
                "employment_type": "apprenticeship",
                "category": "ausbildung",
                "default_selected": false
            }
        ],
        "additional_benefits": [
            "Duplexsonographie-Schulung",
            "Sklerotherapie-Einarbeitung"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Krampfadern, Kompressionstherapie, venöse Insuffizienz, Thrombose",
        "aufgaben": {
            "mfa": "Duplexsonografie-Assistenz, Kompressionsversorgung, Sklerotherapie-Assistenz",
            "arzt": "Duplexsonografie, Sklerotherapie, Laser-Therapie, OP-Indikation",
            "azubi": "Kompressionsversorgung-Grundlagen, Patientenempfang, Dokumentation"
        },
        "staerke": "Schnell sichtbare Ergebnisse, wachsende Nachfrage, ambulant",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Sklerotherapie-Kurse, Duplexsonografie, Lasertherapie",
            "moderne_ausstattung": "Duplexsonografie, Laser, Lichttherapie"
        },
        "verbotene_phrasen": [
            "Venenbehandlung",
            "phlebologische Versorgung"
        ]
    }
};
