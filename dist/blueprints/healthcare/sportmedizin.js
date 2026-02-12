export const sportmedizin = {
    "meta": {
        "id": "sportmedizin",
        "name": "Sportmedizinische Praxis",
        "name_variants": [
            "Sportmediziner",
            "Sportarzt",
            "Sportpraxis",
            "Praxis für Sportmedizin"
        ],
        "icon": "activity",
        "description": "Praxis für Sportmedizin und Leistungsdiagnostik"
    },
    "colors": {
        "primary": "#E67E22",
        "primary_light": "#F0A050",
        "primary_dark": "#BA6A1E",
        "secondary": "#FFF8F0",
        "accent": "#27AE60",
        "alternatives": [
            {
                "name": "Energie Orange",
                "primary": "#E67E22",
                "secondary": "#FFF8F0"
            },
            {
                "name": "Dynamisch Grün",
                "primary": "#27AE60",
                "secondary": "#F0FDF4"
            },
            {
                "name": "Aktiv Blau",
                "primary": "#2980B9",
                "secondary": "#F0F7FC"
            },
            {
                "name": "Power Rot",
                "primary": "#E74C3C",
                "secondary": "#FEF2F2"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "sport-hero-1",
                "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
                "alt": "Sportmedizinische Untersuchung"
            }
        ],
        "imagetext": [
            {
                "id": "sport-team",
                "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
                "alt": "Sportmedizin-Team"
            }
        ],
        "imagelist": [
            {
                "id": "sport-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
                "alt": "Leistungsdiagnostik"
            }
        ],
        "banner": [
            {
                "id": "sport-banner",
                "url": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80",
                "alt": "Sportler in Aktion"
            }
        ]
    },
    "services": [
        {
            "category": "Diagnostik",
            "icon_color": "#E67E22",
            "items": [
                {
                    "name": "Sportmedizinische Untersuchung",
                    "icon": "clipboard-check",
                    "default_description": "Die sportmedizinische Grunduntersuchung prüft Ihre Belastbarkeit\nund deckt Risikofaktoren auf. Basis für sicheres Training\nund optimale Leistung."
                },
                {
                    "name": "Leistungsdiagnostik",
                    "icon": "activity",
                    "default_description": "Mit Spiroergometrie und Laktatstufentest bestimmen wir Ihre\nindividuelle Leistungsfähigkeit. Die Ergebnisse ermöglichen\nein exakt gesteuertes Training."
                },
                {
                    "name": "Sporttauglichkeitsuntersuchung",
                    "icon": "check-circle",
                    "default_description": "Für Verein, Wettkampf oder Tauchschein – wir prüfen Ihre\nSporttauglichkeit gründlich und stellen die erforderlichen\nAtteste aus."
                }
            ]
        },
        {
            "category": "Therapie",
            "icon_color": "#27AE60",
            "items": [
                {
                    "name": "Sportverletzungen",
                    "icon": "bandage",
                    "default_description": "Schnelle und kompetente Versorgung bei Sportverletzungen.\nVon Muskelverletzungen über Bänderrisse bis Knochenbrüche –\nwir bringen Sie zurück in den Sport."
                },
                {
                    "name": "Trainingsberatung",
                    "icon": "trending-up",
                    "default_description": "Basierend auf Ihren Leistungsdaten erstellen wir individuelle\nTrainingsempfehlungen. Für effizientes Training mit dem\nrichtigen Puls in jeder Zone."
                },
                {
                    "name": "Sportorthopädie",
                    "icon": "bone",
                    "default_description": "Überlastungsschäden, Gelenkprobleme und Fehlstellungen behandeln\nwir konservativ und sportartspezifisch. Ziel: schmerzfrei\nund leistungsfähig zurück zum Sport."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "motivierend",
            "fachkompetent",
            "dynamisch",
            "sportlich-professionell"
        ],
        "audience": "Sportler aller Leistungsklassen, Breitensportler, Vereinssportler,\nPatienten mit Sportverletzungen, Wiedereinsteiger.",
        "key_messages": [
            "Medizin für Ihren Sport",
            "Leistung kennen – Leistung steigern",
            "Verletzungen vorbeugen und schnell zurückkommen",
            "Sporttauglichkeit professionell geprüft"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Sportmedizin in {ort}",
        "description_template": "Sportmedizinische Praxis {praxis_name} in {ort}. ✓ Leistungsdiagnostik ✓ Sportverletzungen ✓ Sporttauglichkeit. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Orthopädie – Sportmedizin",
        "de_female": "Fachärztin für Orthopädie – Sportmedizin",
        "en": "Sports Medicine Specialist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Sportmedizin (m/w/d)",
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
                "id": "physio",
                "title_de": "Physiotherapie (m/w/d)",
                "employment_type": "fulltime",
                "category": "sonstige",
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
            "Leistungsdiagnostik-Fortbildung",
            "Sportphysiotherapie-Kooperation"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Leistungsdiagnostik, Sportverletzungen, Prävention, Trainingsberatung",
        "aufgaben": {
            "mfa": "Belastungs-EKG-Assistenz, Laktatmessung, Tapingverbände, Ultraschall",
            "arzt": "Leistungsdiagnostik, Sportverletzungen, Trainingsplanung, Prävention",
            "azubi": "Belastungstest-Grundlagen, Patientenempfang, Sportler-Betreuung"
        },
        "staerke": "Aktive Patienten, schnelle Ergebnisse, sportliches Arbeitsumfeld",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Sportmedizin-Lizenz, Manualtherapie, Ernährungsmedizin",
            "moderne_ausstattung": "Laufbandergometrie, Laktatdiagnostik, Ultraschall"
        },
        "verbotene_phrasen": [
            "sportmedizinische Behandlung",
            "Betreuung von Sportlern"
        ]
    }
};
