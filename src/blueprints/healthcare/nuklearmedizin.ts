import type { Blueprint } from '../types.js'

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
          "default_description": "Die Schilddrüsenszintigraphie zeigt mit einer schwach radioaktiven Substanz, wie aktiv das Schilddrüsengewebe ist. So lassen sich Knoten als funktionell aktiv (warm oder heiß) oder inaktiv (kalt) einordnen."
        },
        {
          "name": "Schilddrüsen-Sonographie",
          "icon": "search",
          "default_description": "Im Ultraschall werden Größe, Gewebestruktur und Knoten der Schilddrüse beurteilt. Die Untersuchung kommt ohne Strahlenbelastung aus."
        },
        {
          "name": "Radioiodtherapie",
          "icon": "shield",
          "default_description": "Die Radioiodtherapie wird bei Schilddrüsenüberfunktion oder gutartigen Knoten eingesetzt und ist eine Alternative zur Operation. Die Behandlung erfolgt stationär auf einer nuklearmedizinischen Therapiestation; Eignung und Ablauf werden vorab besprochen."
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
          "default_description": "Die Skelettszintigraphie stellt Bereiche mit erhöhtem Knochenstoffwechsel im gesamten Skelett dar. Eingesetzt wird sie etwa bei Verdacht auf Entzündungen, Metastasen oder im Röntgen nicht sichtbare Frakturen."
        },
        {
          "name": "Myokard-Szintigraphie",
          "icon": "heart",
          "default_description": "Die Myokardszintigraphie zeigt die Durchblutung des Herzmuskels in Ruhe und unter Belastung. Damit lassen sich Durchblutungsstörungen bei koronarer Herzkrankheit erkennen und einordnen."
        },
        {
          "name": "PET/CT Befundung",
          "icon": "layers",
          "default_description": "Die PET/CT kombiniert die Darstellung von Stoffwechselvorgängen mit der Computertomographie. In der Onkologie wird sie für Stadieneinteilung, Therapiekontrolle und Nachsorge eingesetzt."
        },
        {
          "name": "Radiosynoviorthese (RSO)",
          "icon": "target",
          "default_description": "Bei der Radiosynoviorthese wird eine radioaktive Substanz in ein entzündetes Gelenk gespritzt, um die entzündete Gelenkschleimhaut zu veröden. Das Verfahren kommt bei chronischen Gelenkentzündungen in Frage, wenn andere Behandlungen nicht ausreichend wirken."
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
      "Bildgebende Diagnostik mit Radiopharmaka",
      "Schilddrüsendiagnostik und -therapie",
      "Strahlenschutz und Aufklärung zur Strahlenbelastung",
      "Verständliche Erklärung des Untersuchungsablaufs"
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
    "typisch": "Szintigrafie, Schilddrüsendiagnostik, Strahlenschutz",
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
