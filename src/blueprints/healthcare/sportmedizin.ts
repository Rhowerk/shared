import type { Blueprint } from '../types.js'

export const sportmedizin: Blueprint = {
  "meta": {
    "id": "sportmedizin",
    "name": "Sportmedizinische Praxis",
    "name_variants": [
      "Sportmediziner",
      "Sportarzt",
      "Sportpraxis",
      "Praxis für Sportmedizin"
    ],
    "icon": "activity",
    "description": "Praxis für Sportmedizin und Leistungsdiagnostik"
  },
  "colors": {
    "primary": "#E67E22",
    "primary_light": "#F0A050",
    "primary_dark": "#BA6A1E",
    "secondary": "#FFF8F0",
    "accent": "#27AE60",
    "alternatives": [
      {
        "name": "Energie Orange",
        "primary": "#E67E22",
        "secondary": "#FFF8F0"
      },
      {
        "name": "Dynamisch Grün",
        "primary": "#27AE60",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Aktiv Blau",
        "primary": "#2980B9",
        "secondary": "#F0F7FC"
      },
      {
        "name": "Power Rot",
        "primary": "#E74C3C",
        "secondary": "#FEF2F2"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "sport-hero-1",
        "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
        "alt": "Sportmedizinische Untersuchung"
      }
    ],
    "imagetext": [
      {
        "id": "sport-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Sportmedizin-Team"
      }
    ],
    "imagelist": [
      {
        "id": "sport-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Leistungsdiagnostik"
      }
    ],
    "banner": [
      {
        "id": "sport-banner",
        "url": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80",
        "alt": "Sportler in Aktion"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#E67E22",
      "items": [
        {
          "name": "Sportmedizinische Untersuchung",
          "icon": "clipboard-check",
          "default_description": "Die sportmedizinische Untersuchung umfasst Anamnese, körperliche Untersuchung und je nach Fragestellung EKG oder Belastungstest. Ziel ist es, die Belastbarkeit einzuschätzen und gesundheitliche Risiken beim Sport zu erkennen.",
          "igel": true
        },
        {
          "name": "Leistungsdiagnostik",
          "icon": "activity",
          "default_description": "Mit Spiroergometrie oder Laktatstufentest wird die körperliche Leistungsfähigkeit gemessen. Die Ergebnisse dienen als Grundlage zur Bestimmung von Trainingsbereichen.",
          "igel": true
        },
        {
          "name": "Sporttauglichkeitsuntersuchung",
          "icon": "check-circle",
          "default_description": "Für Vereinssport, Wettkämpfe oder Tauchsport wird häufig eine ärztliche Bescheinigung der Sporttauglichkeit verlangt. Untersuchungsumfang und Attest richten sich nach Sportart und Vorgaben des Verbands.",
          "igel": true
        }
      ]
    },
    {
      "category": "Therapie",
      "icon_color": "#27AE60",
      "items": [
        {
          "name": "Sportverletzungen",
          "icon": "bandage",
          "default_description": "Diagnostik und Behandlung von Sportverletzungen wie Muskelverletzungen, Bänderrissen oder Knochenbrüchen. Dazu gehört die Planung der schrittweisen Rückkehr zum Sport."
        },
        {
          "name": "Trainingsberatung",
          "icon": "trending-up",
          "default_description": "Auf Grundlage von Leistungsdaten und Gesundheitszustand werden Empfehlungen zu Trainingsumfang und Belastungsintensität erarbeitet, etwa zu Herzfrequenzbereichen.",
          "igel": true
        },
        {
          "name": "Sportorthopädie",
          "icon": "bone",
          "default_description": "Behandlung von Überlastungsschäden, Gelenkbeschwerden und Fehlstellungen bei sportlich aktiven Menschen. Die Therapie berücksichtigt die Anforderungen der jeweiligen Sportart."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "motivierend",
      "fachkompetent",
      "dynamisch",
      "sportlich-professionell"
    ],
    "audience": "Sportler aller Leistungsklassen, Breitensportler, Vereinssportler,\nPatienten mit Sportverletzungen, Wiedereinsteiger.",
    "key_messages": [
      "Medizin für Sportlerinnen und Sportler aller Leistungsklassen",
      "Belastbarkeit und Gesundheit im Sport",
      "Verletzungen vorbeugen und die Rückkehr zum Sport planen",
      "Sporttauglichkeit ärztlich beurteilt"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Sportmedizin in {ort}",
    "description_template": "Sportmedizinische Praxis {praxis_name} in {ort}. ✓ Leistungsdiagnostik ✓ Sportverletzungen ✓ Sporttauglichkeit. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Orthopädie – Sportmedizin",
    "de_female": "Fachärztin für Orthopädie – Sportmedizin",
    "en": "Sports Medicine Specialist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Sportmedizin (m/w/d)",
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
      "Leistungsdiagnostik-Fortbildung",
      "Sportphysiotherapie-Kooperation"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Sportmedizinische Untersuchung, Sportverletzungen, Prävention, Trainingsberatung",
    "aufgaben": {
      "mfa": "Belastungs-EKG-Assistenz, Laktatmessung, Tapingverbände, Ultraschall",
      "arzt": "Leistungsdiagnostik, Sportverletzungen, Trainingsplanung, Prävention",
      "azubi": "Belastungstest-Grundlagen, Patientenempfang, Sportler-Betreuung"
    },
    "staerke": "Aktive Patienten, schnelle Ergebnisse, sportliches Arbeitsumfeld",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Sportmedizin-Lizenz, Manualtherapie, Ernährungsmedizin",
      "moderne_ausstattung": "Laufbandergometrie, Laktatdiagnostik, Ultraschall"
    },
    "verbotene_phrasen": [
      "sportmedizinische Behandlung",
      "Betreuung von Sportlern"
    ]
  }
}
