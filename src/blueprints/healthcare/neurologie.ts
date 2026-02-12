import type { Blueprint } from '../types.ts'

export const neurologie: Blueprint = {
  "meta": {
    "id": "neurologie",
    "name": "Neurologische Praxis",
    "name_variants": [
      "Neurologe",
      "Neurologie",
      "Praxis für Neurologie",
      "Nervenarzt"
    ],
    "icon": "brain",
    "description": "Praxis für Erkrankungen des Nervensystems"
  },
  "colors": {
    "primary": "#6C5B7B",
    "primary_light": "#8E7A9A",
    "primary_dark": "#534361",
    "secondary": "#F9F7FA",
    "accent": "#C06C84",
    "alternatives": [
      {
        "name": "Ruhig Violett",
        "primary": "#6C5B7B",
        "secondary": "#F9F7FA"
      },
      {
        "name": "Konzentration Blau",
        "primary": "#4A6FA5",
        "secondary": "#F0F4F9"
      },
      {
        "name": "Balance Grün",
        "primary": "#5D9B84",
        "secondary": "#F0F9F5"
      },
      {
        "name": "Neutral Grau",
        "primary": "#6B7280",
        "secondary": "#F9FAFB"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "neuro-hero-1",
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80",
        "alt": "Neurologe im Gespräch mit Patient"
      }
    ],
    "imagetext": [
      {
        "id": "neuro-team",
        "url": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1024&q=80",
        "alt": "Neurologisches Praxisteam"
      }
    ],
    "imagelist": [
      {
        "id": "neuro-leistungen",
        "url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1024&q=80",
        "alt": "Neurologische Untersuchung"
      }
    ],
    "banner": [
      {
        "id": "neuro-banner",
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
        "alt": "Ruhe und Klarheit"
      }
    ]
  },
  "services": [
    {
      "category": "Diagnostik",
      "icon_color": "#6C5B7B",
      "items": [
        {
          "name": "Neurologische Untersuchung",
          "icon": "clipboard-check",
          "default_description": "Bei der neurologischen Untersuchung prüfen wir Reflexe, Koordination,\nSensibilität und Hirnnerven. Diese gründliche Untersuchung hilft uns,\nneurologische Erkrankungen zu erkennen."
        },
        {
          "name": "EEG (Hirnstrommessung)",
          "icon": "activity",
          "default_description": "Das EEG misst die elektrische Aktivität Ihres Gehirns. Die schmerzfreie\nUntersuchung hilft bei der Diagnose von Epilepsie, Schlafstörungen\nund anderen neurologischen Erkrankungen."
        },
        {
          "name": "Elektroneurographie (ENG)",
          "icon": "zap",
          "default_description": "Mit der Elektroneurographie messen wir die Nervenleitgeschwindigkeit.\nSo können wir Nervenschädigungen wie beim Karpaltunnelsyndrom\noder bei Polyneuropathie erkennen."
        },
        {
          "name": "Elektromyographie (EMG)",
          "icon": "trending-up",
          "default_description": "Die EMG-Untersuchung misst die elektrische Aktivität Ihrer Muskeln.\nSie hilft bei der Diagnose von Muskelerkrankungen und Nervenschädigungen."
        }
      ]
    },
    {
      "category": "Kopfschmerz & Schwindel",
      "icon_color": "#C06C84",
      "items": [
        {
          "name": "Kopfschmerzbehandlung / Migräne",
          "icon": "cloud",
          "default_description": "Kopfschmerzen und Migräne können den Alltag stark beeinträchtigen.\nWir diagnostizieren die Art Ihrer Kopfschmerzen und entwickeln\neinen individuellen Behandlungsplan."
        },
        {
          "name": "Schwindel-Diagnostik",
          "icon": "rotate-ccw",
          "default_description": "Schwindel hat viele mögliche Ursachen. Mit gezielter Diagnostik\nfinden wir heraus, ob ein neurologisches Problem vorliegt und\nwelche Therapie Ihnen hilft."
        }
      ]
    },
    {
      "category": "Chronische Erkrankungen",
      "icon_color": "#4A6FA5",
      "items": [
        {
          "name": "Multiple Sklerose Betreuung",
          "icon": "users",
          "default_description": "Bei MS begleiten wir Sie langfristig mit moderner Therapie.\nWir überwachen den Verlauf, passen die Behandlung an und sind\nbei Schüben für Sie da."
        },
        {
          "name": "Parkinson-Behandlung",
          "icon": "move",
          "default_description": "Parkinson erfordert eine individuelle Behandlung. Wir optimieren\nIhre Medikation und unterstützen Sie dabei, Ihre Beweglichkeit\nund Lebensqualität zu erhalten."
        },
        {
          "name": "Epilepsie-Behandlung",
          "icon": "zap-off",
          "default_description": "Bei Epilepsie finden wir die richtige Medikation, um Anfälle\nzu kontrollieren. Regelmäßige Kontrollen helfen, die Therapie\noptimal anzupassen."
        },
        {
          "name": "Demenz-Diagnostik",
          "icon": "brain",
          "default_description": "Vergesslichkeit kann viele Ursachen haben. Mit speziellen Tests\nund Untersuchungen klären wir ab, ob eine Demenz vorliegt und\nwelche Behandlung möglich ist."
        },
        {
          "name": "Polyneuropathie",
          "icon": "git-branch",
          "default_description": "Bei Polyneuropathie sind mehrere Nerven geschädigt. Wir diagnostizieren\ndie Ursache und behandeln Symptome wie Kribbeln, Taubheit oder Schmerzen."
        },
        {
          "name": "Schlaganfall-Nachsorge",
          "icon": "heart",
          "default_description": "Nach einem Schlaganfall begleiten wir Ihre Rehabilitation.\nWir koordinieren Therapien, kontrollieren Risikofaktoren und\nunterstützen Ihre Genesung."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "einfühlsam",
      "verständnisvoll",
      "kompetent",
      "geduldig"
    ],
    "audience": "Patienten mit neurologischen Beschwerden wie Kopfschmerzen, Schwindel, MS oder Parkinson.\nOft verunsichert, brauchen geduldige Erklärungen.",
    "key_messages": [
      "Kompetente Diagnostik bei Kopfschmerzen und Migräne",
      "Einfühlsame Begleitung bei chronischen Erkrankungen",
      "Modernste neurologische Untersuchungsmethoden",
      "Zeit für Ihre Anliegen"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Neurologe in {ort}",
    "description_template": "Neurologische Praxis {praxis_name} in {ort}. ✓ Kopfschmerzen ✓ Schwindel ✓ MS & Parkinson. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Neurologie",
    "de_female": "Fachärztin für Neurologie",
    "en": "Neurologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Neurologie (m/w/d)",
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
        "id": "mfa-neuro",
        "title_de": "MFA Neurophysiologische Diagnostik (m/w/d)",
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
      "Einarbeitung in neurologische Funktionsdiagnostik",
      "Moderne EEG/EMG/ENG Ausstattung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "EEG, EMG, Nervenleitgeschwindigkeit, MS-Betreuung, Kopfschmerz-Diagnostik",
    "aufgaben": {
      "mfa": "EEG anlegen, NLG/EMG-Vorbereitung, Infusionen, Patientenkoordination",
      "arzt": "Neurophysiologische Diagnostik, MS-Management, Parkinson, Kopfschmerzambulanz",
      "azubi": "EEG-Grundlagen, Patientenempfang, Terminplanung"
    },
    "staerke": "Fachlich tiefgehend, langfristige Patientenbeziehungen, moderne Diagnostik",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "EEG/EMG-Zertifikate, MS-Schwerpunkt, Botulinumtoxin-Kurse",
      "moderne_ausstattung": "Digitales EEG, EMG/NLG, transkranielle Doppler-Sonografie"
    },
    "verbotene_phrasen": [
      "Behandlung neurologischer Erkrankungen",
      "neurologische Betreuung"
    ]
  }
}
