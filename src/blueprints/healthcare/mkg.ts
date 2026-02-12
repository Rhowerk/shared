import type { Blueprint } from '../types.ts'

export const mkg: Blueprint = {
  "meta": {
    "id": "mkg",
    "name": "MKG-Chirurgische Praxis",
    "name_variants": [
      "MKG-Chirurg",
      "Kieferchirurg",
      "Oralchirurg",
      "Mund-Kiefer-Gesichtschirurgie",
      "MKG-Praxis"
    ],
    "icon": "tooth",
    "description": "Praxis für Mund-, Kiefer- und Gesichtschirurgie"
  },
  "colors": {
    "primary": "#0891B2",
    "primary_light": "#22D3EE",
    "primary_dark": "#0E7490",
    "secondary": "#F0FDFA",
    "accent": "#F59E0B",
    "alternatives": [
      {
        "name": "Chirurgie Cyan",
        "primary": "#0891B2",
        "secondary": "#F0FDFA"
      },
      {
        "name": "Vertrauen Blau",
        "primary": "#2563EB",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Professionell Dunkel",
        "primary": "#334155",
        "secondary": "#F8FAFC"
      },
      {
        "name": "Modern Weiß-Grün",
        "primary": "#10B981",
        "secondary": "#F0FDF4"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "mkg-hero-1",
        "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80",
        "alt": "MKG-chirurgischer Eingriff"
      }
    ],
    "imagetext": [
      {
        "id": "mkg-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "MKG-Team"
      }
    ],
    "imagelist": [
      {
        "id": "mkg-leistungen",
        "url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1024&q=80",
        "alt": "Zahnimplantat"
      }
    ],
    "banner": [
      {
        "id": "mkg-banner",
        "url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
        "alt": "Strahlendes Lächeln"
      }
    ]
  },
  "services": [
    {
      "category": "Implantologie",
      "icon_color": "#0891B2",
      "items": [
        {
          "name": "Implantologie",
          "icon": "plus-circle",
          "default_description": "Zahnimplantate sind die beste Lösung für fehlende Zähne.\nAls Kieferchirurgen setzen wir Implantate sicher und präzise,\nauch bei schwierigen Knochenverhältnissen."
        },
        {
          "name": "Knochenaufbau (Augmentation)",
          "icon": "layers",
          "default_description": "Für ein sicheres Implantat braucht es ausreichend Knochen.\nMit verschiedenen Augmentationstechniken bauen wir den\nKieferknochen zuverlässig auf."
        },
        {
          "name": "3D-Röntgen / DVT",
          "icon": "monitor",
          "default_description": "Das digitale Volumentomogramm zeigt uns Ihren Kiefer dreidimensional.\nSo planen wir Implantate und Eingriffe millimetergenau\nund minimal-invasiv."
        }
      ]
    },
    {
      "category": "Chirurgie",
      "icon_color": "#F59E0B",
      "items": [
        {
          "name": "Weisheitszahn-Entfernung",
          "icon": "minus-circle",
          "default_description": "Weisheitszähne entfernen wir schonend, bei Bedarf unter\nDämmerschlaf oder Narkose. Unsere chirurgische Erfahrung\nsorgt für eine schnelle Heilung."
        },
        {
          "name": "Wurzelspitzenresektion",
          "icon": "scissors",
          "default_description": "Wenn eine Wurzelbehandlung nicht ausreicht, entfernen wir\ndie entzündete Wurzelspitze chirurgisch. So kann der\neigene Zahn oft noch erhalten werden."
        },
        {
          "name": "Kiefergelenkbehandlung (CMD)",
          "icon": "settings",
          "default_description": "Kiefergelenkbeschwerden, Knacken und Schmerzen behandeln wir\nmit einem individuellen Therapiekonzept aus Schienentherapie,\nPhysiotherapie und bei Bedarf chirurgischen Maßnahmen."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "fachkompetent",
      "beruhigend",
      "chirurgisch-präzise",
      "vertrauensvoll"
    ],
    "audience": "Patienten vor chirurgischen Eingriffen im Mund-Kiefer-Bereich,\nImplantologie-Interessierte, Weisheitszahn-Patienten, CMD-Betroffene.",
    "key_messages": [
      "Chirurgische Expertise für Mund, Kiefer und Gesicht",
      "Implantate vom Spezialisten",
      "Schonende Eingriffe mit modernster Technik",
      "3D-Diagnostik für sichere Planung"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | MKG-Chirurgie in {ort}",
    "description_template": "MKG-Chirurgische Praxis {praxis_name} in {ort}. ✓ Implantologie ✓ Weisheitszähne ✓ Knochenaufbau. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Mund-, Kiefer- und Gesichtschirurgie",
    "de_female": "Fachärztin für Mund-, Kiefer- und Gesichtschirurgie",
    "en": "Oral and Maxillofacial Surgeon"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung MKG-Chirurgie (m/w/d)",
        "employment_type": "fulltime",
        "category": "facharzt",
        "default_selected": false
      },
      {
        "id": "zfa",
        "title_de": "ZFA / MFA OP-Assistenz (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": true
      },
      {
        "id": "zfa-empfang",
        "title_de": "ZFA Empfang & Verwaltung (m/w/d)",
        "employment_type": "fulltime",
        "category": "mfa",
        "default_selected": false
      },
      {
        "id": "ausbildung",
        "title_de": "Auszubildende ZFA (m/w/d)",
        "employment_type": "apprenticeship",
        "category": "ausbildung",
        "default_selected": false
      }
    ],
    "additional_benefits": [
      "OP-Assistenz-Einarbeitung",
      "DVT-Schulung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Weisheitszähne, Implantologie, Kieferchirurgie, Traumatologie",
    "aufgaben": {
      "zfa": "OP-Assistenz, Röntgen, Abdrücke, Nahtentfernung, Patientenbetreuung",
      "arzt": "Oralchirurgie, Implantologie, Kieferfrakturen, Tumorchirurgie",
      "azubi": "OP-Assistenz-Grundlagen, Instrumentenkunde, Hygiene"
    },
    "staerke": "Operatives Handwerk, ästhetische Ergebnisse, chirurgisches Spektrum",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Implantologie-Kurse, OP-Assistenz, Röntgen-Zertifikat",
      "moderne_ausstattung": "DVT/3D-Röntgen, Piezo-Chirurgie, Implantatsysteme"
    },
    "verbotene_phrasen": [
      "kieferchirurgische Behandlung",
      "MKG-Versorgung"
    ]
  }
}
