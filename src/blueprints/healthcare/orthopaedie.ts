import type { Blueprint } from '../types.ts'

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
          "default_description": "Rückenschmerzen haben viele Ursachen. Mit gezielter Diagnostik\nfinden wir den Ursprung und behandeln individuell –\nob mit Physiotherapie, Injektionen oder anderen Methoden."
        },
        {
          "name": "Bandscheibenprobleme",
          "icon": "disc",
          "default_description": "Bandscheibenvorfälle müssen nicht immer operiert werden.\nWir bieten konservative und minimalinvasive Therapien\nfür eine schnelle Schmerzlinderung."
        },
        {
          "name": "Skoliose",
          "icon": "curved-arrow",
          "default_description": "Wirbelsäulenverkrümmungen erfordern individuelle Therapiekonzepte.\nWir behandeln Kinder, Jugendliche und Erwachsene mit\nmaßgeschneiderten Ansätzen."
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
          "default_description": "Das Knie ist ein komplexes Gelenk. Ob Arthrose, Meniskusschaden\noder Kreuzbandriss – wir diagnostizieren präzise und\nbehandeln effektiv."
        },
        {
          "name": "Hüftbeschwerden",
          "icon": "hip",
          "default_description": "Hüftschmerzen schränken die Lebensqualität stark ein.\nVon Arthrose bis Hüftdysplasie bieten wir moderne\nBehandlungsmöglichkeiten."
        },
        {
          "name": "Schulter & Arm",
          "icon": "shoulder",
          "default_description": "Schulterprobleme wie Impingement, Frozen Shoulder oder\nRotatorenmanschettenriss behandeln wir mit bewährten\nkonservativen und operativen Methoden."
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
          "default_description": "Schnelle Hilfe bei Sportverletzungen. Wir behandeln\nHobby- und Leistungssportler und begleiten Sie\nzurück zur vollen Belastbarkeit."
        },
        {
          "name": "Leistungsdiagnostik",
          "icon": "chart-line",
          "default_description": "Mit moderner Diagnostik analysieren wir Ihre\nsportliche Leistungsfähigkeit und optimieren\nIhr Training."
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
          "default_description": "Die Stoßwellentherapie lindert Schmerzen bei\nFersensporn, Tennisarm und Kalkschulter –\nohne Operation, ambulant und effektiv."
        },
        {
          "name": "Akupunktur",
          "icon": "needle",
          "default_description": "Akupunktur ergänzt unsere Behandlungen bei\nchronischen Schmerzen und fördert die\nSelbstheilung des Körpers."
        },
        {
          "name": "Infiltrationstherapie",
          "icon": "syringe",
          "default_description": "Gezielte Injektionen mit entzündungshemmenden\nMedikamenten oder Hyaluronsäure bringen schnelle\nLinderung direkt am Ort des Schmerzes."
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
    "audience": "Patienten mit Schmerzen im Bewegungsapparat.\nSportler mit Verletzungen.\nMenschen mit chronischen Beschwerden.\nSuchen schnelle Hilfe und langfristige Lösungen.",
    "personality": [
      "sportlich",
      "lösungsorientiert",
      "modern",
      "pragmatisch"
    ],
    "key_messages": [
      "Bewegung ist Leben",
      "Konservativ vor operativ",
      "Schnelle Hilfe bei akuten Beschwerden",
      "Moderne Diagnostik und Therapie"
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
    "typisch": "Manuelle Therapie, OP-Planung, Reha-Begleitung, sichtbare Behandlungserfolge",
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
