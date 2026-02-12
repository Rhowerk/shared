import type { Blueprint } from '../types.js'

export const psychotherapie: Blueprint = {
  "meta": {
    "id": "psychotherapie",
    "name": "Psychotherapeutische Praxis",
    "name_variants": [
      "Psychotherapeut",
      "Psychotherapeutin",
      "Psychotherapie",
      "Praxis für Psychotherapie"
    ],
    "icon": "brain",
    "description": "Praxis für Psychotherapie und psychische Gesundheit"
  },
  "colors": {
    "primary": "#7D8A6A",
    "primary_light": "#9AA785",
    "primary_dark": "#5F6B4E",
    "secondary": "#F7F9F5",
    "accent": "#D4A574",
    "alternatives": [
      {
        "name": "Beruhigend Grün",
        "primary": "#7D8A6A",
        "secondary": "#F7F9F5"
      },
      {
        "name": "Sanft Blau",
        "primary": "#7BA3C9",
        "secondary": "#F5F9FC"
      },
      {
        "name": "Warm Beige",
        "primary": "#B5A18C",
        "secondary": "#FAF8F5"
      },
      {
        "name": "Natur Türkis",
        "primary": "#5D9B9B",
        "secondary": "#F0F9F9"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "psycho-hero-1",
        "url": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
        "alt": "Ruhige Praxisatmosphäre"
      }
    ],
    "imagetext": [
      {
        "id": "psycho-praxis",
        "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80",
        "alt": "Einladender Therapieraum"
      }
    ],
    "imagelist": [
      {
        "id": "psycho-leistungen",
        "url": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1024&q=80",
        "alt": "Therapeutisches Gespräch"
      }
    ],
    "banner": [
      {
        "id": "psycho-banner",
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
        "alt": "Ruhe und Entspannung in der Natur"
      }
    ]
  },
  "services": [
    {
      "category": "Erstgespräch & Diagnostik",
      "icon_color": "#7D8A6A",
      "items": [
        {
          "name": "Psychotherapeutische Sprechstunde",
          "icon": "message-circle",
          "default_description": "In der psychotherapeutischen Sprechstunde lernen wir uns kennen.\nSie schildern Ihre Beschwerden und wir besprechen, ob und welche\nTherapie für Sie sinnvoll ist. Dieser erste Schritt ist wichtig."
        },
        {
          "name": "Diagnostik / Erstgespräch",
          "icon": "clipboard-check",
          "default_description": "Im Erstgespräch erfassen wir Ihre aktuelle Situation und Ihre Geschichte.\nGemeinsam entwickeln wir ein Verständnis für Ihre Beschwerden und\nlegen die Therapieziele fest."
        }
      ]
    },
    {
      "category": "Therapieverfahren",
      "icon_color": "#5D9B9B",
      "items": [
        {
          "name": "Verhaltenstherapie",
          "icon": "target",
          "default_description": "Die Verhaltenstherapie hilft Ihnen, belastende Denk- und Verhaltensmuster\nzu erkennen und zu verändern. Praktische Übungen unterstützen Sie dabei,\nneue Wege im Alltag zu gehen."
        },
        {
          "name": "Tiefenpsychologische Therapie",
          "icon": "layers",
          "default_description": "In der tiefenpsychologischen Therapie verstehen wir gemeinsam,\nwie vergangene Erfahrungen Ihr heutiges Erleben beeinflussen.\nDieses Verständnis ermöglicht Veränderung."
        },
        {
          "name": "Trauma-Therapie (EMDR)",
          "icon": "shield",
          "default_description": "EMDR ist ein wirksames Verfahren zur Verarbeitung traumatischer\nErlebnisse. Die Methode hilft, belastende Erinnerungen zu verarbeiten\nund neue Perspektiven zu entwickeln."
        },
        {
          "name": "Achtsamkeitsbasierte Therapie",
          "icon": "sun",
          "default_description": "Achtsamkeit hilft, den gegenwärtigen Moment bewusst wahrzunehmen.\nDiese Fähigkeit kann bei Stress, Depressionen und Ängsten\nnachhaltig entlasten."
        }
      ]
    },
    {
      "category": "Behandlungsschwerpunkte",
      "icon_color": "#B5A18C",
      "items": [
        {
          "name": "Depression-Behandlung",
          "icon": "cloud",
          "default_description": "Depression ist gut behandelbar. In der Therapie arbeiten wir an\nden Ursachen, stärken Ihre Ressourcen und entwickeln Strategien\ngegen die Antriebslosigkeit."
        },
        {
          "name": "Angststörungen",
          "icon": "alert-circle",
          "default_description": "Ob Panikattacken, soziale Ängste oder Phobien - Angststörungen\nlassen sich wirksam behandeln. Wir helfen Ihnen, die Angst\nzu überwinden und wieder frei zu leben."
        },
        {
          "name": "Burnout / Erschöpfung",
          "icon": "battery-low",
          "default_description": "Burnout entsteht oft schleichend. In der Therapie finden wir\nheraus, was Sie erschöpft hat und entwickeln Wege zu neuer\nEnergie und besserer Balance."
        },
        {
          "name": "Paartherapie",
          "icon": "users",
          "default_description": "Beziehungsprobleme belasten beide Partner. In der Paartherapie\nverbessern Sie Ihre Kommunikation und finden gemeinsam neue\nWege miteinander."
        },
        {
          "name": "Krisenintervention",
          "icon": "phone",
          "default_description": "In akuten Krisen brauchen Sie schnelle Unterstützung.\nWir bieten kurzfristige Termine, um Sie durch schwierige\nSituationen zu begleiten."
        }
      ]
    },
    {
      "category": "Weitere Angebote",
      "icon_color": "#7BA3C9",
      "items": [
        {
          "name": "Kinder- und Jugendpsychotherapie",
          "icon": "baby",
          "default_description": "Kinder und Jugendliche brauchen altersgerechte Therapie.\nMit spielerischen und kreativen Methoden helfen wir jungen\nMenschen, ihre Probleme zu bewältigen."
        },
        {
          "name": "Gruppentherapie",
          "icon": "users",
          "default_description": "In der Gruppentherapie lernen Sie von anderen Betroffenen\nund erleben, dass Sie nicht allein sind. Die Gruppe bietet\nUnterstützung und neue Perspektiven."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "einfühlsam",
      "wertschätzend",
      "vertrauensvoll",
      "professionell",
      "warmherzig"
    ],
    "audience": "Menschen mit psychischen Belastungen wie Depressionen, Ängsten oder Burnout.\nDer erste Schritt zur Therapie ist oft schwer - Hürden abbauen wichtig.",
    "key_messages": [
      "Der erste Schritt braucht Mut - wir sind für Sie da",
      "Vertrauliche und wertschätzende Atmosphäre",
      "Individuelle Therapie für Ihre Bedürfnisse",
      "Psychische Gesundheit ist genauso wichtig wie körperliche"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Psychotherapie in {ort}",
    "description_template": "Psychotherapeutische Praxis {praxis_name} in {ort}. ✓ Depression ✓ Angststörungen ✓ Burnout. Jetzt Erstgespräch vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Psychologischer Psychotherapeut",
    "de_female": "Psychologische Psychotherapeutin",
    "en": "Psychotherapist"
  },
  "jobs": {
    "templates": [
      {
        "id": "psychotherapeut",
        "title_de": "Psychologische Psychotherapie (m/w/d)",
        "employment_type": "fulltime",
        "category": "facharzt",
        "default_selected": false
      },
      {
        "id": "pia",
        "title_de": "Psychotherapie in Ausbildung / PiA (m/w/d)",
        "employment_type": "parttime",
        "category": "facharzt",
        "default_selected": false
      },
      {
        "id": "mfa",
        "title_de": "MFA in Vollzeit (m/w/d)",
        "employment_type": "parttime",
        "category": "mfa",
        "default_selected": true
      }
    ],
    "additional_benefits": [
      "Supervision",
      "Flexible Arbeitszeiten"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Verhaltenstherapie, Tiefenpsychologie, Traumatherapie, Gruppentherapie",
    "aufgaben": {
      "mfa": "Terminmanagement, Patientenkoordination, Abrechnung, Testverfahren-Vorbereitung",
      "arzt": "Diagnostische Gespräche, Psychotherapie, Medikation, Krisenintervention",
      "azubi": "Patientenempfang, Terminplanung, Abrechnungsgrundlagen"
    },
    "staerke": "Tiefe Patientenbeziehung, sinnstiftende Arbeit, Gesprächsmedizin",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Supervisionen, Therapieverfahren-Ausbildung, Traumatherapie",
      "moderne_ausstattung": "Moderne Praxisräume, digitale Dokumentation, Telemedizin"
    },
    "verbotene_phrasen": [
      "psychotherapeutische Behandlung",
      "Behandlung psychischer Erkrankungen"
    ]
  }
}
