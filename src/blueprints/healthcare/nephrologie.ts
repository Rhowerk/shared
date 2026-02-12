import type { Blueprint } from '../types.ts'

export const nephrologie: Blueprint = {
  "meta": {
    "id": "nephrologie",
    "name": "Nephrologische Praxis",
    "name_variants": [
      "Nephrologe",
      "Nierenpraxis",
      "Dialysepraxis",
      "Dialysezentrum",
      "Praxis für Nephrologie"
    ],
    "icon": "droplet",
    "description": "Praxis für Nephrologie und Dialyse"
  },
  "colors": {
    "primary": "#2980B9",
    "primary_light": "#5DADE2",
    "primary_dark": "#1A5276",
    "secondary": "#F0F7FC",
    "accent": "#48C9B0",
    "alternatives": [
      {
        "name": "Klassisch Blau",
        "primary": "#2980B9",
        "secondary": "#F0F7FC"
      },
      {
        "name": "Ruhig Türkis",
        "primary": "#17A2B8",
        "secondary": "#F0FDFA"
      },
      {
        "name": "Professionell Marine",
        "primary": "#34495E",
        "secondary": "#F8F9FA"
      },
      {
        "name": "Warm Blaugrau",
        "primary": "#607D8B",
        "secondary": "#F5F7F8"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "nephro-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Nephrologische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "nephro-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Nephrologisches Team"
      }
    ],
    "imagelist": [
      {
        "id": "nephro-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Diagnostik"
      }
    ],
    "banner": [
      {
        "id": "nephro-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Gesundheit und Wohlbefinden"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#2980B9",
      "items": [
        {
          "name": "Nierendiagnostik",
          "icon": "search",
          "default_description": "Mit Blut- und Urinuntersuchungen sowie Bildgebung beurteilen wir\ndie Funktion Ihrer Nieren. Frühzeitige Erkennung ermöglicht\neine rechtzeitige Behandlung."
        },
        {
          "name": "Nierensonographie",
          "icon": "monitor",
          "default_description": "Der Ultraschall zeigt uns Größe, Form und Durchblutung Ihrer\nNieren. Zysten, Steine und andere Veränderungen erkennen wir\nsofort und schmerzfrei."
        },
        {
          "name": "Bluthochdruck / Hypertonie",
          "icon": "heart",
          "default_description": "Bluthochdruck und Nieren beeinflussen sich gegenseitig. Wir klären\ndie Ursachen ab und behandeln Ihren Blutdruck optimal,\num Ihre Nieren zu schützen."
        }
      ]
    },
    {
      "category": "Dialyse",
      "icon_color": "#48C9B0",
      "items": [
        {
          "name": "Dialyse (Hämodialyse)",
          "icon": "activity",
          "default_description": "In unserem Dialysezentrum bieten wir moderne Hämodialyse in\nangenehmer Atmosphäre. Unser erfahrenes Team sorgt für eine\nsichere und komfortable Behandlung."
        },
        {
          "name": "Peritonealdialyse",
          "icon": "home",
          "default_description": "Die Bauchfelldialyse ermöglicht Ihnen die Behandlung zu Hause.\nWir schulen Sie umfassend und begleiten Sie mit regelmäßigen\nKontrollen in unserer Praxis."
        }
      ]
    },
    {
      "category": "Langzeitbetreuung",
      "icon_color": "#1A5276",
      "items": [
        {
          "name": "Chronische Nierenerkrankung",
          "icon": "shield",
          "default_description": "Bei chronischer Nierenerkrankung verlangsamen wir den Verlauf\nund erhalten Ihre Nierenfunktion so lange wie möglich.\nIndividuelle Therapie und engmaschige Kontrolle."
        },
        {
          "name": "Transplantations-Nachsorge",
          "icon": "heart",
          "default_description": "Nach einer Nierentransplantation begleiten wir Sie langfristig.\nRegelmäßige Kontrollen der Transplantatfunktion und\nMedikamenteneinstellung für optimale Ergebnisse."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "einfühlsam",
      "unterstützend",
      "zuverlässig"
    ],
    "audience": "Patienten mit chronischer Nierenerkrankung, Dialysepatienten,\nTransplantierte, Bluthochdruck-Patienten mit Nierenbeteiligung.",
    "key_messages": [
      "Ihre Nieren in besten Händen",
      "Dialyse mit Lebensqualität",
      "Transplantations-Nachsorge kompetent begleitet",
      "Chronische Nierenerkrankung frühzeitig erkennen"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Nephrologie & Dialyse in {ort}",
    "description_template": "Nephrologische Praxis {praxis_name} in {ort}. ✓ Nierendiagnostik ✓ Dialyse ✓ Transplantations-Nachsorge. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Innere Medizin und Nephrologie",
    "de_female": "Fachärztin für Innere Medizin und Nephrologie",
    "en": "Nephrologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Nephrologie (m/w/d)",
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
        "id": "mfa-dialyse",
        "title_de": "MFA Dialyse (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "pflege",
        "title_de": "Dialyse-Pflege (m/w/d)",
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
      "Dialyse-Einarbeitung",
      "Nephrologische Fortbildung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Dialyse, Transplantation-Nachsorge, Bluthochdruck, Nierenbiopsie",
    "aufgaben": {
      "mfa": "Dialyse-Betreuung, Shunt-Pflege, Blutabnahme, Infusionstherapie",
      "arzt": "Dialyse-Verordnung, Nierenbiopsie, Transplant-Nachsorge",
      "azubi": "Dialyse-Technik-Grundlagen, Patientenempfang, Vitalzeichen"
    },
    "staerke": "Lebensrettende Medizin, intensive Patientenbeziehung, technisch",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Dialyse-Fachkraft, Peritonealdialyse, Transplantationsmedizin",
      "moderne_ausstattung": "Moderne Dialysegeräte, Ultraschall, PD-Systeme"
    },
    "verbotene_phrasen": [
      "Behandlung von Nierenerkrankungen",
      "nephrologische Versorgung"
    ]
  }
}
