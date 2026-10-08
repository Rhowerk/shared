export const psychotherapie = {
    "meta": {
        "id": "psychotherapie",
        "name": "Psychotherapeutische Praxis",
        "name_variants": [
            "Psychotherapeut",
            "Psychotherapeutin",
            "Psychotherapie",
            "Praxis für Psychotherapie"
        ],
        "icon": "brain",
        "description": "Praxis für Psychotherapie und psychische Gesundheit"
    },
    "colors": {
        "primary": "#7D8A6A",
        "primary_light": "#9AA785",
        "primary_dark": "#5F6B4E",
        "secondary": "#F7F9F5",
        "accent": "#D4A574",
        "alternatives": [
            {
                "name": "Beruhigend Grün",
                "primary": "#7D8A6A",
                "secondary": "#F7F9F5"
            },
            {
                "name": "Sanft Blau",
                "primary": "#7BA3C9",
                "secondary": "#F5F9FC"
            },
            {
                "name": "Warm Beige",
                "primary": "#B5A18C",
                "secondary": "#FAF8F5"
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
                "id": "psycho-hero-1",
                "url": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
                "alt": "Ruhige Praxisatmosphäre"
            }
        ],
        "imagetext": [
            {
                "id": "psycho-praxis",
                "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80",
                "alt": "Einladender Therapieraum"
            }
        ],
        "imagelist": [
            {
                "id": "psycho-leistungen",
                "url": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1024&q=80",
                "alt": "Therapeutisches Gespräch"
            }
        ],
        "banner": [
            {
                "id": "psycho-banner",
                "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
                "alt": "Ruhe und Entspannung in der Natur"
            }
        ]
    },
    "services": [
        {
            "category": "Erstgespräch & Diagnostik",
            "icon_color": "#7D8A6A",
            "items": [
                {
                    "name": "Psychotherapeutische Sprechstunde",
                    "icon": "message-circle",
                    "default_description": "Die psychotherapeutische Sprechstunde ist der erste Kontakt zur Abklärung psychischer Beschwerden. Dabei wird eingeschätzt, ob eine Psychotherapie oder eine andere Unterstützung angezeigt ist; für gesetzlich Versicherte ist sie vor Beginn einer Therapie in der Regel verpflichtend."
                },
                {
                    "name": "Diagnostik / Erstgespräch",
                    "icon": "clipboard-check",
                    "default_description": "In den ersten Gesprächen (probatorische Sitzungen) werden aktuelle Beschwerden, Lebensgeschichte und Ziele erfasst. Daraus ergeben sich Diagnose, Behandlungsplan und die Entscheidung über das passende Verfahren."
                }
            ]
        },
        {
            "category": "Therapieverfahren",
            "icon_color": "#5D9B9B",
            "items": [
                {
                    "name": "Verhaltenstherapie",
                    "icon": "target",
                    "default_description": "Die Verhaltenstherapie setzt an belastenden Denk- und Verhaltensmustern an. Mit Gesprächen und praktischen Übungen werden neue Bewältigungsstrategien für den Alltag erarbeitet."
                },
                {
                    "name": "Tiefenpsychologische Therapie",
                    "icon": "layers",
                    "default_description": "Die tiefenpsychologisch fundierte Psychotherapie betrachtet, wie frühere Erfahrungen und unbewusste Konflikte das heutige Erleben beeinflussen. Ziel ist es, diese Zusammenhänge zu verstehen und aktuelle Schwierigkeiten zu bearbeiten."
                },
                {
                    "name": "Trauma-Therapie (EMDR)",
                    "icon": "shield",
                    "default_description": "EMDR (Eye Movement Desensitization and Reprocessing) ist ein Verfahren zur Behandlung von Traumafolgestörungen. Belastende Erinnerungen werden dabei mithilfe von Augenbewegungen oder anderen Reizen schrittweise bearbeitet."
                },
                {
                    "name": "Achtsamkeitsbasierte Therapie",
                    "icon": "sun",
                    "default_description": "Achtsamkeitsbasierte Verfahren üben, den gegenwärtigen Moment bewusst und ohne Bewertung wahrzunehmen. Eingesetzt werden sie etwa bei Stress, wiederkehrenden Depressionen oder Ängsten, häufig ergänzend zu anderen Verfahren."
                }
            ]
        },
        {
            "category": "Behandlungsschwerpunkte",
            "icon_color": "#B5A18C",
            "items": [
                {
                    "name": "Depression-Behandlung",
                    "icon": "cloud",
                    "default_description": "Eine Depression zeigt sich unter anderem durch anhaltende Niedergeschlagenheit, Antriebslosigkeit und Interessenverlust. Die Psychotherapie arbeitet an auslösenden und aufrechterhaltenden Faktoren und stärkt vorhandene Ressourcen."
                },
                {
                    "name": "Angststörungen",
                    "icon": "alert-circle",
                    "default_description": "Zu den Angststörungen gehören Panikstörung, soziale Angst, generalisierte Angst und spezifische Phobien. In der Therapie werden Auslöser verstanden und Wege erarbeitet, mit der Angst umzugehen."
                },
                {
                    "name": "Burnout / Erschöpfung",
                    "icon": "battery-low",
                    "default_description": "Anhaltende Erschöpfung entwickelt sich oft schleichend, häufig im Zusammenhang mit Belastungen in Beruf oder Familie. In der Therapie werden Ursachen betrachtet und Wege zu Entlastung und Ausgleich erarbeitet."
                },
                {
                    "name": "Paartherapie",
                    "icon": "users",
                    "default_description": "Die Paartherapie richtet sich an Paare mit Konflikten oder Kommunikationsschwierigkeiten. In gemeinsamen Sitzungen werden Muster in der Beziehung betrachtet und neue Wege miteinander erarbeitet. Paartherapie ist keine Leistung der gesetzlichen Krankenversicherung.",
                    "igel": true
                },
                {
                    "name": "Krisenintervention",
                    "icon": "phone",
                    "default_description": "Krisenintervention bietet Unterstützung in akuten seelischen Krisen, etwa nach Verlusten oder belastenden Ereignissen. Ziel ist die Stabilisierung und die Klärung, welche weitere Hilfe sinnvoll ist. In akuten Notfällen sind der ärztliche Bereitschaftsdienst (116 117) und der Notruf 112 erreichbar."
                }
            ]
        },
        {
            "category": "Weitere Angebote",
            "icon_color": "#7BA3C9",
            "items": [
                {
                    "name": "Kinder- und Jugendpsychotherapie",
                    "icon": "baby",
                    "default_description": "Die Kinder- und Jugendlichenpsychotherapie richtet sich an junge Menschen bis 21 Jahre und bezieht Eltern oder Bezugspersonen mit ein. Je nach Alter kommen spielerische, kreative und gesprächsbasierte Methoden zum Einsatz."
                },
                {
                    "name": "Gruppentherapie",
                    "icon": "users",
                    "default_description": "In der Gruppentherapie arbeiten mehrere Teilnehmende unter therapeutischer Leitung an ähnlichen Themen. Der Austausch mit anderen kann neue Perspektiven eröffnen und entlasten."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "einfühlsam",
            "wertschätzend",
            "vertrauensvoll",
            "professionell",
            "warmherzig"
        ],
        "audience": "Menschen mit psychischen Belastungen wie Depressionen, Ängsten oder Burnout.\nDer erste Schritt zur Therapie ist oft schwer - Hürden abbauen wichtig.",
        "key_messages": [
            "Der erste Schritt ist oft der schwerste",
            "Vertrauliche und wertschätzende Atmosphäre",
            "Behandlung mit anerkannten Therapieverfahren",
            "Psychische Gesundheit ist genauso wichtig wie körperliche"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Psychotherapie in {ort}",
        "description_template": "Psychotherapeutische Praxis {praxis_name} in {ort}. ✓ Depression ✓ Angststörungen ✓ Burnout. Jetzt Erstgespräch vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Psychologischer Psychotherapeut",
        "de_female": "Psychologische Psychotherapeutin",
        "en": "Psychotherapist"
    },
    "jobs": {
        "templates": [
            {
                "id": "psychotherapeut",
                "title_de": "Psychologische Psychotherapie (m/w/d)",
                "employment_type": "fulltime",
                "category": "facharzt",
                "default_selected": false
            },
            {
                "id": "pia",
                "title_de": "Psychotherapie in Ausbildung / PiA (m/w/d)",
                "employment_type": "parttime",
                "category": "facharzt",
                "default_selected": false
            },
            {
                "id": "mfa",
                "title_de": "MFA in Vollzeit (m/w/d)",
                "employment_type": "parttime",
                "category": "mfa",
                "default_selected": true
            }
        ],
        "additional_benefits": [
            "Supervision",
            "Flexible Arbeitszeiten"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "Gesprächsbasierte Psychotherapie, Diagnostik, anerkannte Therapieverfahren",
        "aufgaben": {
            "mfa": "Terminmanagement, Patientenkoordination, Abrechnung, Testverfahren-Vorbereitung",
            "arzt": "Diagnostische Gespräche, Psychotherapie, Medikation, Krisenintervention",
            "azubi": "Patientenempfang, Terminplanung, Abrechnungsgrundlagen"
        },
        "staerke": "Tiefe Patientenbeziehung, sinnstiftende Arbeit, Gesprächsmedizin",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Supervisionen, Therapieverfahren-Ausbildung, Traumatherapie",
            "moderne_ausstattung": "Moderne Praxisräume, digitale Dokumentation, Telemedizin"
        },
        "verbotene_phrasen": [
            "psychotherapeutische Behandlung",
            "Behandlung psychischer Erkrankungen"
        ]
    }
};
