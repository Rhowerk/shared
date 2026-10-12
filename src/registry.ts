// ═══════════════════════════════════════════════════════════
// @pracio/shared — Registry
// Ersetzt: fachrichtungMapping.ts (Wizard)
// Single Source of Truth für Fachrichtungs-IDs, Labels, Aliase
// ═══════════════════════════════════════════════════════════

/**
 * Berufsgruppe einer Fachrichtung (Spec Berufsgruppen 2026-10-12). Fehlt sie, gilt 'arzt'.
 * 'therapie' ist ein Vorgriff für Heilmittelerbringer (Physio-, Ergotherapie, Logopädie):
 * heute nutzt kein Registry-Eintrag den Wert, Konsumenten behandeln ihn wie 'heilpraktiker'
 * (nicht ärztlich, siehe istAerztlich).
 */
export type Berufsgruppe = 'arzt' | 'zahnarzt' | 'psychotherapie' | 'heilpraktiker' | 'therapie'

/** Berufsgruppen, für die alles wie bisher (ärztlich) bleibt */
export const AERZTLICHE_BERUFSGRUPPEN: readonly Berufsgruppe[] = ['arzt', 'zahnarzt', 'psychotherapie']

export interface RegistryEntry {
  id: string
  label: string
  icon: string
  industry: string
  featured: boolean
  blueprintFallback: string | null
  aliases: string[]
  /** Berufsgruppe; fehlt = 'arzt'. Steuert Compliance, Wortwahl und Schema.org. */
  berufsgruppe?: Berufsgruppe
  /** false = in keiner Auswahl für Praxen, Partner oder Scanner; setzen nur Admins. Fehlt = auswählbar. */
  selectable?: boolean
}

export interface Industry {
  id: string
  label: string
  icon: string
}

// ── Branchen ──

export const INDUSTRIES: Industry[] = [
  { id: 'healthcare', label: 'Gesundheitswesen', icon: 'stethoscope' },
  // Zukünftig: { id: 'legal', label: 'Rechtsanwälte', icon: 'scale' },
  // Zukünftig: { id: 'craft', label: 'Handwerk', icon: 'hammer' },
]

// ── Healthcare Fachrichtungen ──

