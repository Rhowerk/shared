import type { Blueprint } from '../types.js'

export const schmerztherapie: Blueprint = {
  "meta": {
    "id": "schmerztherapie",
    "name": "Schmerztherapeutische Praxis",
    "name_variants": [
      "Schmerztherapeut",
      "Schmerzpraxis",
      "Schmerzzentrum",
      "Praxis für Schmerztherapie",
      "Schmerzmedizin"
    ],
    "icon": "shield",
    "description": "Praxis für Spezielle Schmerztherapie"
  },
  "colors": {
    "primary": "#059669",
    "primary_light": "#34D399",
    "primary_dark": "#047857",
    "secondary": "#F0FDF4",
    "accent": "#7C3AED",
    "alternatives": [
      {
        "name": "Linderung Grün",
        "primary": "#059669",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Ruhe Blau",
        "primary": "#3B82F6",
        "secondary": "#EFF6FF"
      },
      {
        "name": "Warm Violett",
        "primary": "#7C3AED",
        "secondary": "#F5F3FF"
      },
      {
        "name": "Professionell Grau",
        "primary": "#475569",
        "secondary": "#F8FAFC"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "schmerz-hero-1",
        "url": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
        "alt": "Schmerztherapeutische Beratung"
      }
    ],
    "imagetext": [
      {
        "id": "schmerz-team",
        "url": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1024&q=80",
        "alt": "Schmerztherapie-Team"
      }
    ],
    "imagelist": [
      {
        "id": "schmerz-leistungen",
        "url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1024&q=80",
        "alt": "Behandlung"
      }
    ],
    "banner": [
      {
        "id": "schmerz-banner",
        "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
        "alt": "Schmerzfrei leben"
      }
    ]
  },
  "services": [
    {
      "category": "Therapie",
      "icon_color": "#059669",
      "items": [
        {
          "name": "Multimodale Schmerztherapie",
          "icon": "layers",
          "default_description": "In der multimodalen Schmerztherapie kombinieren wir medikamentöse,\ninterventionelle und psychologische Verfahren. Dieser ganzheitliche\nAnsatz ist bei chronischen Schmerzen am wirksamsten."
        },
        {
          "name": "Infiltrationstherapie",
          "icon": "target",
          "default_description": "Mit gezielten Injektionen bringen wir schmerzlindernde Medikamente\ndirekt an den Schmerzursprung. Wirbelsäulennahe Infiltrationen,\nNervenblockaden und Triggerpunkt-Injektionen."
        },
        {
          "name": "Medikamentöse Schmerztherapie",
          "icon": "pill",
          "default_description": "Wir finden die richtige Medikation für Ihre Schmerzen – individuell\ndosiert, mit möglichst wenig Nebenwirkungen. Regelmäßige\nKontrollen sichern den Therapieerfolg."
        },
        {
          "name": "TENS / Neurostimulation",
          "icon": "zap",
          "default_description": "Elektrische Nervenstimulation kann Schmerzsignale blockieren.\nWir probieren verschiedene Verfahren mit Ihnen aus und finden\ndas optimale Stimulationsprogramm."
        }
      ]
    },
    {
      "category": "Schmerzarten",
      "icon_color": "#7C3AED",
      "items": [
        {
          "name": "Rückenschmerz-Behandlung",
          "icon": "activity",
          "default_description": "Rückenschmerzen sind die häufigste Ursache für Arztbesuche.\nWir klären die Ursache ab und erstellen einen individuellen\nBehandlungsplan für dauerhafte Linderung."
        },
        {
          "name": "Kopfschmerz / Migräne",
          "icon": "cloud",
          "default_description": "Migräne und chronische Kopfschmerzen können den Alltag massiv\nbeeinträchtigen. Wir setzen auf moderne Prophylaxe,\nAkuttherapie und interventionelle Verfahren."
        },
        {
          "name": "Nervenschmerzen (Neuralgie)",
          "icon": "zap",
          "default_description": "Nervenschmerzen brennen, stechen oder kribbeln. Ob nach Gürtelrose,\nbei Diabetes oder nach Operationen – wir kennen die\nspeziellen Behandlungsmöglichkeiten."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "einfühlsam",
      "kompetent",
      "ganzheitlich",
      "hoffnungsvoll"
    ],
    "audience": "Chronische Schmerzpatienten, Rückenschmerz-Betroffene, Migräniker,\nPatienten mit Nervenschmerzen, Patienten nach erfolglosen Vorbehandlungen.",
    "key_messages": [
      "Chronische Schmerzen sind behandelbar",
      "Multimodal zum Erfolg – Körper und Seele",
      "Ihr Weg zurück in ein aktives Leben",
      "Wir nehmen Ihre Schmerzen ernst"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Schmerztherapie in {ort}",
    "description_template": "Schmerztherapeutische Praxis {praxis_name} in {ort}. ✓ Multimodale Therapie ✓ Rückenschmerzen ✓ Migräne. Wir helfen bei chronischen Schmerzen.",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Anästhesiologie – Spezielle Schmerztherapie",
    "de_female": "Fachärztin für Anästhesiologie – Spezielle Schmerztherapie",
    "en": "Pain Management Specialist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Schmerzmedizin (m/w/d)",
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
        "id": "physio",
        "title_de": "Physiotherapie (m/w/d)",
        "employment_type": "fulltime",
        "category": "sonstige",
        "default_selected": false
      },
      {
        "id": "psycho",
        "title_de": "Psychologische Schmerztherapie (m/w/d)",
        "employment_type": "parttime",
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
      "Schmerzmedizin-Fortbildung",
      "Interventionelle Einarbeitung"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Multimodale Schmerztherapie, Interventionen, Medikamente, Psychosomatik",
    "aufgaben": {
      "mfa": "Schmerzanamnese-Vorbereitung, Infusionstherapie, TENS-Einweisung",
      "arzt": "Diagnostik, Nervenblockaden, Medikamenteneinstellung, multimodale Therapie",
      "azubi": "Schmerzerfassung-Grundlagen, Patientenempfang, Dokumentation"
    },
    "staerke": "Ganzheitlich, intensive Patientenbeziehung, interdisziplinär",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "Spezielle Schmerztherapie, Akupunktur, Interventions-Training",
      "moderne_ausstattung": "Ultraschallgesteuerte Interventionen, TENS, Infusionszentrum"
    },
    "verbotene_phrasen": [
      "Schmerzbehandlung",
      "Behandlung chronischer Schmerzen"
    ]
  }
}
