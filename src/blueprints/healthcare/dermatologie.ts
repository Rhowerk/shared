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
          "default_description": "Beim Hautkrebs-Screening wird die gesamte Haut auf verdächtige Veränderungen und auffällige Muttermale untersucht. Gesetzlich Versicherte haben ab 35 Jahren alle zwei Jahre Anspruch auf diese Früherkennungsuntersuchung."
        },
        {
          "name": "Dermatologische Untersuchung",
          "icon": "clipboard-check",
          "default_description": "Untersuchung von Haut, Haaren und Nägeln zur Abklärung von Hautveränderungen und Hauterkrankungen. Bei Bedarf kommen Verfahren wie die Auflichtmikroskopie (Dermatoskopie) zum Einsatz."
        },
        {
          "name": "Allergologie / Allergietests",
          "icon": "flower",
          "default_description": "Allergietests wie Pricktest, Epikutantest oder Blutuntersuchungen helfen, Auslöser allergischer Beschwerden einzugrenzen. Auf Basis der Ergebnisse werden Behandlung und Vermeidungsstrategien besprochen."
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
          "default_description": "Akne ist eine häufige Hauterkrankung, die nicht nur Jugendliche betrifft. Die Behandlung richtet sich nach dem Schweregrad und reicht von äußerlich angewendeten Wirkstoffen bis zu Tabletten."
        },
        {
          "name": "Neurodermitis-Therapie",
          "icon": "heart",
          "default_description": "Neurodermitis (atopische Dermatitis) ist eine chronische, in Schüben verlaufende Hauterkrankung. Die Behandlung umfasst Basispflege, entzündungshemmende Wirkstoffe und je nach Schwere weitere Therapieformen."
        },
        {
          "name": "Psoriasis-Behandlung",
          "icon": "activity",
          "default_description": "Schuppenflechte (Psoriasis) ist eine chronisch-entzündliche Erkrankung der Haut, die auch Gelenke betreffen kann. Je nach Ausprägung kommen äußerliche Behandlungen, Lichttherapie oder Medikamente bis hin zu Biologika in Frage."
        },
        {
          "name": "Geschlechtskrankheiten (STI)",
          "icon": "shield",
          "default_description": "Diagnostik und Behandlung sexuell übertragbarer Infektionen wie Chlamydien, Syphilis oder Herpes. Die Untersuchung unterliegt wie jede ärztliche Behandlung der Schweigepflicht."
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
          "default_description": "Laserbehandlungen werden in der Dermatologie zum Beispiel bei Pigmentflecken, erweiterten Äderchen oder Narben eingesetzt. Vor der Behandlung werden Eignung, Ablauf, mögliche Nebenwirkungen und Kosten besprochen.",
          "igel": true
        },
        {
          "name": "Ästhetische Dermatologie",
          "icon": "sparkles",
          "default_description": "Ästhetische Behandlungen beziehen sich auf das Erscheinungsbild der Haut, etwa bei Falten oder Zeichen der Hautalterung. Es handelt sich um Selbstzahlerleistungen, denen eine Beratung zu Möglichkeiten, Grenzen und Risiken vorausgeht.",
          "igel": true
        },
        {
          "name": "Botox & Filler",
          "icon": "droplet",
          "default_description": "Botulinumtoxin und Hyaluronsäure-Filler werden zur Behandlung von Mimikfalten und Volumenverlust eingesetzt. Die Wirkung ist zeitlich begrenzt; Ablauf, Risiken und Kosten werden vorab besprochen.",
          "igel": true
        },
        {
          "name": "Operative Dermatologie",
          "icon": "scissors",
          "default_description": "Kleinere operative Eingriffe an der Haut, etwa die Entfernung von Muttermalen, Zysten oder verdächtigen Hautveränderungen. Das entnommene Gewebe wird in der Regel feingeweblich untersucht."
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
      "Hautgesundheit in allen Lebensphasen",
      "Früherkennung von Hautkrebs",
      "Behandlung chronischer Hauterkrankungen",
      "Ästhetische Behandlungen nur nach ausführlicher Beratung"
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
    "typisch": "Hautkrebs-Screening, Allergologie, entzündliche und chronische Hauterkrankungen",
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
