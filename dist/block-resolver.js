// ═══════════════════════════════════════════════════════════
// @pracio/shared — block-resolver
// ═══════════════════════════════════════════════════════════
// Daten rein → Blockliste mit Varianten raus.
// Keine Directus-Abhängigkeit, kein API-Call — pure Logik.
// Verwendet im Wizard (Provisioning) und Portal (Dashboard).
// ═══════════════════════════════════════════════════════════
// ── Hilfsfunktion: Input aus Wizard-Daten extrahieren ──
/**
 * Extrahiert BlockResolverInput aus Wizard-Daten.
 * Funktioniert sowohl mit dem aktuellen OnboardingData-Format
 * als auch mit dem wizard_data JSON-Blob.
 */
export function extractResolverInput(data) {
    const features = data.features || {};
    const eb = features.employerBranding || features.employerProfile || {};
    const teamMembers = features.teamMembers || [];
    const selectedJobs = features.selectedJobs || [];
    // Benefits: Neues Format (Array von IDs) oder altes Format (Komma-String)
    let benefits = [];
    if (Array.isArray(eb.benefits?.selected)) {
        benefits = eb.benefits.selected;
    }
    else if (typeof eb.benefits === 'string' && eb.benefits.length > 0) {
        benefits = eb.benefits.split(/[,;\n]+/).map((b) => b.trim()).filter((b) => b.length > 2);
    }
    return {
        fachrichtung: data.fachrichtung || '',
        praxisGroesse: data.contentProfile?.practiceType || 'gemeinschaftspraxis',
        ort: data.ort || '',
        hasTeam: teamMembers.length > 0,
        teamCount: teamMembers.length,
        hasTeamPhotos: teamMembers.some((m) => m.foto || m.image),
        hasKarriere: features.karriere === true,
        hasBildmaterial: data.bildmaterial?.option !== 'keine' && data.bildmaterial?.option !== undefined,
        serviceCount: (data.services || []).filter((s) => s.selected).length,
        benefits,
        benefitCount: benefits.length,
        werte: eb.werte || [],
        werteFreitext: eb.werteFreitext || '',
        zitate: eb.zitate || [],
    };
}
// ═══ HOMEPAGE ═══
export function resolveHomepageBlocks(input) {
    const blocks = [];
    // ── 1. Hero (immer) ──
    blocks.push({
        collection: 'block_herobanner',
        role: 'hero',
        variant: 'default',
        contentKey: 'heroTitle',
        label: 'Willkommen',
        required: true,
    });
    // ── 2. Über uns ──
    blocks.push({
        collection: 'block_imageText',
        role: 'content',
        variant: input.hasBildmaterial ? 'default' : 'text-only',
        contentKey: 'aboutText',
        label: 'Über uns',
        required: true,
        condition: input.hasBildmaterial ? 'mit Bild' : 'ohne Bild → Text-only Variante',
    });
    // ── 3. Leistungen ──
    if (input.serviceCount > 0) {
        blocks.push({
            collection: 'block_imageList',
            role: 'content',
            variant: input.serviceCount <= 4 ? 'grid-2' : 'grid-3',
            contentKey: 'services',
            label: 'Unsere Leistungen',
            required: true,
            condition: `${input.serviceCount} Services → ${input.serviceCount <= 4 ? '2er' : '3er'} Grid`,
        });
    }
    // ── 4. Team (nur wenn Mitglieder vorhanden) ──
    if (input.hasTeam) {
        blocks.push({
            collection: 'block_teamList',
            role: 'highlight',
            variant: input.hasTeamPhotos ? 'grid' : 'compact',
            contentKey: 'team',
            label: 'Unser Team',
            required: false,
            condition: `${input.teamCount} Mitglieder${input.hasTeamPhotos ? ' mit Fotos' : ' ohne Fotos → kompakt'}`,
        });
    }
    // ── 5. Karriere-Teaser (nur wenn Karriere-Modul aktiv) ──
    if (input.hasKarriere) {
        blocks.push({
            collection: 'block_banner',
            role: 'cta',
            variant: 'karriere',
            contentKey: 'karriereTeaser',
            label: 'Karriere',
            required: false,
            condition: 'Karriere-Modul aktiv',
        });
    }
    // ── 6. Praxisinfo (immer) ──
    blocks.push({
        collection: 'block_practice_info',
        role: 'highlight',
        variant: 'default',
        contentKey: 'practiceInfo',
        label: 'Kontakt & Öffnungszeiten',
        required: true,
    });
    // ── 7. CTA (immer) ──
    blocks.push({
        collection: 'block_banner',
        role: 'cta',
        variant: 'cta',
        contentKey: 'ctaBanner',
        label: 'Termin vereinbaren',
        required: true,
    });
    return blocks;
}
// ═══ KARRIERESEITE ═══
export function resolveKarriereBlocks(input) {
    const blocks = [];
    const werteCount = input.werte?.length || 0;
    const benefitCount = input.benefitCount || 0;
    const hasZitate = (input.zitate?.length || 0) > 0;
    // ── 1. Hero ──
    blocks.push({
        collection: 'block_herobanner',
        role: 'hero',
        variant: 'default',
        contentKey: 'careerHero',
        label: 'Titelbild',
        required: true,
    });
    // ── 2. Arbeitgeber-Intro ──
    blocks.push({
        collection: 'block_text',
        role: 'content',
        variant: 'intro',
        contentKey: 'careerIntro',
        label: 'Wir als Arbeitgeber',
        required: true,
    });
    // ── 3. Werte (nur wenn ausgewählt) ──
    if (werteCount > 0) {
        blocks.push({
            collection: 'block_imageList',
            role: 'highlight',
            variant: werteCount <= 2 ? 'grid-2' : 'grid-3',
            contentKey: 'careerWerte',
            label: 'Was uns ausmacht',
            required: false,
            condition: `${werteCount} Werte → ${werteCount <= 2 ? '2er' : '3er'} Grid`,
        });
    }
    // ── 4. Benefits (immer wenn Karriere aktiv) ──
    if (benefitCount > 0) {
        blocks.push({
            collection: 'block_imageList',
            role: 'content',
            variant: benefitCount > 6 ? 'grid-3' : 'grid-2',
            contentKey: 'careerBenefits',
            label: 'Was wir bieten',
            required: true,
            condition: `${benefitCount} Benefits → ${benefitCount > 6 ? '3er' : '2er'} Grid`,
        });
    }
    // ── 5. Team-Zitate (nur wenn vorhanden) ──
    if (hasZitate) {
        blocks.push({
            collection: 'block_imageList',
            role: 'highlight',
            variant: 'cards',
            contentKey: 'careerZitate',
            label: 'Stimmen aus dem Team',
            required: false,
            condition: `${input.zitate.length} Zitate`,
        });
    }
    // ── 6. Stellenliste (immer) ──
    blocks.push({
        collection: 'block_jobList',
        role: 'content',
        variant: 'default',
        contentKey: 'jobList',
        label: 'Offene Stellen',
        required: true,
    });
    // ── 7. Bewerbungs-CTA (immer) ──
    blocks.push({
        collection: 'block_banner',
        role: 'cta',
        variant: 'cta',
        contentKey: 'careerCta',
        label: 'Jetzt bewerben',
        required: true,
    });
    return blocks;
}
// ═══ TEAM-SEITE ═══
export function resolveTeamBlocks(input) {
    const blocks = [];
    blocks.push({
        collection: 'block_herobanner',
        role: 'hero',
        variant: 'default',
        contentKey: 'teamHero',
        label: 'Unser Team',
        required: true,
    });
    if (input.hasBildmaterial) {
        blocks.push({
            collection: 'block_imageText',
            role: 'content',
            variant: 'default',
            contentKey: 'teamIntro',
            label: 'Über unser Team',
            required: false,
        });
    }
    else {
        blocks.push({
            collection: 'block_text',
            role: 'content',
            variant: 'default',
            contentKey: 'teamIntro',
            label: 'Über unser Team',
            required: true,
        });
    }
    blocks.push({
        collection: 'block_teamList',
        role: 'content',
        variant: input.hasTeamPhotos ? 'grid' : 'compact',
        contentKey: 'teamList',
        label: 'Team-Mitglieder',
        required: true,
    });
    return blocks;
}
// ═══ LEISTUNGS-DETAILSEITE ═══
export function resolveServiceDetailBlocks(input) {
    return [
        {
            collection: 'block_herobanner',
            role: 'hero',
            variant: 'default',
            contentKey: 'serviceHero',
            label: 'Leistung',
            required: true,
        },
        {
            collection: 'block_imageText',
            role: 'content',
            variant: input.hasBildmaterial ? 'default' : 'text-only',
            contentKey: 'serviceDetail',
            label: 'Beschreibung',
            required: true,
        },
        {
            collection: 'block_banner',
            role: 'cta',
            variant: 'cta',
            contentKey: 'serviceCta',
            label: 'Termin vereinbaren',
            required: true,
        },
    ];
}
// ═══ STELLEN-DETAILSEITE (Karriere Stufe 2) ═══
export function resolveJobDetailBlocks(input) {
    const benefitCount = input.benefitCount || 0;
    return [
        {
            collection: 'block_herobanner',
            role: 'hero',
            variant: 'default',
            contentKey: 'jobHero',
            label: 'Stelle',
            required: true,
        },
        {
            collection: 'block_text',
            role: 'content',
            variant: 'default',
            contentKey: 'jobDescription',
            label: 'Stellenbeschreibung',
            required: true,
        },
        ...(benefitCount > 0 ? [{
                collection: 'block_imageList',
                role: 'highlight',
                variant: benefitCount > 4 ? 'grid-3' : 'grid-2',
                contentKey: 'jobBenefits',
                label: 'Was wir bieten',
                required: true,
                condition: `${benefitCount} Benefits`,
            }] : []),
        {
            collection: 'block_banner',
            role: 'cta',
            variant: 'cta',
            contentKey: 'jobCta',
            label: 'Jetzt bewerben',
            required: true,
        },
    ];
}
