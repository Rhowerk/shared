import type { Blueprint } from '../types.ts'

export const urologie: Blueprint = {
  "meta": {
    "id": "urologie",
    "name": "Urologische Praxis",
    "name_variants": [
      "Urologe",
      "Urologie",
      "Praxis für Urologie",
      "Urologische Praxis"
    ],
    "icon": "activity",
    "description": "Praxis für Harnwege und männliche Geschlechtsorgane"
  },
  "colors": {
    "primary": "#2E86AB",
    "primary_light": "#4DA3C4",
    "primary_dark": "#1E5F7A",
    "secondary": "#F0F7FA",
    "accent": "#48C9B0",
    "alternatives": [
      {
        "name": "Vertrauen Blau",
        "primary": "#2E86AB",
        "secondary": "#F0F7FA"
      },
      {
        "name": "Modern Türkis",
        "primary": "#48C9B0",
        "secondary": "#F0FAF8"
      },
      {
        "name": "Klassisch Dunkel",
        "primary": "#34495E",
        "secondary": "#F5F7F9"
      },
      {
        "name": "Frisch Grün",
        "primary": "#27AE60",
        "secondary": "#F0FDF4"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "uro-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Urologe im Beratungsgespräch"
      }
    ],
    "imagetext": [
      {
        "id": "uro-team",
        "url": "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1024&q=80",
        "alt": "Urologisches Praxisteam"
      }
    ],
    "imagelist": [
      {
        "id": "uro-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Urologische Untersuchung"
      }
    ],
    "banner": [
      {
        "id": "uro-banner",
        "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
        "alt": "Aktiver Mann beim Sport"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Diagnostik",
      "icon_color": "#2E86AB",
      "items": [
        {
          "name": "Urologische Untersuchung",
          "icon": "clipboard-check",
          "default_description": "Die urologische Untersuchung umfasst Anamnese, körperliche Untersuchung\nund bei Bedarf weitere Diagnostik. Wir nehmen uns Zeit und gehen\ndiskret auf Ihre Beschwerden ein."
        },
        {
          "name": "Prostata-Vorsorge (PSA)",
          "icon": "shield",
          "default_description": "Die Prostata-Vorsorge mit PSA-Test und Tastuntersuchung kann\nProstatakrebs früh erkennen. Ab 45 Jahren empfehlen wir die\njährliche Vorsorge."
        },
        {
          "name": "Ultraschall Urogenitaltrakt",
          "icon": "monitor",
          "default_description": "Mit dem Ultraschall untersuchen wir Nieren, Blase und Prostata\nschmerzfrei und ohne Strahlung. So können wir viele Erkrankungen\nschnell erkennen."
        },
        {
          "name": "Blasenspiegelung",
          "icon": "eye",
          "default_description": "Bei der Blasenspiegelung betrachten wir das Innere Ihrer Blase\nmit einer dünnen Kamera. Die Untersuchung ist wichtig zur Abklärung\nvon Blut im Urin oder wiederkehrenden Infekten."
        }
      ]
    },
    {
      "category": "Behandlungen",
      "icon_color": "#48C9B0",
      "items": [
        {
          "name": "Harninkontinenz-Behandlung",
          "icon": "droplet",
          "default_description": "Blasenschwäche ist behandelbar. Wir klären die Ursache ab und\nbieten verschiedene Therapieoptionen - von Beckenbodentraining\nüber Medikamente bis zu operativen Verfahren."
        },
        {
          "name": "Erektionsstörungen",
          "icon": "heart",
          "default_description": "Erektionsprobleme können viele Ursachen haben und sind gut behandelbar.\nWir beraten Sie diskret zu den verschiedenen Therapiemöglichkeiten."
        },
        {
          "name": "Nierensteine-Behandlung",
          "icon": "target",
          "default_description": "Nierensteine können starke Schmerzen verursachen. Wir diagnostizieren\ndie Steine und besprechen die beste Behandlung - von der Steinauflösung\nbis zur Stoßwellentherapie."
        },
        {
          "name": "STI-Diagnostik",
          "icon": "shield",
          "default_description": "Bei Verdacht auf sexuell übertragbare Infektionen bieten wir\ndiskrete Tests und Behandlung. Vertraulichkeit ist uns sehr wichtig."
        }
      ]
    },
    {
      "category": "Spezialleistungen",
      "icon_color": "#34495E",
      "items": [
        {
          "name": "Vasektomie-Beratung",
          "icon": "scissors",
          "default_description": "Die Vasektomie ist eine sichere Methode der dauerhaften Verhütung\nfür den Mann. Wir beraten Sie ausführlich zu Ablauf, Risiken\nund Alternativen."
        },
        {
          "name": "Kinderurologie",
          "icon": "baby",
          "default_description": "Bei urologischen Problemen von Kindern wie Bettnässen oder\nHodenhochstand sind wir einfühlsame Ansprechpartner für die\nganze Familie."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "diskret",
      "professionell",
      "vertrauensvoll",
      "sachlich"
    ],
    "audience": "Männer aller Altersgruppen, Prostata-Vorsorge, aber auch Frauen mit Blasenproblemen.\nThemen sind oft intim - Diskretion sehr wichtig.",
    "key_messages": [
      "Diskrete und professionelle Beratung",
      "Prostata-Vorsorge rettet Leben",
      "Modernste Diagnostik",
      "Kompetente Behandlung aller urologischen Erkrankungen"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Urologe in {ort}",
    "description_template": "Urologische Praxis {praxis_name} in {ort}. ✓ Prostata-Vorsorge ✓ Blasenprobleme ✓ Diskrete Beratung. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Urologie",
    "de_female": "Fachärztin für Urologie",
    "en": "Urologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Urologie (m/w/d)",
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
        "id": "ausbildung",
        "title_de": "Auszubildende MFA (m/w/d)",
        "employment_type": "apprenticeship",
        "category": "ausbildung",
        "default_selected": false
      }
    ],
    "additional_benefits": [
      "Ultraschall-Einarbeitung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Vorsorge, Ultraschall, Urodynamik, operative Urologie, Andrologie",
    "aufgaben": {
      "mfa": "Ultraschall-Vorbereitung, Urinproben, Uroflowmetrie, PSA-Blutabnahme",
      "arzt": "Vorsorge, Sonografie, Urodynamik, operative Eingriffe, Andrologie",
      "azubi": "Patientenempfang, Probenversand, Ultraschall-Grundlagen"
    },
    "staerke": "Vorsorge rettet Leben, moderne Diagnostik, operatives Spektrum",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Sonografie-Zertifikate, Urodynamik, operative Kurse",
      "moderne_ausstattung": "Hochauflösender Ultraschall, Uroflowmetrie, Laser"
    },
    "verbotene_phrasen": [
      "urologische Versorgung",
      "Betreuung urologischer Patienten"
    ]
  }
}
