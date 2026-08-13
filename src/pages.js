/* ============================================================
   PAGES — trilingue (FR / EN / DE)
   Hub : services
   Une page dédiée par service (SEO + conversion) :
     strategie-de-marque · identite-visuelle · creation-site-web
     reseaux-sociaux · publicite-en-ligne · seo-conversion
   + objectifs
   ============================================================ */

/* Liste des services (ordre + slugs) — utilisée pour le hub et le menu */
export const SERVICE_ROUTES = [
  "strategie-de-marque",
  "identite-visuelle",
  "creation-site-web",
  "reseaux-sociaux",
  "publicite-en-ligne",
  "video-motion",
  "seo-conversion",
];

/* Libellés courts du menu déroulant / hub par langue */
export const SERVICE_LABELS = {
  fr: {
    "strategie-de-marque": "Stratégie de marque",
    "identite-visuelle": "Identité visuelle & design",
    "creation-site-web": "Création de site web",
    "reseaux-sociaux": "Réseaux sociaux & contenu",
    "publicite-en-ligne": "Publicité en ligne",
    "video-motion": "Vidéo & motion",
    "seo-conversion": "SEO & Conversion",
  },
  en: {
    "strategie-de-marque": "Brand strategy",
    "identite-visuelle": "Visual identity & design",
    "creation-site-web": "Website creation",
    "reseaux-sociaux": "Social media & content",
    "publicite-en-ligne": "Online advertising",
    "video-motion": "Video & motion",
    "seo-conversion": "SEO & Conversion",
  },
  de: {
    "strategie-de-marque": "Markenstrategie",
    "identite-visuelle": "Visuelle Identität & Design",
    "creation-site-web": "Website-Erstellung",
    "reseaux-sociaux": "Social Media & Content",
    "publicite-en-ligne": "Online-Werbung",
    "video-motion": "Video & Motion",
    "seo-conversion": "SEO & Conversion",
  },
};

