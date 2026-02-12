import type { Blueprint } from '../types.js'

export const zahnarzt: Blueprint = {
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
          "default_description": "Die professionelle Zahnreinigung entfernt Beläge und Verfärbungen\ngründlich und schützt vor Karies und Parodontitis.\nFür ein sauberes, frisches Mundgefühl."
        },
        {
          "name": "Vorsorgeuntersuchung",
          "icon": "search",
          "default_description": "Regelmäßige Kontrollen sind der beste Schutz vor größeren Problemen.\nWir erkennen Karies und Zahnfleischerkrankungen frühzeitig."
        },
        {
          "name": "Kinderzahnheilkunde",
          "icon": "baby",
          "default_description": "Spielerisch und behutsam führen wir die Kleinsten an die\nZahnpflege heran. Denn gesunde Milchzähne sind die Basis\nfür gesunde bleibende Zähne."
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
          "default_description": "Strahlend weiße Zähne für ein selbstbewusstes Lächeln.\nUnser professionelles Bleaching ist schonend und zeigt\nsofort sichtbare Ergebnisse."
        },
        {
          "name": "Veneers",
          "icon": "layers",
          "default_description": "Hauchdünne Keramikschalen für perfekte Frontzähne.\nVeneers korrigieren Form, Farbe und kleine Fehlstellungen\nfür ein harmonisches Lächeln."
        },
        {
          "name": "Invisalign",
          "icon": "move",
          "default_description": "Die unsichtbare Zahnkorrektur für Erwachsene.\nTransparente Schienen richten Ihre Zähne diskret und\nkomfortabel aus."
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
          "default_description": "Zahnimplantate sind die hochwertigste Form des Zahnersatzes.\nSie sehen aus wie natürliche Zähne und halten ein Leben lang."
        },
        {
          "name": "Kronen & Brücken",
          "icon": "crown",
          "default_description": "Wenn Zähne stark beschädigt oder verloren sind, stellen\nKronen und Brücken Funktion und Ästhetik wieder her."
        },
        {
          "name": "Prothesen",
          "icon": "smile",
          "default_description": "Moderne Prothesen sitzen sicher und sehen natürlich aus.\nWir finden die beste Lösung für Ihre Bedürfnisse."
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
          "default_description": "Dank moderner Technik können wir auch stark entzündete\nZähne oft noch retten. Unsere Wurzelbehandlungen sind\nschonend und präzise."
        },
        {
          "name": "Parodontitisbehandlung",
          "icon": "shield",
          "default_description": "Parodontitis gefährdet nicht nur die Zähne, sondern den\nganzen Körper. Wir behandeln Zahnfleischerkrankungen\ngründlich und nachhaltig."
        },
        {
          "name": "Schmerzbehandlung",
          "icon": "heart",
          "default_description": "Bei akuten Zahnschmerzen sind wir schnell für Sie da.\nEinfühlsame Behandlung bringt rasche Linderung."
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
    "audience": "Erwachsene Patienten, teils mit Zahnarztangst.\nSuchen schmerzarme, moderne Behandlung.\nInteressiert an Ästhetik und Prophylaxe.",
    "personality": [
      "kompetent",
      "geduldig",
      "modern",
      "ästhetisch orientiert"
    ],
    "key_messages": [
      "Moderne Technik für sanfte Behandlung",
      "Ästhetik und Funktion im Einklang",
      "Angstpatienten willkommen",
      "Vorsorge statt Reparatur"
    ],
    "language_style": {
      "avoid": [
        "angsteinflößende Begriffe (Bohrer, Spritze)",
        "zu technische Fachbegriffe",
        "Passiv-Konstruktionen"
      ],
      "prefer": [
        "positive Formulierungen",
        "sanft, schonend, schmerzfrei",
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
    "typisch": "Prophylaxe, Füllungen, Prothetik, Angstpatienten, ästhetische Zahnheilkunde",
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
}