export const REGISTRY: RegistryEntry[] = [
  // ── PRIMÄRVERSORGUNG ──
  {
    id: 'allgemeinmedizin', label: 'Allgemeinmedizin / Hausarzt', icon: 'stethoscope',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'allgemeinmedizin', 'allgemeinarzt', 'allgemeinärztin', 'allgemeinmediziner',
      'hausarzt', 'hausärztin', 'hausarztpraxis', 'hausärztliche praxis',
      'innere medizin', 'internist', 'internistin',
      'facharzt für innere medizin', 'facharzt für allgemeinmedizin',
      'innere und allgemeinmedizin', 'praxis für allgemeinmedizin',
      'general practitioner', 'gp', 'arzt', 'ärztin', 'arztpraxis', 'gemeinschaftspraxis',
    ],
  },

  // ── INNERE MEDIZIN SCHWERPUNKTE ──
  {
    id: 'kardiologie', label: 'Kardiologie', icon: 'heart-pulse',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'kardiologie', 'kardiologe', 'kardiologin', 'herzspezialist', 'herzpraxis',
      'kardiologische praxis', 'praxis für kardiologie', 'facharzt für kardiologie',
      'herzzentrum', 'innere medizin und kardiologie',
    ],
  },
  {
    id: 'gastroenterologie', label: 'Gastroenterologie', icon: 'scan-line',
    industry: 'healthcare', featured: true, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'gastroenterologie', 'gastroenterologe', 'gastroenterologin',
      'magen-darm', 'magen darm', 'magen-darm-praxis',
      'innere medizin und gastroenterologie', 'facharzt für gastroenterologie',
      'hepatologie', 'darmspiegelung', 'koloskopie', 'endoskopie',
    ],
  },
  {
    id: 'pneumologie', label: 'Pneumologie / Lungenmedizin', icon: 'wind',
    industry: 'healthcare', featured: true, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'pneumologie', 'pneumologe', 'pneumologin',
      'lungenarzt', 'lungenärztin', 'lungenfacharzt', 'lungenpraxis',
      'praxis für pneumologie', 'innere medizin und pneumologie',
      'schlafmedizin', 'schlaflabor', 'atemwegserkrankungen',
    ],
  },
  {
    id: 'endokrinologie', label: 'Endokrinologie / Diabetologie', icon: 'dna',
    industry: 'healthcare', featured: false, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'endokrinologie', 'endokrinologe', 'endokrinologin',
      'diabetologie', 'diabetologe', 'diabetologin',
      'diabetespraxis', 'schilddrüse', 'schilddrüsenpraxis',
      'innere medizin und endokrinologie', 'hormonpraxis', 'stoffwechselerkrankungen',
    ],
  },
  {
    id: 'nephrologie', label: 'Nephrologie', icon: 'bean',
    industry: 'healthcare', featured: false, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'nephrologie', 'nephrologe', 'nephrologin', 'niere', 'nierenpraxis',
      'dialyse', 'dialysepraxis', 'dialysezentrum',
      'innere medizin und nephrologie', 'nierenheilkunde',
    ],
  },
  {
    id: 'rheumatologie', label: 'Rheumatologie', icon: 'bone',
    industry: 'healthcare', featured: false, blueprintFallback: 'orthopaedie',
    aliases: [
      'rheumatologie', 'rheumatologe', 'rheumatologin',
      'rheuma', 'rheumapraxis', 'innere medizin und rheumatologie',
      'rheumazentrum', 'autoimmunerkrankungen',
    ],
  },
  {
    id: 'angiologie', label: 'Angiologie / Gefäßmedizin', icon: 'activity',
    industry: 'healthcare', featured: false, blueprintFallback: 'kardiologie',
    aliases: [
      'angiologie', 'angiologe', 'angiologin', 'gefäßmedizin', 'gefäßpraxis',
      'innere medizin und angiologie', 'gefäßchirurgie', 'gefäßchirurg',
      'hämostaseologie', 'gerinnungsstörungen', 'thrombose',
    ],
  },
  {
    id: 'onkologie', label: 'Onkologie / Hämatologie', icon: 'microscope',
    industry: 'healthcare', featured: false, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'onkologie', 'onkologe', 'onkologin', 'hämatologie', 'hämatologe',
      'onkologische praxis', 'krebsbehandlung', 'tumortherapie', 'chemotherapie',
      'facharzt für hämatologie und onkologie', 'mvz onkologie',
    ],
  },

  // ── CHIRURGISCHE FÄCHER ──
  {
    id: 'orthopaedie', label: 'Orthopädie / Unfallchirurgie', icon: 'bone',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'orthopädie', 'orthopaedie', 'orthopäde', 'orthopädin',
      'unfallchirurgie', 'unfallchirurg', 'orthopädische praxis',
      'praxis für orthopädie', 'praxis für orthopädie und unfallchirurgie',
      'chirurgie', 'chirurg', 'chirurgin', 'allgemeinchirurgie', 'sportorthopädie',
    ],
  },
  {
    id: 'mkg', label: 'Mund-Kiefer-Gesichtschirurgie', icon: 'scan-face',
    industry: 'healthcare', featured: false, blueprintFallback: 'zahnarzt',
    aliases: [
      'mund-kiefer-gesichtschirurgie', 'mkg', 'mkg-chirurgie',
      'kieferchirurg', 'oralchirurgie', 'oralchirurg', 'implantatchirurgie',
    ],
  },
  {
    id: 'plastische_chirurgie', label: 'Plastische & Ästhetische Chirurgie', icon: 'sparkles',
    industry: 'healthcare', featured: false, blueprintFallback: 'dermatologie',
    aliases: [
      'plastische chirurgie', 'plastischer chirurg', 'ästhetische chirurgie',
      'ästhetische medizin', 'schönheitschirurgie', 'facelift', 'fettabsaugung',
    ],
  },

  // ── SINNESORGANE ──
  {
    id: 'augenheilkunde', label: 'Augenheilkunde', icon: 'eye',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'augenheilkunde', 'augenarzt', 'augenärztin',
      'ophthalmologie', 'ophthalmologe', 'augenpraxis', 'augenzentrum',
    ],
  },
  {
    id: 'hno', label: 'HNO-Heilkunde', icon: 'ear',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'hno', 'hno-arzt', 'hno-ärztin', 'hals-nasen-ohren',
      'hno-praxis', 'hno-heilkunde', 'hals-nasen-ohrenheilkunde',
      'ohrenarzt', 'phoniatrie',
    ],
  },

  // ── HAUT & GEFÄßE ──
  {
    id: 'dermatologie', label: 'Dermatologie', icon: 'hand',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'dermatologie', 'dermatologe', 'dermatologin',
      'hautarzt', 'hautärztin', 'hautpraxis',
      'haut- und geschlechtskrankheiten', 'venerologie',
    ],
  },
  {
    id: 'phlebologie', label: 'Phlebologie / Venenmedizin', icon: 'waypoints',
    industry: 'healthcare', featured: false, blueprintFallback: 'dermatologie',
    aliases: [
      'phlebologie', 'phlebologe', 'venenpraxis', 'venenspezialist',
      'venenmedizin', 'krampfadern', 'varikose', 'besenreiser',
    ],
  },

  // ── FRAUEN & KINDER ──
  {
    id: 'gynaekologie', label: 'Gynäkologie', icon: 'flower-2',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'gynäkologie', 'gynaekologie', 'gynäkologe', 'gynäkologin',
      'frauenarzt', 'frauenärztin', 'frauenheilkunde', 'frauenpraxis',
      'geburtshilfe', 'reproduktionsmedizin', 'kinderwunschzentrum',
    ],
  },
  {
    id: 'kinderarzt', label: 'Kinder- und Jugendmedizin', icon: 'baby',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'kinderarzt', 'kinderärztin', 'pädiater', 'pädiaterin', 'pädiatrie',
      'kinder- und jugendmedizin', 'kindermedizin', 'kinderheilkunde',
      'kinderpraxis', 'jugendmedizin',
    ],
  },

  // ── NEUROLOGIE & PSYCHE ──
  {
    id: 'neurologie', label: 'Neurologie', icon: 'brain',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'neurologie', 'neurologe', 'neurologin', 'nervenarzt', 'nervenärztin',
      'neurologische praxis', 'neuromedizin',
    ],
  },
  {
    id: 'psychotherapie', label: 'Psychotherapie / Psychiatrie', icon: 'heart-handshake',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    berufsgruppe: 'psychotherapie',
    aliases: [
      'psychotherapie', 'psychotherapeut', 'psychotherapeutin',
      'psychiatrie', 'psychiater', 'psychiaterin',
      'psychologischer psychotherapeut', 'verhaltenstherapie',
      'psychosomatik', 'psychosomatische medizin',
    ],
  },

  // ── UROLOGIE ──
  {
    id: 'urologie', label: 'Urologie', icon: 'shield-plus',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    aliases: [
      'urologie', 'urologe', 'urologin', 'urologische praxis',
      'andrologie', 'androloge',
    ],
  },

  // ── ZAHNMEDIZIN ──
  {
    id: 'zahnarzt', label: 'Zahnmedizin', icon: 'smile',
    industry: 'healthcare', featured: true, blueprintFallback: null,
    berufsgruppe: 'zahnarzt',
    aliases: [
      'zahnarzt', 'zahnärztin', 'zahnmedizin', 'zahnheilkunde',
      'zahnarztpraxis', 'zahnpraxis', 'dentist', 'dental',
      'kieferorthopädie', 'kieferorthopäde', 'implantologie', 'parodontologie',
    ],
  },

  // ── QUERSCHNITT / SPEZIAL ──
  {
    id: 'schmerztherapie', label: 'Schmerztherapie', icon: 'pill',
    industry: 'healthcare', featured: false, blueprintFallback: 'neurologie',
    aliases: [
      'schmerztherapie', 'schmerztherapeut', 'schmerzmedizin', 'schmerzpraxis',
      'schmerzzentrum', 'schmerzambulanz', 'spezielle schmerztherapie',
      'algesiologie', 'chronische schmerzen',
    ],
  },
  {
    id: 'sportmedizin', label: 'Sportmedizin', icon: 'dumbbell',
    industry: 'healthcare', featured: false, blueprintFallback: 'orthopaedie',
    aliases: [
      'sportmedizin', 'sportmediziner', 'sportarzt', 'sportpraxis',
      'sportmedizinische praxis', 'sportverletzungen', 'leistungsdiagnostik',
    ],
  },
  {
    id: 'nuklearmedizin', label: 'Nuklearmedizin / Radiologie', icon: 'radiation',
    industry: 'healthcare', featured: false, blueprintFallback: 'allgemeinmedizin',
    aliases: [
      'nuklearmedizin', 'nuklearmediziner', 'praxis für nuklearmedizin',
      'szintigraphie', 'schilddrüsendiagnostik',
      'radiologie', 'radiologe', 'radiologin', 'radiologische praxis',
    ],
  },

  // ── NICHT-ÄRZTLICHE BERUFSGRUPPEN (nur durch Admins setzbar, in keiner Auswahl) ──
  {
    id: 'hp_psychotherapie', label: 'Heilpraktiker/in für Psychotherapie', icon: 'heart-handshake',
    industry: 'healthcare', featured: false, blueprintFallback: null,
    berufsgruppe: 'heilpraktiker', selectable: false,
    // Keine Aliase: Freitext („Heilpraktikerin für Psychotherapie“) löst weiter wie bisher auf.
    // Nur die ID selbst trifft diesen Eintrag, damit Scanner und Wizard ihn nie zuordnen.
    aliases: [],
  },
]

