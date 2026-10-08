export const zahnarzt = {
    "meta": {
        "id": "zahnarzt",
        "name": "Zahnarztpraxis",
        "name_variants": [
            "Zahnarzt",
            "Zahnarztpraxis",
            "Zahnmedizin",
            "Praxis für Zahnheilkunde"
        ],
        "icon": "tooth",
        "description": "Praxis für Zahnmedizin"
    },
    "colors": {
        "primary": "#2E86AB",
        "primary_light": "#4DA3C4",
        "primary_dark": "#1E5F7A",
        "secondary": "#F0F7FA",
        "accent": "#A2D2FF",
        "alternatives": [
            {
                "name": "Klassisch Blau",
                "primary": "#2E86AB",
                "secondary": "#F0F7FA"
            },
            {
                "name": "Modern Türkis",
                "primary": "#00A896",
                "secondary": "#F0FAF8"
            },
            {
                "name": "Elegant Dunkelblau",
                "primary": "#2C3E50",
                "secondary": "#F5F7FA"
            },
            {
                "name": "Frisch Mint",
                "primary": "#48C9B0",
                "secondary": "#F0FBF9"
            }
        ]
    },
    "images": {
        "hero": [
            {
                "id": "zahnarzt-hero-1",
                "url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
                "alt": "Moderne Zahnarztpraxis mit freundlichem Empfang"
            },
            {
                "id": "zahnarzt-hero-2",
                "url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80",
                "alt": "Heller Behandlungsraum mit moderner Ausstattung"
            }
        ],
        "imagetext": [
            {
                "id": "zahnarzt-team",
                "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1024&q=80",
                "alt": "Freundliches Zahnarzt-Team"
            },
            {
                "id": "zahnarzt-behandlung",
                "url": "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1024&q=80",
                "alt": "Moderne zahnmedizinische Behandlung"
            }
        ],
        "imagelist": [
            {
                "id": "zahnarzt-leistungen",
                "url": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1024&q=80",
                "alt": "Professionelle Zahnreinigung"
            }
        ],
        "banner": [
            {
                "id": "zahnarzt-banner",
                "url": "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=1920&q=80",
                "alt": "Strahlendes Lächeln"
            }
        ]
    },
    "services": [
        {
            "category": "Prophylaxe & Vorsorge",
            "icon_color": "#2E86AB",
            "items": [
                {
                    "name": "Professionelle Zahnreinigung (PZR)",
                    "icon": "sparkles",
                    "default_description": "Bei der professionellen Zahnreinigung werden harte und weiche Beläge sowie Verfärbungen entfernt, auch in den Zahnzwischenräumen. Anschließend werden die Zähne poliert und meist fluoridiert. Gesetzliche Krankenkassen übernehmen die Kosten nicht regulär, einige beteiligen sich mit Zuschüssen.",
                    "igel": true
                },
                {
                    "name": "Vorsorgeuntersuchung",
                    "icon": "search",
                    "default_description": "Bei der zahnärztlichen Kontrolluntersuchung werden Zähne, Zahnfleisch und Mundschleimhaut auf Karies, Zahnfleischerkrankungen und andere Veränderungen untersucht. Regelmäßige Kontrollen sind zudem Voraussetzung für das Bonusheft."
                },
                {
                    "name": "Kinderzahnheilkunde",
                    "icon": "baby",
                    "default_description": "Zahnärztliche Betreuung von Kindern mit Früherkennungsuntersuchungen, Fluoridierung und Fissurenversiegelung. Dazu gehört die Anleitung von Kindern und Eltern zur Zahnpflege."
                }
            ]
        },
        {
            "category": "Ästhetische Zahnheilkunde",
            "icon_color": "#E67E22",
            "items": [
                {
                    "name": "Bleaching / Zahnaufhellung",
                    "icon": "sun",
                    "default_description": "Beim Bleaching werden verfärbte Zähne mit einem Aufhellungsgel aufgehellt, in der Praxis oder mit individuell angefertigten Schienen zu Hause. Das Ergebnis hängt von Ausgangsfarbe und Ursache der Verfärbung ab; vorhandene Füllungen und Kronen hellen nicht mit auf.",
                    "igel": true
                },
                {
                    "name": "Veneers",
                    "icon": "layers",
                    "default_description": "Veneers sind dünne Keramikschalen, die auf die Vorderseite von Frontzähnen geklebt werden. Damit lassen sich Form, Farbe und kleinere Stellungsabweichungen verändern; dafür wird meist etwas Zahnsubstanz abgetragen.",
                    "igel": true
                },
                {
                    "name": "Aligner-Therapie",
                    "icon": "move",
                    "default_description": "Bei der Aligner-Therapie werden Zahnfehlstellungen mit einer Folge transparenter, herausnehmbarer Kunststoffschienen schrittweise korrigiert. Die Schienen werden in der Regel täglich 20 bis 22 Stunden getragen.",
                    "igel": true
                }
            ]
        },
        {
            "category": "Zahnersatz",
            "icon_color": "#9B59B6",
            "items": [
                {
                    "name": "Implantate",
                    "icon": "pin",
                    "default_description": "Zahnimplantate sind künstliche Zahnwurzeln aus Titan oder Keramik, die im Kieferknochen einheilen und Kronen, Brücken oder Prothesen tragen. Voraussetzungen, Alternativen und Kosten werden vor der Behandlung besprochen.",
                    "igel": true
                },
                {
                    "name": "Kronen & Brücken",
                    "icon": "crown",
                    "default_description": "Kronen überdecken stark beschädigte Zähne, Brücken ersetzen fehlende Zähne und werden an den Nachbarzähnen befestigt. Beides dient der Wiederherstellung von Kaufunktion und Aussehen."
                },
                {
                    "name": "Prothesen",
                    "icon": "smile",
                    "default_description": "Teil- und Vollprothesen ersetzen mehrere oder alle Zähne eines Kiefers. Je nach Situation werden sie mit Klammern, Teleskopen oder Implantaten befestigt."
                }
            ]
        },
        {
            "category": "Behandlungen",
            "icon_color": "#E74C3C",
            "items": [
                {
                    "name": "Wurzelbehandlung",
                    "icon": "target",
                    "default_description": "Bei einer Wurzelbehandlung wird entzündetes oder abgestorbenes Gewebe aus dem Wurzelkanal entfernt, der Kanal gereinigt und verschlossen. Ziel ist es, den Zahn zu erhalten."
                },
                {
                    "name": "Parodontitisbehandlung",
                    "icon": "shield",
                    "default_description": "Parodontitis ist eine chronische Entzündung des Zahnhalteapparats, die unbehandelt zu Zahnlockerung und Zahnverlust führen kann. Die Behandlung umfasst die Reinigung der Zahnfleischtaschen und eine Nachsorge in regelmäßigen Abständen."
                },
                {
                    "name": "Schmerzbehandlung",
                    "icon": "heart",
                    "default_description": "Bei akuten Zahnschmerzen wird die Ursache abgeklärt, etwa eine Entzündung des Zahnnervs oder ein Abszess. Ziel der Erstbehandlung ist die Linderung der Beschwerden; die weitere Behandlung wird anschließend geplant."
                }
            ]
        }
    ],
    "faq": [
        {
            "category": "Allgemeine Fragen",
            "questions": [
                {
                    "question": "Wie oft sollte ich zur Kontrolle kommen?",
                    "answer": "Wir empfehlen zwei Kontrolltermine pro Jahr. So können wir\nProbleme frühzeitig erkennen und Ihre Zähne langfristig gesund halten."
                },
                {
                    "question": "Was kostet eine professionelle Zahnreinigung?",
                    "answer": "Die Kosten liegen je nach Aufwand zwischen 80-150€.\nViele Krankenkassen bezuschussen die PZR – fragen Sie nach!"
                }
            ]
        },
        {
            "category": "Angstpatienten",
            "questions": [
                {
                    "question": "Ich habe Angst vor dem Zahnarzt. Können Sie mir helfen?",
                    "answer": "Wir verstehen Ihre Ängste und nehmen sie ernst.\nUnser Team ist geschult für einfühlsame Behandlung.\nAuf Wunsch bieten wir auch Behandlungen unter Sedierung an."
                },
                {
                    "question": "Bieten Sie Behandlungen unter Narkose an?",
                    "answer": "Ja, für umfangreiche Behandlungen oder sehr ängstliche\nPatienten bieten wir Behandlung unter Dämmerschlaf\noder Vollnarkose an."
                }
            ]
        },
        {
            "category": "Ästhetik",
            "questions": [
                {
                    "question": "Wie lange hält ein Bleaching?",
                    "answer": "Ein professionelles Bleaching hält 1-3 Jahre, je nach\nLebensgewohnheiten. Mit regelmäßiger Prophylaxe können\nSie das Ergebnis länger erhalten."
                }
            ]
        }
    ],
    "ai_context": {
        "tone": [
            "professionell",
            "beruhigend",
            "modern",
            "einfühlsam",
            "vertrauenswürdig"
        ],
        "audience": "Erwachsene Patienten, teils mit Zahnarztangst.\nWünschen sich verständliche Erklärungen und eine ruhige Behandlung.\nInteressiert an Ästhetik und Prophylaxe.",
        "personality": [
            "kompetent",
            "geduldig",
            "modern",
            "ästhetisch orientiert"
        ],
        "key_messages": [
            "Vorsorge statt Reparatur",
            "Ästhetik und Funktion im Einklang",
            "Verständnis für Patienten mit Zahnarztangst",
            "Behandlungsschritte verständlich erklärt"
        ],
        "language_style": {
            "avoid": [
                "angsteinflößende Begriffe (Bohrer, Spritze)",
                "zu technische Fachbegriffe",
                "Passiv-Konstruktionen"
            ],
            "prefer": [
                "positive Formulierungen",
                "ruhige, erklärende Sprache zum Ablauf",
                "moderne Begriffe"
            ]
        }
    },
    "seo": {
        "title_template": "{praxis_name} | Zahnarzt in {ort}",
        "description_template": "Zahnarztpraxis {praxis_name} in {ort}. ✓ Prophylaxe ✓ Bleaching ✓ Implantate ✓ Angstpatienten willkommen. Jetzt Termin buchen!",
        "keywords": [
            "zahnarzt {ort}",
            "zahnarztpraxis {ort}",
            "zahnreinigung {ort}",
            "bleaching {ort}",
            "implantate {ort}",
            "zahnarzt angstpatienten {ort}"
        ]
    },
    "fachrichtung_titel": {
        "de": "Zahnarzt",
        "de_female": "Zahnärztin",
        "en": "Dentist"
    },
    "jobs": {
        "templates": [
            {
                "id": "zahnarzt",
                "title_de": "Zahnärztliche Verstärkung (m/w/d)",
                "employment_type": "fulltime",
                "category": "facharzt",
                "default_selected": false
            },
            {
                "id": "zfa",
                "title_de": "ZFA in Vollzeit (m/w/d)",
                "employment_type": "fulltime",
                "category": "mfa",
                "default_selected": true
            },
            {
                "id": "prophylaxe",
                "title_de": "ZMP – Prophylaxe (m/w/d)",
                "employment_type": "parttime",
                "category": "sonstige",
                "default_selected": false
            },
            {
                "id": "dh",
                "title_de": "Dentalhygiene / DH (m/w/d)",
                "employment_type": "fulltime",
                "category": "sonstige",
                "default_selected": false
            },
            {
                "id": "zmv",
                "title_de": "ZMV – Verwaltung & Abrechnung (m/w/d)",
                "employment_type": "parttime",
                "category": "sonstige",
                "default_selected": false
            },
            {
                "id": "zfa-teilzeit",
                "title_de": "ZFA in Teilzeit (m/w/d)",
                "employment_type": "parttime",
                "category": "mfa",
                "default_selected": false
            },
            {
                "id": "ausbildung",
                "title_de": "Auszubildende ZFA (m/w/d)",
                "employment_type": "apprenticeship",
                "category": "ausbildung",
                "default_selected": false
            }
        ],
        "additional_benefits": [
            "Moderne Praxisausstattung",
            "Prophylaxe-Schwerpunkt"
        ]
    },
    "pages": {
        "homepage": {
            "blocks": [
                {
                    "type": "block_herobanner",
                    "required": true,
                    "content": {
                        "title": "<h1>Willkommen in der {praxis_name}</h1>\n<p>Ihr Zahnarzt in {ort}</p>",
                        "image": "hero[0]"
                    }
                },
                {
                    "type": "block_imagetext",
                    "required": true,
                    "content": {
                        "text": "<h2>Moderne Zahnmedizin mit Wohlfühlfaktor</h2>\n<p>In unserer Praxis verbinden wir höchste zahnmedizinische Kompetenz\nmit einer angenehmen Atmosphäre. Ob Prophylaxe, Ästhetik oder\nZahnersatz – wir sind für Sie da.</p>",
                        "image": "imagetext[0]",
                        "buttons": [
                            {
                                "label": "Termin vereinbaren",
                                "url": "/kontakt"
                            }
                        ]
                    }
                },
                {
                    "type": "block_imagelist",
                    "required": true,
                    "content": {
                        "title": "Unsere Leistungen",
                        "list": [
                            {
                                "title": "Professionelle Zahnreinigung",
                                "text": "Für langfristig gesunde Zähne"
                            },
                            {
                                "title": "Ästhetische Zahnheilkunde",
                                "text": "Bleaching, Veneers und mehr"
                            },
                            {
                                "title": "Hochwertiger Zahnersatz",
                                "text": "Implantate, Kronen, Brücken"
                            },
                            {
                                "title": "Schmerzarme Behandlung",
                                "text": "Moderne Anästhesieverfahren"
                            }
                        ],
                        "image": "imagelist[0]",
                        "buttons": [
                            {
                                "label": "Alle Leistungen",
                                "url": "/leistungen"
                            }
                        ]
                    }
                },
                {
                    "type": "block_banner",
                    "required": true,
                    "content": {
                        "title": "<p>Angstpatienten sind bei uns willkommen</p>\n<p>Einfühlsame Behandlung in entspannter Atmosphäre</p>",
                        "buttons": [
                            {
                                "label": "Jetzt Termin vereinbaren",
                                "url": "/kontakt"
                            }
                        ]
                    }
                },
                {
                    "type": "block_practice_info",
                    "required": true
                }
            ]
        }
    },
    "employer": {
        "typisch": "Prophylaxe, Füllungen, Zahnersatz, Zahnerhaltung",
        "aufgaben": {
            "zfa": "Assistenz am Stuhl, Röntgen, Abdrücke, Prophylaxe, Aufbereitung, Abrechnung",
            "arzt": "Zahnerhaltung, Prothetik, Chirurgie, Implantologie, Ästhetik",
            "azubi": "Grundlagen Assistenz, Instrumentenkunde, Materialvorbereitung, Hygiene"
        },
        "staerke": "Regelmäßiger Patientenkontakt, ästhetische Ergebnisse, handwerkliche Präzision",
        "benefit_kontexte": {
            "fortbildung_bezahlt": "Prophylaxe-Zertifikat, Implantologie-Kurse, KFO",
            "moderne_ausstattung": "Digitales Röntgen, Intraoralscanner, CAD/CAM, Laser"
        },
        "verbotene_phrasen": [
            "zahnärztliche Versorgung",
            "Behandlung von Zahnproblemen"
        ]
    }
};
