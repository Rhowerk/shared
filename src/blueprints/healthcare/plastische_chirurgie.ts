import type { Blueprint } from '../types.js'

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
          "name": "Faltenbehandlung (Unterspritzung)",
          "icon": "syringe",
          "default_description": "Bei der Behandlung von Mimikfalten wird ein Wirkstoff in kleinen Mengen in einzelne Gesichtsmuskeln gespritzt, der diese vorübergehend entspannt. Die Wirkung hält in der Regel einige Monate an; Ablauf, Risiken und Kosten werden vorab besprochen.",
          "igel": true
        },
        {
          "name": "Hyaluronsäure-Filler",
          "icon": "droplet",
          "default_description": "Hyaluronsäure-Filler werden zur Behandlung von Falten oder zum Volumenaufbau eingesetzt, etwa an Lippen oder Wangen. Hyaluronsäure wird vom Körper mit der Zeit abgebaut, die Wirkung ist daher zeitlich begrenzt.",
          "igel": true
        },
        {
          "name": "Fadenlift",
          "icon": "arrow-up",
          "default_description": "Beim Fadenlifting werden spezielle Fäden über feine Einstiche unter die Haut eingebracht, um erschlaffte Gesichtspartien anzuheben. Die Wirkung ist zeitlich begrenzt; Ablauf, Risiken und Kosten werden vorab besprochen.",
          "igel": true
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
          "default_description": "Brustvergrößerung und Bruststraffung verändern Größe, Form oder Position der Brust, etwa mit Implantaten oder Eigengewebe. Vor dem Eingriff werden Möglichkeiten, Risiken und Kosten ausführlich besprochen.",
          "igel": true
        },
        {
          "name": "Fettabsaugung (Liposuktion)",
          "icon": "minus-circle",
          "default_description": "Bei der Fettabsaugung wird Fettgewebe an umschriebenen Körperstellen über feine Kanülen entfernt. Das Verfahren ersetzt keine Gewichtsabnahme; Eignung, Risiken und Kosten werden vorab besprochen. Bei einem Lipödem gelten eigene medizinische Voraussetzungen, ob die Krankenkasse die Kosten übernimmt, hängt vom Einzelfall ab.",
          "igel": true
        },
        {
          "name": "Lidstraffung (Blepharoplastik)",
          "icon": "eye",
          "default_description": "Bei der Lidstraffung wird überschüssige Haut, gegebenenfalls auch Fettgewebe, an Ober- oder Unterlidern entfernt. Schränken die Oberlider das Gesichtsfeld ein, kann eine medizinische Indikation bestehen; sonst ist der Eingriff eine Selbstzahlerleistung."
        },
        {
          "name": "Nasenkorrektur (Rhinoplastik)",
          "icon": "user",
          "default_description": "Die Nasenkorrektur verändert Form oder Funktion der Nase, etwa bei Höckern, Schiefstand oder behinderter Nasenatmung. Rein ästhetische Korrekturen sind Selbstzahlerleistungen."
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
      "Ausführliche Beratung vor jedem Eingriff",
      "Realistische Erwartungen und Aufklärung über Risiken",
      "Ästhetische und rekonstruktive Chirurgie",
      "Diskretion"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Plastische & Ästhetische Chirurgie in {ort}",
    "description_template": "Praxis für Plastische Chirurgie {praxis_name} in {ort}. Ästhetische und rekonstruktive Eingriffe, Beratung zu Ablauf, Risiken und Kosten.",
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
    "typisch": "Ästhetische und rekonstruktive Chirurgie, Beratung, Nachsorge",
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
