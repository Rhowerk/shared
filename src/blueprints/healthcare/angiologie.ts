import type { Blueprint } from '../types.ts'

export const angiologie: Blueprint = {
  "meta": {
    "id": "angiologie",
    "name": "Angiologische Praxis",
    "name_variants": [
      "Angiologe",
      "Gefäßpraxis",
      "Gefäßmedizin",
      "Praxis für Angiologie",
      "Gefäßchirurgische Praxis"
    ],
    "icon": "activity",
    "description": "Praxis für Angiologie und Gefäßmedizin"
  },
  "colors": {
    "primary": "#DC2626",
    "primary_light": "#EF4444",
    "primary_dark": "#B91C1C",
    "secondary": "#FEF2F2",
    "accent": "#2563EB",
    "alternatives": [
      {
        "name": "Gefäß-Rot",
        "primary": "#DC2626",
        "secondary": "#FEF2F2"
      },
      {
        "name": "Medizinisch Blau",
        "primary": "#2563EB",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Professionell Dunkel",
        "primary": "#1E293B",
        "secondary": "#F8FAFC"
      },
      {
        "name": "Vertrauen Petrol",
        "primary": "#0D9488",
        "secondary": "#F0FDFA"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "angio-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Gefäßmedizinische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "angio-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Angiologie-Team"
      }
    ],
    "imagelist": [
      {
        "id": "angio-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Gefäßdiagnostik"
      }
    ],
    "banner": [
      {
        "id": "angio-banner",
        "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
        "alt": "Bewegung und Durchblutung"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#DC2626",
      "items": [
        {
          "name": "Gefäßdiagnostik / Duplexsonographie",
          "icon": "monitor",
          "default_description": "Mit der farbcodierten Duplexsonographie stellen wir Ihre Arterien\nund Venen schmerzfrei und präzise dar. Verengungen und Verschlüsse\nerkennen wir so zuverlässig."
        },
        {
          "name": "ABI-Messung",
          "icon": "activity",
          "default_description": "Der Knöchel-Arm-Index gibt Auskunft über die arterielle Durchblutung\nIhrer Beine. Eine schnelle, schmerzfreie Screening-Methode\nfür Durchblutungsstörungen."
        },
        {
          "name": "Carotis-Duplex",
          "icon": "search",
          "default_description": "Die Ultraschalluntersuchung der Halsschlagadern zeigt Verengungen,\ndie Ihr Schlaganfallrisiko erhöhen. Frühzeitig erkannt,\nkönnen wir rechtzeitig handeln."
        }
      ]
    },
    {
      "category": "Therapie",
      "icon_color": "#2563EB",
      "items": [
        {
          "name": "Periphere arterielle Verschlusskrankheit (pAVK)",
          "icon": "shield",
          "default_description": "Die Schaufensterkrankheit schränkt Ihre Gehstrecke ein. Mit\nGehtraining, Medikamenten und bei Bedarf interventionellen\nVerfahren verbessern wir Ihre Durchblutung."
        },
        {
          "name": "Thrombose-Diagnostik & Therapie",
          "icon": "heart",
          "default_description": "Bei Verdacht auf Thrombose reagieren wir schnell. Mit Ultraschall\nund Labor klären wir die Diagnose und leiten sofort die\npassende Behandlung ein."
        },
        {
          "name": "Wundmanagement / chronische Wunden",
          "icon": "bandage",
          "default_description": "Chronische Wunden bei Durchblutungsstörungen erfordern\nspezialisierte Wundversorgung. Wir behandeln die Wunde\nund die zugrunde liegende Gefäßerkrankung."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "beruhigend",
      "präzise",
      "vertrauensvoll"
    ],
    "audience": "Patienten mit Durchblutungsstörungen, Thrombosen, Schaufensterkrankheit,\nAortenaneurysmen, chronischen Wunden.",
    "key_messages": [
      "Gute Durchblutung – gute Gesundheit",
      "Thrombose erkennen und sicher behandeln",
      "Modernste Gefäßdiagnostik",
      "Schaufensterkrankheit stoppen"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Angiologie & Gefäßmedizin in {ort}",
    "description_template": "Angiologische Praxis {praxis_name} in {ort}. ✓ Gefäßdiagnostik ✓ Thrombose ✓ pAVK-Behandlung. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Innere Medizin und Angiologie",
    "de_female": "Fachärztin für Innere Medizin und Angiologie",
    "en": "Angiologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Angiologie (m/w/d)",
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
        "id": "mfa-gefaess",
        "title_de": "MFA Gefäßdiagnostik (m/w/d)",
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
      "Duplexsonographie-Einarbeitung",
      "Wundmanagement-Fortbildung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Gefäßdiagnostik, Duplexsonografie, Thrombose, pAVK, Wundversorgung",
    "aufgaben": {
      "mfa": "ABI-Messung, Duplexsonografie-Assistenz, Kompressionstherapie, Wundversorgung",
      "arzt": "Duplexsonografie, Angio-CT/MRT-Befundung, Interventionsplanung",
      "azubi": "ABI-Messung-Grundlagen, Patientenempfang, Kompressionsversorgung"
    },
    "staerke": "Bildgebende Diagnostik, interventionelle Gefäßmedizin",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Duplexsonografie, Wundmanagement, Gefäßmedizin",
      "moderne_ausstattung": "Farbduplex-Ultraschall, ABI-Messgerät, Oszillografie"
    },
    "verbotene_phrasen": [
      "Behandlung von Gefäßerkrankungen",
      "angiologische Versorgung"
    ]
  }
}
