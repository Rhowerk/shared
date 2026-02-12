export const kardiologie = {
    "meta": {
        "id": "kardiologie",
        "name": "Kardiologische Praxis",
        "name_variants": [
            "Kardiologe",
            "Kardiologie",
            "Herzpraxis",
            "Praxis für Kardiologie"
        ],
        "icon": "heart-pulse",
        "description": "Praxis für Herz- und Kreislauferkrankungen"
    },
    "colors": {
        "primary": "#C0392B",
        "primary_light": "#E74C3C",
        "primary_dark": "#922B21",
        "secondary": "#FDF2F2",
        "accent": "#2980B9",
        "alternatives": [
            {
                "name": "Herzrot",
                "primary": "#C0392B",
                "secondary": "#FDF2F2"
            },
            {
                "name": "Vertrauen Blau",
                "primary": "#2980B9",
                "secondary": "#F0F7FC"
            },
            {
                "name": "Vital Grün",
                "primary": "#27AE60",
                "secondary": "#F0FDF4"
            },
            {
                "name": "Professionell Dunkel",
                "primary": "#2C3E50",
                "secondary": "#F5F7FA"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "kardio-hero-1",
                "url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
                "alt": "Kardiologe mit Stethoskop"
            }
        ],
        "imagetext": [
            {
                "id": "kardio-team",
                "url": "https://images.unsplash.com/photo-1666214280577-5f314da64ff9?w=1024&q=80",
                "alt": "Kardiologisches Team"
            }
        ],
        "imagelist": [
            {
                "id": "kardio-leistungen",
                "url": "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1024&q=80",
                "alt": "EKG-Untersuchung"
            }
        ],
        "banner": [
            {
                "id": "kardio-banner",
                "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
                "alt": "Aktiver gesunder Lebensstil"
            }
        ]
    },
    "services": [
        {
            "category": "Herzdiagnostik",
            "icon_color": "#C0392B",
            "items": [
                {
                    "name": "Kardiologische Untersuchung",
                    "icon": "heart",
                    "default_description": "Bei der kardiologischen Untersuchung erfassen wir Ihren Herzstatus umfassend.\nWir hören Ihr Herz ab, messen den Blutdruck und beurteilen Ihre\nkardiovaskuläre Gesundheit."
                },
                {
                    "name": "EKG / Belastungs-EKG",
                    "icon": "activity",
                    "default_description": "Das EKG zeichnet die elektrische Aktivität Ihres Herzens auf.\nBeim Belastungs-EKG prüfen wir zusätzlich, wie Ihr Herz unter\nkörperlicher Anstrengung reagiert."
                },
                {
                    "name": "Echokardiographie (Herzultraschall)",
                    "icon": "monitor",
                    "default_description": "Mit dem Herzultraschall sehen wir Ihr Herz bei der Arbeit.\nWir beurteilen Größe, Pumpfunktion und Herzklappen - schmerzfrei\nund ohne Strahlenbelastung."
                },
                {
                    "name": "Langzeit-EKG",
                    "icon": "clock",
                    "default_description": "Das Langzeit-EKG überwacht Ihren Herzrhythmus über 24 Stunden oder länger.\nSo erkennen wir auch Rhythmusstörungen, die nur gelegentlich auftreten."
                },
                {
                    "name": "Langzeit-Blutdruckmessung",
                    "icon": "trending-up",
                    "default_description": "Die 24-Stunden-Blutdruckmessung zeigt uns Ihr Blutdruckprofil im Alltag.\nSo können wir Bluthochdruck besser einschätzen und die Therapie optimieren."
                }
            ]
        },
        {
            "category": "Spezialdiagnostik",
            "icon_color": "#2980B9",
            "items": [
                {
                    "name": "Herzschrittmacher-Kontrolle",
                    "icon": "cpu",
                    "default_description": "Wir kontrollieren regelmäßig die Funktion Ihres Herzschrittmachers oder\nDefibrillators. Die Untersuchung ist schmerzfrei und gibt Ihnen Sicherheit."
                },
                {
                    "name": "Gefäßdiagnostik",
                    "icon": "git-branch",
                    "default_description": "Mit der Gefäßdiagnostik untersuchen wir Ihre Arterien auf Verengungen\nund Ablagerungen. Früherkennung hilft, Herzinfarkt und Schlaganfall\nvorzubeugen."
                }
            ]
        },
        {
            "category": "Behandlung",
            "icon_color": "#27AE60",
            "items": [
                {
                    "name": "Herzinsuffizienz-Behandlung",
                    "icon": "heart",
                    "default_description": "Bei Herzschwäche entwickeln wir einen individuellen Behandlungsplan.\nMit modernen Medikamenten und Lebensstiländerungen verbessern wir\nIhre Belastbarkeit und Lebensqualität."
                },
                {
                    "name": "Koronare Herzerkrankung",
                    "icon": "alert-triangle",
                    "default_description": "Bei verengten Herzkranzgefäßen ist schnelles Handeln wichtig.\nWir diagnostizieren präzise und koordinieren Ihre Behandlung\nmit Kliniken und Spezialisten."
                },
                {
                    "name": "Herzrhythmusstörungen",
                    "icon": "zap",
                    "default_description": "Herzstolpern, Herzrasen oder unregelmäßiger Puls beunruhigen viele Patienten.\nWir klären die Ursache und finden die richtige Therapie für Ihren Rhythmus."
                },
                {
                    "name": "Sportkardiologie",
                    "icon": "award",
                    "default_description": "Sportler haben besondere Anforderungen an ihr Herz. Wir untersuchen\nIhre Sporttauglichkeit und begleiten Sie bei der Leistungsoptimierung."
                }
            ]
        }
    ],
    "faq": [],
    "ai_context": {
        "tone": [
            "kompetent",
            "vertrauensvoll",
            "beruhigend",
            "präzise"
        ],
        "audience": "Patienten mit Herzproblemen oder Risikofaktoren.\nOft besorgt, suchen Sicherheit und kompetente Betreuung.",
        "key_messages": [
            "Ihr Herz in besten Händen",
            "Modernste Herzdiagnostik",
            "Vorsorge schützt vor Herzinfarkt",
            "Individuelle Therapiekonzepte"
        ]
    },
    "seo": {
        "title_template": "{praxis_name} | Kardiologe in {ort}",
        "description_template": "Kardiologische Praxis {praxis_name} in {ort}. ✓ EKG ✓ Herzultraschall ✓ Herzinfarkt-Vorsorge. Jetzt Termin vereinbaren!",
        "keywords": []
    },
    "fachrichtung_titel": {
        "de": "Facharzt für Kardiologie",
        "de_female": "Fachärztin für Kardiologie",
        "en": "Cardiologist"
    },
    "jobs": {
        "templates": [
            {
                "id": "facharzt",
                "title_de": "Fachärztliche Verstärkung Kardiologie (m/w/d)",
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
                "id": "mfa-funktions",
                "title_de": "MFA Funktionsdiagnostik (m/w/d)",
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
            "Einarbeitung in kardiologische Funktionsdiagnostik"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": []
        }
    },
    "employer": {
        "typisch": "EKG, Echokardiografie, Belastungstests, Herzrhythmusstörungen",
        "aufgaben": {
            "mfa": "EKG anlegen, Langzeit-EKG/RR, Belastungs-EKG-Assistenz, Gerinnungsmanagement",
            "arzt": "Echokardiografie, Belastungsdiagnostik, Rhythmologie, Herzinsuffizienz",
            "azubi": "EKG-Grundlagen, Vitalzeichen, Patientenempfang"
        },
        "staerke": "Lebensrettende Diagnostik, High-Tech-Medizin, Langzeitbeziehungen",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Echo-Kurse, Notfallmedizin, Rhythmologie-Seminare",
            "moderne_ausstattung": "Digitales Echo, Ergometrie, Langzeit-Monitoring, Telekardiologie"
        },
        "verbotene_phrasen": [
            "Diagnose und Behandlung von Herzerkrankungen",
            "kardiologische Versorgung"
        ]
    }
};