export const PAGES = {

/* ============================== FRANÇAIS ============================== */
fr: {
  services: {
    hub: true,
    tag: "Nos services",
    title: "SERVICES DE COMMUNICATION DIGITALE",
    intro: "De la stratégie à la performance, une gamme complète pour faire grandir votre marque au Luxembourg. Choisissez un service pour tout savoir.",
    items: [
      { route:"strategie-de-marque", h:"Stratégie de marque", p:"Positionnement, promesse et ton de voix : les fondations d'une marque forte." },
      { route:"identite-visuelle", h:"Identité visuelle & design", p:"Logo, charte et univers graphique qui vous rendent reconnaissable." },
      { route:"creation-site-web", h:"Création de site web", p:"Des sites rapides, beaux et pensés pour convertir." },
      { route:"reseaux-sociaux", h:"Réseaux sociaux & contenu", p:"Stratégie, contenus et community management qui créent du lien." },
      { route:"publicite-en-ligne", h:"Publicité en ligne", p:"Google, Meta & TikTok pilotés à la performance." },
      { route:"video-motion", h:"Vidéo & motion", p:"Reels, motion design et vidéos qui arrêtent le pouce." },
      { route:"seo-conversion", h:"SEO & Conversion", p:"Être trouvé sur Google et transformer les visites en clients." },
    ],
    cta: { h:"Un projet en tête ?", p:"Parlons-en autour d'un café — sur place à Luxembourg ou en visio.", btn:"Démarrer un projet" },
  },

  "strategie-de-marque": {
    tag:"Service · Stratégie", title:"STRATÉGIE DE MARQUE", heroCta:"Construire ma marque",
    lead:"Une marque, ce n'est pas un logo. C'est la raison pour laquelle on vous choisit.",
    context:"Avant de parler couleurs ou slogan, on répond à trois questions que la plupart des entreprises négligent : qui êtes-vous vraiment, à qui parlez-vous, et pourquoi devrait-on vous préférer à un concurrent moins cher ? Sans ces réponses, chaque euro de communication part dans le vide. Avec elles, tout devient plus simple, plus cohérent et plus rentable. On transforme votre intuition en une plateforme de marque claire, que vos équipes, vos prestataires et vos clients comprennent immédiatement.",
    valueProp:"Une marque claire que vos clients comprennent, retiennent et choisissent — avant même de comparer les prix.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Une méthode, pas de l'impro","p":"Ateliers structurés et livrables concrets : votre stratégie tient sur le papier comme dans la réalité."}]},
    intro:"Une marque forte se construit avant de se dessiner. On clarifie qui vous êtes, ce que vous promettez et pourquoi on devrait vous choisir — pour une image cohérente et mémorable.",
    benefits:[
      { h:"Une marque claire", p:"Un positionnement net qui vous distingue et parle vraiment à vos clients." },
      { h:"De la cohérence", p:"Un même message et un même ton partout : votre marque devient reconnaissable." },
      { h:"Plus de valeur", p:"Une marque forte justifie vos prix et fidélise. On construit un actif, pas juste un logo." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Audit de marque & concurrence","Positionnement & promesse","Plateforme de marque","Ton de voix & messages clés","Personas & cibles","Guide de marque"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Immersion", p:"On plonge dans votre marché, vos clients et vos concurrents." },
      { h:"Stratégie", p:"On définit positionnement, promesse et territoire de marque." },
      { h:"Activation", p:"On livre une plateforme claire, prête à guider toute votre communication." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"C'est réservé aux grandes entreprises ?", a:"Non. Une stratégie de marque est encore plus utile aux indépendants, TPE et PME : elle vous fait sortir du lot dès le départ." },
      { q:"Quelle différence avec un logo ?", a:"Le logo est la partie visible. La stratégie, c'est le socle : ce que vous représentez, pour qui et pourquoi. Le reste en découle." },
      { q:"Combien de temps ça prend ?", a:"En général 2 à 4 semaines selon la profondeur, ateliers de travail inclus." },
    ]},
    cta:{ h:"Prêt à poser des fondations solides ?", p:"On construit ensemble une marque claire et mémorable.", btn:"Démarrer ma stratégie" },
  },

  "identite-visuelle": {
    tag:"Service · Design", title:"IDENTITÉ VISUELLE & DESIGN", heroCta:"Créer mon identité",
    lead:"On vous reconnaît avant même de vous lire.",
    context:"Votre identité visuelle, c'est la première poignée de main — souvent la seule. En quelques millisecondes, un visiteur décide s'il vous fait confiance. On construit un univers graphique cohérent — logo, couleurs, typographies, motifs, photo — qui raconte votre positionnement sans un mot, se décline partout du site aux réseaux, et vous fait passer instantanément dans une autre catégorie de prix.",
    valueProp:"Une identité qu'on reconnaît au premier coup d'œil, et qui inspire confiance instantanément.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Vous êtes propriétaire de tout","p":"Fichiers sources, charte et déclinaisons vous appartiennent — aucune dépendance."}]},
    intro:"Logo, couleurs, typographies, univers graphique : une identité qui vous ressemble et qu'on reconnaît au premier coup d'œil.",
    benefits:[
      { h:"Une image mémorable", p:"Un univers visuel distinctif qui reste en tête et inspire confiance." },
      { h:"De la cohérence", p:"Tous vos supports parlent d'une même voix visuelle, du web au print." },
      { h:"Du professionnalisme", p:"Une image soignée qui vous fait passer dans la cour des grands." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Logo & déclinaisons","Palette de couleurs","Typographies","Charte graphique complète","Templates réseaux sociaux","Déclinaisons print & web"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Exploration", p:"Moodboards et pistes créatives à partir de votre stratégie." },
      { h:"Création", p:"On dessine votre identité et on l'affine avec vous." },
      { h:"Livraison", p:"Charte complète + fichiers sources, prêts à l'emploi partout." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"Je repars avec les fichiers sources ?", a:"Oui, vous êtes propriétaire de votre identité : fichiers vectoriels, charte et déclinaisons vous appartiennent." },
      { q:"Vous refaites mon logo existant ?", a:"Refonte complète ou évolution en douceur : on s'adapte à votre besoin et à votre historique." },
      { q:"Le print est inclus ?", a:"Oui, on décline l'identité sur tous vos supports : cartes, enseignes, packaging, réseaux." },
    ]},
    cta:{ h:"Envie d'une image qui marque ?", p:"On crée une identité à votre image.", btn:"Créer mon identité" },
  },

  "creation-site-web": {
    tag:"Service · Web", title:"CRÉATION DE SITE WEB", heroCta:"Lancer mon site",
    lead:"Votre site est votre meilleur commercial. Il ne dort jamais.",
    context:"Un beau site qui ne convertit pas, c'est une carte de visite chère. On conçoit chaque page comme un parcours : on capte l'attention en trois secondes, on lève les doutes, et on guide vers l'action — appel, devis ou achat. Vitesse, mobile, référencement et tracking sont intégrés dès le départ, pas ajoutés après coup. Résultat : un site rapide, élégant, et surtout mesurable.",
    valueProp:"Un site rapide qui travaille pour vous 24h/24 et transforme vos visiteurs en clients.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Livré, formé, autonome","p":"Vous repartez avec un site que vous savez gérer. On vous forme, on ne vous rend pas dépendant."}]},
    intro:"Des sites rapides, beaux et pensés pour convertir. Vitrine, e-commerce ou landing page — votre meilleur commercial, ouvert 24h/24.",
    benefits:[
      { h:"Rapide & fluide", p:"Un site performant qui charge vite : meilleure expérience et meilleur référencement." },
      { h:"Pensé pour convertir", p:"Chaque page guide le visiteur vers l'action : appel, devis ou achat." },
      { h:"Sur tous les écrans", p:"Impeccable sur mobile, tablette et ordinateur." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Design sur mesure","Développement responsive","Optimisation vitesse & SEO","Formulaires & prise de contact","Hébergement & mise en ligne","Formation & maintenance"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Cadrage", p:"Objectifs, arborescence et contenus : on pose les bases." },
      { h:"Design & dev", p:"On conçoit, on développe et on teste sur tous les supports." },
      { h:"Mise en ligne", p:"Lancement, suivi et optimisation après la sortie." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"Je pourrai le modifier moi-même ?", a:"Oui, on met en place un site facile à gérer et on vous forme à son administration." },
      { q:"Le SEO est inclus ?", a:"Les bases techniques du référencement sont intégrées dès la conception. Un accompagnement SEO poussé est possible en option." },
      { q:"Combien de temps pour un site ?", a:"Un site vitrine prend généralement 3 à 6 semaines selon le nombre de pages et de fonctionnalités." },
    ]},
    cta:{ h:"Un site à la hauteur de votre marque ?", p:"On construit un site rapide, beau et efficace.", btn:"Lancer mon site" },
  },

  "reseaux-sociaux": {
    tag:"Service · Social media", title:"RÉSEAUX SOCIAUX & CONTENU", heroCta:"Booster mes réseaux",
    lead:"Publier, c'est facile. Créer du lien, c'est un métier.",
    context:"Les réseaux ne récompensent pas la quantité, mais la régularité et la pertinence. On définit une ligne éditoriale qui vous ressemble, on produit des contenus pensés pour arrêter le scroll, et on anime votre communauté au quotidien. Vous gardez la main sur le message ; on vous enlève la charge mentale et le syndrome de la page blanche. L'objectif : des abonnés qui deviennent des clients, pas juste des chiffres.",
    valueProp:"Une présence qui fait grandir votre communauté et vend pour vous — sans y passer vos soirées.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Vous gardez la main","p":"Vous validez la ligne et le planning. On vous fait gagner du temps, pas perdre le contrôle."}]},
    intro:"Une présence vivante qui crée du lien et fait grandir votre communauté. Stratégie, contenus et community management, du début à la fin.",
    benefits:[
      { h:"Une communauté engagée", p:"Des abonnés qui interagissent vraiment, pas juste des chiffres." },
      { h:"Une présence régulière", p:"Un rythme de publication tenu, sans y passer vos soirées." },
      { h:"Des contenus qui captent", p:"Photo, vidéo, motion : des formats pensés pour arrêter le scroll." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Stratégie éditoriale","Calendrier de publication","Création de contenus (photo/vidéo)","Community management","Formats courts & motion","Reporting mensuel"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Stratégie", p:"On définit ligne éditoriale, plateformes et objectifs." },
      { h:"Production", p:"On crée et planifie des contenus qui vous ressemblent." },
      { h:"Animation", p:"On publie, on interagit, on analyse et on ajuste." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"Sur quels réseaux travaillez-vous ?", a:"Instagram, LinkedIn, TikTok, Facebook… on choisit ceux où se trouve réellement votre audience." },
      { q:"Vous créez les contenus ou juste les publiez ?", a:"Les deux : de la création (photo, vidéo, visuels) à la publication et l'animation de la communauté." },
      { q:"Je garde la main ?", a:"Toujours. Vous validez la ligne et le planning ; on vous fait gagner du temps, pas perdre le contrôle." },
    ]},
    cta:{ h:"Prêt à animer vos réseaux ?", p:"On fait grandir votre communauté.", btn:"Booster mes réseaux" },
  },

  "publicite-en-ligne": {
    tag:"Service · Publicité", title:"PUBLICITÉ EN LIGNE", heroCta:"Lancer mes campagnes",
    lead:"Le bon message, à la bonne personne, au bon moment.",
    context:"La publicité en ligne, c'est le seul levier qui apporte des clients dès le premier jour — à condition d'être piloté finement. On cible précisément votre audience sur Google, Meta et TikTok, on crée des annonces qui donnent envie de cliquer, et on optimise en continu : plus de budget sur ce qui rapporte, on coupe le reste. Chaque euro est suivi jusqu'à la conversion. Pas d'esbroufe, des résultats.",
    valueProp:"Les bons clients, dès le lancement. Chaque euro investi, ciblé et mesuré.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Chaque euro est mesuré","p":"Suivi des conversions et reporting clair : on investit là où c'est rentable, on coupe le reste."}]},
    intro:"Les bonnes personnes, au bon moment, au bon endroit. Campagnes Google, Meta et TikTok pilotées à la performance, budget maîtrisé.",
    benefits:[
      { h:"Des résultats rapides", p:"Contrairement au SEO, la publicité génère du trafic et des leads dès le lancement." },
      { h:"Un budget maîtrisé", p:"On optimise chaque euro dépensé et on coupe ce qui ne marche pas." },
      { h:"Du concret", p:"Appels, devis, ventes : on pilote sur ce qui compte vraiment pour vous." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Google Ads (Search & Display)","Meta Ads (Instagram/Facebook)","TikTok Ads","Ciblage & audiences","Création publicitaire","Suivi des conversions & reporting"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Stratégie", p:"Objectifs, audiences, budget et messages." },
      { h:"Lancement", p:"On crée les annonces et on met les campagnes en ligne." },
      { h:"Optimisation", p:"On teste, on ajuste et on scale ce qui performe." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"Quel budget faut-il prévoir ?", a:"On s'adapte à votre situation. On définit ensemble un budget de départ réaliste, puis on augmente ce qui est rentable." },
      { q:"En combien de temps des résultats ?", a:"Les premières données arrivent en quelques jours ; l'optimisation rend les campagnes de plus en plus rentables au fil des semaines." },
      { q:"Le budget publicitaire est-il inclus ?", a:"Non, le budget média payé aux plateformes est distinct de notre gestion. On vous conseille pour l'investir au mieux." },
    ]},
    cta:{ h:"Envie de résultats rapides ?", p:"On lance des campagnes rentables.", btn:"Lancer mes campagnes" },
  },

  "video-motion": {
    tag:"Service · Vidéo", title:"VIDÉO & MOTION DESIGN", heroCta:"Créer ma vidéo",
    lead:"Trois secondes pour convaincre. On les rend inoubliables.",
    context:"La vidéo est le format le plus consommé et le plus partagé — et de loin le plus efficace pour créer de l'émotion. Reels, motion design, vidéos de marque : on transforme vos idées en contenus qui arrêtent le pouce, expliquent vite et donnent envie de partager. D'un seul tournage, on tire une série de formats adaptés à chaque plateforme. Un maximum d'impact, un minimum d'effort de votre côté.",
    valueProp:"Des vidéos qui arrêtent le pouce et font passer votre message en cinq secondes.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Un tournage, plusieurs contenus","p":"On tire le maximum de chaque production : beaucoup de formats, un minimum d'effort pour vous."}]},
    intro:"Reels, motion design, vidéos de marque : du contenu qui arrête le pouce et fait passer votre message en quelques secondes.",
    benefits:[
      { h:"Ça capte l'attention", p:"La vidéo est le format le plus engageant : on arrête le scroll et on retient le regard." },
      { h:"Ça explique vite", p:"Une idée complexe devient limpide en quelques secondes de motion." },
      { h:"Ça se partage", p:"Des formats courts pensés pour être vus, aimés et repartagés." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Reels & formats courts","Motion design & animation","Vidéo de marque","Habillage & sous-titres","Tournage & montage","Déclinaisons multi-plateformes"],
    method:{ title:"Comment on travaille", steps:[
      { h:"Concept", p:"On définit le message, le ton et le format selon vos objectifs." },
      { h:"Production", p:"Tournage, montage et motion : on donne vie à l'idée." },
      { h:"Diffusion", p:"Des formats adaptés à chaque plateforme, prêts à publier." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"Vous filmez ou juste le montage ?", a:"Les deux : captation, montage, motion design et habillage. On s'adapte à vos moyens et à votre besoin." },
      { q:"Ça marche pour les réseaux ?", a:"Oui, on décline chaque vidéo aux bons formats (9:16, 1:1, 16:9) pour Instagram, TikTok, LinkedIn et YouTube." },
      { q:"Il me faut beaucoup de contenu ?", a:"On peut partir d'un seul tournage et en tirer plusieurs formats courts — un maximum de contenu, un minimum d'effort." },
    ]},
    cta:{ h:"Envie de contenu qui capte ?", p:"On crée des vidéos qui font la différence.", btn:"Créer ma vidéo" },
  },

  "seo-conversion": {
    tag:"Service · SEO & Conversion", title:"SEO & OPTIMISATION DES CONVERSIONS", heroCta:"Demander mon audit",
    lead:"Être trouvé par ceux qui vous cherchent déjà.",
    context:"Chaque jour, vos futurs clients tapent vos services dans Google. La vraie question : est-ce vous ou un concurrent qu'ils trouvent ? On travaille les deux moitiés de l'équation : grimper sur les recherches qui comptent — SEO technique, contenu, SEO local Luxembourg — puis transformer ce trafic en clients grâce à l'optimisation des conversions, au tracking et aux tests. Pas d'agitation : une méthode et des chiffres.",
    valueProp:"Être trouvé sur Google par ceux qui cherchent déjà vos services — et transformer ce trafic en clients.",
    proof:{"title":"Ce qui vous rassure","items":[{"h":"Basé à Luxembourg","p":"Un interlocuteur proche et réactif, qui connaît votre marché local."},{"h":"Sans engagement","p":"On commence par un échange offert. Vous avancez seulement si le courant passe."},{"h":"Transparent de A à Z","p":"Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."},{"h":"Audit offert et sans jargon","p":"On commence par un diagnostic clair et chiffré. Vous savez exactement par où commencer."}]},
    intro:"Le meilleur site du monde ne sert à rien si personne ne le trouve — et un flot de visiteurs ne vaut rien s'ils repartent. On travaille les deux : être visible sur Google, puis transformer chaque visite en client.",
    benefits:[
      { h:"Plus de visibilité", p:"On grimpe dans Google sur les recherches qui comptent pour votre activité." },
      { h:"Plus de conversions", p:"On transforme davantage de visiteurs sans dépenser plus en publicité." },
      { h:"Des décisions par la donnée", p:"Tracking fiable et tableaux de bord clairs : on sait ce qui marche." },
    ],
    includedTitle:"Ce qui est inclus",
    included:["Audit SEO & concurrence","SEO technique & Core Web Vitals","Contenu & mots-clés","SEO local (Luxembourg)","Optimisation des conversions (CRO)","Tracking, analytics & reporting"],
    method:{ title:"Notre méthode", steps:[
      { h:"Audit", p:"On analyse votre visibilité, votre site et vos concurrents. Un état des lieux clair et chiffré." },
      { h:"Optimisation", p:"On corrige la technique, le contenu et les pages clés pour grimper et mieux convertir." },
      { h:"Tests", p:"On teste, on compare, on garde ce qui marche. Les décisions se prennent sur la donnée." },
      { h:"Mesure", p:"Reporting mensuel, objectifs suivis, améliorations continues." },
    ]},
    faq:{ title:"Questions fréquentes", items:[
      { q:"En combien de temps voit-on des résultats en SEO ?", a:"Le SEO est un travail de fond : les premiers effets apparaissent souvent en 2 à 3 mois et s'amplifient ensuite. La conversion peut progresser dès les premières optimisations du site." },
      { q:"Faut-il refaire tout mon site ?", a:"Pas forcément. On part de l'existant : bien souvent, quelques optimisations ciblées suffisent avant d'envisager une refonte." },
      { q:"Travaillez-vous le SEO local à Luxembourg ?", a:"Oui. On optimise votre fiche Google, vos avis et votre présence locale pour ressortir sur les recherches « près de moi »." },
      { q:"L'audit est-il vraiment gratuit ?", a:"Oui, le premier audit SEO & conversion est offert et sans engagement — un diagnostic clair pour savoir par où commencer." },
    ]},
    cta:{ h:"On regarde votre visibilité ensemble ?", p:"Audit SEO & conversion offert — un état des lieux clair, sans jargon.", btn:"Demander mon audit" },
  },

  objectifs: {
    tag:"Vos objectifs", title:"DES OBJECTIFS BUSINESS, PAS DES LIVRABLES",
    intro:"Chaque action a une raison d'être et un résultat mesurable. On part de vos objectifs business, pas de nos habitudes — puis on aligne stratégie, création et diffusion pour y arriver.",
    blocks:[
      { h:"Notoriété", p:"Être vu, reconnu et mémorisé sur votre marché. On construit une présence qui s'imprime dans les têtes.", items:["Portée & impressions","Reconnaissance de marque","Couverture presse & sociale","Part de voix"] },
      { h:"Acquisition", p:"Attirer des prospects réellement qualifiés, pas juste du trafic. On transforme l'attention en opportunités.", items:["Trafic qualifié","Leads & demandes de devis","Coût par acquisition","Nouvelles audiences"] },
      { h:"Conversion", p:"Transformer l'intérêt en clients. On lève les freins et on facilite chaque étape jusqu'à l'achat.", items:["Taux de conversion","Parcours optimisés","Panier & chiffre d'affaires","Preuve sociale"] },
      { h:"Fidélisation", p:"Faire revenir et faire recommander. Une marque qu'on aime, c'est une marque qui dure.", items:["Rétention & réachat","Communauté engagée","Avis & recommandations","Valeur vie client"] },
    ],
    cta:{ h:"Quel est votre prochain objectif ?", p:"Dites-nous où vous voulez aller, on trace le chemin.", btn:"Fixer un objectif" },
  },
},

