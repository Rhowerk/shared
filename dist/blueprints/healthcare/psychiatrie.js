// Praxis für Psychiatrie und Psychotherapie (ärztlich, Kevin 24.10.2026). Getrennt von der psychologischen
// Psychotherapie: Fachärztinnen und Fachärzte stellen Diagnosen, verordnen Medikamente und bieten
// ärztliche Psychotherapie an. Vorlagentexte neutral (ohne wir/Sie), HWG-sauber, keine Kostenaussagen.
export const psychiatrie = {
    "meta": {
        "id": "psychiatrie",
        "name": "Praxis für Psychiatrie und Psychotherapie",
        "name_variants": [
            "Psychiater",
            "Psychiaterin",
            "Psychiatrie",
            "Psychiatrische Praxis",
            "Praxis für Psychiatrie und Psychotherapie"
        ],
        "icon": "heart-handshake",
        "description": "Fachärztliche Praxis für psychische Erkrankungen"
    },
    "colors": {
        "primary": "#5D7B8A",
        "primary_light": "#7F9BA8",
        "primary_dark": "#465E6A",
        "secondary": "#F5F8F9",
        "accent": "#C9A27A",
        "alternatives": [
            {
                "name": "Ruhig Blaugrau",
                "primary": "#5D7B8A",
                "secondary": "#F5F8F9"
            },
            {
                "name": "Beruhigend Grün",
                "primary": "#7D8A6A",
                "secondary": "#F7F9F5"
            },
            {
                "name": "Sanft Violett",
                "primary": "#7A6C8C",
                "secondary": "#F8F7FA"
            },
            {
                "name": "Natur Türkis",
                "primary": "#5D9B9B",
                "secondary": "#F0F9F9"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "psychiatrie-hero-1",
                "url": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
                "alt": "Ruhige Praxisatmosphäre"
            }
        ],
        "imagetext": [
            {
                "id": "psychiatrie-praxis",
                "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80",
                "alt": "Heller, ruhiger Gesprächsraum"
            }
        ],
        "imagelist": [
            {
                "id": "psychiatrie-leistungen",
                "url": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1024&q=80",
                "alt": "Ärztliches Gespräch"
            }
        ],
        "banner": [
            {
                "id": "psychiatrie-banner",
                "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
                "alt": "Ruhe und Weite in der Natur"
            }
        ]
    },
    "services": [
        {
            "category": "Erstgespräch & Diagnostik",
            "icon_color": "#5D7B8A",
            "items": [
                {
                    "name": "Psychiatrisches Erstgespräch",
                    "icon": "message-circle",
                    "default_description": "Im Erstgespräch werden aktuelle Beschwerden, Vorgeschichte und Lebenssituation besprochen. Daraus ergeben sich eine erste fachärztliche Einschätzung und das weitere Vorgehen."
                },
                {
                    "name": "Psychiatrische Diagnostik",
                    "icon": "clipboard-check",
                    "default_description": "Zur Diagnostik gehören ausführliche Gespräche, bei Bedarf Fragebögen und Tests sowie die Abklärung möglicher körperlicher Ursachen, etwa über Laborwerte oder Vorbefunde."
                },
                {
                    "name": "ADHS-Diagnostik bei Erwachsenen",
                    "icon": "target",
                    "default_description": "Bei Verdacht auf ADHS im Erwachsenenalter werden die heutigen Beschwerden und die Entwicklung seit der Kindheit strukturiert erfasst, häufig mit Fragebögen und, wenn möglich, Angaben von Angehörigen. Andere Ursachen der Beschwerden werden dabei mitbedacht."
                },
                {
                    "name": "Abklärung von Gedächtnisstörungen",
                    "icon": "brain",
                    "default_description": "Nachlassendes Gedächtnis kann verschiedene Ursachen haben, darunter Depressionen oder eine beginnende Demenz. Gespräche, Tests und weitere Untersuchungen helfen, die Ursache einzugrenzen."
                }
            ]
        },
        {
            "category": "Behandlung",
            "icon_color": "#7D8A6A",
            "items": [
                {
                    "name": "Medikamentöse Behandlung",
                    "icon": "pill",
                    "default_description": "Wenn Medikamente infrage kommen, werden Wirkung, mögliche Nebenwirkungen und Alternativen besprochen. Einstellung und Verlauf werden in regelmäßigen Terminen begleitet."
                },
                {
                    "name": "Ärztliche Psychotherapie",
                    "icon": "users",
                    "default_description": "Fachärztinnen und Fachärzte für Psychiatrie und Psychotherapie bieten auch Psychotherapie an, zum Beispiel Verhaltenstherapie oder tiefenpsychologisch fundierte Psychotherapie. Die Psychotherapie lässt sich mit einer medikamentösen Behandlung verbinden."
                },
                {
                    "name": "Psychoedukation und Angehörigengespräche",
                    "icon": "book-open",
                    "default_description": "Psychoedukation vermittelt Wissen über die Erkrankung, ihren Verlauf und die Behandlungsmöglichkeiten. Auf Wunsch werden Angehörige oder Bezugspersonen einbezogen."
                },
                {
                    "name": "Krisenintervention",
                    "icon": "phone",
                    "default_description": "In akuten seelischen Krisen geht es zunächst um Stabilisierung und um die Klärung, welche weitere Hilfe sinnvoll ist. In akuten Notfällen sind der Notruf 112 und der ärztliche Bereitschaftsdienst (116 117) erreichbar."
                }
            ]
        },
        {
            "category": "Behandlungsschwerpunkte",
            "icon_color": "#C9A27A",
            "items": [
                {
                    "name": "Depressionen",
                    "icon": "cloud",
                    "default_description": "Eine Depression zeigt sich unter anderem durch anhaltende Niedergeschlagenheit, Antriebslosigkeit und Interessenverlust. Je nach Schwere kommen Psychotherapie, Medikamente oder beides infrage."
                },
                {
                    "name": "Angst- und Panikstörungen",
                    "icon": "alert-circle",
                    "default_description": "Zu den Angststörungen gehören Panikstörung, soziale Angst, generalisierte Angst und Phobien. Nach der Diagnostik werden Behandlungsmöglichkeiten wie Psychotherapie und gegebenenfalls Medikamente besprochen."
                },
                {
                    "name": "Bipolare Störungen",
                    "icon": "activity",
                    "default_description": "Bei bipolaren Störungen wechseln sich depressive und gehobene oder gereizte Phasen ab. Die Behandlung umfasst meist eine längerfristige medikamentöse Einstellung, regelmäßige Verlaufskontrollen und Psychoedukation."
                },
                {
                    "name": "Psychosen",
                    "icon": "eye",
                    "default_description": "Bei einer Psychose verändern sich Wahrnehmung und Denken, etwa durch Wahnvorstellungen oder Halluzinationen. Die Behandlung verbindet in der Regel Medikamente, Gespräche und Unterstützung im Alltag."
                },
                {
                    "name": "Schlafstörungen",
                    "icon": "moon",
                    "default_description": "Anhaltende Ein- oder Durchschlafstörungen können eigenständig auftreten oder Begleiterscheinung anderer Erkrankungen sein. Nach der Abklärung der Ursachen werden passende Behandlungswege besprochen."
                },
                {
                    "name": "Abhängigkeitserkrankungen",
                    "icon": "shield",
                    "default_description": "Bei Abhängigkeit von Alkohol, Medikamenten oder anderen Substanzen geht es um Einschätzung, Motivation und die Planung weiterer Schritte, etwa einer Entgiftung oder Entwöhnung in Zusammenarbeit mit spezialisierten Einrichtungen."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "einfühlsam",
            "wertschätzend",
            "sachlich",
            "vertrauensvoll",
            "ruhig"
        ],
        "audience": "Menschen mit psychischen Beschwerden wie Depressionen, Ängsten, Schlafstörungen oder ADHS-Verdacht, oft auch ihre Angehörigen.\nDer erste Termin kostet viel Überwindung - Hürden abbauen, nichts verharmlosen, nichts versprechen.",
        "key_messages": [
            "Fachärztliche Diagnostik und Behandlung psychischer Erkrankungen",
            "Medikamentöse Behandlung und Psychotherapie aus einer Hand",
            "Vertrauliche, wertschätzende Atmosphäre",
            "Psychische Gesundheit ist genauso wichtig wie körperliche"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Psychiater in {ort}",
        "description_template": "Praxis für Psychiatrie und Psychotherapie {praxis_name} in {ort}. ✓ Depression ✓ Angststörungen ✓ ADHS-Diagnostik. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Psychiatrie und Psychotherapie",
        "de_female": "Fachärztin für Psychiatrie und Psychotherapie",
        "en": "Psychiatrist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Psychiatrie und Psychotherapie (m/w/d)",
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
            "Supervision und Intervision",
            "Planbare Sprechzeiten"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Psychiatrische Diagnostik, medikamentöse Behandlung, ärztliche Psychotherapie, Krisenintervention",
        "aufgaben": {
            "mfa": "Terminkoordination, Patientenempfang mit Feingefühl, Rezepte und Bescheinigungen vorbereiten, Abrechnung",
            "arzt": "Diagnostische Gespräche, medikamentöse Einstellung, ärztliche Psychotherapie, Krisenintervention",
            "azubi": "Patientenempfang, Terminplanung, Abrechnungsgrundlagen, einfühlsame Kommunikation"
        },
        "staerke": "Langfristige Begleitung, sinnstiftende Arbeit, enge Zusammenarbeit im kleinen Team",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Supervision, psychotherapeutische Weiterbildung, Fortbildungen zu Psychopharmakologie",
            "flexible_arbeitszeiten": "Planbare Termine, Sprechstunden mit festen Zeiten"
        },
        "verbotene_phrasen": [
            "Behandlung psychischer Erkrankungen",
            "psychiatrische Versorgung"
        ]
    }
};
