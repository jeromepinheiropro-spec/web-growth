/* ============================================================
   CONTENU DES PAGES DÉDIÉES — trilingue (FR / EN / DE)
   Pages : services · objectifs · seo-conversion
   H1 optimisés SEO · page Conversion enrichie (méthode + FAQ)
   ============================================================ */

export const PAGES = {

/* ============================== FRANÇAIS ============================== */
fr: {
  services: {
    tag: "Nos services",
    title: "SERVICES DE COMMUNICATION DIGITALE",
    intro: "De la première idée à la dernière campagne, Web Growth couvre toute la chaîne de la communication digitale au Luxembourg. Une seule équipe, une seule direction, une marque qui avance.",
    blocks: [
      { h: "Stratégie de marque", p: "On pose les fondations avant de créer. Positionnement, promesse, ton de voix : une marque claire, cohérente et impossible à confondre.",
        items: ["Audit de marque & concurrence", "Positionnement & promesse", "Plateforme de marque", "Ton de voix & messages clés"] },
      { h: "Identité & design", p: "Une image qui vous ressemble et qui marque les esprits. Logo, univers visuel, direction artistique — jusqu'au moindre détail.",
        items: ["Logo & système visuel", "Charte graphique complète", "Direction artistique", "Design d'interface (UI)"] },
      { h: "Sites & expériences web", p: "Des sites rapides, beaux et pensés pour convertir. Vitrine, e-commerce ou landing page : la technique au service de l'émotion.",
        items: ["Sites vitrine & e-commerce", "Landing pages de campagne", "Performance & responsive", "Intégrations & maintenance"] },
      { h: "Réseaux sociaux & contenu", p: "Une présence vivante qui crée du lien. Ligne éditoriale, community management et contenus qui donnent envie de suivre.",
        items: ["Ligne éditoriale & calendrier", "Community management", "Création photo & vidéo", "Motion & formats courts"] },
      { h: "Publicité & acquisition", p: "On amène les bonnes personnes au bon moment. Campagnes Meta, Google et TikTok pilotées à la performance, budget maîtrisé.",
        items: ["Meta, Google & TikTok Ads", "Ciblage & audiences", "Création publicitaire", "Optimisation & reporting"] },
    ],
    cta: { h: "Un projet en tête ?", p: "Parlons-en autour d'un café — sur place à Luxembourg ou en visio.", btn: "Démarrer un projet" },
  },
  objectifs: {
    tag: "Vos objectifs",
    title: "DES OBJECTIFS BUSINESS, PAS DES LIVRABLES",
    intro: "Chaque action a une raison d'être et un résultat mesurable. On part de vos objectifs business, pas de nos habitudes — puis on aligne stratégie, création et diffusion pour y arriver.",
    blocks: [
      { h: "Notoriété", p: "Être vu, reconnu et mémorisé sur votre marché. On construit une présence qui s'imprime dans les têtes.",
        items: ["Portée & impressions", "Reconnaissance de marque", "Couverture presse & sociale", "Part de voix"] },
      { h: "Acquisition", p: "Attirer des prospects réellement qualifiés, pas juste du trafic. On transforme l'attention en opportunités.",
        items: ["Trafic qualifié", "Leads & demandes de devis", "Coût par acquisition", "Nouvelles audiences"] },
      { h: "Conversion", p: "Transformer l'intérêt en clients. On lève les freins et on facilite chaque étape jusqu'à l'achat.",
        items: ["Taux de conversion", "Parcours optimisés", "Panier & chiffre d'affaires", "Preuve sociale"] },
      { h: "Fidélisation", p: "Faire revenir et faire recommander. Une marque qu'on aime, c'est une marque qui dure.",
        items: ["Rétention & réachat", "Communauté engagée", "Avis & recommandations", "Valeur vie client"] },
    ],
    cta: { h: "Quel est votre prochain objectif ?", p: "Dites-nous où vous voulez aller, on trace le chemin.", btn: "Fixer un objectif" },
  },
  "seo-conversion": {
    tag: "SEO & Conversion",
    title: "SEO & OPTIMISATION DES CONVERSIONS",
    intro: "Le meilleur site du monde ne sert à rien si personne ne le trouve — et un flot de visiteurs ne vaut rien s'ils repartent. On travaille les deux : être visible sur Google, puis transformer chaque visite en client.",
    blocks: [
      { h: "SEO technique", p: "Des fondations propres pour que Google adore votre site. Vitesse, structure et indexation au carré.",
        items: ["Core Web Vitals & vitesse", "Structure & balisage sémantique", "Indexation, sitemap & robots", "Données structurées (Schema.org)"] },
      { h: "Contenu & mots-clés", p: "On écrit pour vos clients d'abord, pour Google ensuite. Le bon mot, sur la bonne page, avec la bonne intention de recherche.",
        items: ["Recherche de mots-clés", "Analyse de l'intention", "Contenu qui classe", "Maillage interne & clusters"] },
      { h: "SEO local — Luxembourg", p: "Être en tête quand on vous cherche près d'ici. Fiche Google, avis et présence locale optimisés.",
        items: ["Google Business Profile", "Recherches « près de moi »", "Gestion des avis", "Citations & annuaires locaux"] },
      { h: "Conversion (CRO)", p: "On transforme plus de visiteurs sans dépenser plus en pub. Chaque clic gagné, c'est du budget économisé.",
        items: ["Landing pages qui convertissent", "Optimisation du tunnel", "Tests A/B & heatmaps", "Preuve sociale & réassurance"] },
      { h: "Tracking & analytics", p: "Ce qui se mesure s'améliore. Un suivi fiable, des tableaux de bord clairs et des décisions basées sur la donnée.",
        items: ["GA4 & suivi des conversions", "Tableaux de bord sur mesure", "Événements & entonnoirs", "Consentement & RGPD"] },
      { h: "Mesure & itération", p: "Le SEO et la conversion se travaillent dans la durée. On analyse, on ajuste, on recommence — chaque mois un peu plus haut.",
        items: ["Reporting mensuel clair", "Objectifs & KPIs suivis", "Veille algorithmes", "Optimisation continue"] },
    ],
    method: {
      title: "Notre méthode",
      steps: [
        { h: "Audit", p: "On analyse votre visibilité, votre site et vos concurrents. Un état des lieux clair et chiffré, sans jargon." },
        { h: "Optimisation", p: "On corrige la technique, le contenu et les pages clés pour grimper dans Google et mieux convertir." },
        { h: "Tests", p: "On teste, on compare, on garde ce qui marche. Les décisions se prennent sur la donnée, pas à l'intuition." },
        { h: "Mesure", p: "Reporting mensuel, objectifs suivis, améliorations continues. La performance devient une habitude." },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "En combien de temps voit-on des résultats en SEO ?", a: "Le SEO est un travail de fond : les premiers effets apparaissent souvent en 2 à 3 mois et s'amplifient ensuite. La conversion, elle, peut progresser dès les premières optimisations du site." },
        { q: "Faut-il refaire tout mon site ?", a: "Pas forcément. On part de l'existant : bien souvent, quelques optimisations ciblées suffisent à gagner en visibilité et en conversions avant d'envisager une refonte." },
        { q: "Travaillez-vous le SEO local à Luxembourg ?", a: "Oui. On optimise votre fiche Google Business Profile, vos avis et votre présence locale pour ressortir sur les recherches « près de moi » au Luxembourg et dans la Grande Région." },
        { q: "L'audit est-il vraiment gratuit ?", a: "Oui, le premier audit SEO & conversion est offert et sans engagement — un diagnostic clair pour savoir précisément par où commencer." },
      ],
    },
    cta: { h: "On regarde votre visibilité ensemble ?", p: "Audit SEO & conversion offert — un état des lieux clair, sans jargon.", btn: "Demander mon audit" },
  },
},