/* ============================== ENGLISH ============================== */
en: {
  services: {
    hub:true, tag:"Our services", title:"DIGITAL COMMUNICATION SERVICES",
    intro:"From strategy to performance, a full range to grow your brand in Luxembourg. Pick a service to learn more.",
    items:[
      { route:"strategie-de-marque", h:"Brand strategy", p:"Positioning, promise and tone of voice: the foundations of a strong brand." },
      { route:"identite-visuelle", h:"Visual identity & design", p:"Logo, guidelines and a visual world that make you recognisable." },
      { route:"creation-site-web", h:"Website creation", p:"Fast, beautiful sites built to convert." },
      { route:"reseaux-sociaux", h:"Social media & content", p:"Strategy, content and community management that build connection." },
      { route:"publicite-en-ligne", h:"Online advertising", p:"Google, Meta & TikTok run on performance." },
      { route:"video-motion", h:"Video & motion", p:"Reels, motion design and videos that stop the scroll." },
      { route:"seo-conversion", h:"SEO & Conversion", p:"Get found on Google and turn visits into customers." },
    ],
    cta:{ h:"Got a project in mind?", p:"Let's talk it over — in Luxembourg or by video call.", btn:"Start a project" },
  },

  "strategie-de-marque":{
    tag:"Service · Strategy", title:"BRAND STRATEGY", heroCta:"Build my brand",
    lead:"A brand isn't a logo. It's the reason people choose you.",
    context:"Before we talk colours or taglines, we answer three questions most companies skip: who are you really, who are you talking to, and why should someone pick you over a cheaper competitor? Without those answers, every euro of marketing leaks away. With them, everything gets simpler, more consistent and more profitable. We turn your intuition into a clear brand platform your team, your partners and your customers understand instantly.",
    valueProp:"A clear brand your customers understand, remember and choose — before they even compare prices.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"A method, not improvisation","p":"Structured workshops and concrete deliverables: your strategy holds up on paper and in reality."}]},
    intro:"A strong brand is built before it's designed. We clarify who you are, what you promise and why you should be chosen — for a consistent, memorable image.",
    benefits:[
      { h:"A clear brand", p:"Sharp positioning that sets you apart and truly speaks to your customers." },
      { h:"Consistency", p:"One message, one tone, everywhere: your brand becomes recognisable." },
      { h:"More value", p:"A strong brand justifies your prices and builds loyalty. We build an asset, not just a logo." },
    ],
    includedTitle:"What's included",
    included:["Brand & competitor audit","Positioning & promise","Brand platform","Tone of voice & key messages","Personas & targets","Brand guide"],
    method:{ title:"How we work", steps:[
      { h:"Immersion", p:"We dive into your market, your customers and your competitors." },
      { h:"Strategy", p:"We define positioning, promise and brand territory." },
      { h:"Activation", p:"We deliver a clear platform, ready to guide all your communication." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"Is it only for big companies?", a:"No. Brand strategy is even more useful for freelancers and SMEs: it makes you stand out from day one." },
      { q:"How is it different from a logo?", a:"The logo is the visible part. Strategy is the foundation: what you stand for, for whom and why. Everything else follows." },
      { q:"How long does it take?", a:"Usually 2 to 4 weeks depending on depth, workshops included." },
    ]},
    cta:{ h:"Ready to lay solid foundations?", p:"Let's build a clear, memorable brand together.", btn:"Start my strategy" },
  },

  "identite-visuelle":{
    tag:"Service · Design", title:"VISUAL IDENTITY & DESIGN", heroCta:"Create my identity",
    lead:"People recognise you before they even read you.",
    context:"Your visual identity is the first handshake — often the only one. In milliseconds, a visitor decides whether to trust you. We build a coherent visual world — logo, colours, type, patterns, imagery — that tells your positioning without a word, works everywhere from site to socials, and instantly moves you into a higher price bracket.",
    valueProp:"An identity recognised at a glance that inspires trust instantly.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"You own everything","p":"Source files, guidelines and variations are yours — no lock-in."}]},
    intro:"Logo, colours, typography, visual world: an identity that looks like you and is recognised at a glance.",
    benefits:[
      { h:"A memorable image", p:"A distinctive visual world that sticks and inspires trust." },
      { h:"Consistency", p:"All your materials speak with one visual voice, from web to print." },
      { h:"Professionalism", p:"A polished image that moves you up a league." },
    ],
    includedTitle:"What's included",
    included:["Logo & variations","Colour palette","Typography","Full brand guidelines","Social media templates","Print & web assets"],
    method:{ title:"How we work", steps:[
      { h:"Exploration", p:"Moodboards and creative directions from your strategy." },
      { h:"Creation", p:"We design your identity and refine it with you." },
      { h:"Delivery", p:"Full guidelines + source files, ready to use everywhere." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"Do I get the source files?", a:"Yes, you own your identity: vector files, guidelines and assets are yours." },
      { q:"Do you redo my existing logo?", a:"Full redesign or gentle evolution: we adapt to your needs and your history." },
      { q:"Is print included?", a:"Yes, we apply the identity across all your materials: cards, signage, packaging, social." },
    ]},
    cta:{ h:"Want an image that stands out?", p:"We craft an identity that's truly you.", btn:"Create my identity" },
  },

  "creation-site-web":{
    tag:"Service · Web", title:"WEBSITE CREATION", heroCta:"Launch my site",
    lead:"Your website is your best salesperson. It never sleeps.",
    context:"A beautiful site that doesn't convert is an expensive business card. We design every page as a journey: grab attention in three seconds, remove doubt, and guide to action — call, quote or purchase. Speed, mobile, SEO and tracking are built in from the start, not bolted on. The result: a fast, elegant and — above all — measurable site.",
    valueProp:"A fast site that works for you 24/7 and turns visitors into customers.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"Delivered, trained, autonomous","p":"You leave with a site you know how to run. We train you, we don't make you dependent."}]},
    intro:"Fast, beautiful sites built to convert. Showcase, e-commerce or landing page — your best salesperson, open 24/7.",
    benefits:[
      { h:"Fast & smooth", p:"A high-performance site that loads fast: better experience, better SEO." },
      { h:"Built to convert", p:"Every page guides the visitor to action: call, quote or purchase." },
      { h:"On every screen", p:"Flawless on mobile, tablet and desktop." },
    ],
    includedTitle:"What's included",
    included:["Custom design","Responsive development","Speed & SEO optimisation","Forms & contact","Hosting & go-live","Training & maintenance"],
    method:{ title:"How we work", steps:[
      { h:"Framing", p:"Goals, structure and content: we set the foundations." },
      { h:"Design & dev", p:"We design, build and test on every device." },
      { h:"Go-live", p:"Launch, monitoring and optimisation after release." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"Can I edit it myself?", a:"Yes, we build an easy-to-manage site and train you to run it." },
      { q:"Is SEO included?", a:"The technical SEO basics are built in from the start. Deeper SEO support is available as an option." },
      { q:"How long for a website?", a:"A showcase site usually takes 3 to 6 weeks depending on pages and features." },
    ]},
    cta:{ h:"A site worthy of your brand?", p:"We build a fast, beautiful, effective site.", btn:"Launch my site" },
  },

  "reseaux-sociaux":{
    tag:"Service · Social media", title:"SOCIAL MEDIA & CONTENT", heroCta:"Boost my socials",
    lead:"Posting is easy. Building connection is a craft.",
    context:"Social platforms don't reward volume — they reward consistency and relevance. We define an editorial line that looks like you, produce content built to stop the scroll, and run your community day to day. You keep control of the message; we take away the mental load and the blank-page syndrome. The goal: followers who become customers, not just numbers.",
    valueProp:"A presence that grows your community and sells for you — without eating your evenings.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"You stay in control","p":"You approve the line and the schedule. We save you time, not control."}]},
    intro:"A living presence that builds connection and grows your community. Strategy, content and community management, end to end.",
    benefits:[
      { h:"An engaged community", p:"Followers who actually interact, not just numbers." },
      { h:"A steady presence", p:"A publishing rhythm that's kept, without eating your evenings." },
      { h:"Content that grabs", p:"Photo, video, motion: formats made to stop the scroll." },
    ],
    includedTitle:"What's included",
    included:["Editorial strategy","Publishing calendar","Content creation (photo/video)","Community management","Short-form & motion","Monthly reporting"],
    method:{ title:"How we work", steps:[
      { h:"Strategy", p:"We define editorial line, platforms and goals." },
      { h:"Production", p:"We create and schedule content that looks like you." },
      { h:"Animation", p:"We post, interact, analyse and adjust." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"Which networks do you work on?", a:"Instagram, LinkedIn, TikTok, Facebook… we pick the ones where your audience actually is." },
      { q:"Do you create content or just post it?", a:"Both: from creation (photo, video, visuals) to publishing and community animation." },
      { q:"Do I stay in control?", a:"Always. You approve the line and the plan; we save you time, not control." },
    ]},
    cta:{ h:"Ready to bring your socials alive?", p:"Let's grow your community.", btn:"Boost my socials" },
  },

  "publicite-en-ligne":{
    tag:"Service · Advertising", title:"ONLINE ADVERTISING", heroCta:"Launch my campaigns",
    lead:"The right message, to the right person, at the right moment.",
    context:"Online advertising is the only lever that brings customers from day one — if it's finely steered. We target your audience precisely on Google, Meta and TikTok, craft ads people want to click, and optimise continuously: more budget on what pays, cut the rest. Every euro is tracked to conversion. No smoke, just results.",
    valueProp:"The right customers, from day one. Every euro invested, targeted and measured.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"Every euro is measured","p":"Conversion tracking and clear reporting: we invest where it pays, we cut the rest."}]},
    intro:"The right people, at the right moment, in the right place. Google, Meta and TikTok campaigns run on performance, budget under control.",
    benefits:[
      { h:"Fast results", p:"Unlike SEO, advertising drives traffic and leads from launch." },
      { h:"Controlled budget", p:"We optimise every euro spent and cut what doesn't work." },
      { h:"Real outcomes", p:"Calls, quotes, sales: we steer on what matters to you." },
    ],
    includedTitle:"What's included",
    included:["Google Ads (Search & Display)","Meta Ads (Instagram/Facebook)","TikTok Ads","Targeting & audiences","Ad creative","Conversion tracking & reporting"],
    method:{ title:"How we work", steps:[
      { h:"Strategy", p:"Goals, audiences, budget and messages." },
      { h:"Launch", p:"We build the ads and put campaigns live." },
      { h:"Optimisation", p:"We test, adjust and scale what performs." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"What budget do I need?", a:"We adapt to your situation. We set a realistic starting budget together, then scale what's profitable." },
      { q:"How long until results?", a:"First data comes within days; optimisation makes campaigns more and more profitable over the weeks." },
      { q:"Is the ad budget included?", a:"No, the media budget paid to platforms is separate from our management. We advise you on how to invest it best." },
    ]},
    cta:{ h:"Want fast results?", p:"Let's launch profitable campaigns.", btn:"Launch my campaigns" },
  },

  "video-motion":{
    tag:"Service · Video", title:"VIDEO & MOTION DESIGN", heroCta:"Create my video",
    lead:"Three seconds to convince. We make them unforgettable.",
    context:"Video is the most consumed and most shared format — and by far the most effective at creating emotion. Reels, motion design, brand films: we turn your ideas into content that stops the thumb, explains fast and begs to be shared. From a single shoot we cut a series of platform-ready formats. Maximum impact, minimum effort on your side.",
    valueProp:"Videos that stop the scroll and land your message in five seconds.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"One shoot, several assets","p":"We get the most from each production: many formats, minimal effort on your side."}]},
    intro:"Reels, motion design, brand videos: content that stops the scroll and gets your message across in seconds.",
    benefits:[
      { h:"It grabs attention", p:"Video is the most engaging format: we stop the scroll and hold the eye." },
      { h:"It explains fast", p:"A complex idea becomes crystal clear in a few seconds of motion." },
      { h:"It gets shared", p:"Short formats made to be seen, liked and reshared." },
    ],
    includedTitle:"What's included",
    included:["Reels & short-form","Motion design & animation","Brand video","Branding & subtitles","Filming & editing","Multi-platform versions"],
    method:{ title:"How we work", steps:[
      { h:"Concept", p:"We define the message, tone and format around your goals." },
      { h:"Production", p:"Filming, editing and motion: we bring the idea to life." },
      { h:"Distribution", p:"Formats adapted to each platform, ready to publish." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"Do you film or just edit?", a:"Both: capture, editing, motion design and branding. We adapt to your means and your need." },
      { q:"Does it work for social?", a:"Yes, we deliver each video in the right formats (9:16, 1:1, 16:9) for Instagram, TikTok, LinkedIn and YouTube." },
      { q:"Do I need lots of content?", a:"We can start from a single shoot and cut several short formats from it — maximum content, minimum effort." },
    ]},
    cta:{ h:"Want content that grabs?", p:"We craft videos that make the difference.", btn:"Create my video" },
  },

  "seo-conversion":{
    tag:"Service · SEO & Conversion", title:"SEO & CONVERSION OPTIMISATION", heroCta:"Request my audit",
    lead:"Get found by the people already looking for you.",
    context:"Every day, your future customers type your services into Google. The real question: do they find you, or a competitor? We work both halves of the equation: climbing for the searches that matter — technical SEO, content, local SEO in Luxembourg — then turning that traffic into customers through conversion optimisation, tracking and testing. No noise: a method and numbers.",
    valueProp:"Get found on Google by people already looking for your services — and turn that traffic into customers.",
    proof:{"title":"Why you can trust us","items":[{"h":"Based in Luxembourg","p":"A close, responsive partner who knows your local market."},{"h":"No commitment","p":"We start with a free chat. You only move forward if it clicks."},{"h":"Transparent throughout","p":"Clear quote, announced timelines, no surprises: you always know where the project stands."},{"h":"Free audit, no jargon","p":"We start with a clear, quantified diagnosis. You know exactly where to begin."}]},
    intro:"The best site in the world is useless if no one finds it — and a flood of visitors is worthless if they leave. We work on both: being visible on Google, then turning every visit into a customer.",
    benefits:[
      { h:"More visibility", p:"We climb on Google for the searches that matter to your business." },
      { h:"More conversions", p:"We convert more visitors without spending more on ads." },
      { h:"Data-driven decisions", p:"Reliable tracking and clear dashboards: we know what works." },
    ],
    includedTitle:"What's included",
    included:["SEO & competitor audit","Technical SEO & Core Web Vitals","Content & keywords","Local SEO (Luxembourg)","Conversion optimisation (CRO)","Tracking, analytics & reporting"],
    method:{ title:"Our method", steps:[
      { h:"Audit", p:"We analyse your visibility, your site and your competitors. A clear, quantified picture." },
      { h:"Optimisation", p:"We fix the technical side, content and key pages to climb and convert better." },
      { h:"Testing", p:"We test, compare and keep what works. Decisions are made on data." },
      { h:"Measure", p:"Monthly reporting, tracked goals, continuous improvement." },
    ]},
    faq:{ title:"Frequently asked questions", items:[
      { q:"How long until SEO results?", a:"SEO is long-term work: first effects often appear within 2 to 3 months and grow from there. Conversion can improve from the very first optimisations." },
      { q:"Do I need to rebuild my whole site?", a:"Not necessarily. We start from what you have: often a few targeted optimisations are enough before a redesign." },
      { q:"Do you handle local SEO in Luxembourg?", a:"Yes. We optimise your Google profile, your reviews and your local presence to show up on “near me” searches." },
      { q:"Is the audit really free?", a:"Yes, the first SEO & conversion audit is free and with no commitment — a clear diagnosis of where to start." },
    ]},
    cta:{ h:"Shall we review your visibility together?", p:"Free SEO & conversion audit — a clear picture, no jargon.", btn:"Request my audit" },
  },

  objectifs:{
    tag:"Your goals", title:"BUSINESS GOALS, NOT DELIVERABLES",
    intro:"Every action has a reason and a measurable result. We start from your business goals, not our habits — then align strategy, creative and distribution to get there.",
    blocks:[
      { h:"Awareness", p:"Be seen, recognised and remembered in your market. We build a presence that prints itself in minds.", items:["Reach & impressions","Brand recognition","Press & social coverage","Share of voice"] },
      { h:"Acquisition", p:"Attract genuinely qualified prospects, not just traffic. We turn attention into opportunities.", items:["Qualified traffic","Leads & quote requests","Cost per acquisition","New audiences"] },
      { h:"Conversion", p:"Turn interest into customers. We remove friction and ease every step to purchase.", items:["Conversion rate","Optimised journeys","Basket & revenue","Social proof"] },
      { h:"Loyalty", p:"Bring people back and get them recommending. A brand people love is a brand that lasts.", items:["Retention & repeat","Engaged community","Reviews & referrals","Customer lifetime value"] },
    ],
    cta:{ h:"What's your next goal?", p:"Tell us where you want to go, we'll map the way.", btn:"Set a goal" },
  },
},

