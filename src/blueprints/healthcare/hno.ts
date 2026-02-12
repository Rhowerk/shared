import type { Blueprint } from '../types.ts'

export const hno: Blueprint = {
  "meta": {
    "id": "hno",
    "name": "HNO-Praxis",
    "name_variants": [
      "HNO-Arzt",
      "Hals-Nasen-Ohren-Arzt",
      "HNO-Praxis",
      "Praxis für HNO-Heilkunde"
    ],
    "icon": "ear",
    "description": "Praxis für Hals-, Nasen- und Ohrenheilkunde"
  },
  "colors": {
    "primary": "#5DADE2",
    "primary_light": "#85C1E9",
    "primary_dark": "#3498DB",
    "secondary": "#F0F9FF",
    "accent": "#58D68D",
    "alternatives": [
      {
        "name": "Frisch Blau",
        "primary": "#5DADE2",
        "secondary": "#F0F9FF"
      },
      {
        "name": "Ruhig Grün",
        "primary": "#58D68D",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Klassisch Türkis",
        "primary": "#17A2B8",
        "secondary": "#F0FDFA"
      },
      {
        "name": "Modern Anthrazit",
        "primary": "#495057",
        "secondary": "#F8F9FA"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "hno-hero-1",
        "url": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
        "alt": "HNO-Arzt bei der Untersuchung"
      }
    ],
    "imagetext": [
      {
        "id": "hno-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "HNO-Praxis Team"
      }
    ],
    "imagelist": [
      {
        "id": "hno-leistungen",
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1024&q=80",
        "alt": "HNO-Untersuchung"
      }
    ],
    "banner": [
      {
        "id": "hno-banner",
        "url": "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=1920&q=80",
        "alt": "Person genießt Natur - freies Atmen"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#5DADE2",
      "items": [
        {
          "name": "HNO-ärztliche Untersuchung",
          "icon": "stethoscope",
          "default_description": "Bei der HNO-ärztlichen Untersuchung begutachten wir Ohren, Nase, Nasennebenhöhlen,\nMundhöhle, Rachen und Kehlkopf. Mit modernen Geräten können wir auch\nschwer einsehbare Bereiche untersuchen."
        },
        {
          "name": "Hörtest / Audiometrie",
          "icon": "ear",
          "default_description": "Mit dem Hörtest bestimmen wir Ihr Hörvermögen präzise. Die Audiometrie\nzeigt uns, welche Frequenzen Sie gut hören und wo eventuell Einschränkungen\nbestehen. Grundlage für die optimale Behandlung."
        },
        {
          "name": "Endoskopie Nase & Rachen",
          "icon": "eye",
          "default_description": "Mit der Nasen- und Rachenendoskopie können wir das Innere der Nase,\ndie Nasennebenhöhlen und den Rachenraum genau untersuchen. Die Untersuchung\ndauert nur wenige Minuten."
        }
      ]
    },
    {
      "category": "Allergologie",
      "icon_color": "#58D68D",
      "items": [
        {
          "name": "Allergietestung",
          "icon": "flower",
          "default_description": "Wir führen verschiedene Allergietests durch, um die Auslöser Ihrer\nBeschwerden zu finden. Ob Heuschnupfen, Hausstaubmilben oder Tierhaare -\nwir identifizieren Ihre Allergene."
        },
        {
          "name": "Hyposensibilisierung",
          "icon": "shield",
          "default_description": "Mit der Hyposensibilisierung behandeln wir die Ursache Ihrer Allergie.\nÜber einen längeren Zeitraum gewöhnen wir Ihren Körper an das Allergen\nund reduzieren so Ihre Beschwerden dauerhaft."
        }
      ]
    },
    {
      "category": "Spezialbehandlungen",
      "icon_color": "#17A2B8",
      "items": [
        {
          "name": "Schwindel-Diagnostik",
          "icon": "activity",
          "default_description": "Schwindel kann viele Ursachen haben. Mit speziellen Untersuchungen\nfinden wir heraus, ob Ihr Gleichgewichtsorgan betroffen ist und\nwelche Behandlung Ihnen hilft."
        },
        {
          "name": "Tinnitus-Behandlung",
          "icon": "volume-2",
          "default_description": "Ohrgeräusche können sehr belastend sein. Wir klären die Ursachen ab\nund bieten verschiedene Therapieansätze, um Ihren Tinnitus zu lindern\nund Ihre Lebensqualität zu verbessern."
        },
        {
          "name": "Schnarch-Therapie / Schlafapnoe",
          "icon": "moon",
          "default_description": "Schnarchen und Atemaussetzer stören nicht nur den Partner, sondern\ngefährden Ihre Gesundheit. Wir untersuchen die Ursachen und finden\ndie passende Therapie für erholsamen Schlaf."
        },
        {
          "name": "Stimm- und Sprachstörungen",
          "icon": "mic",
          "default_description": "Bei Heiserkeit, Stimmstörungen oder Sprechproblemen untersuchen wir\nKehlkopf und Stimmbänder. Oft können wir mit einfachen Maßnahmen\noder Stimmtherapie helfen."
        },
        {
          "name": "Ohrreinigung / Cerumen-Entfernung",
          "icon": "droplet",
          "default_description": "Verstopfte Ohren durch Ohrenschmalz reinigen wir schonend und professionell.\nDie Behandlung ist schnell und bringt sofortige Erleichterung."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "professionell",
      "beruhigend",
      "kompetent",
      "verständnisvoll"
    ],
    "audience": "Patienten mit Hör-, Nasen- oder Halsproblemen.\nVon Kindern mit Ohrenschmerzen bis Senioren mit Hörgeräten.",
    "key_messages": [
      "Wieder gut hören können",
      "Frei atmen, besser leben",
      "Moderne Diagnostik für präzise Ergebnisse",
      "Allergien effektiv behandeln"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | HNO-Arzt in {ort}",
    "description_template": "HNO-Praxis {praxis_name} in {ort}. ✓ Hörtest ✓ Allergien ✓ Schnarchen & Tinnitus. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für HNO-Heilkunde",
    "de_female": "Fachärztin für HNO-Heilkunde",
    "en": "ENT Specialist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung HNO (m/w/d)",
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
        "id": "mfa-audio",
        "title_de": "MFA Audiometrie / Hördiagnostik (m/w/d)",
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
      "Audiometrie-Einarbeitung",
      "Allergologie"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Audiometrie, Allergologie, Schlafmedizin, operative HNO",
    "aufgaben": {
      "mfa": "Hörtest, Allergietest, Endoskopie-Assistenz, Infusionen, Schwindel-Diagnostik",
      "arzt": "Endoskopie, Audiometrie, operative HNO, Allergologie, Schlafmedizin",
      "azubi": "Hörtest-Grundlagen, Patientenführung, Instrumentenaufbereitung"
    },
    "staerke": "Technisch anspruchsvoll, breites Spektrum, sichtbare Erfolge",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Allergologie, Schlafmedizin-Zertifikat, operative Kurse",
      "moderne_ausstattung": "Digitale Audiometrie, Videoendoskopie, Allergietest-Systeme"
    },
    "verbotene_phrasen": [
      "HNO-ärztliche Behandlung",
      "Betreuung von HNO-Patienten"
    ]
  }
}