/* ============================== ENGLISH ============================== */
en: {
  services: {
    tag: "Our services",
    title: "DIGITAL COMMUNICATION SERVICES",
    intro: "From the first idea to the last campaign, Web Growth covers the whole digital communication chain in Luxembourg. One team, one direction, a brand that moves forward.",
    blocks: [
      { h: "Brand strategy", p: "We lay the foundations before creating. Positioning, promise, tone of voice: a clear, consistent brand that's impossible to confuse.",
        items: ["Brand & competitor audit", "Positioning & promise", "Brand platform", "Tone of voice & key messages"] },
      { h: "Identity & design", p: "An image that looks like you and sticks in minds. Logo, visual world, art direction — down to the last detail.",
        items: ["Logo & visual system", "Full brand guidelines", "Art direction", "Interface design (UI)"] },
      { h: "Websites & web experiences", p: "Fast, beautiful sites built to convert. Showcase, e-commerce or landing page: technology at the service of emotion.",
        items: ["Showcase & e-commerce sites", "Campaign landing pages", "Performance & responsive", "Integrations & maintenance"] },
      { h: "Social media & content", p: "A living presence that builds connection. Editorial line, community management and content worth following.",
        items: ["Editorial line & calendar", "Community management", "Photo & video production", "Motion & short-form"] },
      { h: "Advertising & acquisition", p: "We bring the right people at the right moment. Meta, Google and TikTok campaigns run on performance, budget under control.",
        items: ["Meta, Google & TikTok Ads", "Targeting & audiences", "Ad creative", "Optimisation & reporting"] },
    ],
    cta: { h: "Got a project in mind?", p: "Let's talk it over — in Luxembourg or by video call.", btn: "Start a project" },
  },
  objectifs: {
    tag: "Your goals",
    title: "BUSINESS GOALS, NOT DELIVERABLES",
    intro: "Every action has a reason and a measurable result. We start from your business goals, not our habits — then align strategy, creative and distribution to get there.",
    blocks: [
      { h: "Awareness", p: "Be seen, recognised and remembered in your market. We build a presence that prints itself in minds.",
        items: ["Reach & impressions", "Brand recognition", "Press & social coverage", "Share of voice"] },
      { h: "Acquisition", p: "Attract genuinely qualified prospects, not just traffic. We turn attention into opportunities.",
        items: ["Qualified traffic", "Leads & quote requests", "Cost per acquisition", "New audiences"] },
      { h: "Conversion", p: "Turn interest into customers. We remove friction and ease every step to purchase.",
        items: ["Conversion rate", "Optimised journeys", "Basket & revenue", "Social proof"] },
      { h: "Loyalty", p: "Bring people back and get them recommending. A brand people love is a brand that lasts.",
        items: ["Retention & repeat", "Engaged community", "Reviews & referrals", "Customer lifetime value"] },
    ],
    cta: { h: "What's your next goal?", p: "Tell us where you want to go, we'll map the way.", btn: "Set a goal" },
  },
  "seo-conversion": {
    tag: "SEO & Conversion",
    title: "SEO & CONVERSION OPTIMISATION",
    intro: "The best site in the world is useless if no one finds it — and a flood of visitors is worthless if they leave. We work on both: being visible on Google, then turning every visit into a customer.",
    blocks: [
      { h: "Technical SEO", p: "Clean foundations so Google loves your site. Speed, structure and indexing done right.",
        items: ["Core Web Vitals & speed", "Structure & semantic markup", "Indexing, sitemap & robots", "Structured data (Schema.org)"] },
      { h: "Content & keywords", p: "We write for your customers first, Google second. The right word, on the right page, with the right search intent.",
        items: ["Keyword research", "Search-intent analysis", "Content that ranks", "Internal linking & clusters"] },
      { h: "Local SEO — Luxembourg", p: "Be on top when people search near you. Optimised Google profile, reviews and local presence.",
        items: ["Google Business Profile", "“Near me” searches", "Review management", "Local citations & directories"] },
      { h: "Conversion (CRO)", p: "We convert more visitors without spending more on ads. Every click gained is budget saved.",
        items: ["Landing pages that convert", "Funnel optimisation", "A/B testing & heatmaps", "Social proof & reassurance"] },
      { h: "Tracking & analytics", p: "What gets measured gets better. Reliable tracking, clear dashboards, data-driven decisions.",
        items: ["GA4 & conversion tracking", "Custom dashboards", "Events & funnels", "Consent & GDPR"] },
      { h: "Measure & iterate", p: "SEO and conversion are long-game work. We analyse, adjust and repeat — a little higher every month.",
        items: ["Clear monthly reporting", "Tracked goals & KPIs", "Algorithm monitoring", "Continuous optimisation"] },
    ],
    method: {
      title: "Our method",
      steps: [
        { h: "Audit", p: "We analyse your visibility, your site and your competitors. A clear, quantified picture, no jargon." },
        { h: "Optimisation", p: "We fix the technical side, the content and the key pages to climb on Google and convert better." },
        { h: "Testing", p: "We test, compare and keep what works. Decisions are made on data, not on gut feeling." },
        { h: "Measure", p: "Monthly reporting, tracked goals, continuous improvement. Performance becomes a habit." },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How long until SEO results show?", a: "SEO is long-term work: the first effects often appear within 2 to 3 months and grow from there. Conversion, however, can improve from the very first optimisations of your site." },
        { q: "Do I need to rebuild my whole site?", a: "Not necessarily. We start from what you have: very often, a few targeted optimisations are enough to gain visibility and conversions before considering a redesign." },
        { q: "Do you handle local SEO in Luxembourg?", a: "Yes. We optimise your Google Business Profile, your reviews and your local presence to show up on “near me” searches in Luxembourg and the Greater Region." },
        { q: "Is the audit really free?", a: "Yes, the first SEO & conversion audit is free and with no commitment — a clear diagnosis to know exactly where to start." },
      ],
    },
    cta: { h: "Shall we review your visibility together?", p: "Free SEO & conversion audit — a clear picture, no jargon.", btn: "Request my audit" },
  },
},

