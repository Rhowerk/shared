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
                    "default_description": "Die kardiologische Untersuchung umfasst Anamnese, körperliche Untersuchung, Blutdruckmessung und EKG. Je nach Fragestellung folgen weitere Untersuchungen wie Herzultraschall oder Belastungstest."
                },
                {
                    "name": "EKG / Belastungs-EKG",
                    "icon": "activity",
                    "default_description": "Das EKG zeichnet die elektrische Aktivität des Herzens auf. Beim Belastungs-EKG wird zusätzlich auf dem Fahrradergometer geprüft, wie Herz und Kreislauf auf körperliche Anstrengung reagieren."
                },
                {
                    "name": "Echokardiographie (Herzultraschall)",
                    "icon": "monitor",
                    "default_description": "Der Herzultraschall zeigt Größe, Pumpfunktion und Herzklappen des Herzens. Die Untersuchung kommt ohne Strahlenbelastung aus."
                },
                {
                    "name": "Langzeit-EKG",
                    "icon": "clock",
                    "default_description": "Ein kleines Aufzeichnungsgerät erfasst den Herzrhythmus über 24 Stunden oder länger im Alltag. So lassen sich auch Rhythmusstörungen erkennen, die nur zeitweise auftreten."
                },
                {
                    "name": "Langzeit-Blutdruckmessung",
                    "icon": "trending-up",
                    "default_description": "Ein Messgerät zeichnet den Blutdruck über 24 Stunden in regelmäßigen Abständen auf, auch nachts. Das Blutdruckprofil hilft bei Diagnose und Therapieanpassung."
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
                    "default_description": "Regelmäßige Kontrollen von Herzschrittmachern und implantierten Defibrillatoren prüfen Batterie, Sonden und Einstellungen. Bei Bedarf werden die Einstellungen angepasst."
                },
                {
                    "name": "Gefäßdiagnostik",
                    "icon": "git-branch",
                    "default_description": "Ultraschalluntersuchungen der Arterien, etwa der Halsschlagadern, zeigen Ablagerungen und Verengungen. Die Befunde fließen in die Einschätzung des Herz-Kreislauf-Risikos ein."
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
                    "default_description": "Bei einer Herzschwäche (Herzinsuffizienz) pumpt das Herz nicht mehr ausreichend Blut durch den Körper. Die Behandlung umfasst Medikamente, regelmäßige Kontrollen und Empfehlungen zu Bewegung und Lebensstil."
                },
                {
                    "name": "Koronare Herzerkrankung",
                    "icon": "alert-triangle",
                    "default_description": "Bei der koronaren Herzkrankheit sind die Herzkranzgefäße verengt. Zur Betreuung gehören Diagnostik, medikamentöse Therapie, die Behandlung von Risikofaktoren und bei Bedarf die Abstimmung mit Kliniken für weitere Eingriffe."
                },
                {
                    "name": "Herzrhythmusstörungen",
                    "icon": "zap",
                    "default_description": "Herzstolpern, Herzrasen oder ein unregelmäßiger Puls können auf Herzrhythmusstörungen hinweisen. Mit EKG und Langzeitaufzeichnungen wird die Ursache abgeklärt und die Behandlung geplant."
                },
                {
                    "name": "Sportkardiologie",
                    "icon": "award",
                    "default_description": "Kardiologische Untersuchung vor oder während sportlicher Aktivität, etwa mit EKG, Belastungstest und Herzultraschall. Die Ergebnisse helfen, die Belastbarkeit einzuschätzen; ohne Beschwerden oder Krankheitsverdacht ist die Untersuchung in der Regel eine Selbstzahlerleistung.",
                    "igel": true
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
            "Herzgesundheit verständlich erklärt",
            "Abklärung von Herzbeschwerden",
            "Vorsorge und Behandlung von Risikofaktoren",
            "Langfristige Begleitung bei Herzerkrankungen"
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
        "typisch": "EKG, Herzultraschall, Belastungstests, Herzrhythmusstörungen, Langzeitbetreuung",
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
