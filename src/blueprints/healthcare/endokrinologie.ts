import type { Blueprint } from '../types.js'

export const endokrinologie: Blueprint = {
  "meta": {
    "id": "endokrinologie",
    "name": "Endokrinologische Praxis",
    "name_variants": [
      "Endokrinologe",
      "Diabetologe",
      "Diabetologische Praxis",
      "Schilddrüsenpraxis",
      "Praxis für Endokrinologie und Diabetologie"
    ],
    "icon": "activity",
    "description": "Praxis für Endokrinologie, Diabetologie und Stoffwechselerkrankungen"
  },
  "colors": {
    "primary": "#6366F1",
    "primary_light": "#818CF8",
    "primary_dark": "#4F46E5",
    "secondary": "#F5F5FF",
    "accent": "#F59E0B",
    "alternatives": [
      {
        "name": "Ruhig Indigo",
        "primary": "#6366F1",
        "secondary": "#F5F5FF"
      },
      {
        "name": "Vertrauensblau",
        "primary": "#3B82F6",
        "secondary": "#F0F6FF"
      },
      {
        "name": "Warm Grün",
        "primary": "#059669",
        "secondary": "#F0FDF4"
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
        "id": "endo-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Endokrinologische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "endo-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Praxisteam"
      }
    ],
    "imagelist": [
      {
        "id": "endo-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Diagnostik"
      }
    ],
    "banner": [
      {
        "id": "endo-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Gesunder Lebensstil"
      }
    ]
  },
  "services": [
    {
      "category": "Diabetologie",
      "icon_color": "#6366F1",
      "items": [
        {
          "name": "Diabetes mellitus Typ 1 & 2",
          "icon": "droplet",
          "default_description": "Diabetes erfordert eine maßgeschneiderte Therapie. Wir optimieren\nIhre Einstellung, schulen Sie im Umgang mit der Erkrankung\nund begleiten Sie langfristig."
        },
        {
          "name": "Insulinpumpen-Therapie",
          "icon": "settings",
          "default_description": "Moderne Insulinpumpen und Patchpumpen bieten Flexibilität im Alltag.\nWir beraten Sie bei der Auswahl, stellen die Pumpe ein\nund sind bei Fragen für Sie da."
        },
        {
          "name": "CGM / Glukose-Sensoren",
          "icon": "monitor",
          "default_description": "Kontinuierliche Glukosemessung zeigt Ihren Blutzuckerverlauf lückenlos.\nWir werten die Daten gemeinsam aus und passen Ihre Therapie\noptimal an."
        },
        {
          "name": "Diabetische Fußambulanz",
          "icon": "heart",
          "default_description": "Der diabetische Fuß erfordert besondere Aufmerksamkeit. In unserer\nFußambulanz untersuchen, behandeln und beraten wir Sie,\num Komplikationen vorzubeugen."
        }
      ]
    },
    {
      "category": "Schilddrüse & Hormone",
      "icon_color": "#F59E0B",
      "items": [
        {
          "name": "Schilddrüsen-Diagnostik & Therapie",
          "icon": "activity",
          "default_description": "Über- oder Unterfunktion, Knoten oder Entzündung – wir klären\nSchilddrüsenerkrankungen umfassend ab und finden die richtige\nBehandlung für Sie."
        },
        {
          "name": "Schilddrüsen-Sonographie",
          "icon": "monitor",
          "default_description": "Mit dem Ultraschall beurteilen wir Größe, Struktur und\nDurchblutung Ihrer Schilddrüse. Knoten können so frühzeitig\nerkannt und kontrolliert werden."
        },
        {
          "name": "Hormonelle Störungen",
          "icon": "clipboard",
          "default_description": "Hormone steuern zahlreiche Körperfunktionen. Bei Störungen\nder Nebennieren, Hypophyse oder Geschlechtshormone führen\nwir eine gezielte Diagnostik und Therapie durch."
        },
        {
          "name": "Osteoporose-Diagnostik (DXA)",
          "icon": "bone",
          "default_description": "Mit der Knochendichtemessung (DXA) erkennen wir Osteoporose\nfrühzeitig. So können wir rechtzeitig behandeln und\nKnochenbrüche verhindern."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "geduldig",
      "motivierend",
      "alltagsbezogen"
    ],
    "audience": "Diabetes-Patienten (Typ 1 und 2), Schilddrüsenerkrankte,\nPatienten mit hormonellen Störungen, Adipositas-Betroffene.",
    "key_messages": [
      "Diabetes individuell und modern behandeln",
      "Schilddrüse in Balance",
      "Hormone verstehen – Gesundheit steuern",
      "Ihr Partner für Stoffwechsel und Ernährung"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Endokrinologie & Diabetologie in {ort}",
    "description_template": "Endokrinologische Praxis {praxis_name} in {ort}. ✓ Diabetes-Therapie ✓ Schilddrüse ✓ Hormone. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Innere Medizin, Endokrinologie und Diabetologie",
    "de_female": "Fachärztin für Innere Medizin, Endokrinologie und Diabetologie",
    "en": "Endocrinologist & Diabetologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Endokrinologie (m/w/d)",
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
        "id": "diabetesberatung",
        "title_de": "Diabetesberatung (m/w/d)",
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
      "Diabetologie-Fortbildung",
      "Pumpen- und CGM-Schulung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Schilddrüse, Diabetes-Management, Hormontherapie, Stoffwechsel",
    "aufgaben": {
      "mfa": "Schilddrüsen-Sono-Assistenz, Blutzucker-Schulung, Labor, CGM-Einweisung",
      "arzt": "Schilddrüsen-Sonografie, Diabetes-Einstellung, Hormon-Diagnostik",
      "azubi": "Blutzucker-Messung, Patientenempfang, Laborversand"
    },
    "staerke": "Langzeit-Patientenbeziehungen, Diabetes-Begleitung, wachsendes Fach",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Diabetesberater, Schilddrüsen-Sonografie, Osteologie",
      "moderne_ausstattung": "Schilddrüsen-Ultraschall, CGM-Systeme, DXA"
    },
    "verbotene_phrasen": [
      "Behandlung von Stoffwechselerkrankungen",
      "endokrinologische Versorgung"
    ]
  }
}