// ═══════════════════════════════════════════════════════════
// Lookup Functions
// ═══════════════════════════════════════════════════════════

let _aliasMap: Map<string, string> | null = null

function getAliasMap(): Map<string, string> {
  if (!_aliasMap) {
    _aliasMap = new Map()
    for (const entry of REGISTRY) {
      // Nicht auswählbare Einträge nehmen nicht an der Freitext-Zuordnung teil
      if (entry.selectable === false) continue
      _aliasMap.set(entry.id, entry.id)
      for (const alias of entry.aliases) {
        _aliasMap.set(alias.toLowerCase().trim(), entry.id)
      }
    }
  }
  return _aliasMap
}

/** Löst eine Fachrichtungs-Eingabe in eine ID auf (fuzzy) */
export function resolveFachrichtung(input: string): string | null {
  if (!input) return null
  const normalized = input.toLowerCase().trim()

  // Nicht auswählbare Einträge (z. B. hp_psychotherapie) nur über ihre exakte ID
  const versteckt = REGISTRY.find(e => e.selectable === false && e.id === normalized)
  if (versteckt) return versteckt.id

  const map = getAliasMap()

  // Exakter Match
  if (map.has(normalized)) return map.get(normalized)!

  // Substring-Match (Input enthält Alias)
  for (const [alias, id] of map) {
    if (alias.length > 4 && normalized.includes(alias)) return id
  }

  // Reverse Substring (Alias enthält Input)
  for (const [alias, id] of map) {
    if (alias.length > 4 && alias.includes(normalized)) return id
  }

  return null
}

