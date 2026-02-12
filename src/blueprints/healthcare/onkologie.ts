import type { Blueprint } from '../types.ts'

export const onkologie: Blueprint = {
  "meta": {
    "id": "onkologie",
    "name": "Onkologische Praxis",
    "name_variants": [
      "Onkologe",
      "Hämatologische Praxis",
      "Onkologisches Zentrum",
      "MVZ Onkologie",
      "Praxis für Hämatologie und Onkologie"
    ],
    "icon": "shield",
    "description": "Praxis für Onkologie und Hämatologie"
  },
  "colors": {
    "primary": "#7C3AED",
    "primary_light": "#8B5CF6",
    "primary_dark": "#5B21B6",
    "secondary": "#F5F3FF",
    "accent": "#F59E0B",
    "alternatives": [
      {
        "name": "Hoffnung Violett",
        "primary": "#7C3AED",
        "secondary": "#F5F3FF"
      },
      {
        "name": "Stärke Blau",
        "primary": "#1D4ED8",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Leben Grün",
        "primary": "#059669",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Warm Bernstein",
        "primary": "#D97706",
        "secondary": "#FFFBEB"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "onko-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Onkologisches Beratungsgespräch"
      }
    ],
    "imagetext": [
      {
        "id": "onko-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Onkologie-Team"
      }
    ],
    "imagelist": [
      {
        "id": "onko-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Onkologische Diagnostik"
      }
    ],
    "banner": [
      {
        "id": "onko-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Hoffnung und Stärke"
      }
    ]
  },
  "services": [
    {
      "category": "Therapie",
      "icon_color": "#7C3AED",
      "items": [
        {
          "name": "Chemotherapie",
          "icon": "syringe",
          "default_description": "In unserer Tagesklinik führen wir Chemotherapien in angenehmer\nAtmosphäre durch. Unser erfahrenes Team begleitet Sie sicher\nund einfühlsam durch jede Behandlung."
        },
        {
          "name": "Immuntherapie",
          "icon": "shield",
          "default_description": "Immuntherapien aktivieren Ihr körpereigenes Abwehrsystem gegen\nden Krebs. Wir setzen modernste Checkpoint-Inhibitoren und\nAntikörpertherapien ein."
        },
        {
          "name": "Zielgerichtete Therapie",
          "icon": "target",
          "default_description": "Zielgerichtete Medikamente greifen gezielt in die Wachstumswege\nvon Tumorzellen ein. Dank molekularer Diagnostik finden wir\ndie passende Therapie für Ihren Tumor."
        }
      ]
    },
    {
      "category": "Diagnostik & Nachsorge",
      "icon_color": "#F59E0B",
      "items": [
        {
          "name": "Onkologische Diagnostik",
          "icon": "search",
          "default_description": "Modernste Diagnostik ist die Grundlage jeder Therapie.\nMit Bildgebung, Labor und molekularen Analysen bestimmen wir\nArt und Stadium Ihrer Erkrankung präzise."
        },
        {
          "name": "Hämatologische Diagnostik",
          "icon": "droplet",
          "default_description": "Bluterkrankungen wie Lymphome, Leukämien und Anämien\ndiagnostizieren wir mit speziellen Blutuntersuchungen,\nKnochenmarkpunktionen und Flusszytometrie."
        },
        {
          "name": "Tumornachsorge",
          "icon": "calendar",
          "default_description": "Nach abgeschlossener Therapie begleiten wir Sie in der\nstrukturierten Nachsorge. Regelmäßige Kontrollen geben\nSicherheit und erkennen Veränderungen frühzeitig."
        },
        {
          "name": "Palliativmedizin",
          "icon": "heart",
          "default_description": "Wenn Heilung nicht mehr möglich ist, steht Ihre Lebensqualität\nim Mittelpunkt. Wir lindern Beschwerden und unterstützen\nSie und Ihre Angehörigen."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "einfühlsam",
      "fachkompetent",
      "zuversichtlich",
      "unterstützend"
    ],
    "audience": "Krebspatienten in Diagnostik, Therapie und Nachsorge.\nPatienten mit hämatologischen Erkrankungen. Angehörige.",
    "key_messages": [
      "An Ihrer Seite – durch jede Phase der Behandlung",
      "Individuelle Therapiekonzepte auf neuestem Stand",
      "Moderne Immuntherapie und zielgerichtete Behandlung",
      "Nachsorge für ein gutes Leben nach der Therapie"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Onkologie & Hämatologie in {ort}",
    "description_template": "Onkologische Praxis {praxis_name} in {ort}. ✓ Chemotherapie ✓ Immuntherapie ✓ Tumornachsorge. Kompetent an Ihrer Seite.",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Innere Medizin, Hämatologie und Onkologie",
    "de_female": "Fachärztin für Innere Medizin, Hämatologie und Onkologie",
    "en": "Oncologist & Hematologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Onkologie/Hämatologie (m/w/d)",
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
        "id": "mfa-tages",
        "title_de": "MFA Onkologische Tagesklinik (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "study-nurse",
        "title_de": "Study Nurse / Studienassistenz (m/w/d)",
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
      "Onkologische Fachweiterbildung",
      "Psychoonkologische Unterstützung für das Team"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Chemotherapie, Immuntherapie, Tumorboards, Palliativmedizin",
    "aufgaben": {
      "mfa": "Chemotherapie-Vorbereitung, Port-Versorgung, Blutbildkontrolle",
      "arzt": "Therapieplanung, Chemotherapie-Protokolle, Tumorboards, Palliativ",
      "azubi": "Laborarbeit-Grundlagen, Patientenempfang, Hygiene"
    },
    "staerke": "Sinnstiftende Medizin, intensiver Patientenkontakt, moderne Therapien",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Onkologische Fachkraft, Palliativmedizin, Psychoonkologie",
      "moderne_ausstattung": "Infusionszentrum, digitale Tumorboards, Telemedizin"
    },
    "verbotene_phrasen": [
      "Krebsbehandlung",
      "onkologische Versorgung"
    ]
  }
}
