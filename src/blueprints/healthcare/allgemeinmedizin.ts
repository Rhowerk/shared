import type { Blueprint } from '../types.js'

export const allgemeinmedizin: Blueprint = {
  "meta": {
    "id": "allgemeinmedizin",
    "name": "Hausarztpraxis",
    "name_variants": [
      "Hausarzt",
      "Hausarztpraxis",
      "Allgemeinmedizin",
      "Praxis für Allgemeinmedizin",
      "Hausärztliche Praxis"
    ],
    "icon": "heart-pulse",
    "description": "Hausärztliche Praxis für Allgemeinmedizin"
  },
  "colors": {
    "primary": "#5B8C5A",
    "primary_light": "#7AAD79",
    "primary_dark": "#456845",
    "secondary": "#F5F9F5",
    "accent": "#D4A574",
    "alternatives": [
      {
        "name": "Klassisch Grün",
        "primary": "#5B8C5A",
        "secondary": "#F5F9F5"
      },
      {
        "name": "Vertrauensblau",
        "primary": "#4A7C8C",
        "secondary": "#F0F6F8"
      },
      {
        "name": "Warm Weinrot",
        "primary": "#8B4049",
        "secondary": "#FAF5F6"
      },
      {
        "name": "Erdiges Braun",
        "primary": "#7D6B5A",
        "secondary": "#F9F7F5"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "hausarzt-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Hausärztin im Gespräch mit Patient"
      },
      {
        "id": "hausarzt-hero-2",
        "url": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80",
        "alt": "Moderne Hausarztpraxis"
      }
    ],
    "imagetext": [
      {
        "id": "hausarzt-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Freundliches Hausärzteteam"
      },
      {
        "id": "hausarzt-beratung",
        "url": "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1024&q=80",
        "alt": "Ärztliche Beratung"
      }
    ],
    "imagelist": [
      {
        "id": "hausarzt-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Medizinische Untersuchung"
      }
    ],
    "banner": [
      {
        "id": "hausarzt-banner",
        "url": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80",
        "alt": "Familie mit verschiedenen Generationen"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Prävention",
      "icon_color": "#5B8C5A",
      "items": [
        {
          "name": "Gesundheits-Check-up",
          "icon": "clipboard-check",
          "default_description": "Der regelmäßige Gesundheits-Check-up erkennt Risikofaktoren\nfrühzeitig. Ab 35 Jahren haben Sie alle drei Jahre Anspruch\nauf diese wichtige Vorsorgeuntersuchung."
        },
        {
          "name": "Krebsvorsorge",
          "icon": "shield",
          "default_description": "Früherkennung rettet Leben. Wir beraten Sie zu den\nempfohlenen Krebsvorsorgeuntersuchungen und führen\ndiese in unserer Praxis durch."
        },
        {
          "name": "Impfungen",
          "icon": "syringe",
          "default_description": "Aktueller Impfschutz für jedes Alter. Wir beraten Sie\nzu empfohlenen Impfungen und prüfen Ihren Impfstatus –\nauch für Reiseimpfungen."
        }
      ]
    },
    {
      "category": "Akutversorgung",
      "icon_color": "#E74C3C",
      "items": [
        {
          "name": "Akutsprechstunde",
          "icon": "clock",
          "default_description": "Bei akuten Beschwerden sind wir für Sie da.\nIn unserer Akutsprechstunde erhalten Sie schnelle\nHilfe ohne lange Wartezeiten."
        },
        {
          "name": "Infektionsbehandlung",
          "icon": "thermometer",
          "default_description": "Erkältungen, Grippe, Magen-Darm – wir diagnostizieren\nsicher und behandeln effektiv, damit Sie schnell\nwieder gesund werden."
        },
        {
          "name": "Wundversorgung",
          "icon": "bandage",
          "default_description": "Kleinere Verletzungen versorgen wir professionell\ndirekt in der Praxis – schnell, sauber und fachgerecht."
        }
      ]
    },
    {
      "category": "Chroniker-Betreuung",
      "icon_color": "#3498DB",
      "items": [
        {
          "name": "Diabetes-Behandlung",
          "icon": "droplet",
          "default_description": "Diabetes erfordert eine gute Einstellung und regelmäßige\nKontrollen. Im DMP-Programm begleiten wir Sie langfristig\nfür eine optimale Stoffwechsellage."
        },
        {
          "name": "Bluthochdruck",
          "icon": "heart",
          "default_description": "Hoher Blutdruck schädigt Herz und Gefäße.\nMit der richtigen Behandlung und Lebensstiländerungen\nbringen wir Ihren Blutdruck ins Gleichgewicht."
        },
        {
          "name": "Schilddrüsenerkrankungen",
          "icon": "neck",
          "default_description": "Schilddrüsenprobleme beeinflussen den ganzen Körper.\nWir diagnostizieren und behandeln Über- und Unterfunktion\nsowie Knotenbildungen."
        }
      ]
    },
    {
      "category": "Weitere Leistungen",
      "icon_color": "#9B59B6",
      "items": [
        {
          "name": "Labordiagnostik",
          "icon": "test-tube",
          "default_description": "Blutuntersuchungen geben wichtige Hinweise auf Ihren\nGesundheitszustand. Wir bieten umfassende Labordiagnostik\ndirekt in unserer Praxis."
        },
        {
          "name": "EKG",
          "icon": "activity",
          "default_description": "Das EKG zeigt, wie Ihr Herz arbeitet.\nBei Verdacht auf Herzrhythmusstörungen oder zur\nVorsorge führen wir diese Untersuchung durch."
        },
        {
          "name": "Lungenfunktionstest",
          "icon": "wind",
          "default_description": "Bei Atembeschwerden oder zur Kontrolle von Asthma\nund COPD prüfen wir Ihre Lungenfunktion mit\nmodernen Messgeräten."
        }
      ]
    }
  ],
  "faq": [
    {
      "category": "Allgemeine Fragen",
      "questions": [
        {
          "question": "Nehmen Sie neue Patienten auf?",
          "answer": "Ja, wir freuen uns über neue Patienten. Rufen Sie uns an\noder nutzen Sie unser Kontaktformular für einen Termin."
        },
        {
          "question": "Brauche ich eine Überweisung zu Fachärzten?",
          "answer": "Als Hausärzte koordinieren wir Ihre Behandlung und\nüberweisen Sie bei Bedarf an Fachärzte.\nWir behalten den Überblick über Ihre Gesundheit."
        },
        {
          "question": "Machen Sie auch Hausbesuche?",
          "answer": "Ja, bei Patienten die aus gesundheitlichen Gründen\nnicht in die Praxis kommen können, machen wir\nnach Absprache Hausbesuche."
        }
      ]
    },
    {
      "category": "Vorsorge",
      "questions": [
        {
          "question": "Wann sollte ich zur Vorsorge kommen?",
          "answer": "Ab 35 Jahren steht Ihnen alle drei Jahre ein\nGesundheits-Check-up zu. Wir empfehlen zudem\nregelmäßige Krebsvorsorge-Untersuchungen."
        },
        {
          "question": "Welche Impfungen brauche ich als Erwachsener?",
          "answer": "Wichtig sind Auffrischungen für Tetanus, Diphtherie\nund Keuchhusten sowie die jährliche Grippeimpfung\nfür Risikogruppen. Wir prüfen Ihren Impfstatus."
        }
      ]
    }
  ],
  "ai_context": {
    "tone": [
      "vertrauensvoll",
      "nahbar",
      "kompetent",
      "bodenständig",
      "fürsorglich"
    ],
    "audience": "Patienten aller Altersgruppen.\nFamilien, die einen verlässlichen Hausarzt suchen.\nChronisch Kranke, die langfristige Betreuung brauchen.",
    "personality": [
      "familienorientiert",
      "geduldig",
      "erfahren",
      "ganzheitlich denkend"
    ],
    "key_messages": [
      "Wir kennen Sie und Ihre Geschichte",
      "Hausarzt für die ganze Familie",
      "Vorsorge ist die beste Medizin",
      "Persönliche Betreuung auf Augenhöhe"
    ],
    "language_style": {
      "avoid": [
        "zu technische Sprache",
        "distanzierte Formulierungen",
        "Übertreibungen"
      ],
      "prefer": [
        "persönliche Ansprache",
        "Ihr Hausarzt, wir begleiten Sie",
        "alltagsnahe Erklärungen"
      ]
    }
  },
  "seo": {
    "title_template": "{praxis_name} | Hausarzt in {ort}",
    "description_template": "Hausarztpraxis {praxis_name} in {ort}. ✓ Check-up ✓ Akutsprechstunde ✓ Für die ganze Familie. Ihr vertrauensvoller Hausarzt!",
    "keywords": [
      "hausarzt {ort}",
      "hausarztpraxis {ort}",
      "allgemeinarzt {ort}",
      "hausärztliche praxis {ort}",
      "check-up {ort}"
    ]
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Allgemeinmedizin",
    "de_female": "Fachärztin für Allgemeinmedizin",
    "en": "General Practitioner"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Allgemeinmedizin (m/w/d)",
        "employment_type": "fulltime",
        "category": "facharzt",
        "default_selected": false
      },
      {
        "id": "weiterbildung",
        "title_de": "Weiterbildungsassistenz Allgemeinmedizin (m/w/d)",
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
        "id": "mfa-teilzeit",
        "title_de": "MFA in Teilzeit (m/w/d)",
        "employment_type": "parttime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "verah",
        "title_de": "VERAH / NäPa (m/w/d)",
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
      "Weiterbildungsermächtigung vorhanden",
      "Familiäre Arbeitsatmosphäre"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": [
        {
          "type": "block_herobanner",
          "required": true,
          "content": {
            "title": "<h1>Willkommen in der {praxis_name}</h1>\n<p>Ihr Hausarzt in {ort}</p>",
            "image": "hero[0]"
          }
        },
        {
          "type": "block_imagetext",
          "required": true,
          "content": {
            "text": "<h2>Ihre Gesundheit in guten Händen</h2>\n<p>Als Ihre Hausärzte begleiten wir Sie und Ihre Familie in allen\nGesundheitsfragen. Von der Vorsorge bis zur Behandlung akuter\nErkrankungen – wir sind für Sie da, vertraut und kompetent.</p>",
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
                "title": "Check-up & Vorsorge",
                "text": "Früherkennung und Gesundheitsberatung"
              },
              {
                "title": "Akutsprechstunde",
                "text": "Schnelle Hilfe bei Erkrankungen"
              },
              {
                "title": "Chroniker-Betreuung",
                "text": "Langfristige Begleitung"
              },
              {
                "title": "Impfungen",
                "text": "Schutz für jedes Alter"
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
            "title": "<p>Wir behandeln die ganze Familie</p>\n<p>Von jung bis alt – kompetent und persönlich</p>",
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
    "typisch": "Breites Spektrum, Langzeit-Patienten, Prävention, Hausbesuche, erste Anlaufstelle",
    "aufgaben": {
      "mfa": "Blutabnahme, EKG, Lungenfunktion, Impfungen, Wundversorgung, Patientenannahme, DMP-Dokumentation",
      "arzt": "Diagnostik, Langzeit-Betreuung chronischer Patienten, Vorsorge, Hausbesuche, Überweisungsmanagement",
      "azubi": "Grundlagen Blutabnahme, Vitalzeichen, Patientenempfang, Terminvergabe, Praxishygiene"
    },
    "staerke": "Persönliche Bindung, breites Spektrum, Familienmedizin, Vertrauensverhältnis",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Notfallmedizin, DMP-Schulungen, Sonografie-Kurse",
      "moderne_ausstattung": "Digitales EKG, Ultraschall, Spirometrie, ePA"
    },
    "verbotene_phrasen": [
      "Diagnose und Behandlung von Patienten",
      "Betreuung von Patienten aller Art"
    ]
  }
}
