import type { Blueprint } from '../types.js'

export const kinderarzt: Blueprint = {
  "meta": {
    "id": "kinderarzt",
    "name": "Kinderarztpraxis",
    "name_variants": [
      "Kinderarzt",
      "Pädiater",
      "Kinderarztpraxis",
      "Praxis für Kinder- und Jugendmedizin"
    ],
    "icon": "baby",
    "description": "Praxis für Kinder- und Jugendmedizin"
  },
  "colors": {
    "primary": "#89e0f3",
    "primary_light": "#a8e8f7",
    "primary_dark": "#5fd4ed",
    "secondary": "#f0fbfd",
    "accent": "#fdd2d9",
    "alternatives": [
      {
        "name": "Himmelblau",
        "primary": "#89e0f3",
        "secondary": "#f0fbfd"
      },
      {
        "name": "Zartrosa",
        "primary": "#fdd2d9",
        "secondary": "#fff5f7"
      },
      {
        "name": "Naturgrün",
        "primary": "#b1b38b",
        "secondary": "#f7f7f2"
      },
      {
        "name": "Ozeanblau",
        "primary": "#5484aa",
        "secondary": "#f0f5f9"
      },
      {
        "name": "Apricot",
        "primary": "#f2cfb4",
        "secondary": "#fdf8f4"
      },
      {
        "name": "Sonnig",
        "primary": "#fede50",
        "secondary": "#fffef5"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "kinderarzt-hero-1",
        "local": "/images/healthcare/kinderarzt/hero-01.png",
        "url": "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1920&q=80",
        "alt": "Freundliche Kinderärztin untersucht lachendes Kind"
      },
      {
        "id": "kinderarzt-hero-2",
        "local": "/images/healthcare/kinderarzt/hero-02.png",
        "url": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1920&q=80",
        "alt": "Helles, modernes Behandlungszimmer"
      }
    ],
    "imagetext": [
      {
        "id": "kinderarzt-team",
        "local": "/images/healthcare/kinderarzt/team-01.png",
        "url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1024&q=80",
        "alt": "Kinderarzt-Team in freundlicher Atmosphäre"
      },
      {
        "id": "kinderarzt-behandlung",
        "local": "/images/healthcare/kinderarzt/behandlung-01.png",
        "url": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1024&q=80",
        "alt": "Einfühlsame Untersuchung eines Kindes"
      }
    ],
    "imagelist": [
      {
        "id": "kinderarzt-leistungen",
        "local": "/images/healthcare/kinderarzt/leistungen-01.png",
        "url": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1024&q=80",
        "alt": "Kinderärztliche Vorsorgeuntersuchung"
      }
    ],
    "banner": [
      {
        "id": "kinderarzt-banner",
        "local": "/images/healthcare/kinderarzt/banner-01.png",
        "url": "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=1920&q=80",
        "alt": "Glückliche Familie mit Kind"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Prävention",
      "icon_color": "#2D9B6E",
      "items": [
        {
          "name": "Vorsorgeuntersuchungen U1-J2",
          "icon": "clipboard-check",
          "ai_prompt": "Beschreibe die U-Untersuchungen für Eltern verständlich.\nBetone: Früherkennung, Entwicklungsbegleitung, Impfplan\nLänge: 2-3 Sätze",
          "default_description": "Die regelmäßigen Vorsorgeuntersuchungen von U1 bis J2 sind wichtig\nfür die gesunde Entwicklung Ihres Kindes. Wir erkennen frühzeitig\nmögliche Auffälligkeiten und begleiten Sie mit kompetenter Beratung."
        },
        {
          "name": "Impfungen",
          "icon": "syringe",
          "ai_prompt": "Erkläre das Impfangebot kindgerecht und beruhigend für Eltern.\nErwähne STIKO-Empfehlungen ohne Fachjargon.",
          "default_description": "Impfungen schützen Ihr Kind vor gefährlichen Krankheiten.\nWir beraten Sie zu allen empfohlenen Impfungen und führen\ndiese in einer kindgerechten, einfühlsamen Atmosphäre durch."
        },
        {
          "name": "Entwicklungsdiagnostik",
          "icon": "trending-up",
          "ai_prompt": "Beschreibe die Entwicklungsdiagnostik positiv und ohne Ängste.",
          "default_description": "Mit gezielten Untersuchungen erfassen wir den Entwicklungsstand\nIhres Kindes. Bei Bedarf unterstützen wir mit Förderempfehlungen\nund arbeiten eng mit Therapeuten zusammen."
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
          "ai_prompt": "Beschreibe die Akutsprechstunde als schnelle, unkomplizierte Hilfe.",
          "default_description": "Bei akuten Erkrankungen sind wir für Sie da. In unserer\nAkutsprechstunde behandeln wir Ihr Kind schnell und kompetent –\nauch ohne Termin."
        },
        {
          "name": "Infektionsbehandlung",
          "icon": "thermometer",
          "ai_prompt": "Erkläre die Behandlung von Kinderkrankheiten einfühlsam.",
          "default_description": "Erkältungen, Magen-Darm-Infekte oder Kinderkrankheiten –\nwir diagnostizieren sicher und behandeln sanft, damit Ihr\nKind schnell wieder gesund wird."
        }
      ]
    },
    {
      "category": "Spezialleistungen",
      "icon_color": "#3498DB",
      "items": [
        {
          "name": "Allergologie",
          "icon": "flower",
          "ai_prompt": "Beschreibe Allergiediagnostik und -behandlung bei Kindern.",
          "default_description": "Allergien nehmen bei Kindern zu. Wir bieten Allergietests\nund individuelle Behandlungskonzepte, um Beschwerden zu\nlindern und Lebensqualität zu verbessern."
        },
        {
          "name": "Ernährungsberatung",
          "icon": "apple",
          "default_description": "Eine gesunde Ernährung legt den Grundstein fürs Leben.\nWir beraten Sie zu altersgerechter Ernährung und unterstützen\nbei Gewichtsproblemen oder Unverträglichkeiten."
        },
        {
          "name": "ADHS-Diagnostik",
          "icon": "brain",
          "ai_prompt": "Beschreibe ADHS-Diagnostik sensibel und entstigmatisierend.",
          "default_description": "Bei Verdacht auf ADHS führen wir eine umfassende Diagnostik durch.\nGemeinsam entwickeln wir einen Behandlungsplan, der Ihr Kind\noptimal unterstützt."
        }
      ]
    }
  ],
  "faq": [
    {
      "category": "Vorsorge",
      "questions": [
        {
          "question": "Ab wann sollte mein Kind zum Kinderarzt?",
          "answer": "Die erste Untersuchung (U1) findet direkt nach der Geburt statt.\nDie U2 erfolgt zwischen dem 3. und 10. Lebenstag.\nDanach begleiten wir Sie mit regelmäßigen Vorsorgen bis ins Jugendalter."
        },
        {
          "question": "Was passiert bei den U-Untersuchungen?",
          "answer": "Bei den Vorsorgeuntersuchungen prüfen wir Wachstum, Entwicklung,\nHör- und Sehvermögen sowie die motorischen Fähigkeiten.\nAußerdem besprechen wir offene Fragen und geben Impfempfehlungen."
        },
        {
          "question": "Wie oft sollte mein Kind zur Vorsorge?",
          "answer": "Im ersten Jahr sind sechs Untersuchungen vorgesehen (U1-U6),\ndanach weitere wichtige Checks. Alle Termine finden Sie im\ngelben Untersuchungsheft."
        }
      ]
    },
    {
      "category": "Impfungen",
      "questions": [
        {
          "question": "Welche Impfungen empfehlen Sie?",
          "answer": "Wir orientieren uns an den Empfehlungen der Ständigen Impfkommission (STIKO).\nGerne besprechen wir den individuellen Impfplan für Ihr Kind persönlich."
        },
        {
          "question": "Sind Kombinationsimpfungen sicher?",
          "answer": "Ja, Kombinationsimpfungen sind gut erforscht und sicher.\nSie reduzieren die Anzahl der Termine und Einstiche,\nohne die Wirksamkeit zu beeinträchtigen."
        }
      ]
    },
    {
      "category": "Krankheit",
      "questions": [
        {
          "question": "Wann sollte ich mit meinem kranken Kind kommen?",
          "answer": "Bei hohem Fieber, anhaltendem Erbrechen, Atemnot oder wenn\nSie besorgt sind – kommen Sie lieber einmal zu viel.\nWir sind für Sie da."
        },
        {
          "question": "Was tun bei Fieber?",
          "answer": "Wichtig sind Ruhe und ausreichend Flüssigkeit. Ab 38,5°C\nkönnen fiebersenkende Mittel gegeben werden. Bei Säuglingen\nunter 3 Monaten mit Fieber kommen Sie bitte immer in die Praxis."
        }
      ]
    }
  ],
  "ai_context": {
    "tone": [
      "warmherzig",
      "einfühlsam",
      "kindgerecht",
      "beruhigend",
      "professionell"
    ],
    "audience": "Eltern von Kindern im Alter von 0-18 Jahren.\nOft besorgt, suchen Vertrauen und Kompetenz.\nWünschen sich kindgerechte Atmosphäre.",
    "personality": [
      "kinderfreundlich",
      "geduldig",
      "modern",
      "familienorientiert",
      "nahbar"
    ],
    "key_messages": [
      "Wir behandeln jedes Kind individuell",
      "Moderne Medizin in kindgerechter Atmosphäre",
      "Eltern sind wichtige Partner",
      "Vorsorge ist der beste Schutz"
    ],
    "language_style": {
      "avoid": [
        "medizinischer Fachjargon",
        "angsteinflößende Begriffe",
        "zu formelle Sprache",
        "komplizierte Satzstrukturen"
      ],
      "prefer": [
        "Ihr Kind statt das Kind",
        "wir begleiten Sie",
        "positive Formulierungen",
        "konkrete Beispiele"
      ]
    }
  },
  "seo": {
    "title_template": "{praxis_name} | Kinderarzt in {ort}",
    "description_template": "Kinderarztpraxis {praxis_name} in {ort}. ✓ Vorsorge U1-J2 ✓ Impfungen ✓ Liebevolle Betreuung. Jetzt Termin vereinbaren!",
    "keywords": [
      "kinderarzt {ort}",
      "kinderarztpraxis {ort}",
      "pädiater {ort}",
      "kinderarzt in der nähe",
      "u-untersuchung {ort}",
      "kinderimpfung {ort}"
    ]
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Kinder- und Jugendmedizin",
    "de_female": "Fachärztin für Kinder- und Jugendmedizin",
    "en": "Pediatrician"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Kinder- und Jugendmedizin (m/w/d)",
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
        "id": "kinderkrankenpflege",
        "title_de": "Kinderkrankenpflege (m/w/d)",
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
      "Kinderfreundliche Atmosphäre",
      "Vorsorgeuntersuchungen U1-U11"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": [
        {
          "type": "block_herobanner",
          "required": true,
          "content": {
            "title": "<h1>Willkommen in der {praxis_name}</h1>\n<p>Liebevolle Kindermedizin in {ort}</p>",
            "image": "hero[0]"
          },
          "ai_prompt": "Erstelle einen warmherzigen Hero-Text für eine Kinderarztpraxis.\n- H1: Begrüßung mit Praxisname\n- P: Kurzer Slogan (max 8 Worte)\nTone: einladend, kindgerecht, vertrauensvoll"
        },
        {
          "type": "block_imagetext",
          "required": true,
          "content": {
            "text": "<h2>Herzlich willkommen!</h2>\n<p>In unserer Praxis steht das Wohlbefinden Ihres Kindes an erster Stelle.\nMit viel Einfühlungsvermögen und modernster Diagnostik begleiten wir Sie\nvon der Geburt bis ins Jugendalter.</p>",
            "image": "imagetext[0]",
            "buttons": [
              {
                "label": "Mehr über uns",
                "url": "/ueber-uns"
              }
            ]
          },
          "ai_prompt": "Schreibe einen Willkommenstext für eine Kinderarztpraxis.\n- H2: Begrüßung\n- 2-3 Sätze über die Praxis\nBetone: Einfühlungsvermögen, moderne Ausstattung, Begleitung"
        },
        {
          "type": "block_imagelist",
          "required": true,
          "content": {
            "title": "Unsere Leistungen",
            "list": [
              {
                "title": "Vorsorgeuntersuchungen U1-J2",
                "text": "Früherkennung und Entwicklungsbegleitung"
              },
              {
                "title": "Impfungen",
                "text": "Schutz nach STIKO-Empfehlungen"
              },
              {
                "title": "Akutsprechstunde",
                "text": "Schnelle Hilfe bei Erkrankungen"
              },
              {
                "title": "Entwicklungsdiagnostik",
                "text": "Individuelle Förderung"
              }
            ],
            "image": "imagelist[0]",
            "buttons": [
              {
                "label": "Alle Leistungen",
                "url": "/leistungen"
              }
            ]
          },
          "ai_prompt": "Erstelle 4 Leistungs-Teaser für eine Kinderarztpraxis.\nFormat: title (Leistungsname) + text (1 Zeile Beschreibung)"
        },
        {
          "type": "block_banner",
          "required": true,
          "content": {
            "title": "<p>Wir sind für Sie da</p>\n<p>Termine auch kurzfristig möglich</p>",
            "buttons": [
              {
                "label": "Termin vereinbaren",
                "url": "/kontakt"
              }
            ]
          }
        },
        {
          "type": "block_practice_info",
          "required": true,
          "content": {
            "title": "Kontakt & Öffnungszeiten",
            "practice_hours": true,
            "buttons": [
              {
                "label": "Anfahrt planen",
                "url": "/kontakt"
              }
            ]
          }
        }
      ]
    }
  },
  "employer": {
    "typisch": "Vorsorge (U-Untersuchungen), Impfungen, Entwicklungsdiagnostik, Elternberatung",
    "aufgaben": {
      "mfa": "Vorsorge-Assistenz, Impfungen, Hör-/Sehtests, Dokumentation, Elternberatung",
      "arzt": "Vorsorgeuntersuchungen, Entwicklungsdiagnostik, Impfberatung, akute Erkrankungen",
      "azubi": "Kindgerechte Patientenannahme, Vitalzeichen, Impfdokumentation"
    },
    "staerke": "Positives Arbeitsumfeld, sinnstiftende Arbeit, Familien begleiten",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Impf-Updates, Entwicklungsdiagnostik, Notfallmedizin Kinder",
      "moderne_ausstattung": "Kindgerechte Räume, digitale Dokumentation, Seh-/Hörtest-Geräte"
    },
    "verbotene_phrasen": [
      "Behandlung von Kindern",
      "Betreuung der kleinen Patienten"
    ]
  }
}
