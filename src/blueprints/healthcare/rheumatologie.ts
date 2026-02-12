import type { Blueprint } from '../types.ts'

export const rheumatologie: Blueprint = {
  "meta": {
    "id": "rheumatologie",
    "name": "Rheumatologische Praxis",
    "name_variants": [
      "Rheumatologe",
      "Rheumapraxis",
      "Rheumazentrum",
      "Praxis für Rheumatologie",
      "Innere Medizin und Rheumatologie"
    ],
    "icon": "bone",
    "description": "Praxis für Rheumatologie und Autoimmunerkrankungen"
  },
  "colors": {
    "primary": "#8B5CF6",
    "primary_light": "#A78BFA",
    "primary_dark": "#6D28D9",
    "secondary": "#F5F3FF",
    "accent": "#F472B6",
    "alternatives": [
      {
        "name": "Sanft Violett",
        "primary": "#8B5CF6",
        "secondary": "#F5F3FF"
      },
      {
        "name": "Ruhig Blau",
        "primary": "#6366F1",
        "secondary": "#EEF2FF"
      },
      {
        "name": "Warm Rosé",
        "primary": "#DB2777",
        "secondary": "#FDF2F8"
      },
      {
        "name": "Professionell Grau",
        "primary": "#6B7280",
        "secondary": "#F9FAFB"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "rheuma-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Rheumatologische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "rheuma-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Rheumatologie-Team"
      }
    ],
    "imagelist": [
      {
        "id": "rheuma-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Gelenksonographie"
      }
    ],
    "banner": [
      {
        "id": "rheuma-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Beweglichkeit und Lebensqualität"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#8B5CF6",
      "items": [
        {
          "name": "Rheumatologische Diagnostik",
          "icon": "search",
          "default_description": "Mit gezielter Labor- und Bildgebungsdiagnostik identifizieren wir\nrheumatische Erkrankungen frühzeitig. Je schneller die Diagnose,\ndesto besser können wir Gelenkschäden verhindern."
        },
        {
          "name": "Gelenksonographie",
          "icon": "monitor",
          "default_description": "Der Ultraschall zeigt uns Entzündungen in Gelenken und Sehnen\nin Echtzeit. Schmerzfrei und ohne Strahlung können wir den\nTherapieerfolg direkt kontrollieren."
        },
        {
          "name": "Rheuma-Labor",
          "icon": "test-tube",
          "default_description": "Spezielle Laboruntersuchungen wie Rheumafaktor, Anti-CCP und\nEntzündungsmarker helfen uns, die genaue Art Ihrer rheumatischen\nErkrankung zu bestimmen."
        }
      ]
    },
    {
      "category": "Erkrankungen",
      "icon_color": "#F472B6",
      "items": [
        {
          "name": "Rheumatoide Arthritis",
          "icon": "shield",
          "default_description": "Die häufigste entzündliche Gelenkerkrankung lässt sich heute\ngut behandeln. Mit modernen Medikamenten können wir die\nEntzündung stoppen und Ihre Gelenke schützen."
        },
        {
          "name": "Spondyloarthritis / Morbus Bechterew",
          "icon": "activity",
          "default_description": "Rückenschmerzen und Steifigkeit – Morbus Bechterew betrifft\nvor allem die Wirbelsäule. Wir setzen auf Bewegungstherapie\nkombiniert mit modernen Medikamenten."
        },
        {
          "name": "Kollagenosen (Lupus, Sklerodermie)",
          "icon": "heart",
          "default_description": "Systemische Autoimmunerkrankungen erfordern eine individuelle\nLangzeitbetreuung. Wir koordinieren Ihre Behandlung und\npassen die Therapie regelmäßig an."
        }
      ]
    },
    {
      "category": "Therapie",
      "icon_color": "#6D28D9",
      "items": [
        {
          "name": "Biologika-Therapie",
          "icon": "syringe",
          "default_description": "Biologika und Biosimilars greifen gezielt in den Entzündungsprozess\nein. In unserer Praxis führen wir Infusionen und Injektionen\ndurch und überwachen den Therapieverlauf."
        },
        {
          "name": "Gelenkpunktion / Infiltration",
          "icon": "target",
          "default_description": "Bei akuten Gelenkentzündungen können wir mit einer gezielten\nGelenkpunktion Flüssigkeit entnehmen und entzündungshemmende\nMedikamente direkt ins Gelenk spritzen."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "einfühlsam",
      "motivierend",
      "geduldig"
    ],
    "audience": "Patienten mit rheumatoider Arthritis, Morbus Bechterew, Lupus,\nFibromyalgie, Gicht und anderen Autoimmunerkrankungen.",
    "key_messages": [
      "Rheuma ist behandelbar – wir finden die richtige Therapie",
      "Moderne Biologika und zielgerichtete Therapien",
      "Beweglichkeit erhalten – Lebensqualität steigern",
      "Frühdiagnostik verhindert Gelenkschäden"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Rheumatologie in {ort}",
    "description_template": "Rheumatologische Praxis {praxis_name} in {ort}. ✓ Rheuma-Diagnostik ✓ Biologika ✓ Gelenksonographie. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Innere Medizin und Rheumatologie",
    "de_female": "Fachärztin für Innere Medizin und Rheumatologie",
    "en": "Rheumatologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Rheumatologie (m/w/d)",
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
        "id": "rfa",
        "title_de": "Rheumatologische Fachassistenz / RFA (m/w/d)",
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
      "Sonographie-Einarbeitung",
      "Rheumatologische Fachassistenz-Fortbildung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Gelenksonografie, Immundiagnostik, Biologika, Autoimmunerkrankungen",
    "aufgaben": {
      "mfa": "Gelenksonografie-Assistenz, Infusionstherapie (Biologika), Labormanagement",
      "arzt": "Gelenksonografie, Immundiagnostik, Biologika-Einstellung",
      "azubi": "Labor-Grundlagen, Patientenempfang, Infusionsvorbereitung"
    },
    "staerke": "Spezialisierte Immunologie, Biologika, interdisziplinär",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Gelenksonografie, Immunologie, Biologika-Schulung",
      "moderne_ausstattung": "Gelenksonografie, Kapillarmikroskopie, digitale Doku"
    },
    "verbotene_phrasen": [
      "Behandlung rheumatischer Erkrankungen",
      "rheumatologische Versorgung"
    ]
  }
}
