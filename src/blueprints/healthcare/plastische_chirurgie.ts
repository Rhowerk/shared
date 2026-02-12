import type { Blueprint } from '../types.ts'

export const plastische_chirurgie: Blueprint = {
  "meta": {
    "id": "plastische_chirurgie",
    "name": "Praxis für Plastische & Ästhetische Chirurgie",
    "name_variants": [
      "Plastischer Chirurg",
      "Ästhetische Medizin",
      "Schönheitschirurgie",
      "Praxis für Ästhetik",
      "Beauty Clinic"
    ],
    "icon": "sparkles",
    "description": "Praxis für Plastische, Ästhetische und Rekonstruktive Chirurgie"
  },
  "colors": {
    "primary": "#B8860B",
    "primary_light": "#DAA520",
    "primary_dark": "#8B6914",
    "secondary": "#FFFDF7",
    "accent": "#1F2937",
    "alternatives": [
      {
        "name": "Elegant Gold",
        "primary": "#B8860B",
        "secondary": "#FFFDF7"
      },
      {
        "name": "Premium Schwarz",
        "primary": "#1F2937",
        "secondary": "#F9FAFB"
      },
      {
        "name": "Modern Rosé",
        "primary": "#BE185D",
        "secondary": "#FDF2F8"
      },
      {
        "name": "Clean Weiß-Blau",
        "primary": "#0EA5E9",
        "secondary": "#F0F9FF"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "plastik-hero-1",
        "url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
        "alt": "Ästhetische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "plastik-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Praxisteam"
      }
    ],
    "imagelist": [
      {
        "id": "plastik-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Behandlung"
      }
    ],
    "banner": [
      {
        "id": "plastik-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Natürliche Schönheit"
      }
    ]
  },
  "services": [
    {
      "category": "Minimalinvasive Ästhetik",
      "icon_color": "#B8860B",
      "items": [
        {
          "name": "Botox-Behandlung",
          "icon": "syringe",
          "default_description": "Botox glättet Mimikfalten natürlich und effektiv.\nDie Behandlung dauert nur wenige Minuten und ist sofort\nalltagstauglich. Ergebnis nach wenigen Tagen sichtbar."
        },
        {
          "name": "Hyaluronsäure-Filler",
          "icon": "droplet",
          "default_description": "Mit Hyaluronsäure modellieren wir Lippen, gleichen Falten aus\nund geben dem Gesicht verlorenes Volumen zurück.\nNatürlich und harmonisch."
        },
        {
          "name": "Fadenlift",
          "icon": "arrow-up",
          "default_description": "Das Fadenlift strafft erschlaffte Gesichtspartien ohne Operation.\nSpezielle Fäden werden unter die Haut eingebracht und\nsorgen für einen natürlichen Liftingeffekt."
        }
      ]
    },
    {
      "category": "Operative Eingriffe",
      "icon_color": "#1F2937",
      "items": [
        {
          "name": "Brustvergrößerung / Bruststraffung",
          "icon": "heart",
          "default_description": "Ob Vergrößerung, Verkleinerung oder Straffung – wir finden\ndie optimale Lösung für eine harmonische Brustform.\nAusführliche Beratung und modernste Techniken."
        },
        {
          "name": "Fettabsaugung (Liposuktion)",
          "icon": "minus-circle",
          "default_description": "Hartnäckige Fettpolster, die trotz Sport und Ernährung bleiben,\nentfernen wir mit moderner Liposuktion. Für eine definierte\nKörpersilhouette."
        },
        {
          "name": "Lidstraffung (Blepharoplastik)",
          "icon": "eye",
          "default_description": "Schwere Oberlider oder Tränensäcke lassen Sie müde wirken.\nDie Lidstraffung schenkt Ihnen einen wachen, frischen Blick –\nmit nahezu unsichtbaren Narben."
        },
        {
          "name": "Nasenkorrektur (Rhinoplastik)",
          "icon": "user",
          "default_description": "Die Nase prägt das Gesicht entscheidend. Wir korrigieren\nForm und Funktion so, dass das Ergebnis natürlich aussieht\nund zu Ihrem Gesicht passt."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "hochwertig",
      "diskret",
      "professionell",
      "einfühlsam"
    ],
    "audience": "Patienten, die ihr Äußeres harmonisieren möchten.\nNatürliche Ergebnisse statt übertriebener Veränderung.\nAuch rekonstruktive Patienten nach Unfällen oder Operationen.",
    "key_messages": [
      "Natürliche Ergebnisse – für Ihr Wohlbefinden",
      "Chirurgische Expertise und ästhetisches Gespür",
      "Ausführliche Beratung vor jedem Eingriff",
      "Ihre Zufriedenheit ist unser höchster Anspruch"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Plastische & Ästhetische Chirurgie in {ort}",
    "description_template": "Praxis für Plastische Chirurgie {praxis_name} in {ort}. ✓ Botox & Filler ✓ Brustchirurgie ✓ Liposuktion. Jetzt Beratungstermin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Plastische und Ästhetische Chirurgie",
    "de_female": "Fachärztin für Plastische und Ästhetische Chirurgie",
    "en": "Plastic & Aesthetic Surgeon"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Plastische Chirurgie (m/w/d)",
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
        "title_de": "MFA OP-Assistenz (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "kosmetik",
        "title_de": "Medizinische Kosmetik (m/w/d)",
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
      "Ästhetische Fortbildungen",
      "Injektionstechnik-Schulung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Ästhetik, Rekonstruktion, Handchirurgie, Verbrennungschirurgie",
    "aufgaben": {
      "mfa": "OP-Vorbereitung, Fotodokumentation, Beratungstermine, Nachsorge",
      "arzt": "Ästhetische OPs, Rekonstruktion, Handchirurgie, Injektionsbehandlungen",
      "azubi": "OP-Vorbereitung-Grundlagen, Patientenempfang, Fotodokumentation"
    },
    "staerke": "Sichtbare Ergebnisse, hohe Patientenzufriedenheit, ästhetisches Handwerk",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Injektionskurse (Filler/Botox), OP-Techniken, Laser",
      "moderne_ausstattung": "Moderner OP-Saal, Laser, 3D-Simulation, Fotostudio"
    },
    "verbotene_phrasen": [
      "plastische Eingriffe",
      "Schönheitsoperationen"
    ]
  }
}
