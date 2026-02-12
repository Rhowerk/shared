export const pneumologie = {
    "meta": {
        "id": "pneumologie",
        "name": "Pneumologische Praxis",
        "name_variants": [
            "Pneumologe",
            "Lungenarzt",
            "Lungenpraxis",
            "Praxis für Pneumologie",
            "Innere Medizin und Pneumologie"
        ],
        "icon": "wind",
        "description": "Praxis für Pneumologie und Lungenmedizin"
    },
    "colors": {
        "primary": "#5DADE2",
        "primary_light": "#85C1E9",
        "primary_dark": "#2E86C1",
        "secondary": "#F0F9FF",
        "accent": "#AED6F1",
        "alternatives": [
            {
                "name": "Himmelblau",
                "primary": "#5DADE2",
                "secondary": "#F0F9FF"
            },
            {
                "name": "Frisch Grün",
                "primary": "#52B788",
                "secondary": "#F0FAF5"
            },
            {
                "name": "Klar Petrol",
                "primary": "#2C7A7B",
                "secondary": "#F0FDFA"
            },
            {
                "name": "Ruhig Grau-Blau",
                "primary": "#6C8EBF",
                "secondary": "#F5F8FC"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "pneumo-hero-1",
                "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
                "alt": "Arzt bei der Untersuchung"
            }
        ],
        "imagetext": [
            {
                "id": "pneumo-team",
                "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
                "alt": "Pneumologie-Team"
            }
        ],
        "imagelist": [
            {
                "id": "pneumo-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
                "alt": "Lungenfunktionsdiagnostik"
            }
        ],
        "banner": [
            {
                "id": "pneumo-banner",
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
                "alt": "Frische Luft in der Natur"
            }
        ]
    },
    "services": [
        {
            "category": "Diagnostik",
            "icon_color": "#5DADE2",
            "items": [
                {
                    "name": "Lungenfunktionsprüfung (Spirometrie)",
                    "icon": "wind",
                    "default_description": "Die Lungenfunktionsprüfung misst, wie gut Ihre Lunge arbeitet.\nIn wenigen Minuten erkennen wir Einschränkungen und können die\npassende Behandlung einleiten."
                },
                {
                    "name": "Bodyplethysmographie",
                    "icon": "monitor",
                    "default_description": "Die große Lungenfunktion in der Glaskabine liefert uns präzise Werte\nüber Ihr Lungenvolumen und den Atemwiderstand. Besonders wichtig\nbei Asthma und COPD."
                },
                {
                    "name": "Röntgen Thorax",
                    "icon": "image",
                    "default_description": "Die Röntgenaufnahme des Brustkorbs zeigt uns Veränderungen an\nLunge und Herz. Schnell und mit geringer Strahlenbelastung."
                },
                {
                    "name": "Bronchoskopie",
                    "icon": "search",
                    "default_description": "Bei der Bronchoskopie untersuchen wir die Atemwege mit einem\ndünnen, flexiblen Endoskop. So können wir Gewebeproben entnehmen\nund Veränderungen direkt beurteilen."
                }
            ]
        },
        {
            "category": "Atemwegserkrankungen",
            "icon_color": "#52B788",
            "items": [
                {
                    "name": "Asthma-Diagnostik & Therapie",
                    "icon": "shield",
                    "default_description": "Asthma ist gut behandelbar. Wir finden das richtige Medikament,\nschulen Sie in der Inhalationstechnik und begleiten Sie,\ndamit Sie beschwerdefrei leben können."
                },
                {
                    "name": "COPD-Management",
                    "icon": "heart",
                    "default_description": "Bei COPD verlangsamen wir den Krankheitsverlauf und verbessern\nIhre Lebensqualität. Mit individueller Therapie, Schulung\nund regelmäßiger Kontrolle."
                },
                {
                    "name": "Allergologische Diagnostik",
                    "icon": "flower",
                    "default_description": "Allergien betreffen häufig die Atemwege. Wir testen auf Pollen,\nHausstaubmilben, Tierhaare und mehr, um die richtige Behandlung\noder Hyposensibilisierung einzuleiten."
                }
            ]
        },
        {
            "category": "Schlafmedizin",
            "icon_color": "#2C7A7B",
            "items": [
                {
                    "name": "Schlafmedizin / Schlafapnoe",
                    "icon": "moon",
                    "default_description": "Atemaussetzer im Schlaf belasten Herz und Kreislauf. Mit der\nSchlafdiagnostik erkennen wir Schlafapnoe und finden die passende\nTherapie für erholsamen Schlaf."
                },
                {
                    "name": "Raucherentwöhnung",
                    "icon": "x-circle",
                    "default_description": "Der beste Schutz für Ihre Lunge: mit dem Rauchen aufhören.\nWir unterstützen Sie mit erprobten Methoden und individueller\nBegleitung auf dem Weg zum Nichtraucher."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "fachkompetent",
            "beruhigend",
            "verständnisvoll",
            "motivierend"
        ],
        "audience": "Asthma- und COPD-Patienten, Allergiker, Patienten mit Schlafstörungen,\nRaucher, die aufhören möchten.",
        "key_messages": [
            "Frei atmen – besser leben",
            "Moderne Lungenfunktionsdiagnostik",
            "Asthma und COPD individuell behandeln",
            "Schlafmedizin für erholsame Nächte"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Pneumologie in {ort}",
        "description_template": "Pneumologische Praxis {praxis_name} in {ort}. ✓ Lungenfunktion ✓ Asthma & COPD ✓ Schlafmedizin. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Innere Medizin und Pneumologie",
        "de_female": "Fachärztin für Innere Medizin und Pneumologie",
        "en": "Pulmonologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Pneumologie (m/w/d)",
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
                "id": "mfa-lufu",
                "title_de": "MFA Lungenfunktionsdiagnostik (m/w/d)",
                "employment_type": "fulltime",
                "category": "mfa",
                "default_selected": false
            },
            {
                "id": "mfa-schlaf",
                "title_de": "MFA Schlaflabor (m/w/d)",
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
            "Lungenfunktions-Einarbeitung",
            "Schlafmedizin-Fortbildung"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Lungenfunktion, Bronchoskopie, Schlafmedizin, Allergologie, COPD/Asthma",
        "aufgaben": {
            "mfa": "Lungenfunktionstest, Allergietest, Blutgasanalyse, Inhalationsschulung",
            "arzt": "Bodyplethysmografie, Bronchoskopie, Schlafmedizin, COPD-Management",
            "azubi": "Spirometrie-Grundlagen, Patientenempfang, Dokumentation"
        },
        "staerke": "Funktionsdiagnostik, Schlafmedizin als Wachstumsfeld",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Schlafmedizin-Kurs, Bodyplethysmografie, Allergologie",
            "moderne_ausstattung": "Bodyplethysmograf, Schlaflabor, Bronchoskopie, FeNO"
        },
        "verbotene_phrasen": [
            "Behandlung von Lungenerkrankungen",
            "pneumologische Versorgung"
        ]
    }
};
