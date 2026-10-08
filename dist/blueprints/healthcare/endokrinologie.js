export const endokrinologie = {
    "meta": {
        "id": "endokrinologie",
        "name": "Endokrinologische Praxis",
        "name_variants": [
            "Endokrinologe",
            "Diabetologe",
            "Diabetologische Praxis",
            "Schilddrüsenpraxis",
            "Praxis für Endokrinologie und Diabetologie"
        ],
        "icon": "activity",
        "description": "Praxis für Endokrinologie, Diabetologie und Stoffwechselerkrankungen"
    },
    "colors": {
        "primary": "#6366F1",
        "primary_light": "#818CF8",
        "primary_dark": "#4F46E5",
        "secondary": "#F5F5FF",
        "accent": "#F59E0B",
        "alternatives": [
            {
                "name": "Ruhig Indigo",
                "primary": "#6366F1",
                "secondary": "#F5F5FF"
            },
            {
                "name": "Vertrauensblau",
                "primary": "#3B82F6",
                "secondary": "#F0F6FF"
            },
            {
                "name": "Warm Grün",
                "primary": "#059669",
                "secondary": "#F0FDF4"
            },
            {
                "name": "Professionell Grau",
                "primary": "#6B7280",
                "secondary": "#F9FAFB"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "endo-hero-1",
                "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
                "alt": "Endokrinologische Beratung"
            }
        ],
        "imagetext": [
            {
                "id": "endo-team",
                "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
                "alt": "Praxisteam"
            }
        ],
        "imagelist": [
            {
                "id": "endo-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
                "alt": "Diagnostik"
            }
        ],
        "banner": [
            {
                "id": "endo-banner",
                "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
                "alt": "Gesunder Lebensstil"
            }
        ]
    },
    "services": [
        {
            "category": "Diabetologie",
            "icon_color": "#6366F1",
            "items": [
                {
                    "name": "Diabetes mellitus Typ 1 & 2",
                    "icon": "droplet",
                    "default_description": "Betreuung bei Diabetes mellitus Typ 1 und Typ 2 mit Therapieeinstellung, regelmäßigen Kontrollen und Schulung zum Umgang mit der Erkrankung. Ziel sind eine gute Stoffwechseleinstellung im Alltag und die Vorbeugung von Folgeerkrankungen."
                },
                {
                    "name": "Insulinpumpen-Therapie",
                    "icon": "settings",
                    "default_description": "Bei der Insulinpumpentherapie gibt eine Pumpe Insulin kontinuierlich über einen feinen Katheter ab. Dazu gehören die Beratung zur Eignung, die Einstellung der Pumpe und die Schulung im Umgang damit."
                },
                {
                    "name": "CGM / Glukose-Sensoren",
                    "icon": "monitor",
                    "default_description": "Glukosesensoren messen den Zuckerwert im Unterhautgewebe fortlaufend. Die aufgezeichneten Verläufe werden ausgewertet und für die Anpassung der Therapie genutzt."
                },
                {
                    "name": "Diabetische Fußambulanz",
                    "icon": "heart",
                    "default_description": "Beim diabetischen Fußsyndrom können Nervenschäden und Durchblutungsstörungen zu schlecht heilenden Wunden führen. Regelmäßige Fußuntersuchungen, Wundbehandlung und Beratung zu Schuhversorgung und Fußpflege gehören zur Betreuung."
                }
            ]
        },
        {
            "category": "Schilddrüse & Hormone",
            "icon_color": "#F59E0B",
            "items": [
                {
                    "name": "Schilddrüsen-Diagnostik & Therapie",
                    "icon": "activity",
                    "default_description": "Abklärung von Schilddrüsenerkrankungen wie Über- und Unterfunktion, Knoten oder Entzündungen anhand von Blutwerten und Bildgebung. Je nach Befund werden Behandlung und Kontrollabstände festgelegt."
                },
                {
                    "name": "Schilddrüsen-Sonographie",
                    "icon": "monitor",
                    "default_description": "Die Ultraschalluntersuchung zeigt Größe und Gewebestruktur der Schilddrüse. Knoten lassen sich damit ohne Strahlenbelastung erkennen und im Verlauf kontrollieren."
                },
                {
                    "name": "Hormonelle Störungen",
                    "icon": "clipboard",
                    "default_description": "Hormone steuern zahlreiche Körperfunktionen. Bei Verdacht auf Störungen von Nebennieren, Hirnanhangsdrüse oder Geschlechtshormonen erfolgen gezielte Labor- und Funktionstests sowie die Besprechung der Behandlungsmöglichkeiten."
                },
                {
                    "name": "Osteoporose-Diagnostik (DXA)",
                    "icon": "bone",
                    "default_description": "Die Knochendichtemessung (DXA) bestimmt die Mineraldichte des Knochens, meist an Lendenwirbelsäule und Hüfte. Das Ergebnis hilft, eine Osteoporose zu erkennen und das Bruchrisiko einzuschätzen. Ohne Knochenbruch oder begründeten Verdacht ist die Messung meist eine Selbstzahlerleistung."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "fachkompetent",
            "geduldig",
            "motivierend",
            "alltagsbezogen"
        ],
        "audience": "Diabetes-Patienten (Typ 1 und 2), Schilddrüsenerkrankte,\nPatienten mit hormonellen Störungen, Adipositas-Betroffene.",
        "key_messages": [
            "Diabetes-Betreuung mit Blick auf den Alltag",
            "Abklärung von Schilddrüsenerkrankungen",
            "Hormone und Stoffwechsel verständlich erklärt",
            "Langfristige Begleitung chronischer Erkrankungen"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Endokrinologie & Diabetologie in {ort}",
        "description_template": "Endokrinologische Praxis {praxis_name} in {ort}. ✓ Diabetes-Therapie ✓ Schilddrüse ✓ Hormone. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Innere Medizin, Endokrinologie und Diabetologie",
        "de_female": "Fachärztin für Innere Medizin, Endokrinologie und Diabetologie",
        "en": "Endocrinologist & Diabetologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Endokrinologie (m/w/d)",
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
                "id": "diabetesberatung",
                "title_de": "Diabetesberatung (m/w/d)",
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
            "Diabetologie-Fortbildung",
            "Pumpen- und CGM-Schulung"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Schilddrüse, Diabetes, Hormonstörungen, Stoffwechsel",
        "aufgaben": {
            "mfa": "Schilddrüsen-Sono-Assistenz, Blutzucker-Schulung, Labor, CGM-Einweisung",
            "arzt": "Schilddrüsen-Sonografie, Diabetes-Einstellung, Hormon-Diagnostik",
            "azubi": "Blutzucker-Messung, Patientenempfang, Laborversand"
        },
        "staerke": "Langzeit-Patientenbeziehungen, Diabetes-Begleitung, wachsendes Fach",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Diabetesberater, Schilddrüsen-Sonografie, Osteologie",
            "moderne_ausstattung": "Schilddrüsen-Ultraschall, CGM-Systeme, DXA"
        },
        "verbotene_phrasen": [
            "Behandlung von Stoffwechselerkrankungen",
            "endokrinologische Versorgung"
        ]
    }
};
