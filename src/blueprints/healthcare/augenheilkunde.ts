import type { Blueprint } from '../types.js'

export const augenheilkunde: Blueprint = {
  "meta": {
    "id": "augenheilkunde",
    "name": "Augenarztpraxis",
    "name_variants": [
      "Augenarzt",
      "Augenärztin",
      "Ophthalmologie",
      "Praxis für Augenheilkunde"
    ],
    "icon": "eye",
    "description": "Praxis für Augenheilkunde und Sehkorrektur"
  },
  "colors": {
    "primary": "#3498DB",
    "primary_light": "#5DADE2",
    "primary_dark": "#2980B9",
    "secondary": "#F0F8FF",
    "accent": "#2ECC71",
    "alternatives": [
      {
        "name": "Klar Blau",
        "primary": "#3498DB",
        "secondary": "#F0F8FF"
      },
      {
        "name": "Sehkraft Grün",
        "primary": "#2ECC71",
        "secondary": "#F0FDF4"
      },
      {
        "name": "Modern Türkis",
        "primary": "#00B5AD",
        "secondary": "#F0FDFC"
      },
      {
        "name": "Elegant Dunkelblau",
        "primary": "#2C3E50",
        "secondary": "#F5F7FA"
      }
    ]
  },
  "images": {
    "hero": [
      {
        "id": "auge-hero-1",
        "url": "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1920&q=80",
        "alt": "Augenärztin bei der Untersuchung"
      }
    ],
    "imagetext": [
      {
        "id": "auge-team",
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1024&q=80",
        "alt": "Augenarztpraxis Team"
      }
    ],
    "imagelist": [
      {
        "id": "auge-leistungen",
        "url": "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=1024&q=80",
        "alt": "Moderne Augenuntersuchung"
      }
    ],
    "banner": [
      {
        "id": "auge-banner",
        "url": "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=1920&q=80",
        "alt": "Klare Sicht auf die Natur"
      }
    ]
  },
  "services": [
    {
      "category": "Vorsorge & Diagnostik",
      "icon_color": "#3498DB",
      "items": [
        {
          "name": "Augenärztliche Untersuchung",
          "icon": "eye",
          "default_description": "Die augenärztliche Untersuchung umfasst je nach Anlass Sehschärfe, Augeninnendruck, vordere Augenabschnitte und Augenhintergrund. Ziel ist es, Veränderungen am Auge zu erkennen und einzuordnen."
        },
        {
          "name": "Sehtest / Refraktion",
          "icon": "search",
          "default_description": "Bei der Refraktionsbestimmung wird die Sehstärke für Ferne und Nähe ermittelt. Das Ergebnis ist Grundlage für die Verordnung oder Anpassung einer Brille oder von Kontaktlinsen."
        },
        {
          "name": "Augendruckmessung (Glaukom)",
          "icon": "gauge",
          "default_description": "Die Messung des Augeninnendrucks ist ein Baustein der Glaukom-Diagnostik. Zusammen mit der Untersuchung des Sehnervs hilft sie, einen Grünen Star früh zu erkennen. Ohne konkreten Verdacht ist die Untersuchung in der Regel eine Selbstzahlerleistung."
        },
        {
          "name": "Netzhautuntersuchung",
          "icon": "sun",
          "default_description": "Untersuchung des Augenhintergrunds, häufig nach Erweiterung der Pupillen mit Augentropfen. Damit lassen sich Erkrankungen wie Makuladegeneration oder diabetische Netzhautveränderungen erkennen und im Verlauf kontrollieren. Nach den Tropfen ist das Sehen für einige Stunden eingeschränkt, Autofahren ist dann nicht möglich."
        },
        {
          "name": "Führerschein-Sehtest",
          "icon": "car",
          "default_description": "Für die Fahrerlaubnis ist ein Nachweis über ausreichendes Sehvermögen erforderlich. Je nach Führerscheinklasse umfasst die Untersuchung Sehschärfe und weitere Sehfunktionen; das Ergebnis wird bescheinigt.",
          "igel": true
        }
      ]
    },
    {
      "category": "Augenerkrankungen",
      "icon_color": "#2ECC71",
      "items": [
        {
          "name": "Grauer Star Vorsorge (Katarakt)",
          "icon": "cloud",
          "default_description": "Beim Grauen Star (Katarakt) trübt sich die Augenlinse, das Sehen wird zunehmend verschwommen und blendempfindlich. Die Untersuchung klärt das Ausmaß der Trübung; im Gespräch wird besprochen, ob und wann eine Operation sinnvoll ist."
        },
        {
          "name": "Grüner Star Vorsorge (Glaukom)",
          "icon": "alert-triangle",
          "default_description": "Beim Grünen Star (Glaukom) wird der Sehnerv über längere Zeit geschädigt, oft ohne frühe Beschwerden. Die Früherkennung umfasst die Messung des Augeninnendrucks und die Beurteilung des Sehnervs. Ohne konkreten Verdacht ist sie eine Selbstzahlerleistung.",
          "igel": true
        },
        {
          "name": "Makuladegeneration (AMD)",
          "icon": "target",
          "default_description": "Die altersabhängige Makuladegeneration betrifft die Stelle des schärfsten Sehens in der Netzhaut. Diagnostik und Verlaufskontrollen erfolgen über die Untersuchung des Augenhintergrunds und gegebenenfalls Bildgebung; je nach Form kommen unterschiedliche Behandlungen in Frage."
        },
        {
          "name": "Trockenes Auge Behandlung",
          "icon": "droplet",
          "default_description": "Trockene Augen äußern sich durch Brennen, Fremdkörpergefühl oder gerötete Augen. Nach Abklärung der Ursache werden Behandlungsmöglichkeiten wie Tränenersatzmittel oder Lidrandpflege besprochen."
        }
      ]
    },
    {
      "category": "Spezialleistungen",
      "icon_color": "#00B5AD",
      "items": [
        {
          "name": "Kontaktlinsenanpassung",
          "icon": "circle",
          "default_description": "Bei der Kontaktlinsenanpassung werden Hornhaut und Sehstärke vermessen und passende Linsen ausgewählt. Dazu gehören die Einweisung in Handhabung und Pflege sowie Kontrollen des Sitzes.",
          "igel": true
        },
        {
          "name": "Kinderaugenheilkunde",
          "icon": "baby",
          "default_description": "Augenuntersuchungen bei Kindern, angepasst an Alter und Entwicklung. Ziel ist es, Sehschwächen, Schielen oder andere Auffälligkeiten früh zu erkennen, da sich das Sehen im Kindesalter noch entwickelt."
        },
        {
          "name": "Schielen (Strabismus)",
          "icon": "move",
          "default_description": "Schielen (Strabismus) kann bei Kindern die Entwicklung des Sehens beeinträchtigen und tritt auch bei Erwachsenen auf. Nach der Diagnostik werden Behandlungsmöglichkeiten wie Brille, Abklebetherapie oder eine Operation besprochen."
        },
        {
          "name": "Laserbehandlung",
          "icon": "zap",
          "default_description": "Laserverfahren werden in der Augenheilkunde für unterschiedliche Zwecke eingesetzt, etwa bei Netzhauterkrankungen, beim Nachstar oder zur Korrektur von Fehlsichtigkeit. Welche Behandlung in Frage kommt, hängt vom Befund ab."
        }
      ]
    }
  ],
  "faq": [],
  "ai_context": {
    "tone": [
      "professionell",
      "präzise",
      "beruhigend",
      "kompetent"
    ],
    "audience": "Patienten aller Altersgruppen - von Kindern mit Sehschwäche\nbis Senioren mit Grauem Star oder Makuladegeneration.",
    "key_messages": [
      "Sehen als Teil der Lebensqualität",
      "Früherkennung von Grünem Star, Grauem Star und Netzhauterkrankungen",
      "Verständliche Erklärung von Befunden",
      "Beratung zu Brille und Kontaktlinsen"
    ]
  },
  "seo": {
    "title_template": "{praxis_name} | Augenarzt in {ort}",
    "description_template": "Augenarztpraxis {praxis_name} in {ort}. ✓ Sehtest ✓ Grauer Star ✓ Glaukom-Vorsorge. Jetzt Termin vereinbaren!",
    "keywords": []
  },
  "fachrichtung_titel": {
    "de": "Facharzt für Augenheilkunde",
    "de_female": "Fachärztin für Augenheilkunde",
    "en": "Ophthalmologist"
  },
  "jobs": {
    "templates": [
      {
        "id": "facharzt",
        "title_de": "Fachärztliche Verstärkung Augenheilkunde (m/w/d)",
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
        "id": "orthoptist",
        "title_de": "Orthoptik (m/w/d)",
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
      "Moderne Diagnostikgeräte",
      "OCT, Perimetrie"
    ]
  },
  "pages": {
    "homepage": {
      "blocks": []
    }
  },
  "employer": {
    "typisch": "Sehtest, Augeninnendruckmessung, Netzhaut-Diagnostik, Behandlung von Augenerkrankungen",
    "aufgaben": {
      "mfa": "Sehtest, Augeninnendruck, OCT-Aufnahmen, Gesichtsfeldprüfung, Tropfen",
      "arzt": "Spaltlampe, OCT-Befundung, Netzhaut-Diagnostik, Laser, Katarakt-OP",
      "azubi": "Sehtest-Grundlagen, Patientenführung, Tropfenapplikation"
    },
    "staerke": "High-Tech-Diagnostik, schnelle Ergebnisse, lebensqualitätsverbessernd",
    "benefit_kontexte": {
      "fortbildung_bezahlt": "OCT-Zertifikat, OP-Assistenz, Orthoptik-Kurse",
      "moderne_ausstattung": "OCT, Gesichtsfeldperimeter, Funduskamera, Laser"
    },
    "verbotene_phrasen": [
      "Behandlung von Augenerkrankungen",
      "augenärztliche Versorgung"
    ]
  }
}
