import type { Blueprint } from '../types.js'

export const augenheilkunde: Blueprint = {
  "meta": {
    "id": "augenheilkunde",
    "name": "Augenarztpraxis",
    "name_variants": [
      "Augenarzt",
      "Augenärztin",
      "Ophthalmologie",
      "Praxis für Augenheilkunde"
    ],
    "icon": "eye",
    "description": "Praxis für Augenheilkunde und Sehkorrektur"
  },
  "colors": {
    "primary": "#3498DB",
    "primary_light": "#5DADE2",
    "primary_dark": "#2980B9",
    "secondary": "#F0F8FF",
    "accent": "#2ECC71",
    "alternatives": [
      {
        "name": "Klar Blau",
        "primary": "#3498DB",
        "secondary": "#F0F8FF"
      },
      {
        "name": "Sehkraft Grün",
        "primary": "#2ECC71",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Modern Türkis",
        "primary": "#00B5AD",
        "secondary": "#F0FDFC"
      },
      {
        "name": "Elegant Dunkelblau",
        "primary": "#2C3E50",
        "secondary": "#F5F7FA"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "auge-hero-1",
        "url": "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1920&q=80",
        "alt": "Augenärztin bei der Untersuchung"
      }
    ],
    "imagetext": [
      {
        "id": "auge-team",
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1024&q=80",
        "alt": "Augenarztpraxis Team"
      }
    ],
    "imagelist": [
      {
        "id": "auge-leistungen",
        "url": "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=1024&q=80",
        "alt": "Moderne Augenuntersuchung"
      }
    ],
    "banner": [
      {
        "id": "auge-banner",
        "url": "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=1920&q=80",
        "alt": "Klare Sicht auf die Natur"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Diagnostik",
      "icon_color": "#3498DB",
      "items": [
        {
          "name": "Augenärztliche Untersuchung",
          "icon": "eye",
          "default_description": "Bei der augenärztlichen Untersuchung prüfen wir Sehschärfe, Augendruck\nund Augengesundheit umfassend. Mit modernen Geräten erkennen wir\nauch kleinste Veränderungen."
        },
        {
          "name": "Sehtest / Refraktion",
          "icon": "search",
          "default_description": "Wir bestimmen Ihre Sehstärke präzise und ermitteln die optimale\nBrillen- oder Kontaktlinsenstärke. Grundlage für entspanntes Sehen\nin allen Entfernungen."
        },
        {
          "name": "Augendruckmessung (Glaukom)",
          "icon": "gauge",
          "default_description": "Die Augendruckmessung ist wichtig zur Früherkennung des Grünen Stars.\nErhöhter Augendruck kann den Sehnerv schädigen - regelmäßige\nKontrollen schützen Ihr Augenlicht."
        },
        {
          "name": "Netzhautuntersuchung",
          "icon": "sun",
          "default_description": "Mit der Netzhautuntersuchung erkennen wir Erkrankungen wie\nMakuladegeneration oder diabetische Veränderungen frühzeitig.\nOft nutzen wir dafür spezielle Tropfen zur Pupillenerweiterung."
        },
        {
          "name": "Führerschein-Sehtest",
          "icon": "car",
          "default_description": "Für den Führerschein benötigen Sie einen Sehtest. Wir prüfen\nIhre Sehschärfe und stellen die erforderliche Bescheinigung aus."
        }
      ]
    },
    {
      "category": "Augenerkrankungen",
      "icon_color": "#2ECC71",
      "items": [
        {
          "name": "Grauer Star Vorsorge (Katarakt)",
          "icon": "cloud",
          "default_description": "Beim Grauen Star trübt sich die Augenlinse. Wir erkennen die\nVeränderungen früh und beraten Sie, wann eine Operation sinnvoll ist."
        },
        {
          "name": "Grüner Star Vorsorge (Glaukom)",
          "icon": "alert-triangle",
          "default_description": "Der Grüne Star schädigt schleichend den Sehnerv. Mit regelmäßiger\nVorsorge erkennen wir die Erkrankung früh und können das Fortschreiten\naufhalten."
        },
        {
          "name": "Makuladegeneration (AMD)",
          "icon": "target",
          "default_description": "Die altersbedingte Makuladegeneration betrifft das Zentrum der Netzhaut.\nFrüherkennung und moderne Therapien können das Sehvermögen erhalten."
        },
        {
          "name": "Trockenes Auge Behandlung",
          "icon": "droplet",
          "default_description": "Trockene Augen sind unangenehm und weit verbreitet. Wir finden\ndie Ursache und empfehlen die passende Behandlung - von Tropfen\nbis zu speziellen Therapien."
        }
      ]
    },
    {
      "category": "Spezialleistungen",
      "icon_color": "#00B5AD",
      "items": [
        {
          "name": "Kontaktlinsenanpassung",
          "icon": "circle",
          "default_description": "Kontaktlinsen müssen perfekt sitzen. Wir passen Ihre Linsen\nindividuell an und zeigen Ihnen die richtige Handhabung und Pflege."
        },
        {
          "name": "Kinderaugenheilkunde",
          "icon": "baby",
          "default_description": "Kinderaugen brauchen besondere Aufmerksamkeit. Wir untersuchen\nspielerisch und erkennen Sehschwächen, Schielen und andere\nProbleme frühzeitig."
        },
        {
          "name": "Schielen (Strabismus)",
          "icon": "move",
          "default_description": "Schielen sollte früh behandelt werden. Wir diagnostizieren die\nArt des Schielens und besprechen Behandlungsoptionen wie Brille,\nAbdecken oder Operation."
        },
        {
          "name": "Laserbehandlung",
          "icon": "zap",
          "default_description": "Mit modernen Lasern behandeln wir verschiedene Augenerkrankungen.\nVon der Netzhautbehandlung bis zur refraktiven Chirurgie -\nwir beraten Sie zu den Möglichkeiten."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "professionell",
      "präzise",
      "beruhigend",
      "kompetent"
    ],
    "audience": "Patienten aller Altersgruppen - von Kindern mit Sehschwäche\nbis Senioren mit Grauem Star oder Makuladegeneration.",
    "key_messages": [
      "Klare Sicht für mehr Lebensqualität",
      "Modernste Diagnostik für präzise Ergebnisse",
      "Grauer und Grüner Star Früherkennung",
      "Kompetente Brillen- und Kontaktlinsenberatung"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Augenarzt in {ort}",
    "description_template": "Augenarztpraxis {praxis_name} in {ort}. ✓ Sehtest ✓ Grauer Star ✓ Glaukom-Vorsorge. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Augenheilkunde",
    "de_female": "Fachärztin für Augenheilkunde",
    "en": "Ophthalmologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Augenheilkunde (m/w/d)",
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
        "id": "orthoptist",
        "title_de": "Orthoptik (m/w/d)",
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
      "Moderne Diagnostikgeräte",
      "OCT, Perimetrie"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Sehtest, Augeninnendruckmessung, OCT, Netzhaut-Diagnostik",
    "aufgaben": {
      "mfa": "Sehtest, Augeninnendruck, OCT-Aufnahmen, Gesichtsfeldprüfung, Tropfen",
      "arzt": "Spaltlampe, OCT-Befundung, Netzhaut-Diagnostik, Laser, Katarakt-OP",
      "azubi": "Sehtest-Grundlagen, Patientenführung, Tropfenapplikation"
    },
    "staerke": "High-Tech-Diagnostik, schnelle Ergebnisse, lebensqualitätsverbessernd",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "OCT-Zertifikat, OP-Assistenz, Orthoptik-Kurse",
      "moderne_ausstattung": "OCT, Gesichtsfeldperimeter, Funduskamera, Laser"
    },
    "verbotene_phrasen": [
      "Behandlung von Augenerkrankungen",
      "augenärztliche Versorgung"
    ]
  }
}