/** Gibt den Registry-Eintrag für eine ID zurück */
export function getRegistryEntry(id: string): RegistryEntry | undefined {
  return REGISTRY.find(e => e.id === id)
}

/** Welchen Blueprint soll diese Fachrichtung nutzen? (Fallback-Kette) */
export function getBlueprintId(id: string): string {
  const entry = getRegistryEntry(id)
  return entry?.blueprintFallback || id
}

/** Label für eine Fachrichtung */
export function getFachrichtungLabel(input: string): string {
  const id = resolveFachrichtung(input)
  if (!id) return input
  return getRegistryEntry(id)?.label || input
}

/** Hauptfachrichtungen (für Wizard-Auswahl) – nur auswählbare */
export function getFeaturedFachrichtungen(): RegistryEntry[] {
  return REGISTRY.filter(e => e.featured && e.selectable !== false)
}

/** Weitere Fachrichtungen – nur auswählbare */
export function getMoreFachrichtungen(): RegistryEntry[] {
  return REGISTRY.filter(e => !e.featured && e.selectable !== false)
}

/** Alle Fachrichtungen inkl. nicht auswählbarer (für Lookup/Admin; Auswahl-Listen: getSelectableFachrichtungen) */
export function getAllFachrichtungen(): RegistryEntry[] {
  return REGISTRY
}

/** Auswählbare Fachrichtungen einer Branche (nicht auswählbare wie hp_psychotherapie fehlen; Lookup: getAllFachrichtungen) */
export function getFachrichtungenByIndustry(industry: string): RegistryEntry[] {
  return REGISTRY.filter(e => e.industry === industry && e.selectable !== false)
}

/** Alle gültigen IDs */
export function getValidFachrichtungIds(): string[] {
  return REGISTRY.map(e => e.id)
}

// ═══════════════════════════════════════════════════════════
// Berufsgruppen (Spec 2026-10-12)
// ═══════════════════════════════════════════════════════════

/** Fachrichtungen für Auswahl-Listen (Wizard, Fachbereiche-Seite, Partner, Scanner) */
export function getSelectableFachrichtungen(): RegistryEntry[] {
  return REGISTRY.filter(e => e.selectable !== false)
}

/** true, wenn die ID existiert und in Auswahl-Listen erscheinen darf */
export function isSelectableFachrichtung(id: string | null | undefined): boolean {
  const normalized = id?.toLowerCase().trim()
  if (!normalized) return false
  const entry = getRegistryEntry(normalized)
  return !!entry && entry.selectable !== false
}

/** Berufsgruppe zu einer Fachrichtung (ID oder Freitext). Unbekannt oder leer = 'arzt'. */
export function berufsgruppeOf(input: string | null | undefined): Berufsgruppe {
  if (!input) return 'arzt'
  const id = resolveFachrichtung(input)
  return (id ? getRegistryEntry(id)?.berufsgruppe : undefined) ?? 'arzt'
}

/** Ärztliche Berufsgruppen behalten Wortwahl, Compliance und Schema wie bisher */
export function istAerztlich(b: Berufsgruppe): boolean {
  return AERZTLICHE_BERUFSGRUPPEN.includes(b)
}
