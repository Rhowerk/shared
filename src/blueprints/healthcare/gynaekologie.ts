import type { Blueprint } from '../types.js'

export const gynaekologie: Blueprint = {
  "meta": {
    "id": "gynaekologie",
    "name": "Frauenarztpraxis",
    "name_variants": [
      "Frauenärztin",
      "Frauenarzt",
      "Gynäkologe",
      "Gynäkologische Praxis"
    ],
    "icon": "heart",
    "description": "Praxis für Frauenheilkunde und Geburtshilfe"
  },
  "colors": {
    "primary": "#D4A5A5",
    "primary_light": "#E8C4C4",
    "primary_dark": "#C08080",
    "secondary": "#FDF5F5",
    "accent": "#7EB5A6",
    "alternatives": [
      {
        "name": "Sanft Rosa",
        "primary": "#D4A5A5",
        "secondary": "#FDF5F5"
      },
      {
        "name": "Natur Grün",
        "primary": "#7EB5A6",
        "secondary": "#F0F9F6"
      },
      {
        "name": "Modern Violett",
        "primary": "#9B8AA5",
        "secondary": "#F8F5FA"
      },
      {
        "name": "Warm Koralle",
        "primary": "#E07A5F",
        "secondary": "#FDF6F4"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "gyn-hero-1",
        "url": "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80",
        "alt": "Freundliche Gynäkologin im Gespräch"
      }
    ],
    "imagetext": [
      {
        "id": "gyn-team",
        "url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1024&q=80",
        "alt": "Frauenarztpraxis Team"
      }
    ],
    "imagelist": [
      {
        "id": "gyn-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1024&q=80",
        "alt": "Gynäkologische Vorsorge"
      }
    ],
    "banner": [
      {
        "id": "gyn-banner",
        "url": "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1920&q=80",
        "alt": "Glückliche Frau"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge",
      "icon_color": "#D4A5A5",
      "items": [
        {
          "name": "Gynäkologische Vorsorge",
          "icon": "clipboard-check",
          "default_description": "Die regelmäßige gynäkologische Vorsorge ist wichtig für Ihre Gesundheit.\nWir nehmen uns Zeit für eine gründliche Untersuchung und beantworten\nalle Ihre Fragen in vertrauensvoller Atmosphäre."
        },
        {
          "name": "Krebsvorsorge / PAP-Abstrich",
          "icon": "search",
          "default_description": "Mit dem PAP-Abstrich können wir Zellveränderungen am Gebärmutterhals frühzeitig\nerkennen. Diese einfache Untersuchung kann Leben retten und ist Teil\nder regelmäßigen Vorsorge."
        },
        {
          "name": "Brustultraschall",
          "icon": "heart",
          "default_description": "Der Brustultraschall ergänzt die Tastuntersuchung und ermöglicht eine\ngenaue Beurteilung des Brustgewebes. Besonders für jüngere Frauen ist\ndiese schonende Methode gut geeignet."
        },
        {
          "name": "HPV-Impfung",
          "icon": "shield",
          "default_description": "Die HPV-Impfung schützt vor Gebärmutterhalskrebs und anderen HPV-bedingten\nErkrankungen. Wir beraten Sie ausführlich zu Nutzen und Ablauf der Impfung."
        }
      ]
    },
    {
      "category": "Schwangerschaft & Kinderwunsch",
      "icon_color": "#7EB5A6",
      "items": [
        {
          "name": "Schwangerschaftsvorsorge",
          "icon": "baby",
          "default_description": "Wir begleiten Sie durch Ihre Schwangerschaft mit regelmäßigen Vorsorgeuntersuchungen.\nUltraschall, Laborkontrollen und persönliche Beratung geben Ihnen Sicherheit\nin dieser besonderen Zeit."
        },
        {
          "name": "Ultraschall / Sonographie",
          "icon": "monitor",
          "default_description": "Mit modernen Ultraschallgeräten können wir Ihre Schwangerschaft begleiten\nund gynäkologische Fragestellungen abklären. Die Untersuchung ist schmerzfrei\nund ohne Strahlenbelastung."
        },
        {
          "name": "Kinderwunschberatung",
          "icon": "heart",
          "default_description": "Wenn der Kinderwunsch unerfüllt bleibt, sind wir für Sie da. Wir klären\nmögliche Ursachen ab und besprechen mit Ihnen die verschiedenen\nBehandlungsmöglichkeiten."
        }
      ]
    },
    {
      "category": "Beratung & Therapie",
      "icon_color": "#9B8AA5",
      "items": [
        {
          "name": "Verhütungsberatung",
          "icon": "info",
          "default_description": "Wir beraten Sie zu allen Verhütungsmethoden und finden gemeinsam die\nMethode, die am besten zu Ihnen und Ihrer Lebenssituation passt."
        },
        {
          "name": "Wechseljahresberatung",
          "icon": "sun",
          "default_description": "Die Wechseljahre sind eine natürliche Lebensphase. Wir helfen Ihnen,\nBeschwerden zu lindern und diese Zeit positiv zu gestalten -\nob mit oder ohne Hormontherapie."
        },
        {
          "name": "Hormontherapie",
          "icon": "activity",
          "default_description": "Bei Hormonstörungen oder Wechseljahresbeschwerden kann eine Hormontherapie\nhelfen. Wir beraten Sie individuell zu Nutzen und Risiken."
        },
        {
          "name": "Mädchensprechstunde",
          "icon": "user",
          "default_description": "In unserer Mädchensprechstunde nehmen wir uns besonders viel Zeit für\njunge Patientinnen. Wir beantworten alle Fragen zu Körper, Verhütung\nund Gesundheit in entspannter Atmosphäre."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "einfühlsam",
      "vertrauensvoll",
      "diskret",
      "kompetent",
      "warmherzig"
    ],
    "audience": "Frauen aller Altersgruppen, von Teenager bis Seniorin.\nThemen sind oft intim, daher besonders wichtig: Vertrauen und Diskretion.",
    "key_messages": [
      "Vorsorge ist Fürsorge",
      "Kompetente Begleitung in allen Lebensphasen",
      "Diskret und einfühlsam",
      "Modernste Diagnostik"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Frauenärztin in {ort}",
    "description_template": "Frauenarztpraxis {praxis_name} in {ort}. ✓ Vorsorge ✓ Schwangerschaft ✓ Verhütungsberatung. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Gynäkologie",
    "de_female": "Fachärztin für Gynäkologie",
    "en": "Gynecologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Gynäkologie (m/w/d)",
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
        "id": "hebamme",
        "title_de": "Hebamme / Entbindungspflege (m/w/d)",
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
      "Ultraschall-Einarbeitung",
      "Schwangerenbetreuung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Vorsorge, Schwangerschaftsbegleitung, Ultraschall, hormonelle Beratung",
    "aufgaben": {
      "mfa": "Ultraschall-Vorbereitung, Abstriche, Blutabnahme, CTG, Schwangerschaftsbetreuung",
      "arzt": "Vorsorge, Schwangerschaftsbegleitung, Ultraschall, operative Gynäkologie",
      "azubi": "Patientenannahme, Terminplanung, Ultraschall-Vorbereitung"
    },
    "staerke": "Vertrauensvolle Arzt-Patientin-Beziehung, lebensbegleitend",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Ultraschall-Zertifikate, Mammografie, Pränataldiagnostik",
      "moderne_ausstattung": "3D/4D-Ultraschall, CTG, digitale Mammografie"
    },
    "verbotene_phrasen": [
      "Betreuung von Patientinnen",
      "frauenärztliche Versorgung"
    ]
  }
}
