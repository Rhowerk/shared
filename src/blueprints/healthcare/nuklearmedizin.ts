import type { Blueprint } from '../types.ts'

export const nuklearmedizin: Blueprint = {
  "meta": {
    "id": "nuklearmedizin",
    "name": "Nuklearmedizinische Praxis",
    "name_variants": [
      "Nuklearmediziner",
      "Radiologische Praxis",
      "Praxis für Nuklearmedizin",
      "Radiologie und Nuklearmedizin"
    ],
    "icon": "atom",
    "description": "Praxis für Nuklearmedizin und Radiologie"
  },
  "colors": {
    "primary": "#1E40AF",
    "primary_light": "#3B82F6",
    "primary_dark": "#1E3A8A",
    "secondary": "#EFF6FF",
    "accent": "#F59E0B",
    "alternatives": [
      {
        "name": "Diagnostik Blau",
        "primary": "#1E40AF",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Technisch Grau",
        "primary": "#475569",
        "secondary": "#F8FAFC"
      },
      {
        "name": "Schilddrüse Türkis",
        "primary": "#0891B2",
        "secondary": "#F0FDFA"
      },
      {
        "name": "Modern Indigo",
        "primary": "#4338CA",
        "secondary": "#EEF2FF"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "nuklear-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Nuklearmedizinische Diagnostik"
      }
    ],
    "imagetext": [
      {
        "id": "nuklear-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Nuklearmedizin-Team"
      }
    ],
    "imagelist": [
      {
        "id": "nuklear-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Szintigraphie"
      }
    ],
    "banner": [
      {
        "id": "nuklear-banner",
        "url": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80",
        "alt": "Präzise Diagnostik"
      }
    ]
  },
  "services": [
    {
      "category": "Schilddrüse",
      "icon_color": "#1E40AF",
      "items": [
        {
          "name": "Schilddrüsen-Szintigraphie",
          "icon": "monitor",
          "default_description": "Die Szintigraphie zeigt die Funktion Ihrer Schilddrüse bildlich.\nWir erkennen heiße und kalte Knoten und können die optimale\nBehandlung planen."
        },
        {
          "name": "Schilddrüsen-Sonographie",
          "icon": "search",
          "default_description": "Im Ultraschall beurteilen wir Größe, Struktur und Knoten\nIhrer Schilddrüse. Schnell, schmerzfrei und ohne\nStrahlenbelastung."
        },
        {
          "name": "Radioiodtherapie",
          "icon": "shield",
          "default_description": "Bei Schilddrüsenüberfunktion oder gutartigen Knoten kann die\nRadioiodtherapie eine schonende Alternative zur Operation sein.\nWir beraten Sie ausführlich."
        }
      ]
    },
    {
      "category": "Weitere Diagnostik",
      "icon_color": "#F59E0B",
      "items": [
        {
          "name": "Skelett-Szintigraphie",
          "icon": "bone",
          "default_description": "Die Knochenszintigraphie zeigt Entzündungen, Metastasen und\nFrakturen im gesamten Skelett. Eine wichtige Untersuchung\nin der Orthopädie und Onkologie."
        },
        {
          "name": "Myokard-Szintigraphie",
          "icon": "heart",
          "default_description": "Die Herzszintigraphie zeigt die Durchblutung Ihres Herzmuskels\nunter Belastung und in Ruhe. So erkennen wir Durchblutungsstörungen\nfrühzeitig und zuverlässig."
        },
        {
          "name": "PET/CT Befundung",
          "icon": "layers",
          "default_description": "PET/CT kombiniert Stoffwechsel- und Schnittbilddiagnostik.\nIn der Onkologie unverzichtbar für Staging, Therapiekontrolle\nund Nachsorge."
        },
        {
          "name": "Radiosynoviorthese (RSO)",
          "icon": "target",
          "default_description": "Bei chronischen Gelenkentzündungen, die auf andere Therapien\nnicht ansprechen, kann die Radiosynoviorthese die entzündete\nGelenkschleimhaut schonend veröden."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "sachlich",
      "beruhigend",
      "technisch-verständlich"
    ],
    "audience": "Schilddrüsenpatienten, Patienten mit Knochen- oder Herzdiagnostik,\nonkologische Patienten zur PET/CT-Untersuchung.",
    "key_messages": [
      "Präzise Diagnostik mit modernster Technik",
      "Schilddrüse kompetent untersucht und behandelt",
      "Minimale Strahlenbelastung – maximale Aussagekraft",
      "Nuklearmedizinische Therapie unter einem Dach"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Nuklearmedizin in {ort}",
    "description_template": "Nuklearmedizinische Praxis {praxis_name} in {ort}. ✓ Schilddrüse ✓ Szintigraphie ✓ PET/CT. Präzise Diagnostik und Therapie!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Nuklearmedizin",
    "de_female": "Fachärztin für Nuklearmedizin",
    "en": "Nuclear Medicine Specialist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Nuklearmedizin (m/w/d)",
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
        "id": "mtra",
        "title_de": "MTRA / MTR (m/w/d)",
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
      "Strahlenschutz-Fortbildung",
      "MTRA-Einarbeitung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Szintigrafie, Schilddrüsendiagnostik, Radiojodtherapie, PET/CT",
    "aufgaben": {
      "mtra": "Radiopharmakon-Vorbereitung, Kamera-Bedienung, Patientenlagerung, Strahlenschutz",
      "arzt": "Befundung, Indikationsstellung, Radiojodtherapie, Schilddrüsen-Sono",
      "azubi": "Strahlenschutz-Grundlagen, Patientenempfang, Dokumentation"
    },
    "staerke": "Hightech-Diagnostik, einzigartiges Fachgebiet, planbare Arbeitszeiten",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Strahlenschutz-Aktualisierung, PET/CT-Kurse, Sono",
      "moderne_ausstattung": "Gammakamera, SPECT/CT, Schilddrüsen-Ultraschall"
    },
    "verbotene_phrasen": [
      "nuklearmedizinische Untersuchungen",
      "Behandlung mit Radiopharmaka"
    ]
  }
}
