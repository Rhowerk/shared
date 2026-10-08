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
                    "default_description": "Die Spirometrie misst Atemvolumen und Atemfluss beim kräftigen Ein- und Ausatmen. Die Untersuchung dauert wenige Minuten und zeigt, ob die Atemwege verengt sind oder das Lungenvolumen eingeschränkt ist."
                },
                {
                    "name": "Bodyplethysmographie",
                    "icon": "monitor",
                    "default_description": "Bei der Bodyplethysmographie wird in einer geschlossenen Messkabine geatmet. Gemessen werden Lungenvolumen und Atemwegswiderstand, etwa bei Asthma und COPD."
                },
                {
                    "name": "Röntgen Thorax",
                    "icon": "image",
                    "default_description": "Die Röntgenaufnahme des Brustkorbs zeigt Lunge, Herzschatten und Brustkorb. Eingesetzt wird sie zum Beispiel bei Verdacht auf eine Lungenentzündung oder zur Abklärung von Husten und Atemnot."
                },
                {
                    "name": "Bronchoskopie",
                    "icon": "search",
                    "default_description": "Bei der Bronchoskopie werden Luftröhre und Bronchien mit einem dünnen, flexiblen Endoskop untersucht. Dabei können Gewebeproben oder Sekret zur weiteren Untersuchung entnommen werden."
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
                    "default_description": "Asthma ist eine chronische Entzündung der Atemwege mit anfallsartiger Atemnot, Husten oder pfeifender Atmung. Die Behandlung umfasst eine angepasste Inhalationstherapie, die Schulung der Inhalationstechnik und regelmäßige Kontrollen."
                },
                {
                    "name": "COPD-Management",
                    "icon": "heart",
                    "default_description": "Bei der chronisch obstruktiven Lungenerkrankung (COPD) sind die Atemwege dauerhaft verengt. Zur Behandlung gehören Medikamente, Atemtherapie, Bewegung und der Rauchstopp; regelmäßige Kontrollen begleiten den Verlauf."
                },
                {
                    "name": "Allergologische Diagnostik",
                    "icon": "flower",
                    "default_description": "Allergien können die Atemwege betreffen, etwa als allergisches Asthma oder Heuschnupfen. Haut- und Bluttests auf Pollen, Hausstaubmilben oder Tierhaare grenzen die Auslöser ein; anschließend werden Behandlung oder Hyposensibilisierung besprochen."
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
                    "default_description": "Bei der Schlafapnoe kommt es im Schlaf zu wiederholten Atemaussetzern, oft verbunden mit Schnarchen und Tagesmüdigkeit. Die Abklärung erfolgt mit einer Schlafuntersuchung, häufig zunächst als Messung zu Hause; je nach Befund wird die Therapie besprochen, zum Beispiel eine Atemmaske (CPAP)."
                },
                {
                    "name": "Raucherentwöhnung",
                    "icon": "x-circle",
                    "default_description": "Die Raucherentwöhnung umfasst Beratung, Verhaltensstrategien und bei Bedarf Medikamente zur Unterstützung des Rauchstopps. Begleitende Termine helfen, Rückfällen vorzubeugen."
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
            "Atemwege und Lunge im Mittelpunkt",
            "Lungenfunktionsdiagnostik",
            "Asthma und COPD individuell behandeln",
            "Abklärung schlafbezogener Atemstörungen"
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
        "typisch": "Lungenfunktion, Asthma und COPD, Allergologie, schlafbezogene Atemstörungen",
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
