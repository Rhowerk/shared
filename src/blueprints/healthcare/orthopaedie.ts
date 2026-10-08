import type { Blueprint } from '../types.js'

export const orthopaedie: Blueprint = {
  "meta": {
    "id": "orthopaedie",
    "name": "Orthopädische Praxis",
    "name_variants": [
      "Orthopäde",
      "Orthopädische Praxis",
      "Praxis für Orthopädie",
      "Orthopädie und Unfallchirurgie"
    ],
    "icon": "bone",
    "description": "Praxis für Orthopädie und Unfallchirurgie"
  },
  "colors": {
    "primary": "#E67E22",
    "primary_light": "#F39C4D",
    "primary_dark": "#BA6218",
    "secondary": "#FFF8F0",
    "accent": "#3498DB",
    "alternatives": [
      {
        "name": "Aktiv Orange",
        "primary": "#E67E22",
        "secondary": "#FFF8F0"
      },
      {
        "name": "Sportlich Blau",
        "primary": "#2980B9",
        "secondary": "#F0F7FC"
      },
      {
        "name": "Natürlich Grün",
        "primary": "#27AE60",
        "secondary": "#F0FAF4"
      },
      {
        "name": "Modern Anthrazit",
        "primary": "#34495E",
        "secondary": "#F5F7F9"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "ortho-hero-1",
        "url": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80",
        "alt": "Orthopäde untersucht Knie eines Patienten"
      },
      {
        "id": "ortho-hero-2",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
        "alt": "Moderne orthopädische Praxis"
      }
    ],
    "imagetext": [
      {
        "id": "ortho-team",
        "url": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1024&q=80",
        "alt": "Orthopädisches Ärzteteam"
      },
      {
        "id": "ortho-behandlung",
        "url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1024&q=80",
        "alt": "Orthopädische Untersuchung"
      }
    ],
    "imagelist": [
      {
        "id": "ortho-leistungen",
        "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1024&q=80",
        "alt": "Sportmedizinische Behandlung"
      }
    ],
    "banner": [
      {
        "id": "ortho-banner",
        "url": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80",
        "alt": "Aktiver Mensch beim Sport"
      }
    ]
  },
  "services": [
    {
      "category": "Wirbelsäule & Rücken",
      "icon_color": "#E67E22",
      "items": [
        {
          "name": "Rückenschmerzen",
          "icon": "spine",
          "default_description": "Rückenschmerzen können von Muskeln, Gelenken, Bandscheiben oder Nerven ausgehen. Nach Untersuchung und gegebenenfalls Bildgebung werden Behandlungsmöglichkeiten wie Physiotherapie, Medikamente oder Injektionen besprochen."
        },
        {
          "name": "Bandscheibenprobleme",
          "icon": "disc",
          "default_description": "Ein Bandscheibenvorfall kann Rückenschmerzen und ausstrahlende Beschwerden in Arme oder Beine verursachen. In vielen Fällen wird zunächst konservativ behandelt; ob eine Operation nötig ist, hängt vom Befund ab."
        },
        {
          "name": "Skoliose",
          "icon": "curved-arrow",
          "default_description": "Bei einer Skoliose ist die Wirbelsäule seitlich verkrümmt und verdreht. Die Behandlung richtet sich nach Ausmaß und Alter und kann Physiotherapie, ein Korsett oder in ausgeprägten Fällen eine Operation umfassen."
        }
      ]
    },
    {
      "category": "Gelenke",
      "icon_color": "#3498DB",
      "items": [
        {
          "name": "Knieschmerzen",
          "icon": "knee",
          "default_description": "Knieschmerzen können durch Arthrose, Meniskus- oder Bandverletzungen entstehen. Nach Untersuchung und Bildgebung werden konservative und operative Behandlungsmöglichkeiten besprochen."
        },
        {
          "name": "Hüftbeschwerden",
          "icon": "hip",
          "default_description": "Hüftbeschwerden haben unterschiedliche Ursachen, etwa Arthrose, Entzündungen oder angeborene Fehlstellungen wie die Hüftdysplasie. Die Behandlung reicht von Physiotherapie und Medikamenten bis zum Gelenkersatz."
        },
        {
          "name": "Schulter & Arm",
          "icon": "shoulder",
          "default_description": "Schulterbeschwerden wie ein Engpasssyndrom (Impingement), eine Schultersteife oder Sehnenrisse der Rotatorenmanschette schränken die Beweglichkeit ein. Je nach Befund kommen konservative oder operative Behandlungen in Frage."
        }
      ]
    },
    {
      "category": "Sportmedizin",
      "icon_color": "#27AE60",
      "items": [
        {
          "name": "Sportverletzungen",
          "icon": "running",
          "default_description": "Diagnostik und Behandlung von Verletzungen und Überlastungsschäden beim Sport, etwa an Bändern, Muskeln oder Sehnen. Dazu gehört die Planung der schrittweisen Rückkehr zur sportlichen Belastung."
        },
        {
          "name": "Leistungsdiagnostik",
          "icon": "chart-line",
          "default_description": "Die Leistungsdiagnostik misst die körperliche Leistungsfähigkeit, etwa mit Belastungstests und Laktatmessung. Die Ergebnisse dienen als Grundlage für die Trainingssteuerung.",
          "igel": true
        }
      ]
    },
    {
      "category": "Therapien",
      "icon_color": "#9B59B6",
      "items": [
        {
          "name": "Stoßwellentherapie",
          "icon": "zap",
          "default_description": "Bei der Stoßwellentherapie werden energiereiche Schallwellen auf schmerzendes Gewebe gerichtet, zum Beispiel bei Fersensporn, Tennisarm oder Kalkschulter. Gesetzliche Krankenkassen übernehmen die Kosten nur beim Fersenschmerz unter bestimmten Voraussetzungen.",
          "igel": true
        },
        {
          "name": "Akupunktur",
          "icon": "needle",
          "default_description": "Akupunktur wird ergänzend bei chronischen Schmerzen eingesetzt. Gesetzliche Krankenkassen übernehmen sie bei chronischen Rückenschmerzen und bei Kniegelenksarthrose."
        },
        {
          "name": "Infiltrationstherapie",
          "icon": "syringe",
          "default_description": "Bei der Infiltrationstherapie werden Medikamente wie örtliche Betäubungsmittel oder Kortison gezielt an Gelenke, Sehnen oder Nervenwurzeln gespritzt. Ziel ist die Linderung von Schmerzen und Entzündung. Injektionen mit Hyaluronsäure sind in der Regel eine Selbstzahlerleistung."
        }
      ]
    }
  ],
  "faq": [
    {
      "category": "Allgemeine Fragen",
      "questions": [
        {
          "question": "Brauche ich eine Überweisung?",
          "answer": "Nein, Sie können auch ohne Überweisung zu uns kommen.\nAls Facharztpraxis sind wir direkt für Sie da."
        },
        {
          "question": "Muss ich operiert werden?",
          "answer": "Nicht zwangsläufig. Wir setzen auf das Prinzip \"konservativ vor operativ\"\nund operieren nur, wenn es wirklich notwendig ist."
        }
      ]
    },
    {
      "category": "Beschwerden",
      "questions": [
        {
          "question": "Was hilft bei akuten Rückenschmerzen?",
          "answer": "Erste Hilfe: Bewegung statt Bettruhe, Wärme und bei Bedarf\nSchmerzmittel. Kommen Sie zu uns, damit wir die Ursache\nabklären und gezielt behandeln können."
        },
        {
          "question": "Ab wann sollte ich bei Gelenkschmerzen zum Arzt?",
          "answer": "Wenn Schmerzen länger als 2 Wochen anhalten, nach Verletzungen\noder bei Schwellungen sollten Sie vorbeikommen.\nJe früher, desto besser die Behandlungschancen."
        }
      ]
    }
  ],
  "ai_context": {
    "tone": [
      "kompetent",
      "motivierend",
      "sachlich",
      "zuversichtlich",
      "aktiv"
    ],
    "audience": "Patienten mit Schmerzen im Bewegungsapparat.\nSportler mit Verletzungen.\nMenschen mit chronischen Beschwerden.\nSuchen Abklärung ihrer Beschwerden und langfristige Behandlungsmöglichkeiten.",
    "personality": [
      "sportlich",
      "lösungsorientiert",
      "modern",
      "pragmatisch"
    ],
    "key_messages": [
      "Beweglichkeit im Alltag",
      "Konservative Behandlung vor Operation, wo möglich",
      "Abklärung akuter und chronischer Beschwerden",
      "Diagnostik und Therapie des Bewegungsapparats"
    ],
    "language_style": {
      "avoid": [
        "zu viel Fachjargon",
        "negative Prognosen",
        "Passivkonstruktionen"
      ],
      "prefer": [
        "aktive, positive Sprache",
        "wieder aktiv werden",
        "konkrete Behandlungsoptionen"
      ]
    }
  },
  "seo": {
    "title_template": "{praxis_name} | Orthopäde in {ort}",
    "description_template": "Orthopädische Praxis {praxis_name} in {ort}. ✓ Rückenschmerzen ✓ Gelenkprobleme ✓ Sportmedizin. Schnelle Termine. Jetzt anrufen!",
    "keywords": [
      "orthopäde {ort}",
      "orthopädische praxis {ort}",
      "rückenschmerzen {ort}",
      "knieschmerzen {ort}",
      "sportmedizin {ort}"
    ]
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Orthopädie",
    "de_female": "Fachärztin für Orthopädie",
    "en": "Orthopedist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Orthopädie (m/w/d)",
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
        "id": "mfa-roentgen",
        "title_de": "MFA Röntgen & Chirotherapie (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "physio",
        "title_de": "Physiotherapie (m/w/d)",
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
      "Röntgen-Qualifikation möglich",
      "Abwechslungsreiche Tätigkeit"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": [
        {
          "type": "block_herobanner",
          "required": true,
          "content": {
            "title": "<h1>Willkommen in der {praxis_name}</h1>\n<p>Orthopädie in {ort}</p>",
            "image": "hero[0]"
          }
        },
        {
          "type": "block_imagetext",
          "required": true,
          "content": {
            "text": "<h2>Wieder aktiv werden</h2>\n<p>Bewegung ist Leben. Als Spezialisten für den Bewegungsapparat\nhelfen wir Ihnen, Schmerzen zu überwinden und Ihre Mobilität\nwiederzuerlangen – ob nach Verletzung oder bei chronischen Beschwerden.</p>",
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
            "title": "Unsere Schwerpunkte",
            "list": [
              {
                "title": "Wirbelsäule & Rücken",
                "text": "Von Bandscheibe bis Skoliose"
              },
              {
                "title": "Gelenke & Arthrosen",
                "text": "Knie, Hüfte, Schulter"
              },
              {
                "title": "Sportmedizin",
                "text": "Für Hobby- und Leistungssportler"
              },
              {
                "title": "Konservative Therapie",
                "text": "OP vermeiden wenn möglich"
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
            "title": "<p>Schmerzen im Bewegungsapparat?</p>\n<p>Wir helfen Ihnen schnell und kompetent</p>",
            "buttons": [
              {
                "label": "Jetzt Termin sichern",
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
    "typisch": "Diagnostik und konservative Therapie des Bewegungsapparats, Gelenk- und Rückenbeschwerden, Sportverletzungen",
    "aufgaben": {
      "mfa": "Röntgen-Assistenz, Gipsverbände, Injektionsvorbereitung, Stoßwellentherapie-Assistenz",
      "arzt": "Diagnostik Bewegungsapparat, konservative Therapie, OP-Planung, Injektionen",
      "azubi": "Grundlagen Röntgen, Verbandstechnik, Patientenführung"
    },
    "staerke": "Sichtbare Behandlungserfolge, handwerkliche Medizin, aktive Patienten",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "OP-Kurse, Manuelle Therapie, Sportmedizin-Zertifikate",
      "moderne_ausstattung": "Digitales Röntgen, 3D-Wirbelsäulenvermessung, Stoßwellengerät"
    },
    "verbotene_phrasen": [
      "Diagnose und Behandlung von Patienten",
      "Betreuung orthopädischer Patienten"
    ]
  }
}
