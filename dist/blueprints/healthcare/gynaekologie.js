export const gynaekologie = {
    "meta": {
        "id": "gynaekologie",
        "name": "Frauenarztpraxis",
        "name_variants": [
            "Frauenärztin",
            "Frauenarzt",
            "Gynäkologe",
            "Gynäkologische Praxis"
        ],
        "icon": "heart",
        "description": "Praxis für Frauenheilkunde und Geburtshilfe"
    },
    "colors": {
        "primary": "#D4A5A5",
        "primary_light": "#E8C4C4",
        "primary_dark": "#C08080",
        "secondary": "#FDF5F5",
        "accent": "#7EB5A6",
        "alternatives": [
            {
                "name": "Sanft Rosa",
                "primary": "#D4A5A5",
                "secondary": "#FDF5F5"
            },
            {
                "name": "Natur Grün",
                "primary": "#7EB5A6",
                "secondary": "#F0F9F6"
            },
            {
                "name": "Modern Violett",
                "primary": "#9B8AA5",
                "secondary": "#F8F5FA"
            },
            {
                "name": "Warm Koralle",
                "primary": "#E07A5F",
                "secondary": "#FDF6F4"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "gyn-hero-1",
                "url": "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80",
                "alt": "Freundliche Gynäkologin im Gespräch"
            }
        ],
        "imagetext": [
            {
                "id": "gyn-team",
                "url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1024&q=80",
                "alt": "Frauenarztpraxis Team"
            }
        ],
        "imagelist": [
            {
                "id": "gyn-leistungen",
                "url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1024&q=80",
                "alt": "Gynäkologische Vorsorge"
            }
        ],
        "banner": [
            {
                "id": "gyn-banner",
                "url": "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1920&q=80",
                "alt": "Glückliche Frau"
            }
        ]
    },
    "services": [
        {
            "category": "Vorsorge",
            "icon_color": "#D4A5A5",
            "items": [
                {
                    "name": "Gynäkologische Vorsorge",
                    "icon": "clipboard-check",
                    "default_description": "Die gynäkologische Vorsorge umfasst die Untersuchung der inneren und äußeren Geschlechtsorgane sowie altersabhängig die Tastuntersuchung der Brust. Dazu gehört ein Gespräch über Beschwerden und Fragen zur Gesundheit."
                },
                {
                    "name": "Krebsvorsorge / PAP-Abstrich",
                    "icon": "search",
                    "default_description": "Beim Abstrich vom Gebärmutterhals werden Zellen auf Veränderungen untersucht. Zwischen 20 und 34 Jahren ist er jährlich vorgesehen, ab 35 Jahren alle drei Jahre in Kombination mit einem HPV-Test."
                },
                {
                    "name": "Brustultraschall",
                    "icon": "heart",
                    "default_description": "Der Ultraschall der Brust kann die Tastuntersuchung ergänzen, besonders bei dichtem Brustgewebe. Bei auffälligem Befund ist er Kassenleistung, als Früherkennung ohne Befund eine Selbstzahlerleistung.",
                    "igel": true
                },
                {
                    "name": "HPV-Impfung",
                    "icon": "shield",
                    "default_description": "Die HPV-Impfung richtet sich gegen bestimmte humane Papillomviren, die unter anderem Gebärmutterhalskrebs verursachen können. Die STIKO empfiehlt sie für Mädchen und Jungen zwischen 9 und 14 Jahren, Nachholimpfungen bis 17 Jahre."
                }
            ]
        },
        {
            "category": "Schwangerschaft & Kinderwunsch",
            "icon_color": "#7EB5A6",
            "items": [
                {
                    "name": "Schwangerschaftsvorsorge",
                    "icon": "baby",
                    "default_description": "Die Schwangerschaftsvorsorge nach den Mutterschafts-Richtlinien umfasst regelmäßige Untersuchungen, Laborkontrollen und drei Basis-Ultraschalluntersuchungen. Dazu gehört die Beratung zu Ernährung, Lebensführung und Geburtsvorbereitung."
                },
                {
                    "name": "Ultraschall / Sonographie",
                    "icon": "monitor",
                    "default_description": "Ultraschalluntersuchungen werden in der Frauenheilkunde zur Beurteilung von Gebärmutter und Eierstöcken sowie in der Schwangerschaft eingesetzt. Die Untersuchung kommt ohne Strahlenbelastung aus."
                },
                {
                    "name": "Kinderwunschberatung",
                    "icon": "heart",
                    "default_description": "Wenn sich eine Schwangerschaft nicht wie gewünscht einstellt, können verschiedene Ursachen in Frage kommen. In der Beratung werden erste Untersuchungen veranlasst und Behandlungsmöglichkeiten sowie gegebenenfalls die Überweisung an ein Kinderwunschzentrum besprochen."
                }
            ]
        },
        {
            "category": "Beratung & Therapie",
            "icon_color": "#9B8AA5",
            "items": [
                {
                    "name": "Verhütungsberatung",
                    "icon": "info",
                    "default_description": "Beratung zu Verhütungsmethoden wie Pille, Spirale, Implantat oder Barrieremethoden. Besprochen werden Sicherheit, Verträglichkeit und die Frage, welche Methode zur jeweiligen Lebenssituation passt."
                },
                {
                    "name": "Wechseljahresberatung",
                    "icon": "sun",
                    "default_description": "Die Wechseljahre sind eine natürliche Lebensphase, die mit Beschwerden wie Hitzewallungen oder Schlafstörungen einhergehen kann. In der Beratung werden Möglichkeiten zur Linderung besprochen, mit und ohne Hormontherapie."
                },
                {
                    "name": "Hormontherapie",
                    "icon": "activity",
                    "default_description": "Eine Hormontherapie kann bei Hormonstörungen oder ausgeprägten Wechseljahresbeschwerden in Frage kommen. Vorab werden Nutzen und Risiken individuell abgewogen."
                },
                {
                    "name": "Mädchensprechstunde",
                    "icon": "user",
                    "default_description": "Die Mädchensprechstunde richtet sich an Mädchen und junge Frauen mit Fragen zu Körper, Periode, Verhütung oder Impfungen. Eine körperliche Untersuchung ist beim ersten Besuch meist nicht nötig."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "einfühlsam",
            "vertrauensvoll",
            "diskret",
            "kompetent",
            "warmherzig"
        ],
        "audience": "Frauen aller Altersgruppen, von Teenager bis Seniorin.\nThemen sind oft intim, daher besonders wichtig: Vertrauen und Diskretion.",
        "key_messages": [
            "Vorsorge in jeder Lebensphase",
            "Begleitung in Schwangerschaft und Familienplanung",
            "Diskret und einfühlsam",
            "Verständliche Beratung bei intimen Themen"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Frauenärztin in {ort}",
        "description_template": "Frauenarztpraxis {praxis_name} in {ort}. ✓ Vorsorge ✓ Schwangerschaft ✓ Verhütungsberatung. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Gynäkologie",
        "de_female": "Fachärztin für Gynäkologie",
        "en": "Gynecologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Gynäkologie (m/w/d)",
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
                "id": "hebamme",
                "title_de": "Hebamme / Entbindungspflege (m/w/d)",
                "employment_type": "parttime",
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
            "Ultraschall-Einarbeitung",
            "Schwangerenbetreuung"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Vorsorge, Schwangerschaftsbegleitung, Ultraschall, hormonelle Beratung",
        "aufgaben": {
            "mfa": "Ultraschall-Vorbereitung, Abstriche, Blutabnahme, CTG, Schwangerschaftsbetreuung",
            "arzt": "Vorsorge, Schwangerschaftsbegleitung, Ultraschall, operative Gynäkologie",
            "azubi": "Patientenannahme, Terminplanung, Ultraschall-Vorbereitung"
        },
        "staerke": "Vertrauensvolle Arzt-Patientin-Beziehung, lebensbegleitend",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Ultraschall-Zertifikate, Mammografie, Pränataldiagnostik",
            "moderne_ausstattung": "3D/4D-Ultraschall, CTG, digitale Mammografie"
        },
        "verbotene_phrasen": [
            "Betreuung von Patientinnen",
            "frauenärztliche Versorgung"
        ]
    }
};
