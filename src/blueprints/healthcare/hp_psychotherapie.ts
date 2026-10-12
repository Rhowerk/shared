// Blueprint: Heilpraktiker/in für Psychotherapie (Berufsgruppe heilpraktiker, nicht auswählbar).
// Inhalte und Quellen: docs/recherche/2026-10-12-hp-psychotherapie.md (Stand 12.10.2026).
// Berufsbezeichnung nie „Psychotherapeut/in“ (§ 1 PsychThG), keine Kassenleistung, keine Heilversprechen (HWG).
import type { Blueprint } from '../types.js'

export const hp_psychotherapie: Blueprint = {
  meta: {
    id: 'hp_psychotherapie',
    name: 'Praxis für Psychotherapie nach dem Heilpraktikergesetz',
    name_variants: [
      'Heilpraktikerin für Psychotherapie',
      'Heilpraktiker für Psychotherapie',
      'Psychotherapie (HeilprG)',
      'Praxis für Psychotherapie (HeilprG)',
    ],
    icon: 'heart-handshake',
    description: 'Psychotherapie nach dem Heilpraktikergesetz für Selbstzahlerinnen und Selbstzahler',
  },
  colors: {
    primary: '#7D8A6A',
    primary_light: '#9AA785',
    primary_dark: '#5F6B4E',
    secondary: '#F7F9F5',
    accent: '#D4A574',
    alternatives: [
      { name: 'Beruhigend Grün', primary: '#7D8A6A', secondary: '#F7F9F5' },
      { name: 'Sanft Blau', primary: '#7BA3C9', secondary: '#F5F9FC' },
      { name: 'Warm Beige', primary: '#B5A18C', secondary: '#FAF8F5' },
      { name: 'Natur Türkis', primary: '#5D9B9B', secondary: '#F0F9F9' },
    ],
  },
  images: {
    hero: [{ id: 'hp-psycho-hero-1', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80', alt: 'Ruhige Praxisatmosphäre' }],
    imagetext: [{ id: 'hp-psycho-praxis', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&q=80', alt: 'Einladender Gesprächsraum' }],
    imagelist: [{ id: 'hp-psycho-leistungen', url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1024&q=80', alt: 'Gespräch in ruhiger Atmosphäre' }],
    banner: [{ id: 'hp-psycho-banner', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', alt: 'Ruhe und Weite in der Natur' }],
  },

  // Recherche „## services“. optional = nur, wenn die Praxis es anbietet (Entscheidung Kevin 12.10.2026)
  services: [
    {
      category: 'Kennenlernen & Ablauf',
      icon_color: '#8A7F6E',
      items: [
        {
          name: 'Kennenlerngespräch',
          icon: 'message-circle',
          default_description: 'Im ersten Gespräch geht es darum, was zur Anfrage geführt hat, welche Wünsche und Erwartungen bestehen und wie die Zusammenarbeit aussehen kann. Danach lässt sich in Ruhe entscheiden, ob eine Begleitung passt. Die Kosten werden vorab genannt.',
        },
        {
          name: 'Anamnese und Zielklärung',
          icon: 'clipboard-list',
          default_description: 'In einem ausführlichen Gespräch werden Lebensgeschichte, aktuelle Belastungen und Ressourcen besprochen und gemeinsame Ziele festgehalten. Bei Hinweisen auf körperliche Ursachen oder einen ärztlichen Behandlungsbedarf wird eine ärztliche Abklärung empfohlen.',
        },
        {
          name: 'Krisenbegleitung',
          icon: 'life-buoy',
          default_description: 'Begleitende Gespräche in belastenden Lebensphasen, etwa nach Trennung, Verlust oder beruflichen Umbrüchen. Ziel ist, wieder Halt und Orientierung zu finden. Die Praxis ist keine Notfallstelle; in akuten Notlagen sind der Notruf 112 und die TelefonSeelsorge (0800 111 0 111) erreichbar.',
        },
      ],
    },
    {
      category: 'Psychotherapie nach dem Heilpraktikergesetz',
      icon_color: '#6E8A7D',
      items: [
        {
          name: 'Gesprächstherapie',
          icon: 'messages-square',
          default_description: 'Gesprächstherapie bietet Raum, Gedanken und Gefühle in einem geschützten Rahmen zu sortieren. Im Mittelpunkt stehen Zuhören, Verstehen und die eigenen Antworten auf die Fragen, die gerade wichtig sind. Psychotherapie nach dem Heilpraktikergesetz, keine Leistung der gesetzlichen Krankenkasse.',
        },
        {
          name: 'Einzelsitzung',
          icon: 'user',
          default_description: 'Regelmäßige Einzelsitzungen; Länge und Häufigkeit der Sitzungen sowie die Dauer der Begleitung werden gemeinsam festgelegt und im Verlauf überprüft. Eine Beendigung ist jederzeit möglich.',
        },
        {
          name: 'Paar- und Beziehungsgespräche',
          icon: 'users',
          default_description: 'Gemeinsame Gespräche für Paare, die wiederkehrende Konflikte, Kommunikationsmuster oder Veränderungen in der Beziehung betrachten möchten. Beide Sichtweisen bekommen Raum, ohne Schuldzuweisung.',
          optional: true,
        },
        {
          name: 'Entspannungsverfahren',
          icon: 'wind',
          default_description: 'Angeleitete Verfahren wie Progressive Muskelentspannung, Atemübungen oder Imaginationen, die sich auch im Alltag anwenden lassen. Viele Menschen erleben damit mehr Ruhe und einen bewussteren Umgang mit Anspannung.',
        },
      ],
    },
    {
      category: 'Musik, Stimme & Klang',
      icon_color: '#9A7FA6',
      items: [
        {
          name: 'Musiktherapie',
          icon: 'music',
          default_description: 'In der Musiktherapie werden Instrumente wie Trommel, Monochord oder Klangschalen und die eigene Stimme genutzt, um Gefühle auszudrücken, für die Worte manchmal fehlen. Musikalische Vorkenntnisse sind nicht nötig; es geht um Ausdruck, nicht um Können.',
        },
        {
          name: 'Stimmarbeit',
          icon: 'mic',
          default_description: 'Singen, Tönen und Summen laden dazu ein, die eigene Stimme neu zu entdecken und sich über den Atem bewusster wahrzunehmen. Stimmarbeit in der Psychotherapie ist keine logopädische Stimmtherapie und ersetzt keine Behandlung von Stimmstörungen.',
        },
        {
          name: 'Klangmassage',
          icon: 'bell',
          default_description: 'Bei der Klangmassage werden Klangschalen auf oder neben den bekleideten Körper gestellt und behutsam angeschlagen. Im Vordergrund stehen Entspannung und das bewusste Wahrnehmen des Körpers. Die Klangmassage ist keine Heilbehandlung und ersetzt keine ärztliche Behandlung und keine Psychotherapie.',
        },
        {
          name: 'Klangreise',
          icon: 'waves',
          default_description: 'Eine Klangreise verbindet Klänge von Klangschalen, Gong oder Monochord mit einer angeleiteten Fantasiereise, im Liegen oder Sitzen, einzeln oder in der Gruppe. Viele Menschen erleben sie als Zeit zum Ankommen und Durchatmen. Kein Ersatz für eine Behandlung.',
        },
      ],
    },
    {
      category: 'Ort & Form',
      icon_color: '#7A8FA6',
      items: [
        {
          name: 'Sitzungen per Video',
          icon: 'video',
          default_description: 'Nach einem persönlichen Kennenlernen können Folgesitzungen nach Absprache auch per Video stattfinden, über einen verschlüsselten Dienst. Ob das passt, wird im Einzelfall besprochen.',
          optional: true,
        },
        {
          name: 'Hausbesuch',
          icon: 'home',
          default_description: 'Für Menschen, denen der Weg in die Praxis schwerfällt, sind nach Absprache Termine zu Hause möglich. Anfahrt und Kosten werden vorher vereinbart.',
          optional: true,
        },
      ],
    },
  ],

  // Recherche „## faq“ (13 Fragen; Video/Hausbesuch nicht als Standard-FAQ, da optional)
  faq: [
    {
      category: 'Richtig bei uns?',
      questions: [
        {
          question: 'Ich suche eine Psychotherapeutin oder einen Psychotherapeuten – bin ich bei Ihnen richtig?',
          answer: 'Wir arbeiten psychotherapeutisch auf Grundlage einer Erlaubnis nach dem Heilpraktikergesetz, beschränkt auf das Gebiet der Psychotherapie. Eine Therapie über die gesetzliche Krankenkasse bieten wir nicht an; die Kosten tragen Sie selbst. Wenn Sie eine Kassentherapie suchen, vermittelt die Terminservicestelle unter 116117 einen Termin für eine psychotherapeutische Sprechstunde. Im Kennenlerngespräch klären wir offen, ob unsere Begleitung zu Ihrem Anliegen passt.',
        },
        {
          question: 'Was unterscheidet eine Heilpraktikerin oder einen Heilpraktiker für Psychotherapie von approbierten Psychotherapeutinnen und Psychotherapeuten?',
          answer: 'Approbierte Psychotherapeutinnen und Psychotherapeuten haben ein Studium und eine staatliche Aus- bzw. Weiterbildung abgeschlossen; mit Kassenzulassung können sie über die gesetzliche Krankenkasse abrechnen. Heilpraktikerinnen und Heilpraktiker für Psychotherapie haben eine Erlaubnis nach dem Heilpraktikergesetz, die nach einer Überprüfung durch das Gesundheitsamt erteilt wird. Sie dürfen psychotherapeutisch arbeiten, aber keine Medikamente verordnen, nicht krankschreiben und nicht mit der gesetzlichen Kasse abrechnen.',
        },
        {
          question: 'Wann sind Sie nicht die richtige Anlaufstelle?',
          answer: 'Bei körperlichen Beschwerden gehört die Abklärung in ärztliche Hände. Wenn eine medikamentöse oder stationäre Behandlung nötig sein könnte, empfehlen wir eine ärztliche oder psychiatrische Abklärung. In akuten Krisen sind wir keine Notfallstelle. Wenn wir merken, dass ein anderes Angebot besser passt, sagen wir Ihnen das.',
        },
      ],
    },
    {
      category: 'Kosten & Versicherung',
      questions: [
        {
          question: 'Zahlt die gesetzliche Krankenkasse?',
          answer: 'Nein. Psychotherapie bei Heilpraktikerinnen und Heilpraktikern ist keine Leistung der gesetzlichen Krankenversicherung. Auch das Kostenerstattungsverfahren, über das Kassen in bestimmten Fällen eine Privatpraxis bezahlen, steht nur approbierten Psychotherapeutinnen und Psychotherapeuten offen. Sie zahlen die Sitzungen selbst; die Preise nennen wir Ihnen vorab.',
        },
        {
          question: 'Zahlt meine private Krankenversicherung oder Zusatzversicherung?',
          answer: 'Das hängt von Ihrem Tarif ab. Viele Tarife erstatten Heilpraktikerleistungen, schließen Psychotherapie beim Heilpraktiker aber aus oder begrenzen sie. Fragen Sie bitte vor Beginn schriftlich bei Ihrer Versicherung nach. Wir stellen Ihnen eine Rechnung aus, die Sie einreichen können.',
        },
        {
          question: 'Bekomme ich Beihilfe?',
          answer: 'Nach den Beihilfevorschriften des Bundes sind psychotherapeutische Leistungen durch Heilpraktikerinnen und Heilpraktiker nicht beihilfefähig. Für Landesbeamtinnen und Landesbeamte gelten die Vorschriften des jeweiligen Landes; bitte fragen Sie vor Beginn bei Ihrer Beihilfestelle nach.',
        },
        {
          question: 'Was kostet eine Sitzung, und wie wird abgerechnet?',
          answer: 'Unsere aktuellen Preise finden Sie auf der Website oder wir nennen sie Ihnen vor dem ersten Termin. Als Orientierung dient das Gebührenverzeichnis für Heilpraktiker (GebüH); es ist keine verbindliche Gebührenordnung, das Honorar wird vorab vereinbart, ebenso die Regel für kurzfristig abgesagte Termine. Sie erhalten eine Rechnung nach jeder Sitzung oder gesammelt.',
        },
        {
          question: 'Erfährt meine Krankenkasse oder eine andere Versicherung von der Behandlung?',
          answer: 'Wir rechnen nicht mit der gesetzlichen Krankenkasse ab, sie erhält also von uns keine Daten. Reichen Sie eine Rechnung bei einer privaten Versicherung ein, liegt sie dort vor. Fragt eine Versicherung später nach Behandlungen, etwa bei einer Berufsunfähigkeitsversicherung oder Verbeamtung, sind in der Regel auch selbst bezahlte Behandlungen anzugeben.',
        },
      ],
    },
    {
      category: 'Ablauf',
      questions: [
        {
          question: 'Wie schnell bekomme ich einen Termin?',
          answer: 'Wir melden uns auf Ihre Anfrage zeitnah und nennen Ihnen den nächsten freien Termin für ein Kennenlerngespräch. Ein Antragsverfahren gibt es bei uns nicht. Wie lange es bis zum ersten Termin dauert, hängt von unserer aktuellen Auslastung ab.',
        },
        {
          question: 'Wie läuft das erste Gespräch ab?',
          answer: 'Sie erzählen, was Sie zu uns führt, und wir erklären, wie wir arbeiten und was eine Sitzung kostet. Gemeinsam schauen wir, ob die Begleitung zu Ihrem Anliegen passt. Danach entscheiden Sie in Ruhe, ob Sie weitermachen möchten.',
        },
        {
          question: 'Wie viele Sitzungen brauche ich?',
          answer: 'Eine feste Zahl gibt es nicht und wir geben dazu keine Zusage. Wir besprechen gemeinsam, was Sie sich wünschen, und schauen regelmäßig, wie es weitergeht. Sie können die Begleitung jederzeit beenden.',
        },
      ],
    },
    {
      category: 'Vertrauen & Sicherheit',
      questions: [
        {
          question: 'Bleibt vertraulich, was ich erzähle?',
          answer: 'Ja. Was Sie uns anvertrauen, behandeln wir vertraulich im Rahmen des Behandlungsvertrags und des Datenschutzes. Aufzeichnungen bewahren wir geschützt auf und geben ohne Ihre Einwilligung nichts weiter.',
        },
        {
          question: 'Was kann ich tun, wenn es mir akut sehr schlecht geht?',
          answer: 'Wir sind keine Notfallstelle. Bei Lebensgefahr oder wenn Sie daran denken, sich das Leben zu nehmen, rufen Sie bitte sofort den Notruf 112 oder gehen in die nächste psychiatrische Notaufnahme. Rund um die Uhr, kostenlos und anonym erreichen Sie die TelefonSeelsorge unter 0800 111 0 111, 0800 111 0 222 oder 116 123. Außerhalb der Sprechzeiten hilft auch der ärztliche Bereitschaftsdienst unter 116 117.',
        },
      ],
    },
  ],

  // Recherche „## ai_context“ (ohne „ärztlich“: Hinweise auf ärztliche Abklärung stehen in der FAQ)
  ai_context: {
    tone: ['ruhig', 'zugewandt', 'klar', 'ehrlich', 'respektvoll'],
    audience: 'Erwachsene, die in einer belastenden Lebensphase Begleitung suchen und bereit sind, selbst zu zahlen. Viele kennen den Unterschied zur Kassentherapie nicht oder kommen nach langer Suche nach einem Kassenplatz. Sie brauchen zuerst ehrliche Antworten zu Kosten, Ablauf und Grenzen des Angebots.',
    personality: ['achtsam', 'bodenständig', 'offen für kreative Wege (Musik, Stimme, Klang)', 'transparent'],
    key_messages: [
      'Psychotherapie nach dem Heilpraktikergesetz, offen erklärt',
      'Selbstzahler-Angebot mit vorab genannten Kosten',
      'Kennenlerngespräch, danach in Ruhe entscheiden',
      'Vertraulich im Rahmen des Behandlungsvertrags',
      'Gespräch, Musik, Stimme und Klang als Wege des Ausdrucks',
    ],
    language_style: {
      avoid: [
        'Psychotherapeut/in als Berufsbezeichnung (auch mit Zusatz wie HPG)',
        'Heilpraktiker/in ohne Zusatz „für Psychotherapie“',
        'Patientenakte bei der Kasse',
        'Kassenleistung, Rezept, Überweisung, Krankschreibung',
        'Heilversprechen (heilt, hilft bei, befreit von, wirkt, garantiert)',
        'Wirkungen auf Körperfunktionen (Blutdruck, Schlaf, Zellen, Hormone, Stoffwechsel)',
        'gesetzliche Schweigepflicht als Begründung der Vertraulichkeit',
        'Vergleiche mit Wartezeiten der Kassentherapie',
        'Klientenstimmen und Fallgeschichten',
      ],
      prefer: [
        'Heilpraktikerin/Heilpraktiker für Psychotherapie',
        'Psychotherapie (HeilprG)',
        'begleiten',
        'Raum geben',
        'viele Menschen erleben …',
        'kann unterstützen',
        'Klientinnen und Klienten (Patientin/Patient ist nicht falsch, aber seltener passend)',
        'Selbstzahler, keine Leistung der gesetzlichen Krankenkasse',
        'vertraulich im Rahmen des Behandlungsvertrags',
      ],
    },
  },

  // Recherche „## seo“
  seo: {
    title_template: '{praxis_name} | Psychotherapie (HeilprG) in {ort}',
    description_template: '{praxis_name} in {ort}: Psychotherapie nach dem Heilpraktikergesetz mit Gespräch, Musik, Stimme und Klang. Für Selbstzahler. Kennenlerngespräch vereinbaren.',
    keywords: [
      'Heilpraktiker Psychotherapie {ort}',
      'Heilpraktikerin für Psychotherapie {ort}',
      'Psychotherapie Selbstzahler {ort}',
      'Gesprächstherapie {ort}',
      'Heilpraktiker Psychotherapie Kosten',
      'Heilpraktiker Psychotherapie Kostenübernahme',
      'Psychotherapie ohne lange Wartezeit',
      'Klangmassage {ort}',
      'Klangreise {ort}',
      'Musiktherapie Erwachsene {ort}',
      'Heilpraktiker Psychotherapie in der Nähe',
    ],
  },
  fachrichtung_titel: {
    de: 'Heilpraktiker für Psychotherapie',
    de_female: 'Heilpraktikerin für Psychotherapie',
    en: 'Non-medical practitioner of psychotherapy (Heilpraktiker)',
  },
  jobs: { templates: [], additional_benefits: [] },
  pages: { homepage: { blocks: [] } },
  employer: {
    typisch: 'Einzelpraxis oder kleine Praxisgemeinschaft, psychotherapeutische Gespräche nach dem Heilpraktikergesetz, oft ergänzt durch kreative Verfahren wie Musik, Stimme und Klang; Organisation, Termine und Rechnungen meist in eigener Hand.',
    aufgaben: {},
    staerke: 'Kleiner, ruhiger Rahmen, eigene Gestaltung von Angebot und Zeiten, enge Zusammenarbeit',
    benefit_kontexte: {},
    verbotene_phrasen: [
      'Psychotherapeut',
      'Psychotherapeutin',
      'psychotherapeutische Praxis (ohne Zusatz HeilprG)',
      'Kassenleistung',
      'Kassenpatienten',
      'heilt',
      'garantiert',
      'Behandlung psychischer Erkrankungen mit Erfolgsgarantie',
      'gesetzliche Schweigepflicht',
    ],
  },
}