/* ============================== DEUTSCH ============================== */
de: {
  services: {
    tag: "Unsere Leistungen",
    title: "DIGITALE KOMMUNIKATIONS­LEISTUNGEN",
    intro: "Von der ersten Idee bis zur letzten Kampagne deckt Web Growth die gesamte digitale Kommunikationskette in Luxemburg ab. Ein Team, eine Richtung, eine Marke, die vorankommt.",
    blocks: [
      { h: "Markenstrategie", p: "Wir legen das Fundament, bevor wir gestalten. Positionierung, Versprechen, Tonalität: eine klare, konsistente Marke, die unverwechselbar ist.",
        items: ["Marken- & Wettbewerbsaudit", "Positionierung & Versprechen", "Markenplattform", "Tonalität & Kernbotschaften"] },
      { h: "Identität & Design", p: "Ein Bild, das zu Ihnen passt und im Kopf bleibt. Logo, visuelle Welt, Art Direction — bis ins letzte Detail.",
        items: ["Logo & visuelles System", "Vollständiges Corporate Design", "Art Direction", "Interface-Design (UI)"] },
      { h: "Websites & Web-Erlebnisse", p: "Schnelle, schöne Websites, die konvertieren. Schaufenster, E-Commerce oder Landingpage: Technik im Dienst der Emotion.",
        items: ["Schaufenster- & E-Commerce-Sites", "Kampagnen-Landingpages", "Performance & Responsive", "Integrationen & Wartung"] },
      { h: "Social Media & Content", p: "Eine lebendige Präsenz, die Verbindung schafft. Redaktionslinie, Community Management und Inhalte, denen man folgen will.",
        items: ["Redaktionslinie & Kalender", "Community Management", "Foto- & Videoproduktion", "Motion & Kurzformate"] },
      { h: "Werbung & Akquise", p: "Wir bringen die richtigen Menschen zum richtigen Zeitpunkt. Meta-, Google- und TikTok-Kampagnen performanceorientiert, Budget im Griff.",
        items: ["Meta, Google & TikTok Ads", "Targeting & Zielgruppen", "Werbekreation", "Optimierung & Reporting"] },
    ],
    cta: { h: "Ein Projekt im Kopf?", p: "Reden wir bei einem Kaffee darüber — in Luxemburg oder per Video.", btn: "Projekt starten" },
  },
  objectifs: {
    tag: "Ihre Ziele",
    title: "GESCHÄFTSZIELE STATT LIEFERUNGEN",
    intro: "Jede Maßnahme hat einen Grund und ein messbares Ergebnis. Wir gehen von Ihren Geschäftszielen aus, nicht von unseren Gewohnheiten — und richten Strategie, Kreation und Distribution danach aus.",
    blocks: [
      { h: "Bekanntheit", p: "Gesehen, erkannt und erinnert werden in Ihrem Markt. Wir bauen eine Präsenz, die sich einprägt.",
        items: ["Reichweite & Impressionen", "Markenbekanntheit", "Presse- & Social-Reichweite", "Share of Voice"] },
      { h: "Akquise", p: "Wirklich qualifizierte Interessenten gewinnen, nicht nur Traffic. Wir verwandeln Aufmerksamkeit in Chancen.",
        items: ["Qualifizierter Traffic", "Leads & Angebotsanfragen", "Kosten pro Akquise", "Neue Zielgruppen"] },
      { h: "Conversion", p: "Interesse in Kunden verwandeln. Wir beseitigen Hürden und erleichtern jeden Schritt bis zum Kauf.",
        items: ["Conversion-Rate", "Optimierte Journeys", "Warenkorb & Umsatz", "Social Proof"] },
      { h: "Kundenbindung", p: "Wiederkommen und weiterempfehlen lassen. Eine geliebte Marke ist eine Marke, die bleibt.",
        items: ["Retention & Wiederkauf", "Engagierte Community", "Bewertungen & Empfehlungen", "Customer Lifetime Value"] },
    ],
    cta: { h: "Was ist Ihr nächstes Ziel?", p: "Sagen Sie uns, wohin Sie wollen — wir zeichnen den Weg.", btn: "Ziel festlegen" },
  },
  "seo-conversion": {
    tag: "SEO & Conversion",
    title: "SEO & CONVERSION-OPTIMIERUNG",
    intro: "Die beste Website der Welt nützt nichts, wenn niemand sie findet — und eine Flut an Besuchern ist wertlos, wenn sie wieder geht. Wir arbeiten an beidem: bei Google sichtbar sein und jeden Besuch in einen Kunden verwandeln.",
    blocks: [
      { h: "Technisches SEO", p: "Saubere Fundamente, damit Google Ihre Website liebt. Geschwindigkeit, Struktur und Indexierung im Griff.",
        items: ["Core Web Vitals & Speed", "Struktur & semantisches Markup", "Indexierung, Sitemap & robots", "Strukturierte Daten (Schema.org)"] },
      { h: "Content & Keywords", p: "Wir schreiben zuerst für Ihre Kunden, dann für Google. Das richtige Wort, auf der richtigen Seite, mit der richtigen Suchabsicht.",
        items: ["Keyword-Recherche", "Analyse der Suchintention", "Content, der rankt", "Interne Verlinkung & Cluster"] },
      { h: "Lokales SEO — Luxemburg", p: "Ganz oben stehen, wenn man Sie in der Nähe sucht. Optimiertes Google-Profil, Bewertungen und lokale Präsenz.",
        items: ["Google Business Profile", "„In meiner Nähe“-Suchen", "Bewertungsmanagement", "Lokale Einträge & Verzeichnisse"] },
      { h: "Conversion (CRO)", p: "Wir konvertieren mehr Besucher, ohne mehr für Werbung auszugeben. Jeder gewonnene Klick ist gespartes Budget.",
        items: ["Landingpages, die konvertieren", "Funnel-Optimierung", "A/B-Tests & Heatmaps", "Social Proof & Vertrauen"] },
      { h: "Tracking & Analytics", p: "Was man misst, wird besser. Zuverlässiges Tracking, klare Dashboards, datenbasierte Entscheidungen.",
        items: ["GA4 & Conversion-Tracking", "Individuelle Dashboards", "Events & Funnels", "Consent & DSGVO"] },
      { h: "Messen & iterieren", p: "SEO und Conversion sind Langstrecke. Wir analysieren, justieren und wiederholen — jeden Monat ein Stück höher.",
        items: ["Klares Monats-Reporting", "Verfolgte Ziele & KPIs", "Algorithmus-Monitoring", "Laufende Optimierung"] },
    ],
    method: {
      title: "Unsere Methode",
      steps: [
        { h: "Audit", p: "Wir analysieren Ihre Sichtbarkeit, Ihre Website und Ihre Wettbewerber. Ein klares, beziffertes Bild, ohne Fachchinesisch." },
        { h: "Optimierung", p: "Wir verbessern Technik, Content und Schlüsselseiten, um bei Google zu steigen und besser zu konvertieren." },
        { h: "Tests", p: "Wir testen, vergleichen und behalten, was funktioniert. Entscheidungen fallen datenbasiert, nicht aus dem Bauch." },
        { h: "Messen", p: "Monatliches Reporting, verfolgte Ziele, laufende Verbesserung. Performance wird zur Gewohnheit." },
      ],
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: "Wie lange dauert es bis zu SEO-Ergebnissen?", a: "SEO ist Langzeitarbeit: Erste Effekte zeigen sich oft nach 2 bis 3 Monaten und verstärken sich danach. Die Conversion kann sich hingegen schon mit den ersten Optimierungen der Website verbessern." },
        { q: "Muss ich meine ganze Website neu bauen?", a: "Nicht unbedingt. Wir gehen vom Bestehenden aus: Oft genügen einige gezielte Optimierungen, um an Sichtbarkeit und Conversions zu gewinnen, bevor ein Relaunch nötig wird." },
        { q: "Machen Sie lokales SEO in Luxemburg?", a: "Ja. Wir optimieren Ihr Google Business Profile, Ihre Bewertungen und Ihre lokale Präsenz, damit Sie bei „in meiner Nähe“-Suchen in Luxemburg und der Großregion erscheinen." },
        { q: "Ist das Audit wirklich kostenlos?", a: "Ja, das erste SEO- & Conversion-Audit ist kostenlos und unverbindlich — eine klare Diagnose, um genau zu wissen, wo man anfängt." },
      ],
    },
    cta: { h: "Schauen wir uns Ihre Sichtbarkeit gemeinsam an?", p: "Kostenloses SEO- & Conversion-Audit — ein klares Bild, ohne Fachchinesisch.", btn: "Audit anfordern" },
  },
},

};