/* ============================== DEUTSCH ============================== */
de: {
  services:{
    hub:true, tag:"Unsere Leistungen", title:"DIGITALE KOMMUNIKATIONS­LEISTUNGEN",
    intro:"Von der Strategie bis zur Performance — ein komplettes Angebot, um Ihre Marke in Luxemburg wachsen zu lassen. Wählen Sie eine Leistung, um mehr zu erfahren.",
    items:[
      { route:"strategie-de-marque", h:"Markenstrategie", p:"Positionierung, Versprechen und Tonalität: das Fundament einer starken Marke." },
      { route:"identite-visuelle", h:"Visuelle Identität & Design", p:"Logo, Richtlinien und eine visuelle Welt, die Sie unverwechselbar machen." },
      { route:"creation-site-web", h:"Website-Erstellung", p:"Schnelle, schöne Websites, die konvertieren." },
      { route:"reseaux-sociaux", h:"Social Media & Content", p:"Strategie, Content und Community Management, die Verbindung schaffen." },
      { route:"publicite-en-ligne", h:"Online-Werbung", p:"Google, Meta & TikTok performanceorientiert." },
      { route:"video-motion", h:"Video & Motion", p:"Reels, Motion Design und Videos, die den Daumen stoppen." },
      { route:"seo-conversion", h:"SEO & Conversion", p:"Bei Google gefunden werden und Besuche in Kunden verwandeln." },
    ],
    cta:{ h:"Ein Projekt im Kopf?", p:"Reden wir bei einem Kaffee darüber — in Luxemburg oder per Video.", btn:"Projekt starten" },
  },

  "strategie-de-marque":{
    tag:"Leistung · Strategie", title:"MARKENSTRATEGIE", heroCta:"Marke aufbauen",
    lead:"Eine Marke ist kein Logo. Sie ist der Grund, warum man Sie wählt.",
    context:"Bevor wir über Farben oder Slogans sprechen, beantworten wir drei Fragen, die die meisten Unternehmen überspringen: Wer sind Sie wirklich, mit wem sprechen Sie, und warum sollte man Sie einem günstigeren Wettbewerber vorziehen? Ohne diese Antworten versickert jeder Marketing-Euro. Mit ihnen wird alles einfacher, konsistenter und profitabler. Wir verwandeln Ihre Intuition in eine klare Markenplattform, die Ihr Team, Ihre Partner und Ihre Kunden sofort verstehen.",
    valueProp:"Eine klare Marke, die Ihre Kunden verstehen, sich merken und wählen — noch bevor sie Preise vergleichen.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Methode statt Improvisation","p":"Strukturierte Workshops und konkrete Ergebnisse: Ihre Strategie hält auf dem Papier wie in der Realität."}]},
    intro:"Eine starke Marke wird aufgebaut, bevor sie gestaltet wird. Wir klären, wer Sie sind, was Sie versprechen und warum man Sie wählen sollte — für ein konsistentes, einprägsames Bild.",
    benefits:[
      { h:"Eine klare Marke", p:"Eine scharfe Positionierung, die Sie abhebt und Ihre Kunden wirklich anspricht." },
      { h:"Konsistenz", p:"Eine Botschaft, ein Ton, überall: Ihre Marke wird wiedererkennbar." },
      { h:"Mehr Wert", p:"Eine starke Marke rechtfertigt Ihre Preise und bindet. Wir bauen ein Asset, nicht nur ein Logo." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Marken- & Wettbewerbsaudit","Positionierung & Versprechen","Markenplattform","Tonalität & Kernbotschaften","Personas & Zielgruppen","Markenleitfaden"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Immersion", p:"Wir tauchen in Ihren Markt, Ihre Kunden und Ihre Wettbewerber ein." },
      { h:"Strategie", p:"Wir definieren Positionierung, Versprechen und Markenterritorium." },
      { h:"Aktivierung", p:"Wir liefern eine klare Plattform, bereit für Ihre gesamte Kommunikation." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Nur für große Unternehmen?", a:"Nein. Markenstrategie ist für Selbstständige und KMU besonders wertvoll: Sie heben sich von Anfang an ab." },
      { q:"Was ist der Unterschied zum Logo?", a:"Das Logo ist der sichtbare Teil. Die Strategie ist das Fundament: wofür Sie stehen, für wen und warum. Alles andere folgt daraus." },
      { q:"Wie lange dauert es?", a:"In der Regel 2 bis 4 Wochen je nach Tiefe, Workshops inklusive." },
    ]},
    cta:{ h:"Bereit für ein solides Fundament?", p:"Wir bauen gemeinsam eine klare, einprägsame Marke.", btn:"Strategie starten" },
  },

  "identite-visuelle":{
    tag:"Leistung · Design", title:"VISUELLE IDENTITÄT & DESIGN", heroCta:"Identität erstellen",
    lead:"Man erkennt Sie, bevor man Sie liest.",
    context:"Ihre visuelle Identität ist der erste Händedruck — oft der einzige. In Millisekunden entscheidet ein Besucher, ob er Ihnen vertraut. Wir bauen eine kohärente visuelle Welt — Logo, Farben, Typografie, Muster, Bildsprache — die Ihre Positionierung ohne ein Wort erzählt, überall funktioniert und Sie sofort in eine höhere Preisklasse hebt.",
    valueProp:"Eine Identität, die man auf den ersten Blick erkennt und die sofort Vertrauen schafft.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Ihnen gehört alles","p":"Quelldateien, Design und Varianten gehören Ihnen — keine Abhängigkeit."}]},
    intro:"Logo, Farben, Typografie, visuelle Welt: eine Identität, die zu Ihnen passt und auf den ersten Blick erkannt wird.",
    benefits:[
      { h:"Ein einprägsames Bild", p:"Eine unverwechselbare visuelle Welt, die bleibt und Vertrauen schafft." },
      { h:"Konsistenz", p:"Alle Ihre Materialien sprechen mit einer visuellen Stimme, von Web bis Print." },
      { h:"Professionalität", p:"Ein gepflegtes Bild, das Sie eine Liga höher spielen lässt." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Logo & Varianten","Farbpalette","Typografie","Vollständiges Corporate Design","Social-Media-Vorlagen","Print- & Web-Assets"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Exploration", p:"Moodboards und kreative Richtungen aus Ihrer Strategie." },
      { h:"Kreation", p:"Wir gestalten Ihre Identität und verfeinern sie mit Ihnen." },
      { h:"Lieferung", p:"Komplettes Design + Quelldateien, überall einsatzbereit." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Bekomme ich die Quelldateien?", a:"Ja, Ihre Identität gehört Ihnen: Vektordateien, Design und Varianten sind Ihr Eigentum." },
      { q:"Überarbeiten Sie mein bestehendes Logo?", a:"Komplettes Redesign oder sanfte Weiterentwicklung: Wir passen uns Ihrem Bedarf und Ihrer Geschichte an." },
      { q:"Ist Print enthalten?", a:"Ja, wir übertragen die Identität auf alle Materialien: Karten, Beschilderung, Verpackung, Social." },
    ]},
    cta:{ h:"Lust auf ein Bild, das auffällt?", p:"Wir gestalten eine Identität, die zu Ihnen passt.", btn:"Identität erstellen" },
  },

  "creation-site-web":{
    tag:"Leistung · Web", title:"WEBSITE-ERSTELLUNG", heroCta:"Website starten",
    lead:"Ihre Website ist Ihr bester Verkäufer. Sie schläft nie.",
    context:"Eine schöne Website, die nicht konvertiert, ist eine teure Visitenkarte. Wir gestalten jede Seite als Weg: in drei Sekunden Aufmerksamkeit gewinnen, Zweifel beseitigen und zur Aktion führen — Anruf, Angebot oder Kauf. Geschwindigkeit, Mobile, SEO und Tracking sind von Anfang an integriert, nicht nachträglich. Das Ergebnis: eine schnelle, elegante und vor allem messbare Website.",
    valueProp:"Eine schnelle Website, die rund um die Uhr für Sie arbeitet und Besucher in Kunden verwandelt.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Geliefert, geschult, autonom","p":"Sie gehen mit einer Website, die Sie bedienen können. Wir schulen Sie, statt Sie abhängig zu machen."}]},
    intro:"Schnelle, schöne Websites, die konvertieren. Schaufenster, E-Commerce oder Landingpage — Ihr bester Verkäufer, rund um die Uhr geöffnet.",
    benefits:[
      { h:"Schnell & flüssig", p:"Eine performante Website, die schnell lädt: bessere Erfahrung, besseres SEO." },
      { h:"Für Conversion gebaut", p:"Jede Seite führt den Besucher zur Aktion: Anruf, Angebot oder Kauf." },
      { h:"Auf jedem Bildschirm", p:"Makellos auf Mobil, Tablet und Desktop." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Maßgeschneidertes Design","Responsive Entwicklung","Speed- & SEO-Optimierung","Formulare & Kontakt","Hosting & Go-live","Schulung & Wartung"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Rahmen", p:"Ziele, Struktur und Inhalte: Wir legen die Basis." },
      { h:"Design & Dev", p:"Wir gestalten, entwickeln und testen auf jedem Gerät." },
      { h:"Go-live", p:"Launch, Monitoring und Optimierung nach dem Release." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Kann ich sie selbst bearbeiten?", a:"Ja, wir bauen eine leicht zu verwaltende Website und schulen Sie in der Bedienung." },
      { q:"Ist SEO enthalten?", a:"Die technischen SEO-Grundlagen sind von Anfang an integriert. Tiefere SEO-Betreuung ist als Option möglich." },
      { q:"Wie lange dauert eine Website?", a:"Eine Schaufenster-Website dauert meist 3 bis 6 Wochen, je nach Seiten und Funktionen." },
    ]},
    cta:{ h:"Eine Website, die Ihrer Marke gerecht wird?", p:"Wir bauen eine schnelle, schöne, effektive Website.", btn:"Website starten" },
  },

  "reseaux-sociaux":{
    tag:"Leistung · Social Media", title:"SOCIAL MEDIA & CONTENT", heroCta:"Social pushen",
    lead:"Posten ist leicht. Verbindung schaffen ist Handwerk.",
    context:"Soziale Netzwerke belohnen nicht Menge, sondern Regelmäßigkeit und Relevanz. Wir definieren eine Redaktionslinie, die zu Ihnen passt, produzieren Inhalte, die das Scrollen stoppen, und betreuen Ihre Community täglich. Sie behalten die Kontrolle über die Botschaft; wir nehmen Ihnen die mentale Last und das Blank-Page-Syndrom ab. Ziel: Follower, die zu Kunden werden, nicht nur Zahlen.",
    valueProp:"Eine Präsenz, die Ihre Community wachsen lässt und für Sie verkauft — ohne Ihre Abende zu kosten.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Sie behalten die Kontrolle","p":"Sie geben Linie und Plan frei. Wir sparen Ihnen Zeit, nicht Kontrolle."}]},
    intro:"Eine lebendige Präsenz, die Verbindung schafft und Ihre Community wachsen lässt. Strategie, Content und Community Management, von A bis Z.",
    benefits:[
      { h:"Eine engagierte Community", p:"Follower, die wirklich interagieren, nicht nur Zahlen." },
      { h:"Eine regelmäßige Präsenz", p:"Ein gehaltener Publikationsrhythmus, ohne Ihre Abende zu kosten." },
      { h:"Content, der fesselt", p:"Foto, Video, Motion: Formate, die das Scrollen stoppen." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Redaktionsstrategie","Publikationskalender","Content-Erstellung (Foto/Video)","Community Management","Kurzformate & Motion","Monatliches Reporting"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Strategie", p:"Wir definieren Redaktionslinie, Plattformen und Ziele." },
      { h:"Produktion", p:"Wir erstellen und planen Content, der zu Ihnen passt." },
      { h:"Betreuung", p:"Wir posten, interagieren, analysieren und justieren." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Auf welchen Netzwerken arbeiten Sie?", a:"Instagram, LinkedIn, TikTok, Facebook… wir wählen die, wo Ihre Zielgruppe wirklich ist." },
      { q:"Erstellen Sie Content oder posten Sie ihn nur?", a:"Beides: von der Erstellung (Foto, Video, Visuals) bis zum Posten und der Community-Betreuung." },
      { q:"Behalte ich die Kontrolle?", a:"Immer. Sie geben Linie und Plan frei; wir sparen Ihnen Zeit, nicht Kontrolle." },
    ]},
    cta:{ h:"Bereit, Ihre Kanäle zu beleben?", p:"Wir lassen Ihre Community wachsen.", btn:"Social pushen" },
  },

  "publicite-en-ligne":{
    tag:"Leistung · Werbung", title:"ONLINE-WERBUNG", heroCta:"Kampagnen starten",
    lead:"Die richtige Botschaft, an die richtige Person, im richtigen Moment.",
    context:"Online-Werbung ist der einzige Hebel, der ab dem ersten Tag Kunden bringt — wenn er fein gesteuert wird. Wir targetieren Ihre Zielgruppe präzise auf Google, Meta und TikTok, gestalten Anzeigen, die man klicken will, und optimieren laufend: mehr Budget auf das, was zahlt, den Rest stoppen. Jeder Euro wird bis zur Conversion verfolgt. Kein Blendwerk, echte Ergebnisse.",
    valueProp:"Die richtigen Kunden, ab dem Start. Jeder investierte Euro, gezielt und messbar.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Jeder Euro ist messbar","p":"Conversion-Tracking und klares Reporting: Wir investieren, wo es sich lohnt, und stoppen den Rest."}]},
    intro:"Die richtigen Menschen, zum richtigen Zeitpunkt, am richtigen Ort. Google-, Meta- und TikTok-Kampagnen performanceorientiert, Budget im Griff.",
    benefits:[
      { h:"Schnelle Ergebnisse", p:"Anders als SEO bringt Werbung ab dem Start Traffic und Leads." },
      { h:"Kontrolliertes Budget", p:"Wir optimieren jeden ausgegebenen Euro und stoppen, was nicht funktioniert." },
      { h:"Konkretes", p:"Anrufe, Angebote, Verkäufe: Wir steuern nach dem, was zählt." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Google Ads (Search & Display)","Meta Ads (Instagram/Facebook)","TikTok Ads","Targeting & Zielgruppen","Werbekreation","Conversion-Tracking & Reporting"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Strategie", p:"Ziele, Zielgruppen, Budget und Botschaften." },
      { h:"Launch", p:"Wir erstellen die Anzeigen und schalten die Kampagnen live." },
      { h:"Optimierung", p:"Wir testen, justieren und skalieren, was performt." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Welches Budget brauche ich?", a:"Wir passen uns Ihrer Situation an. Wir legen gemeinsam ein realistisches Startbudget fest und skalieren dann das Rentable." },
      { q:"Wie lange bis zu Ergebnissen?", a:"Erste Daten kommen in wenigen Tagen; die Optimierung macht die Kampagnen über die Wochen immer rentabler." },
      { q:"Ist das Werbebudget enthalten?", a:"Nein, das an die Plattformen gezahlte Mediabudget ist von unserem Management getrennt. Wir beraten Sie zur besten Investition." },
    ]},
    cta:{ h:"Lust auf schnelle Ergebnisse?", p:"Wir starten rentable Kampagnen.", btn:"Kampagnen starten" },
  },

  "video-motion":{
    tag:"Leistung · Video", title:"VIDEO & MOTION DESIGN", heroCta:"Video erstellen",
    lead:"Drei Sekunden, um zu überzeugen. Wir machen sie unvergesslich.",
    context:"Video ist das meistgenutzte und meistgeteilte Format — und mit Abstand das wirksamste, um Emotion zu erzeugen. Reels, Motion Design, Markenvideos: Wir verwandeln Ihre Ideen in Inhalte, die den Daumen stoppen, schnell erklären und zum Teilen einladen. Aus einem einzigen Dreh schneiden wir eine Serie plattformgerechter Formate. Maximale Wirkung, minimaler Aufwand für Sie.",
    valueProp:"Videos, die den Daumen stoppen und Ihre Botschaft in fünf Sekunden vermitteln.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Ein Dreh, mehrere Inhalte","p":"Wir holen das Maximum aus jeder Produktion: viele Formate, minimaler Aufwand für Sie."}]},
    intro:"Reels, Motion Design, Markenvideos: Content, der den Daumen stoppt und Ihre Botschaft in Sekunden vermittelt.",
    benefits:[
      { h:"Es fesselt", p:"Video ist das ansprechendste Format: Wir stoppen das Scrollen und halten den Blick." },
      { h:"Es erklärt schnell", p:"Eine komplexe Idee wird in wenigen Sekunden Motion glasklar." },
      { h:"Es wird geteilt", p:"Kurzformate, gemacht, um gesehen, geliked und geteilt zu werden." },
    ],
    includedTitle:"Was enthalten ist",
    included:["Reels & Kurzformate","Motion Design & Animation","Markenvideo","Branding & Untertitel","Dreh & Schnitt","Multi-Plattform-Versionen"],
    method:{ title:"So arbeiten wir", steps:[
      { h:"Konzept", p:"Wir definieren Botschaft, Ton und Format nach Ihren Zielen." },
      { h:"Produktion", p:"Dreh, Schnitt und Motion: Wir erwecken die Idee zum Leben." },
      { h:"Distribution", p:"An jede Plattform angepasste Formate, bereit zur Veröffentlichung." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Filmen Sie oder nur Schnitt?", a:"Beides: Aufnahme, Schnitt, Motion Design und Branding. Wir passen uns Ihren Mitteln und Ihrem Bedarf an." },
      { q:"Funktioniert das für Social?", a:"Ja, wir liefern jedes Video in den richtigen Formaten (9:16, 1:1, 16:9) für Instagram, TikTok, LinkedIn und YouTube." },
      { q:"Brauche ich viel Content?", a:"Wir können aus einem einzigen Dreh mehrere Kurzformate schneiden — maximaler Content, minimaler Aufwand." },
    ]},
    cta:{ h:"Lust auf Content, der fesselt?", p:"Wir gestalten Videos, die den Unterschied machen.", btn:"Video erstellen" },
  },

  "seo-conversion":{
    tag:"Leistung · SEO & Conversion", title:"SEO & CONVERSION-OPTIMIERUNG", heroCta:"Audit anfordern",
    lead:"Von denen gefunden werden, die Sie bereits suchen.",
    context:"Jeden Tag tippen Ihre künftigen Kunden Ihre Leistungen bei Google ein. Die eigentliche Frage: Finden sie Sie oder einen Wettbewerber? Wir bearbeiten beide Hälften der Gleichung: für die relevanten Suchen aufsteigen — technisches SEO, Content, lokales SEO Luxemburg — und diesen Traffic durch Conversion-Optimierung, Tracking und Tests in Kunden verwandeln. Kein Lärm: eine Methode und Zahlen.",
    valueProp:"Bei Google von denen gefunden werden, die bereits suchen — und diesen Traffic in Kunden verwandeln.",
    proof:{"title":"Was Sie beruhigt","items":[{"h":"In Luxemburg ansässig","p":"Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."},{"h":"Ohne Verpflichtung","p":"Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."},{"h":"Durchgehend transparent","p":"Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."},{"h":"Kostenloses Audit, ohne Fachchinesisch","p":"Wir starten mit einer klaren, bezifferten Diagnose. Sie wissen genau, wo Sie anfangen."}]},
    intro:"Die beste Website der Welt nützt nichts, wenn niemand sie findet — und eine Flut an Besuchern ist wertlos, wenn sie wieder geht. Wir arbeiten an beidem: bei Google sichtbar sein und jeden Besuch in einen Kunden verwandeln.",
    benefits:[
      { h:"Mehr Sichtbarkeit", p:"Wir steigen bei Google für die Suchen, die für Ihr Geschäft zählen." },
      { h:"Mehr Conversions", p:"Wir konvertieren mehr Besucher, ohne mehr für Werbung auszugeben." },
      { h:"Datenbasierte Entscheidungen", p:"Zuverlässiges Tracking und klare Dashboards: Wir wissen, was funktioniert." },
    ],
    includedTitle:"Was enthalten ist",
    included:["SEO- & Wettbewerbsaudit","Technisches SEO & Core Web Vitals","Content & Keywords","Lokales SEO (Luxemburg)","Conversion-Optimierung (CRO)","Tracking, Analytics & Reporting"],
    method:{ title:"Unsere Methode", steps:[
      { h:"Audit", p:"Wir analysieren Ihre Sichtbarkeit, Ihre Website und Ihre Wettbewerber. Ein klares, beziffertes Bild." },
      { h:"Optimierung", p:"Wir verbessern Technik, Content und Schlüsselseiten, um zu steigen und besser zu konvertieren." },
      { h:"Tests", p:"Wir testen, vergleichen und behalten, was funktioniert. Entscheidungen fallen datenbasiert." },
      { h:"Messen", p:"Monatliches Reporting, verfolgte Ziele, laufende Verbesserung." },
    ]},
    faq:{ title:"Häufige Fragen", items:[
      { q:"Wie lange bis zu SEO-Ergebnissen?", a:"SEO ist Langzeitarbeit: Erste Effekte zeigen sich oft nach 2 bis 3 Monaten und verstärken sich danach. Conversion kann sich schon mit den ersten Optimierungen verbessern." },
      { q:"Muss ich meine ganze Website neu bauen?", a:"Nicht unbedingt. Wir gehen vom Bestehenden aus: Oft genügen einige gezielte Optimierungen vor einem Relaunch." },
      { q:"Machen Sie lokales SEO in Luxemburg?", a:"Ja. Wir optimieren Ihr Google-Profil, Ihre Bewertungen und Ihre lokale Präsenz für „in meiner Nähe“-Suchen." },
      { q:"Ist das Audit wirklich kostenlos?", a:"Ja, das erste SEO- & Conversion-Audit ist kostenlos und unverbindlich — eine klare Diagnose, wo man anfängt." },
    ]},
    cta:{ h:"Schauen wir uns Ihre Sichtbarkeit gemeinsam an?", p:"Kostenloses SEO- & Conversion-Audit — ein klares Bild, ohne Fachchinesisch.", btn:"Audit anfordern" },
  },

  objectifs:{
    tag:"Ihre Ziele", title:"GESCHÄFTSZIELE STATT LIEFERUNGEN",
    intro:"Jede Maßnahme hat einen Grund und ein messbares Ergebnis. Wir gehen von Ihren Geschäftszielen aus, nicht von unseren Gewohnheiten — und richten Strategie, Kreation und Distribution danach aus.",
    blocks:[
      { h:"Bekanntheit", p:"Gesehen, erkannt und erinnert werden in Ihrem Markt. Wir bauen eine Präsenz, die sich einprägt.", items:["Reichweite & Impressionen","Markenbekanntheit","Presse- & Social-Reichweite","Share of Voice"] },
      { h:"Akquise", p:"Wirklich qualifizierte Interessenten gewinnen, nicht nur Traffic. Wir verwandeln Aufmerksamkeit in Chancen.", items:["Qualifizierter Traffic","Leads & Angebotsanfragen","Kosten pro Akquise","Neue Zielgruppen"] },
      { h:"Conversion", p:"Interesse in Kunden verwandeln. Wir beseitigen Hürden und erleichtern jeden Schritt bis zum Kauf.", items:["Conversion-Rate","Optimierte Journeys","Warenkorb & Umsatz","Social Proof"] },
      { h:"Kundenbindung", p:"Wiederkommen und weiterempfehlen lassen. Eine geliebte Marke ist eine Marke, die bleibt.", items:["Retention & Wiederkauf","Engagierte Community","Bewertungen & Empfehlungen","Customer Lifetime Value"] },
    ],
    cta:{ h:"Was ist Ihr nächstes Ziel?", p:"Sagen Sie uns, wohin Sie wollen — wir zeichnen den Weg.", btn:"Ziel festlegen" },
  },
},

};
