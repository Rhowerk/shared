import type { Blueprint } from '../types.js'

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
          "default_description": "Die neurologische Untersuchung prüft unter anderem Reflexe, Kraft, Koordination, Sensibilität und Hirnnerven. Je nach Befund folgen weitere Untersuchungen wie EEG oder Messungen der Nervenleitung."
        },
        {
          "name": "EEG (Hirnstrommessung)",
          "icon": "activity",
          "default_description": "Das Elektroenzephalogramm (EEG) misst die elektrische Aktivität des Gehirns über Elektroden auf der Kopfhaut. Es wird unter anderem bei Verdacht auf Epilepsie oder bei Bewusstseinsstörungen eingesetzt."
        },
        {
          "name": "Elektroneurographie (ENG)",
          "icon": "zap",
          "default_description": "Die Elektroneurographie misst die Leitgeschwindigkeit peripherer Nerven. Damit lassen sich Nervenschädigungen wie beim Karpaltunnelsyndrom oder bei einer Polyneuropathie nachweisen."
        },
        {
          "name": "Elektromyographie (EMG)",
          "icon": "trending-up",
          "default_description": "Die Elektromyographie misst die elektrische Aktivität von Muskeln, meist mit einer feinen Nadelelektrode. Die Untersuchung hilft, Muskelerkrankungen von Nervenschädigungen zu unterscheiden."
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
          "default_description": "Kopfschmerzen und Migräne haben unterschiedliche Formen und Ursachen. Nach Einordnung der Kopfschmerzart werden Akutbehandlung, Vorbeugung und Auslöser besprochen, oft unterstützt durch ein Kopfschmerztagebuch."
        },
        {
          "name": "Schwindel-Diagnostik",
          "icon": "rotate-ccw",
          "default_description": "Schwindel kann neurologische, aber auch andere Ursachen haben. Die neurologische Abklärung umfasst Untersuchung und gegebenenfalls weitere Diagnostik, um die Ursache einzugrenzen."
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
          "default_description": "Multiple Sklerose ist eine chronisch-entzündliche Erkrankung des Nervensystems. Die Betreuung umfasst Verlaufskontrollen, die Auswahl und Überwachung einer verlaufsmodifizierenden Therapie sowie die Behandlung von Schüben und Symptomen."
        },
        {
          "name": "Parkinson-Behandlung",
          "icon": "move",
          "default_description": "Die Parkinson-Krankheit beeinträchtigt vor allem die Beweglichkeit. Die Behandlung umfasst die Einstellung der Medikamente sowie die Abstimmung mit Physiotherapie, Ergotherapie und Logopädie."
        },
        {
          "name": "Epilepsie-Behandlung",
          "icon": "zap-off",
          "default_description": "Bei Epilepsie wird nach der Diagnostik eine anfallsunterdrückende Medikation eingestellt und regelmäßig überprüft. Themen wie Fahrtauglichkeit, Beruf und Alltag gehören zur Beratung."
        },
        {
          "name": "Demenz-Diagnostik",
          "icon": "brain",
          "default_description": "Nachlassendes Gedächtnis kann unterschiedliche Ursachen haben. Mit Tests, Untersuchung und Bildgebung wird geklärt, ob eine Demenz vorliegt; anschließend werden Behandlungs- und Unterstützungsmöglichkeiten besprochen."
        },
        {
          "name": "Polyneuropathie",
          "icon": "git-branch",
          "default_description": "Bei einer Polyneuropathie sind mehrere periphere Nerven geschädigt, häufig mit Kribbeln, Taubheit oder Schmerzen in Füßen und Händen. Zur Betreuung gehören die Suche nach der Ursache, etwa Diabetes oder Vitaminmangel, und die Behandlung der Beschwerden."
        },
        {
          "name": "Schlaganfall-Nachsorge",
          "icon": "heart",
          "default_description": "Nach einem Schlaganfall stehen die Behandlung von Risikofaktoren und die Vorbeugung eines erneuten Schlaganfalls im Mittelpunkt. Dazu gehören Kontrollen, Medikamenteneinstellung und die Abstimmung mit Therapeuten."
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
      "Abklärung von Kopfschmerzen, Schwindel und Nervenbeschwerden",
      "Begleitung bei chronischen neurologischen Erkrankungen",
      "Verständliche Erklärung von Untersuchungen und Befunden",
      "Raum für Fragen und Anliegen"
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
    "typisch": "Neurologische Untersuchung, EEG, Nervenleitungsmessung, chronische neurologische Erkrankungen",
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
