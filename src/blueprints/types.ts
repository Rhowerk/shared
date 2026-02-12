// ═══════════════════════════════════════════════════════════
// @pracio/shared — Blueprint Types
// Single Source of Truth für alle Fachrichtungs-Daten
// ═══════════════════════════════════════════════════════════

// ── Image ──
export interface ImageRef {
  id: string
  local?: string
  url?: string          // Unsplash etc.
  alt: string
}

// ── Colors ──
export interface ColorAlternative {
  name: string
  primary: string
  secondary: string
}

export interface BlueprintColors {
  primary: string
  primary_light?: string
  primary_dark?: string
  secondary: string
  accent?: string
  alternatives: ColorAlternative[]
}

// ── Services ──
export interface ServiceItem {
  name: string
  icon?: string
  default_description: string
  ai_prompt?: string
}

export interface ServiceCategory {
  category: string
  icon_color?: string
  items: ServiceItem[]
}

// ── FAQ ──
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  questions: FAQItem[]
}

// ── Pages ──
export interface PageBlockDef {
  type: string
  required: boolean
  content?: Record<string, any>
  ai_prompt?: string
}

export interface PageDef {
  blocks: PageBlockDef[]
}

// ── Jobs ──
export interface JobTemplate {
  id: string
  title_de: string
  employment_type: 'fulltime' | 'parttime' | 'apprenticeship' | 'minijob'
  category: 'facharzt' | 'mfa' | 'zfa' | 'therapeut' | 'ausbildung' | 'sonstige'
  default_selected: boolean
}

// ── SEO ──
export interface BlueprintSEO {
  title_template: string
  description_template: string
  keywords: string[]
}

// ── AI Context ──
export interface AIContext {
  tone: string[]
  audience: string
  personality?: string[]
  key_messages: string[]
  language_style?: {
    avoid: string[]
    prefer: string[]
  }
}

// ── Employer (merged from employer-context.ts) ──
export interface EmployerData {
  typisch: string
  aufgaben: Record<string, string>          // rolle → aufgabenliste
  staerke: string
  benefit_kontexte: Record<string, string>  // benefit_id → fachrichtungsspezifisch
  verbotene_phrasen: string[]
}

// ── Fachrichtung Titel ──
export interface FachrichtungTitel {
  de: string
  de_female: string
  en: string
}

// ═══════════════════════════════════════════════════════════
// BLUEPRINT — Das Haupt-Interface
// ═══════════════════════════════════════════════════════════

export interface Blueprint {
  meta: {
    id: string
    name: string
    name_variants: string[]
    icon: string
    description: string
  }

  colors: BlueprintColors

  images: Record<string, ImageRef[]>

  services: ServiceCategory[]

  faq: FAQCategory[]

  ai_context: AIContext

  seo: BlueprintSEO

  fachrichtung_titel: FachrichtungTitel

  jobs: {
    templates: JobTemplate[]
    additional_benefits?: string[]
  }

  pages: {
    homepage: PageDef
    leistungen?: PageDef
    kontakt?: PageDef
  }

  employer: EmployerData
}

// ═══════════════════════════════════════════════════════════
// HEALTHCARE BASE — Gemeinsame Defaults
// ═══════════════════════════════════════════════════════════

export interface HealthcareBase {
  common_ai_rules: {
    general_avoid: string[]
    general_prefer: string[]
    content_lengths: Record<string, string>
  }

  common_faq: FAQCategory[]

  common_buttons: Record<string, { label_de: string; label_en: string; url: string }>

  job_requirements: Record<string, Array<{ text_de: string; text_en: string }>>

  karriere_defaults: {
    standard_benefits: Array<{ text_de: string; text_en: string }>
  }

  practice_translations: {
    hint: Record<string, string>
  }

  team_images: {
    male: string[]
    female: string[]
  }
}
