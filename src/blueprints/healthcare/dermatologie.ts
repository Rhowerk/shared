import type { Blueprint } from '../types.js'

export const dermatologie: Blueprint = {
  "meta": {
    "id": "dermatologie",
    "name": "Hautarztpraxis",
    "name_variants": [
      "Hautarzt",
      "Dermatologe",
      "Dermatologie",
      "Praxis für Dermatologie"
    ],
    "icon": "hand",
    "description": "Praxis für Haut- und Geschlechtskrankheiten"
  },
  "colors": {
    "primary": "#E8A87C",
    "primary_light": "#F0C4A8",
    "primary_dark": "#D4896A",
    "secondary": "#FDF6F0",
    "accent": "#85CDCA",
    "alternatives": [
      {
        "name": "Natürlich Apricot",
        "primary": "#E8A87C",
        "secondary": "#FDF6F0"
      },
      {
        "name": "Medizinisch Blau",
        "primary": "#5B9BD5",
        "secondary": "#F0F6FC"
      },
      {
        "name": "Frisch Türkis",
        "primary": "#85CDCA",
        "secondary": "#F0FAFA"
      },
      {
        "name": "Elegant Grau",
        "primary": "#6C757D",
        "secondary": "#F8F9FA"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "dermato-hero-1",
        "url": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80",
        "alt": "Dermatologin untersucht Haut einer Patientin"
      }
    ],
    "imagetext": [
      {
        "id": "dermato-team",
        "url": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1024&q=80",
        "alt": "Modernes dermatologisches Team"
      }
    ],
    "imagelist": [
      {
        "id": "dermato-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Dermatologische Untersuchung"
      }
    ],
    "banner": [
      {
        "id": "dermato-banner",
        "url": "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=1920&q=80",
        "alt": "Gesunde strahlende Haut"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Diagnostik",
      "icon_color": "#E8A87C",
      "items": [
        {
          "name": "Hautkrebs-Screening",
          "icon": "search",
          "default_description": "Das Hautkrebs-Screening ist eine wichtige Vorsorgeuntersuchung zur Früherkennung\nvon Hautkrebs. Wir untersuchen Ihre Haut systematisch auf verdächtige Veränderungen\nund Muttermale. Ab 35 Jahren übernimmt die Krankenkasse diese Untersuchung alle 2 Jahre."
        },
        {
          "name": "Dermatologische Untersuchung",
          "icon": "clipboard-check",
          "default_description": "Bei der dermatologischen Untersuchung begutachten wir Ihre Haut umfassend und\ndiagnostizieren Hauterkrankungen aller Art. Mit modernsten Verfahren wie der\nAuflichtmikroskopie erkennen wir auch kleinste Veränderungen."
        },
        {
          "name": "Allergologie / Allergietests",
          "icon": "flower",
          "default_description": "Wir führen verschiedene Allergietests durch, um Auslöser für Ihre Beschwerden\nzu identifizieren. Ob Pricktest, Blutuntersuchung oder Epikutantest - wir finden\ndie Ursache Ihrer Allergie."
        }
      ]
    },
    {
      "category": "Behandlungen",
      "icon_color": "#85CDCA",
      "items": [
        {
          "name": "Akne-Behandlung",
          "icon": "sparkles",
          "default_description": "Akne ist mehr als ein kosmetisches Problem. Wir bieten individuelle Behandlungskonzepte\nvon der Hautpflege über medikamentöse Therapie bis hin zu modernen Verfahren,\num Ihre Haut nachhaltig zu verbessern."
        },
        {
          "name": "Neurodermitis-Therapie",
          "icon": "heart",
          "default_description": "Neurodermitis erfordert eine ganzheitliche Behandlung. Wir entwickeln einen\nindividuellen Therapieplan, der Hautpflege, Ernährung und moderne Medikamente\nkombiniert, um Ihre Lebensqualität zu verbessern."
        },
        {
          "name": "Psoriasis-Behandlung",
          "icon": "activity",
          "default_description": "Bei Schuppenflechte bieten wir moderne Therapieoptionen von der lokalen Behandlung\nbis zu Biologika. Unser Ziel ist es, Schübe zu reduzieren und Ihre Haut\nlangfristig zu beruhigen."
        },
        {
          "name": "Geschlechtskrankheiten (STI)",
          "icon": "shield",
          "default_description": "Wir bieten diskrete Diagnostik und Behandlung von sexuell übertragbaren\nInfektionen. Vertraulichkeit und ein einfühlsamer Umgang sind uns besonders wichtig."
        }
      ]
    },
    {
      "category": "Ästhetische Dermatologie",
      "icon_color": "#D4A5A5",
      "items": [
        {
          "name": "Laserbehandlung",
          "icon": "zap",
          "default_description": "Mit modernsten Lasersystemen behandeln wir Pigmentflecken, Äderchen, Narben\nund Hautunebenheiten. Die Behandlung ist schonend und führt zu sichtbaren Ergebnissen."
        },
        {
          "name": "Ästhetische Dermatologie",
          "icon": "sparkles",
          "default_description": "Unsere ästhetischen Behandlungen helfen Ihnen, sich in Ihrer Haut wohlzufühlen.\nVon der Faltenbehandlung bis zur Hautverjüngung bieten wir bewährte Verfahren."
        },
        {
          "name": "Botox & Filler",
          "icon": "droplet",
          "default_description": "Mit Botulinumtoxin und Fillern glätten wir Falten und stellen Volumen wieder her.\nNatürliche Ergebnisse und Ihre Zufriedenheit stehen im Mittelpunkt."
        },
        {
          "name": "Operative Dermatologie",
          "icon": "scissors",
          "default_description": "Kleine operative Eingriffe führen wir ambulant in unserer Praxis durch.\nVon der Muttermalentfernung bis zur Behandlung von Hautveränderungen."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "professionell",
      "einfühlsam",
      "kompetent",
      "diskret"
    ],
    "audience": "Patienten mit Hautproblemen, von Akne über Allergien bis Hautkrebs-Vorsorge.\nOft unsicher, suchen kompetente und diskrete Beratung.",
    "key_messages": [
      "Hautgesundheit für alle Altersgruppen",
      "Modernste Diagnostik und Behandlung",
      "Hautkrebs-Früherkennung rettet Leben",
      "Ästhetische Dermatologie auf Wunsch"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Hautarzt in {ort}",
    "description_template": "Hautarztpraxis {praxis_name} in {ort}. ✓ Hautkrebs-Screening ✓ Allergologie ✓ Ästhetische Behandlungen. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Dermatologie",
    "de_female": "Fachärztin für Dermatologie",
    "en": "Dermatologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Dermatologie (m/w/d)",
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
        "id": "mfa-op",
        "title_de": "MFA Dermatochirurgie / OP-Assistenz (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "kosmetik",
        "title_de": "Medizinische Kosmetik (m/w/d)",
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
      "Ästhetische Dermatologie",
      "Moderne Lasertherapie"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Hautkrebs-Screening, Allergologie, ästhetische Dermatologie, chronische Hauterkrankungen",
    "aufgaben": {
      "mfa": "Lichttherapie, Allergietests, Wundversorgung, Hautkrebs-Screening-Assistenz",
      "arzt": "Dermatoskopie, operative Eingriffe, Ästhetik, Allergologie",
      "azubi": "Patientenempfang, Lichttherapie-Grundlagen, Wundversorgung"
    },
    "staerke": "Sichtbare Ergebnisse, Medizin + Ästhetik, kurze Behandlungszeiten",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Dermatoskopie-Kurse, Laser-Zertifikate, Allergologie",
      "moderne_ausstattung": "Digitale Dermatoskopie, Phototherapie, Laser, Kryotherapie"
    },
    "verbotene_phrasen": [
      "Behandlung von Hauterkrankungen",
      "Hautprobleme aller Art"
    ]
  }
}
