import type { Blueprint } from '../types.js'

export const phlebologie: Blueprint = {
  "meta": {
    "id": "phlebologie",
    "name": "Phlebologische Praxis",
    "name_variants": [
      "Phlebologe",
      "Venenpraxis",
      "Venenspezialist",
      "Praxis für Phlebologie",
      "Venenklinik"
    ],
    "icon": "activity",
    "description": "Praxis für Phlebologie und Venenmedizin"
  },
  "colors": {
    "primary": "#0D9488",
    "primary_light": "#2DD4BF",
    "primary_dark": "#0F766E",
    "secondary": "#F0FDFA",
    "accent": "#6366F1",
    "alternatives": [
      {
        "name": "Venen Türkis",
        "primary": "#0D9488",
        "secondary": "#F0FDFA"
      },
      {
        "name": "Medizinisch Blau",
        "primary": "#2563EB",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Sanft Grün",
        "primary": "#16A34A",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Elegant Dunkel",
        "primary": "#334155",
        "secondary": "#F8FAFC"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "phlebo-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Venenuntersuchung"
      }
    ],
    "imagetext": [
      {
        "id": "phlebo-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Phlebologie-Team"
      }
    ],
    "imagelist": [
      {
        "id": "phlebo-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Venendiagnostik"
      }
    ],
    "banner": [
      {
        "id": "phlebo-banner",
        "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
        "alt": "Leichte Beine"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#0D9488",
      "items": [
        {
          "name": "Venen-Diagnostik / Duplexsonographie",
          "icon": "monitor",
          "default_description": "Mit der farbcodierten Duplexsonographie untersuchen wir Ihre Venen\nschmerzfrei und präzise. Wir erkennen Krampfadern, Klappendefekte\nund Thrombosen zuverlässig."
        },
        {
          "name": "Thrombose-Diagnostik",
          "icon": "search",
          "default_description": "Bei Verdacht auf Thrombose reagieren wir schnell. Mit Ultraschall\nund Laborwerten stellen wir die Diagnose sicher und leiten\nsofort die richtige Behandlung ein."
        }
      ]
    },
    {
      "category": "Therapie",
      "icon_color": "#6366F1",
      "items": [
        {
          "name": "Krampfader-Behandlung (Varikose)",
          "icon": "shield",
          "default_description": "Krampfadern sind mehr als ein kosmetisches Problem. Wir bieten\nmoderne, schonende Verfahren wie Laser, Radiofrequenz und\nVerödung für gesunde, schöne Beine."
        },
        {
          "name": "Sklerotherapie (Verödung)",
          "icon": "syringe",
          "default_description": "Bei der Sklerotherapie veröden wir Krampfadern und Besenreiser\nmit einem speziellen Mittel. Ambulant, schmerzarm und\nohne Narkose – Sie sind sofort wieder mobil."
        },
        {
          "name": "Endovenöse Lasertherapie",
          "icon": "zap",
          "default_description": "Die Lasertherapie verschließt Krampfadern von innen – ohne\nOP-Schnitt. Minimal-invasiv, ambulant und mit sehr guten\nkosmetischen Ergebnissen."
        },
        {
          "name": "Besenreiser-Behandlung",
          "icon": "star",
          "default_description": "Störende Besenreiser entfernen wir mit feiner Verödung oder\nLaserbehandlung. Mehrere Sitzungen können nötig sein,\ndie Ergebnisse sind überzeugend."
        },
        {
          "name": "Kompressionstherapie",
          "icon": "heart",
          "default_description": "Die richtige Kompression ist die Basis der Venentherapie.\nWir verordnen passende Kompressionsstrümpfe und beraten\nSie zur korrekten Anwendung."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "beruhigend",
      "lösungsorientiert",
      "modern"
    ],
    "audience": "Patienten mit Krampfadern, Besenreisern, schweren Beinen,\nThrombose-Vorgeschichte, Lymphödemen.",
    "key_messages": [
      "Schöne und gesunde Beine",
      "Krampfadern schonend behandeln",
      "Moderne Verödungs- und Laserverfahren",
      "Venengesundheit auf höchstem Niveau"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Phlebologie & Venenmedizin in {ort}",
    "description_template": "Venenpraxis {praxis_name} in {ort}. ✓ Krampfadern ✓ Besenreiser ✓ Lasertherapie. Für schöne und gesunde Beine!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Phlebologie",
    "de_female": "Fachärztin für Phlebologie",
    "en": "Phlebologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Phlebologie (m/w/d)",
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
      "Duplexsonographie-Schulung",
      "Sklerotherapie-Einarbeitung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Krampfadern, Kompressionstherapie, Besenreiser, venöse Insuffizienz",
    "aufgaben": {
      "mfa": "Duplexsonografie-Assistenz, Kompressionsversorgung, Sklerotherapie-Assistenz",
      "arzt": "Duplexsonografie, Sklerotherapie, Laser-Therapie, OP-Indikation",
      "azubi": "Kompressionsversorgung-Grundlagen, Patientenempfang, Dokumentation"
    },
    "staerke": "Schnell sichtbare Ergebnisse, wachsende Nachfrage, ambulant",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Sklerotherapie-Kurse, Duplexsonografie, Lasertherapie",
      "moderne_ausstattung": "Duplexsonografie, Laser, Lichttherapie"
    },
    "verbotene_phrasen": [
      "Venenbehandlung",
      "phlebologische Versorgung"
    ]
  }
}
