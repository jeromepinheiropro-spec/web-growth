/* ============================================================
   PAGES — trilingue (FR / EN / DE)
   Hub : services + une page par service (SEO + conversion)
   Services : developpement-logiciel · application-mobile · creation-site-web · design-ui-ux · identite-visuelle · seo-conversion · conseil-it
   + objectifs
   (généré — éditer les sources de contenu puis régénérer)
   ============================================================ */

export const SERVICE_ROUTES = [
  "developpement-logiciel",
  "application-mobile",
  "creation-site-web",
  "design-ui-ux",
  "identite-visuelle",
  "seo-conversion",
  "conseil-it"
];

export const SERVICE_LABELS = {
  "fr": {
    "developpement-logiciel": "Développement logiciel",
    "application-mobile": "Application mobile",
    "creation-site-web": "Création de site web",
    "design-ui-ux": "Design UI/UX & Branding",
    "identite-visuelle": "Identité visuelle & design",
    "seo-conversion": "SEO & Conversion",
    "conseil-it": "Conseil IT & Stratégie"
  },
  "en": {
    "developpement-logiciel": "Custom software",
    "application-mobile": "Mobile apps",
    "creation-site-web": "Website creation",
    "design-ui-ux": "UI/UX & Branding",
    "identite-visuelle": "Visual identity & design",
    "seo-conversion": "SEO & Conversion",
    "conseil-it": "IT consulting & strategy"
  },
  "de": {
    "developpement-logiciel": "Softwareentwicklung",
    "application-mobile": "Mobile Apps",
    "creation-site-web": "Website-Erstellung",
    "design-ui-ux": "UI/UX & Branding",
    "identite-visuelle": "Visuelle Identität & Design",
    "seo-conversion": "SEO & Conversion",
    "conseil-it": "IT-Beratung & Strategie"
  }
};

export const PAGES = {
  "fr": {
    "services": {
      "hub": true,
      "tag": "Nos services",
      "title": "SERVICES DIGITAUX & DÉVELOPPEMENT",
      "intro": "Du logiciel sur mesure au design, du web au conseil : une gamme complète pour concevoir, construire et faire grandir vos produits digitaux au Luxembourg. Choisissez un service pour tout savoir.",
      "items": [
        {
          "route": "developpement-logiciel",
          "h": "Développement logiciel sur mesure",
          "p": "Plateformes, back-offices et API taillés pour la performance et l'échelle."
        },
        {
          "route": "application-mobile",
          "h": "Développement d'application mobile",
          "p": "Apps iOS & Android, natives ou cross-platform, fluides et fiables."
        },
        {
          "route": "creation-site-web",
          "h": "Création de site web",
          "p": "Des sites rapides, beaux et pensés pour convertir."
        },
        {
          "route": "design-ui-ux",
          "h": "Design UI/UX & Branding",
          "p": "Interfaces claires, design systems durables, du logo au produit."
        },
        {
          "route": "identite-visuelle",
          "h": "Identité visuelle & design",
          "p": "Logo, charte et univers graphique qui vous rendent reconnaissable."
        },
        {
          "route": "seo-conversion",
          "h": "SEO & Conversion",
          "p": "Être trouvé sur Google et transformer les visites en clients."
        },
        {
          "route": "conseil-it",
          "h": "Conseil IT & Stratégie digitale",
          "p": "Audit, architecture et feuille de route pour investir dans ce qui compte."
        }
      ],
      "cta": {
        "h": "Un projet en tête ?",
        "p": "Parlons-en autour d'un café — sur place à Luxembourg ou en visio.",
        "btn": "Démarrer un projet"
      }
    },
    "developpement-logiciel": {
      "tag": "Service · Développement",
      "title": "DÉVELOPPEMENT LOGICIEL SUR MESURE",
      "heroCta": "Développer ma solution",
      "lead": "Le logiciel qui épouse votre métier, pas l'inverse.",
      "context": "Les outils standards vous forcent à plier vos process à leurs limites. Un logiciel sur mesure fait l'inverse : il colle exactement à votre façon de travailler, automatise ce qui vous coûte du temps et grandit avec vous. On conçoit des plateformes web, des espaces clients, des back-offices et des API pensés pour la performance, la sécurité et l'échelle — robustes aujourd'hui, prêts pour l'entreprise que vous serez dans cinq ans.",
      "valueProp": "Une plateforme taillée pour votre activité — performante, sécurisée et prête à monter en charge.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Code qui vous appartient",
            "p": "Vous êtes propriétaire du code source, documenté et sans dépendance cachée."
          }
        ]
      },
      "intro": "Des plateformes sur mesure, conçues pour la performance, la sécurité et l'échelle. Un logiciel qui s'adapte à votre entreprise aujourd'hui — et à celle que vous piloterez dans cinq ans.",
      "benefits": [
        {
          "h": "Fait pour vous",
          "p": "Chaque fonctionnalité répond à un besoin réel : zéro superflu, zéro compromis."
        },
        {
          "h": "Sécurisé & fiable",
          "p": "Bonnes pratiques, tests et sécurité intégrés dès la première ligne de code."
        },
        {
          "h": "Prêt à grandir",
          "p": "Une architecture qui encaisse la croissance sans tout réécrire."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Cadrage & spécifications",
        "Architecture technique",
        "Développement web & back-office",
        "API & intégrations",
        "Tests & sécurité",
        "Déploiement & maintenance"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Cadrage",
            "p": "On clarifie les besoins, les priorités et le périmètre."
          },
          {
            "h": "Conception & build",
            "p": "Architecture, développement itératif et tests continus."
          },
          {
            "h": "Mise en prod",
            "p": "Déploiement, formation et suivi dans la durée."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "Sur mesure ou solution existante ?",
            "a": "On commence toujours par challenger : si un outil du marché suffit, on vous le dit. Le sur mesure n'a de sens que là où il crée un vrai avantage."
          },
          {
            "q": "Je reste propriétaire du code ?",
            "a": "Oui, totalement. Le code est documenté, versionné et vous appartient — aucune dépendance forcée."
          },
          {
            "q": "Combien de temps pour un premier livrable ?",
            "a": "On vise une première version utilisable (MVP) en quelques semaines, puis on itère selon vos retours."
          }
        ]
      },
      "cta": {
        "h": "Un logiciel qui vous ressemble ?",
        "p": "On construit la plateforme sur mesure dont votre activité a besoin.",
        "btn": "Développer ma solution"
      }
    },
    "application-mobile": {
      "tag": "Service · Mobile",
      "title": "DÉVELOPPEMENT D'APPLICATION MOBILE",
      "heroCta": "Créer mon application",
      "lead": "Votre marque dans la poche de vos clients.",
      "context": "Une application, ce n'est pas un site en plus petit. C'est une expérience pensée pour le mobile : rapide, fluide, disponible même hors ligne, et connectée aux capteurs et notifications du téléphone. On développe en natif (Swift, Kotlin) quand la performance prime, et en cross-platform (React Native, Flutter) quand il faut aller vite sur iOS et Android à la fois. Une seule équipe maîtrise les quatre — votre app sort donc sur la techno qui vous convient vraiment.",
      "valueProp": "Une application iOS & Android fluide, fiable et pensée pour vos utilisateurs.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Publication incluse",
            "p": "On gère la mise en ligne sur l'App Store et Google Play, de A à Z."
          }
        ]
      },
      "intro": "Natif Swift & Kotlin, cross-platform React Native & Flutter. Une équipe qui maîtrise les quatre, pour livrer votre app sur la techno qui vous convient vraiment.",
      "benefits": [
        {
          "h": "iOS & Android",
          "p": "Une expérience impeccable sur les deux plateformes, sans compromis."
        },
        {
          "h": "Rapide & fluide",
          "p": "Des apps réactives qui donnent envie de revenir."
        },
        {
          "h": "La bonne techno",
          "p": "Natif ou cross-platform : on choisit selon votre besoin, pas nos habitudes."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Cadrage & parcours utilisateur",
        "Design d'interface mobile",
        "Développement iOS & Android",
        "Intégration API & back-end",
        "Tests sur appareils réels",
        "Publication & mises à jour"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Cadrage",
            "p": "Objectifs, parcours et fonctionnalités clés."
          },
          {
            "h": "Design & dev",
            "p": "Interface, développement et tests sur vrais appareils."
          },
          {
            "h": "Publication",
            "p": "Mise en ligne sur les stores et suivi des versions."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "Natif ou cross-platform ?",
            "a": "Ça dépend de votre projet. Le natif maximise la performance ; le cross-platform va plus vite et coûte moins pour couvrir iOS et Android. On vous conseille selon vos priorités."
          },
          {
            "q": "Vous gérez la publication sur les stores ?",
            "a": "Oui. On s'occupe des comptes développeur, des fiches et de la soumission à l'App Store et Google Play."
          },
          {
            "q": "Et les mises à jour ?",
            "a": "On assure le suivi, les correctifs et les évolutions après le lancement, selon la formule choisie."
          }
        ]
      },
      "cta": {
        "h": "Une idée d'application ?",
        "p": "On la transforme en app fluide, sur iOS et Android.",
        "btn": "Créer mon application"
      }
    },
    "creation-site-web": {
      "tag": "Service · Web",
      "title": "CRÉATION DE SITE WEB",
      "heroCta": "Lancer mon site",
      "lead": "Votre site est votre meilleur commercial. Il ne dort jamais.",
      "context": "Un beau site qui ne convertit pas, c'est une carte de visite chère. On conçoit chaque page comme un parcours : on capte l'attention en trois secondes, on lève les doutes, et on guide vers l'action — appel, devis ou achat. Vitesse, mobile, référencement et tracking sont intégrés dès le départ, pas ajoutés après coup. Résultat : un site rapide, élégant, et surtout mesurable.",
      "valueProp": "Un site rapide qui travaille pour vous 24h/24 et transforme vos visiteurs en clients.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Livré, formé, autonome",
            "p": "Vous repartez avec un site que vous savez gérer. On vous forme, on ne vous rend pas dépendant."
          }
        ]
      },
      "intro": "Des sites rapides, beaux et pensés pour convertir. Vitrine, e-commerce ou landing page — votre meilleur commercial, ouvert 24h/24.",
      "benefits": [
        {
          "h": "Rapide & fluide",
          "p": "Un site performant qui charge vite : meilleure expérience et meilleur référencement."
        },
        {
          "h": "Pensé pour convertir",
          "p": "Chaque page guide le visiteur vers l'action : appel, devis ou achat."
        },
        {
          "h": "Sur tous les écrans",
          "p": "Impeccable sur mobile, tablette et ordinateur."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Design sur mesure",
        "Développement responsive",
        "Optimisation vitesse & SEO",
        "Formulaires & prise de contact",
        "Hébergement & mise en ligne",
        "Formation & maintenance"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Cadrage",
            "p": "Objectifs, arborescence et contenus : on pose les bases."
          },
          {
            "h": "Design & dev",
            "p": "On conçoit, on développe et on teste sur tous les supports."
          },
          {
            "h": "Mise en ligne",
            "p": "Lancement, suivi et optimisation après la sortie."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "Je pourrai le modifier moi-même ?",
            "a": "Oui, on met en place un site facile à gérer et on vous forme à son administration."
          },
          {
            "q": "Le SEO est inclus ?",
            "a": "Les bases techniques du référencement sont intégrées dès la conception. Un accompagnement SEO poussé est possible en option."
          },
          {
            "q": "Combien de temps pour un site ?",
            "a": "Un site vitrine prend généralement 3 à 6 semaines selon le nombre de pages et de fonctionnalités."
          }
        ]
      },
      "cta": {
        "h": "Un site à la hauteur de votre marque ?",
        "p": "On construit un site rapide, beau et efficace.",
        "btn": "Lancer mon site"
      }
    },
    "design-ui-ux": {
      "tag": "Service · Design",
      "title": "DESIGN UI/UX & BRANDING",
      "heroCta": "Designer mon produit",
      "lead": "Un produit complexe qui paraît simple : c'est ça, le bon design.",
      "context": "Des interfaces claires. Des parcours pensés. Des design systems faits pour durer. Du logo et de l'identité de marque jusqu'au design produit au pixel près, on rend les produits complexes simples à utiliser — et les produits simples indispensables. Le design n'est pas une couche de peinture : c'est ce qui fait qu'on comprend, qu'on reste et qu'on revient.",
      "valueProp": "Des interfaces claires et un design cohérent qui rendent votre produit évident à utiliser.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Design system livré",
            "p": "Vous repartez avec une bibliothèque de composants réutilisable, prête à évoluer."
          }
        ]
      },
      "intro": "Interfaces claires, parcours pensés, design systems durables. Du logo au design produit au pixel près, on rend le complexe simple et le simple essentiel.",
      "benefits": [
        {
          "h": "Simple à utiliser",
          "p": "Des parcours évidents qui réduisent les frictions et les abandons."
        },
        {
          "h": "Cohérent partout",
          "p": "Un design system unifie interface, marque et communication."
        },
        {
          "h": "Qui marque",
          "p": "Une identité forte qui vous rend reconnaissable et désirable."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Recherche & audit UX",
        "Wireframes & parcours",
        "UI design & prototypes",
        "Design system & composants",
        "Logo & identité de marque",
        "Handoff développeurs"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Comprendre",
            "p": "On étudie vos utilisateurs, leurs besoins et leurs blocages."
          },
          {
            "h": "Concevoir",
            "p": "Wireframes, interfaces et prototypes testés très tôt."
          },
          {
            "h": "Systématiser",
            "p": "Un design system cohérent, prêt pour le développement."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "UX et UI, quelle différence ?",
            "a": "L'UX, c'est le parcours et la logique — que tout soit clair et sans friction. L'UI, c'est l'apparence — couleurs, typo, composants. Les deux vont ensemble."
          },
          {
            "q": "Vous refaites aussi le branding ?",
            "a": "Oui. On peut partir du logo et de l'identité de marque, ou les créer, puis les décliner jusque dans le produit."
          },
          {
            "q": "Je récupère les fichiers sources ?",
            "a": "Oui, vous obtenez les fichiers (Figma) et un design system documenté, prêts pour vos équipes."
          }
        ]
      },
      "cta": {
        "h": "Un produit qui mérite un grand design ?",
        "p": "On conçoit une expérience claire, cohérente et mémorable.",
        "btn": "Designer mon produit"
      }
    },
    "identite-visuelle": {
      "tag": "Service · Design",
      "title": "IDENTITÉ VISUELLE & DESIGN",
      "heroCta": "Créer mon identité",
      "lead": "On vous reconnaît avant même de vous lire.",
      "context": "Votre identité visuelle, c'est la première poignée de main — souvent la seule. En quelques millisecondes, un visiteur décide s'il vous fait confiance. On construit un univers graphique cohérent — logo, couleurs, typographies, motifs, photo — qui raconte votre positionnement sans un mot, se décline partout du site aux réseaux, et vous fait passer instantanément dans une autre catégorie de prix.",
      "valueProp": "Une identité qu'on reconnaît au premier coup d'œil, et qui inspire confiance instantanément.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Vous êtes propriétaire de tout",
            "p": "Fichiers sources, charte et déclinaisons vous appartiennent — aucune dépendance."
          }
        ]
      },
      "intro": "Logo, couleurs, typographies, univers graphique : une identité qui vous ressemble et qu'on reconnaît au premier coup d'œil.",
      "benefits": [
        {
          "h": "Une image mémorable",
          "p": "Un univers visuel distinctif qui reste en tête et inspire confiance."
        },
        {
          "h": "De la cohérence",
          "p": "Tous vos supports parlent d'une même voix visuelle, du web au print."
        },
        {
          "h": "Du professionnalisme",
          "p": "Une image soignée qui vous fait passer dans la cour des grands."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Logo & déclinaisons",
        "Palette de couleurs",
        "Typographies",
        "Charte graphique complète",
        "Templates réseaux sociaux",
        "Déclinaisons print & web"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Exploration",
            "p": "Moodboards et pistes créatives à partir de votre stratégie."
          },
          {
            "h": "Création",
            "p": "On dessine votre identité et on l'affine avec vous."
          },
          {
            "h": "Livraison",
            "p": "Charte complète + fichiers sources, prêts à l'emploi partout."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "Je repars avec les fichiers sources ?",
            "a": "Oui, vous êtes propriétaire de votre identité : fichiers vectoriels, charte et déclinaisons vous appartiennent."
          },
          {
            "q": "Vous refaites mon logo existant ?",
            "a": "Refonte complète ou évolution en douceur : on s'adapte à votre besoin et à votre historique."
          },
          {
            "q": "Le print est inclus ?",
            "a": "Oui, on décline l'identité sur tous vos supports : cartes, enseignes, packaging, réseaux."
          }
        ]
      },
      "cta": {
        "h": "Envie d'une image qui marque ?",
        "p": "On crée une identité à votre image.",
        "btn": "Créer mon identité"
      }
    },
    "seo-conversion": {
      "tag": "Service · SEO & Conversion",
      "title": "SEO & OPTIMISATION DES CONVERSIONS",
      "heroCta": "Demander mon audit",
      "lead": "Être trouvé par ceux qui vous cherchent déjà.",
      "context": "Chaque jour, vos futurs clients tapent vos services dans Google. La vraie question : est-ce vous ou un concurrent qu'ils trouvent ? On travaille les deux moitiés de l'équation : grimper sur les recherches qui comptent — SEO technique, contenu, SEO local Luxembourg — puis transformer ce trafic en clients grâce à l'optimisation des conversions, au tracking et aux tests. Pas d'agitation : une méthode et des chiffres.",
      "valueProp": "Être trouvé sur Google par ceux qui cherchent déjà vos services — et transformer ce trafic en clients.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Audit offert et sans jargon",
            "p": "On commence par un diagnostic clair et chiffré. Vous savez exactement par où commencer."
          }
        ]
      },
      "intro": "Le meilleur site du monde ne sert à rien si personne ne le trouve — et un flot de visiteurs ne vaut rien s'ils repartent. On travaille les deux : être visible sur Google, puis transformer chaque visite en client.",
      "benefits": [
        {
          "h": "Plus de visibilité",
          "p": "On grimpe dans Google sur les recherches qui comptent pour votre activité."
        },
        {
          "h": "Plus de conversions",
          "p": "On transforme davantage de visiteurs sans dépenser plus en publicité."
        },
        {
          "h": "Des décisions par la donnée",
          "p": "Tracking fiable et tableaux de bord clairs : on sait ce qui marche."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Audit SEO & concurrence",
        "SEO technique & Core Web Vitals",
        "Contenu & mots-clés",
        "SEO local (Luxembourg)",
        "Optimisation des conversions (CRO)",
        "Tracking, analytics & reporting"
      ],
      "method": {
        "title": "Notre méthode",
        "steps": [
          {
            "h": "Audit",
            "p": "On analyse votre visibilité, votre site et vos concurrents. Un état des lieux clair et chiffré."
          },
          {
            "h": "Optimisation",
            "p": "On corrige la technique, le contenu et les pages clés pour grimper et mieux convertir."
          },
          {
            "h": "Tests",
            "p": "On teste, on compare, on garde ce qui marche. Les décisions se prennent sur la donnée."
          },
          {
            "h": "Mesure",
            "p": "Reporting mensuel, objectifs suivis, améliorations continues."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "En combien de temps voit-on des résultats en SEO ?",
            "a": "Le SEO est un travail de fond : les premiers effets apparaissent souvent en 2 à 3 mois et s'amplifient ensuite. La conversion peut progresser dès les premières optimisations du site."
          },
          {
            "q": "Faut-il refaire tout mon site ?",
            "a": "Pas forcément. On part de l'existant : bien souvent, quelques optimisations ciblées suffisent avant d'envisager une refonte."
          },
          {
            "q": "Travaillez-vous le SEO local à Luxembourg ?",
            "a": "Oui. On optimise votre fiche Google, vos avis et votre présence locale pour ressortir sur les recherches « près de moi »."
          },
          {
            "q": "L'audit est-il vraiment gratuit ?",
            "a": "Oui, le premier audit SEO & conversion est offert et sans engagement — un diagnostic clair pour savoir par où commencer."
          }
        ]
      },
      "cta": {
        "h": "On regarde votre visibilité ensemble ?",
        "p": "Audit SEO & conversion offert — un état des lieux clair, sans jargon.",
        "btn": "Demander mon audit"
      }
    },
    "conseil-it": {
      "tag": "Service · Conseil",
      "title": "CONSEIL IT & STRATÉGIE DIGITALE",
      "heroCta": "Cadrer mon projet",
      "lead": "La bonne techno, au bon moment, pour la bonne raison.",
      "context": "Avant d'écrire une ligne de code, il faut savoir où l'on va. On vous aide à trancher les vraies questions : quel outil, quelle architecture, quoi construire, acheter ou intégrer, et dans quel ordre. On audite l'existant, on clarifie la feuille de route et on chiffre les priorités — pour investir dans ce qui compte et éviter les impasses techniques coûteuses. Un regard extérieur, indépendant, au service de vos objectifs business.",
      "valueProp": "Une feuille de route technologique claire, alignée sur vos objectifs et votre budget.",
      "proof": {
        "title": "Ce qui vous rassure",
        "items": [
          {
            "h": "Basé à Luxembourg",
            "p": "Un interlocuteur proche et réactif, qui connaît votre marché local."
          },
          {
            "h": "Sans engagement",
            "p": "On commence par un échange offert. Vous avancez seulement si le courant passe."
          },
          {
            "h": "Transparent de A à Z",
            "p": "Devis clair, délais annoncés, aucune surprise : vous savez toujours où en est le projet."
          },
          {
            "h": "Indépendants",
            "p": "On ne revend aucune licence : nos recommandations servent vos intérêts, pas ceux d'un éditeur."
          }
        ]
      },
      "intro": "Conseil IT et stratégie digitale : audit, architecture et feuille de route. On vous aide à choisir la bonne techno et à investir dans ce qui compte vraiment.",
      "benefits": [
        {
          "h": "Une vision claire",
          "p": "Une feuille de route priorisée qui aligne technologie et objectifs business."
        },
        {
          "h": "Moins de risques",
          "p": "On repère tôt les impasses techniques et les coûts cachés."
        },
        {
          "h": "Des choix éclairés",
          "p": "Construire, acheter ou intégrer : on tranche avec des arguments, pas des intuitions."
        }
      ],
      "includedTitle": "Ce qui est inclus",
      "included": [
        "Audit technique & existant",
        "Architecture & choix technos",
        "Feuille de route priorisée",
        "Chiffrage & arbitrages",
        "Accompagnement des équipes",
        "Suivi & pilotage"
      ],
      "method": {
        "title": "Comment on travaille",
        "steps": [
          {
            "h": "Audit",
            "p": "On analyse l'existant, les outils et les besoins réels."
          },
          {
            "h": "Stratégie",
            "p": "On définit l'architecture cible et la feuille de route."
          },
          {
            "h": "Pilotage",
            "p": "On accompagne l'exécution et on ajuste en cours de route."
          }
        ]
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          {
            "q": "C'est pour quelle taille d'entreprise ?",
            "a": "De l'indépendant à la PME : dès que la techno pèse sur votre activité, un cadrage clair vous fait gagner du temps et de l'argent."
          },
          {
            "q": "Vous imposez vos outils ?",
            "a": "Non. On est indépendants et on ne revend pas de licences : on recommande ce qui sert vraiment votre projet."
          },
          {
            "q": "Et après le conseil ?",
            "a": "On peut s'arrêter à la feuille de route, ou la mettre en œuvre avec vous — développement, design ou pilotage."
          }
        ]
      },
      "cta": {
        "h": "Un projet digital à cadrer ?",
        "p": "On clarifie la stratégie et la techno avant d'investir.",
        "btn": "Cadrer mon projet"
      }
    },
    "objectifs": {
      "tag": "Vos objectifs",
      "title": "DES OBJECTIFS BUSINESS, PAS DES LIVRABLES",
      "lead": "On ne vend pas des livrables. On vend des résultats.",
      "context": "La plupart des agences vous parlent de posts, de pages ou de campagnes. Nous, on commence par la seule question qui compte : qu'est-ce que ça doit vous rapporter ? Ensuite seulement, on choisit les leviers. Chaque euro investi vise un objectif clair — notoriété, prospects, ventes ou fidélité — et chaque résultat se mesure.",
      "intro": "Chaque action a une raison d'être et un résultat mesurable. On part de vos objectifs business, pas de nos habitudes — puis on aligne stratégie, création et diffusion pour y arriver.",
      "blocks": [
        {
          "h": "Notoriété",
          "p": "Être vu, reconnu et mémorisé sur votre marché. On construit une présence qui s'imprime dans les têtes.",
          "items": [
            "Portée & impressions",
            "Reconnaissance de marque",
            "Couverture presse & sociale",
            "Part de voix"
          ]
        },
        {
          "h": "Acquisition",
          "p": "Attirer des prospects réellement qualifiés, pas juste du trafic. On transforme l'attention en opportunités.",
          "items": [
            "Trafic qualifié",
            "Leads & demandes de devis",
            "Coût par acquisition",
            "Nouvelles audiences"
          ]
        },
        {
          "h": "Conversion",
          "p": "Transformer l'intérêt en clients. On lève les freins et on facilite chaque étape jusqu'à l'achat.",
          "items": [
            "Taux de conversion",
            "Parcours optimisés",
            "Panier & chiffre d'affaires",
            "Preuve sociale"
          ]
        },
        {
          "h": "Fidélisation",
          "p": "Faire revenir et faire recommander. Une marque qu'on aime, c'est une marque qui dure.",
          "items": [
            "Rétention & réachat",
            "Communauté engagée",
            "Avis & recommandations",
            "Valeur vie client"
          ]
        }
      ],
      "cta": {
        "h": "Quel est votre prochain objectif ?",
        "p": "Dites-nous où vous voulez aller, on trace le chemin.",
        "btn": "Fixer un objectif"
      }
    }
  },
  "en": {
    "services": {
      "hub": true,
      "tag": "Our services",
      "title": "DIGITAL & DEVELOPMENT SERVICES",
      "intro": "From custom software to design, from web to consulting: a full range to design, build and grow your digital products in Luxembourg. Pick a service to dive in.",
      "items": [
        {
          "route": "developpement-logiciel",
          "h": "Custom software development",
          "p": "Platforms, back-offices and APIs engineered for performance and scale."
        },
        {
          "route": "application-mobile",
          "h": "Mobile app development",
          "p": "iOS & Android apps, native or cross-platform, smooth and reliable."
        },
        {
          "route": "creation-site-web",
          "h": "Website creation",
          "p": "Fast, beautiful sites built to convert."
        },
        {
          "route": "design-ui-ux",
          "h": "UI/UX design & branding",
          "p": "Clean interfaces, lasting design systems, from logo to product."
        },
        {
          "route": "identite-visuelle",
          "h": "Visual identity & design",
          "p": "Logo, guidelines and a visual world that make you recognisable."
        },
        {
          "route": "seo-conversion",
          "h": "SEO & Conversion",
          "p": "Get found on Google and turn visits into customers."
        },
        {
          "route": "conseil-it",
          "h": "IT consulting & digital strategy",
          "p": "Audit, architecture and roadmap to invest in what matters."
        }
      ],
      "cta": {
        "h": "Got a project in mind?",
        "p": "Let's talk it over — in Luxembourg or by video call.",
        "btn": "Start a project"
      }
    },
    "developpement-logiciel": {
      "tag": "Service · Development",
      "title": "CUSTOM SOFTWARE DEVELOPMENT",
      "heroCta": "Build my solution",
      "lead": "Software that fits your business — not the other way around.",
      "context": "Off-the-shelf tools force you to bend your process to their limits. Custom software does the opposite: it matches exactly how you work, automates what drains your time and grows with you. We build web platforms, client portals, back-offices and APIs engineered for performance, security and scale — solid today, ready for the business you'll be running in five years.",
      "valueProp": "A platform tailored to your business — fast, secure and ready to scale.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Code you own",
            "p": "You own the documented source code, with no hidden lock-in."
          }
        ]
      },
      "intro": "Tailor-made platforms engineered for performance, security and scale. Software built to fit your business today — and the one you'll be running in five years.",
      "benefits": [
        {
          "h": "Built for you",
          "p": "Every feature answers a real need: no bloat, no compromise."
        },
        {
          "h": "Secure & reliable",
          "p": "Best practices, testing and security baked in from the first line of code."
        },
        {
          "h": "Ready to grow",
          "p": "Architecture that absorbs growth without a rewrite."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Scoping & specs",
        "Technical architecture",
        "Web & back-office development",
        "APIs & integrations",
        "Testing & security",
        "Deployment & maintenance"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Scoping",
            "p": "We clarify needs, priorities and scope."
          },
          {
            "h": "Design & build",
            "p": "Architecture, iterative development and continuous testing."
          },
          {
            "h": "Go-live",
            "p": "Deployment, training and long-term support."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "Custom or existing solution?",
            "a": "We always challenge first: if a market tool does the job, we'll say so. Custom only makes sense where it creates a real edge."
          },
          {
            "q": "Do I own the code?",
            "a": "Yes, fully. The code is documented, versioned and yours — no forced dependency."
          },
          {
            "q": "How long to a first deliverable?",
            "a": "We aim for a usable first version (MVP) in a few weeks, then iterate on your feedback."
          }
        ]
      },
      "cta": {
        "h": "Software that fits you?",
        "p": "We build the custom platform your business needs.",
        "btn": "Build my solution"
      }
    },
    "application-mobile": {
      "tag": "Service · Mobile",
      "title": "MOBILE APP DEVELOPMENT",
      "heroCta": "Build my app",
      "lead": "Your brand in your customers' pocket.",
      "context": "An app isn't a smaller website. It's an experience designed for mobile: fast, fluid, available offline and connected to the phone's sensors and notifications. We build native (Swift, Kotlin) when performance is critical, and cross-platform (React Native, Flutter) when you need to move fast on iOS and Android at once. One team is fluent in all four — so your app ships on the stack that actually fits.",
      "valueProp": "A smooth, reliable iOS & Android app built around your users.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Store launch included",
            "p": "We handle publishing on the App Store and Google Play, end to end."
          }
        ]
      },
      "intro": "Native Swift & Kotlin, cross-platform React Native & Flutter. One team fluent in all four, shipping your app on the stack that actually fits.",
      "benefits": [
        {
          "h": "iOS & Android",
          "p": "A flawless experience on both platforms, no compromise."
        },
        {
          "h": "Fast & fluid",
          "p": "Responsive apps people want to come back to."
        },
        {
          "h": "The right stack",
          "p": "Native or cross-platform: we choose for your need, not our habits."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Scoping & user journeys",
        "Mobile interface design",
        "iOS & Android development",
        "API & back-end integration",
        "Testing on real devices",
        "Publishing & updates"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Scoping",
            "p": "Goals, journeys and key features."
          },
          {
            "h": "Design & dev",
            "p": "Interface, development and testing on real devices."
          },
          {
            "h": "Publishing",
            "p": "Store launch and version follow-up."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "Native or cross-platform?",
            "a": "It depends on your project. Native maximises performance; cross-platform is faster and cheaper to cover iOS and Android. We advise based on your priorities."
          },
          {
            "q": "Do you handle store publishing?",
            "a": "Yes. We take care of developer accounts, listings and submission to the App Store and Google Play."
          },
          {
            "q": "What about updates?",
            "a": "We handle maintenance, fixes and improvements after launch, based on your chosen plan."
          }
        ]
      },
      "cta": {
        "h": "Got an app idea?",
        "p": "We turn it into a smooth app on iOS and Android.",
        "btn": "Build my app"
      }
    },
    "creation-site-web": {
      "tag": "Service · Web",
      "title": "WEBSITE CREATION",
      "heroCta": "Launch my site",
      "lead": "Your website is your best salesperson. It never sleeps.",
      "context": "A beautiful site that doesn't convert is an expensive business card. We design every page as a journey: grab attention in three seconds, remove doubt, and guide to action — call, quote or purchase. Speed, mobile, SEO and tracking are built in from the start, not bolted on. The result: a fast, elegant and — above all — measurable site.",
      "valueProp": "A fast site that works for you 24/7 and turns visitors into customers.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Delivered, trained, autonomous",
            "p": "You leave with a site you know how to run. We train you, we don't make you dependent."
          }
        ]
      },
      "intro": "Fast, beautiful sites built to convert. Showcase, e-commerce or landing page — your best salesperson, open 24/7.",
      "benefits": [
        {
          "h": "Fast & smooth",
          "p": "A high-performance site that loads fast: better experience, better SEO."
        },
        {
          "h": "Built to convert",
          "p": "Every page guides the visitor to action: call, quote or purchase."
        },
        {
          "h": "On every screen",
          "p": "Flawless on mobile, tablet and desktop."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Custom design",
        "Responsive development",
        "Speed & SEO optimisation",
        "Forms & contact",
        "Hosting & go-live",
        "Training & maintenance"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Framing",
            "p": "Goals, structure and content: we set the foundations."
          },
          {
            "h": "Design & dev",
            "p": "We design, build and test on every device."
          },
          {
            "h": "Go-live",
            "p": "Launch, monitoring and optimisation after release."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "Can I edit it myself?",
            "a": "Yes, we build an easy-to-manage site and train you to run it."
          },
          {
            "q": "Is SEO included?",
            "a": "The technical SEO basics are built in from the start. Deeper SEO support is available as an option."
          },
          {
            "q": "How long for a website?",
            "a": "A showcase site usually takes 3 to 6 weeks depending on pages and features."
          }
        ]
      },
      "cta": {
        "h": "A site worthy of your brand?",
        "p": "We build a fast, beautiful, effective site.",
        "btn": "Launch my site"
      }
    },
    "design-ui-ux": {
      "tag": "Service · Design",
      "title": "UI/UX DESIGN & BRANDING",
      "heroCta": "Design my product",
      "lead": "A complex product that feels simple — that's good design.",
      "context": "Clean interfaces. Considered flows. Design systems built to last. From logo and brand identity to pixel-perfect product design, we make complex products feel simple — and simple products feel essential. Design isn't a coat of paint: it's what makes people understand, stay and come back.",
      "valueProp": "Clean interfaces and consistent design that make your product obvious to use.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Design system delivered",
            "p": "You leave with a reusable component library, ready to evolve."
          }
        ]
      },
      "intro": "Clean interfaces, considered flows, lasting design systems. From logo to pixel-perfect product design, we make the complex simple and the simple essential.",
      "benefits": [
        {
          "h": "Simple to use",
          "p": "Obvious flows that cut friction and drop-off."
        },
        {
          "h": "Consistent everywhere",
          "p": "A design system unifies interface, brand and communication."
        },
        {
          "h": "Memorable",
          "p": "A strong identity that makes you recognisable and desirable."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Research & UX audit",
        "Wireframes & flows",
        "UI design & prototypes",
        "Design system & components",
        "Logo & brand identity",
        "Developer handoff"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Understand",
            "p": "We study your users, their needs and their blockers."
          },
          {
            "h": "Design",
            "p": "Wireframes, interfaces and prototypes tested early."
          },
          {
            "h": "Systematise",
            "p": "A consistent design system, ready for development."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "UX vs UI — what's the difference?",
            "a": "UX is the flow and logic — making everything clear and frictionless. UI is the look — colours, type, components. The two work together."
          },
          {
            "q": "Do you handle branding too?",
            "a": "Yes. We can start from your logo and brand identity, or create them, then carry them through into the product."
          },
          {
            "q": "Do I get the source files?",
            "a": "Yes, you get the files (Figma) and a documented design system, ready for your teams."
          }
        ]
      },
      "cta": {
        "h": "A product worth great design?",
        "p": "We craft a clear, consistent, memorable experience.",
        "btn": "Design my product"
      }
    },
    "identite-visuelle": {
      "tag": "Service · Design",
      "title": "VISUAL IDENTITY & DESIGN",
      "heroCta": "Create my identity",
      "lead": "People recognise you before they even read you.",
      "context": "Your visual identity is the first handshake — often the only one. In milliseconds, a visitor decides whether to trust you. We build a coherent visual world — logo, colours, type, patterns, imagery — that tells your positioning without a word, works everywhere from site to socials, and instantly moves you into a higher price bracket.",
      "valueProp": "An identity recognised at a glance that inspires trust instantly.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "You own everything",
            "p": "Source files, guidelines and variations are yours — no lock-in."
          }
        ]
      },
      "intro": "Logo, colours, typography, visual world: an identity that looks like you and is recognised at a glance.",
      "benefits": [
        {
          "h": "A memorable image",
          "p": "A distinctive visual world that sticks and inspires trust."
        },
        {
          "h": "Consistency",
          "p": "All your materials speak with one visual voice, from web to print."
        },
        {
          "h": "Professionalism",
          "p": "A polished image that moves you up a league."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Logo & variations",
        "Colour palette",
        "Typography",
        "Full brand guidelines",
        "Social media templates",
        "Print & web assets"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Exploration",
            "p": "Moodboards and creative directions from your strategy."
          },
          {
            "h": "Creation",
            "p": "We design your identity and refine it with you."
          },
          {
            "h": "Delivery",
            "p": "Full guidelines + source files, ready to use everywhere."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "Do I get the source files?",
            "a": "Yes, you own your identity: vector files, guidelines and assets are yours."
          },
          {
            "q": "Do you redo my existing logo?",
            "a": "Full redesign or gentle evolution: we adapt to your needs and your history."
          },
          {
            "q": "Is print included?",
            "a": "Yes, we apply the identity across all your materials: cards, signage, packaging, social."
          }
        ]
      },
      "cta": {
        "h": "Want an image that stands out?",
        "p": "We craft an identity that's truly you.",
        "btn": "Create my identity"
      }
    },
    "seo-conversion": {
      "tag": "Service · SEO & Conversion",
      "title": "SEO & CONVERSION OPTIMISATION",
      "heroCta": "Request my audit",
      "lead": "Get found by the people already looking for you.",
      "context": "Every day, your future customers type your services into Google. The real question: do they find you, or a competitor? We work both halves of the equation: climbing for the searches that matter — technical SEO, content, local SEO in Luxembourg — then turning that traffic into customers through conversion optimisation, tracking and testing. No noise: a method and numbers.",
      "valueProp": "Get found on Google by people already looking for your services — and turn that traffic into customers.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Free audit, no jargon",
            "p": "We start with a clear, quantified diagnosis. You know exactly where to begin."
          }
        ]
      },
      "intro": "The best site in the world is useless if no one finds it — and a flood of visitors is worthless if they leave. We work on both: being visible on Google, then turning every visit into a customer.",
      "benefits": [
        {
          "h": "More visibility",
          "p": "We climb on Google for the searches that matter to your business."
        },
        {
          "h": "More conversions",
          "p": "We convert more visitors without spending more on ads."
        },
        {
          "h": "Data-driven decisions",
          "p": "Reliable tracking and clear dashboards: we know what works."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "SEO & competitor audit",
        "Technical SEO & Core Web Vitals",
        "Content & keywords",
        "Local SEO (Luxembourg)",
        "Conversion optimisation (CRO)",
        "Tracking, analytics & reporting"
      ],
      "method": {
        "title": "Our method",
        "steps": [
          {
            "h": "Audit",
            "p": "We analyse your visibility, your site and your competitors. A clear, quantified picture."
          },
          {
            "h": "Optimisation",
            "p": "We fix the technical side, content and key pages to climb and convert better."
          },
          {
            "h": "Testing",
            "p": "We test, compare and keep what works. Decisions are made on data."
          },
          {
            "h": "Measure",
            "p": "Monthly reporting, tracked goals, continuous improvement."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "How long until SEO results?",
            "a": "SEO is long-term work: first effects often appear within 2 to 3 months and grow from there. Conversion can improve from the very first optimisations."
          },
          {
            "q": "Do I need to rebuild my whole site?",
            "a": "Not necessarily. We start from what you have: often a few targeted optimisations are enough before a redesign."
          },
          {
            "q": "Do you handle local SEO in Luxembourg?",
            "a": "Yes. We optimise your Google profile, your reviews and your local presence to show up on “near me” searches."
          },
          {
            "q": "Is the audit really free?",
            "a": "Yes, the first SEO & conversion audit is free and with no commitment — a clear diagnosis of where to start."
          }
        ]
      },
      "cta": {
        "h": "Shall we review your visibility together?",
        "p": "Free SEO & conversion audit — a clear picture, no jargon.",
        "btn": "Request my audit"
      }
    },
    "conseil-it": {
      "tag": "Service · Consulting",
      "title": "IT CONSULTING & DIGITAL STRATEGY",
      "heroCta": "Scope my project",
      "lead": "The right technology, at the right time, for the right reason.",
      "context": "Before writing a line of code, you need to know where you're going. We help you settle the real questions: which tool, which architecture, what to build, buy or integrate, and in what order. We audit what you have, clarify the roadmap and cost the priorities — so you invest in what matters and avoid expensive technical dead ends. An outside, independent view, in service of your business goals.",
      "valueProp": "A clear technology roadmap, aligned with your goals and your budget.",
      "proof": {
        "title": "Why you can trust us",
        "items": [
          {
            "h": "Based in Luxembourg",
            "p": "A close, responsive partner who knows your local market."
          },
          {
            "h": "No commitment",
            "p": "We start with a free chat. You only move forward if it clicks."
          },
          {
            "h": "Transparent throughout",
            "p": "Clear quote, announced timelines, no surprises: you always know where the project stands."
          },
          {
            "h": "Independent",
            "p": "We resell no licences: our recommendations serve your interests, not a vendor's."
          }
        ]
      },
      "intro": "IT consulting and digital strategy: audit, architecture and roadmap. We help you choose the right technology and invest in what truly matters.",
      "benefits": [
        {
          "h": "A clear vision",
          "p": "A prioritised roadmap aligning technology with business goals."
        },
        {
          "h": "Less risk",
          "p": "We spot technical dead ends and hidden costs early."
        },
        {
          "h": "Informed choices",
          "p": "Build, buy or integrate: we decide with arguments, not hunches."
        }
      ],
      "includedTitle": "What's included",
      "included": [
        "Technical & existing audit",
        "Architecture & tech choices",
        "Prioritised roadmap",
        "Costing & trade-offs",
        "Team support",
        "Follow-up & steering"
      ],
      "method": {
        "title": "How we work",
        "steps": [
          {
            "h": "Audit",
            "p": "We analyse what you have, your tools and real needs."
          },
          {
            "h": "Strategy",
            "p": "We define the target architecture and roadmap."
          },
          {
            "h": "Steering",
            "p": "We support execution and adjust along the way."
          }
        ]
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          {
            "q": "What size company is this for?",
            "a": "From solo founders to SMEs: as soon as technology weighs on your business, clear scoping saves you time and money."
          },
          {
            "q": "Do you push your own tools?",
            "a": "No. We're independent and resell no licences: we recommend what genuinely serves your project."
          },
          {
            "q": "What happens after the consulting?",
            "a": "We can stop at the roadmap, or deliver it with you — development, design or steering."
          }
        ]
      },
      "cta": {
        "h": "A digital project to scope?",
        "p": "We clarify strategy and technology before you invest.",
        "btn": "Scope my project"
      }
    },
    "objectifs": {
      "tag": "Your goals",
      "title": "BUSINESS GOALS, NOT DELIVERABLES",
      "lead": "We don't sell deliverables. We sell results.",
      "context": "Most agencies talk to you about posts, pages or campaigns. We start with the only question that matters: what should it earn you? Only then do we pick the levers. Every euro invested targets a clear goal — awareness, leads, sales or loyalty — and every result is measured.",
      "intro": "Every action has a reason and a measurable result. We start from your business goals, not our habits — then align strategy, creative and distribution to get there.",
      "blocks": [
        {
          "h": "Awareness",
          "p": "Be seen, recognised and remembered in your market. We build a presence that prints itself in minds.",
          "items": [
            "Reach & impressions",
            "Brand recognition",
            "Press & social coverage",
            "Share of voice"
          ]
        },
        {
          "h": "Acquisition",
          "p": "Attract genuinely qualified prospects, not just traffic. We turn attention into opportunities.",
          "items": [
            "Qualified traffic",
            "Leads & quote requests",
            "Cost per acquisition",
            "New audiences"
          ]
        },
        {
          "h": "Conversion",
          "p": "Turn interest into customers. We remove friction and ease every step to purchase.",
          "items": [
            "Conversion rate",
            "Optimised journeys",
            "Basket & revenue",
            "Social proof"
          ]
        },
        {
          "h": "Loyalty",
          "p": "Bring people back and get them recommending. A brand people love is a brand that lasts.",
          "items": [
            "Retention & repeat",
            "Engaged community",
            "Reviews & referrals",
            "Customer lifetime value"
          ]
        }
      ],
      "cta": {
        "h": "What's your next goal?",
        "p": "Tell us where you want to go, we'll map the way.",
        "btn": "Set a goal"
      }
    }
  },
  "de": {
    "services": {
      "hub": true,
      "tag": "Unsere Leistungen",
      "title": "DIGITAL- & ENTWICKLUNGSLEISTUNGEN",
      "intro": "Von maßgeschneiderter Software bis Design, von Web bis Beratung: ein komplettes Angebot, um Ihre digitalen Produkte in Luxemburg zu gestalten, zu bauen und wachsen zu lassen. Wählen Sie eine Leistung.",
      "items": [
        {
          "route": "developpement-logiciel",
          "h": "Maßgeschneiderte Softwareentwicklung",
          "p": "Plattformen, Back-Offices und APIs für Performance und Skalierung."
        },
        {
          "route": "application-mobile",
          "h": "Mobile App-Entwicklung",
          "p": "iOS- & Android-Apps, nativ oder cross-platform, flüssig und zuverlässig."
        },
        {
          "route": "creation-site-web",
          "h": "Website-Erstellung",
          "p": "Schnelle, schöne Websites, die konvertieren."
        },
        {
          "route": "design-ui-ux",
          "h": "UI/UX-Design & Branding",
          "p": "Klare Interfaces, langlebige Design-Systeme, vom Logo bis zum Produkt."
        },
        {
          "route": "identite-visuelle",
          "h": "Visuelle Identität & Design",
          "p": "Logo, Richtlinien und eine visuelle Welt, die Sie unverwechselbar machen."
        },
        {
          "route": "seo-conversion",
          "h": "SEO & Conversion",
          "p": "Bei Google gefunden werden und Besuche in Kunden verwandeln."
        },
        {
          "route": "conseil-it",
          "h": "IT-Beratung & Digitalstrategie",
          "p": "Audit, Architektur und Roadmap, um ins Richtige zu investieren."
        }
      ],
      "cta": {
        "h": "Ein Projekt im Kopf?",
        "p": "Reden wir bei einem Kaffee darüber — in Luxemburg oder per Video.",
        "btn": "Projekt starten"
      }
    },
    "developpement-logiciel": {
      "tag": "Leistung · Entwicklung",
      "title": "MASSGESCHNEIDERTE SOFTWAREENTWICKLUNG",
      "heroCta": "Lösung entwickeln",
      "lead": "Software, die zu Ihrem Geschäft passt — nicht umgekehrt.",
      "context": "Standardtools zwingen Sie, Ihre Prozesse ihren Grenzen anzupassen. Maßgeschneiderte Software macht das Gegenteil: Sie passt genau zu Ihrer Arbeitsweise, automatisiert Zeitfresser und wächst mit Ihnen. Wir bauen Webplattformen, Kundenportale, Back-Offices und APIs — entwickelt für Performance, Sicherheit und Skalierung, stabil heute und bereit für das Unternehmen, das Sie in fünf Jahren führen.",
      "valueProp": "Eine Plattform, maßgeschneidert für Ihr Geschäft — schnell, sicher und skalierbar.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Code, der Ihnen gehört",
            "p": "Sie besitzen den dokumentierten Quellcode — ohne versteckte Abhängigkeit."
          }
        ]
      },
      "intro": "Maßgeschneiderte Plattformen, entwickelt für Performance, Sicherheit und Skalierung. Software, die zu Ihrem Unternehmen heute passt — und zu dem, das Sie in fünf Jahren führen.",
      "benefits": [
        {
          "h": "Für Sie gebaut",
          "p": "Jede Funktion löst ein echtes Bedürfnis: kein Ballast, kein Kompromiss."
        },
        {
          "h": "Sicher & zuverlässig",
          "p": "Best Practices, Tests und Sicherheit ab der ersten Codezeile."
        },
        {
          "h": "Bereit zu wachsen",
          "p": "Eine Architektur, die Wachstum ohne Neuschreiben verkraftet."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Scoping & Spezifikation",
        "Technische Architektur",
        "Web- & Back-office-Entwicklung",
        "APIs & Integrationen",
        "Tests & Sicherheit",
        "Deployment & Wartung"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Scoping",
            "p": "Wir klären Bedarf, Prioritäten und Umfang."
          },
          {
            "h": "Design & Build",
            "p": "Architektur, iterative Entwicklung und kontinuierliche Tests."
          },
          {
            "h": "Go-live",
            "p": "Deployment, Schulung und langfristige Betreuung."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Maßgeschneidert oder Standardlösung?",
            "a": "Wir hinterfragen zuerst: Reicht ein Markttool, sagen wir es. Maßarbeit lohnt nur dort, wo sie echten Vorteil schafft."
          },
          {
            "q": "Gehört mir der Code?",
            "a": "Ja, vollständig. Der Code ist dokumentiert, versioniert und Ihrer — ohne erzwungene Abhängigkeit."
          },
          {
            "q": "Wie schnell ein erstes Ergebnis?",
            "a": "Wir zielen auf eine nutzbare erste Version (MVP) in wenigen Wochen und iterieren dann nach Ihrem Feedback."
          }
        ]
      },
      "cta": {
        "h": "Software, die zu Ihnen passt?",
        "p": "Wir bauen die maßgeschneiderte Plattform, die Ihr Geschäft braucht.",
        "btn": "Lösung entwickeln"
      }
    },
    "application-mobile": {
      "tag": "Leistung · Mobile",
      "title": "MOBILE APP-ENTWICKLUNG",
      "heroCta": "App entwickeln",
      "lead": "Ihre Marke in der Tasche Ihrer Kunden.",
      "context": "Eine App ist keine kleinere Website. Sie ist ein Erlebnis für Mobile: schnell, flüssig, offline verfügbar und mit Sensoren und Benachrichtigungen des Handys verbunden. Wir entwickeln nativ (Swift, Kotlin), wenn Performance zählt, und cross-platform (React Native, Flutter), wenn es auf iOS und Android zugleich schnell gehen muss. Ein Team beherrscht alle vier — Ihre App erscheint also auf dem Stack, der wirklich passt.",
      "valueProp": "Eine flüssige, zuverlässige iOS- & Android-App, gebaut für Ihre Nutzer.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Veröffentlichung inklusive",
            "p": "Wir übernehmen das Veröffentlichen im App Store und bei Google Play — komplett."
          }
        ]
      },
      "intro": "Nativ Swift & Kotlin, cross-platform React Native & Flutter. Ein Team, das alle vier beherrscht, und Ihre App auf dem Stack ausliefert, der wirklich passt.",
      "benefits": [
        {
          "h": "iOS & Android",
          "p": "Ein makelloses Erlebnis auf beiden Plattformen, ohne Kompromiss."
        },
        {
          "h": "Schnell & flüssig",
          "p": "Reaktionsschnelle Apps, zu denen man gern zurückkehrt."
        },
        {
          "h": "Der richtige Stack",
          "p": "Nativ oder cross-platform: Wir wählen nach Ihrem Bedarf, nicht nach Gewohnheit."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Scoping & User Journeys",
        "Mobile Interface-Design",
        "iOS- & Android-Entwicklung",
        "API- & Back-end-Integration",
        "Tests auf echten Geräten",
        "Veröffentlichung & Updates"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Scoping",
            "p": "Ziele, Journeys und Kernfunktionen."
          },
          {
            "h": "Design & Dev",
            "p": "Interface, Entwicklung und Tests auf echten Geräten."
          },
          {
            "h": "Veröffentlichung",
            "p": "Store-Launch und Versions-Betreuung."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Nativ oder cross-platform?",
            "a": "Kommt auf Ihr Projekt an. Nativ maximiert die Performance; cross-platform ist schneller und günstiger für iOS und Android zugleich. Wir beraten nach Ihren Prioritäten."
          },
          {
            "q": "Übernehmen Sie die Store-Veröffentlichung?",
            "a": "Ja. Wir kümmern uns um Entwicklerkonten, Einträge und die Einreichung im App Store und bei Google Play."
          },
          {
            "q": "Und Updates?",
            "a": "Wir übernehmen Wartung, Fixes und Weiterentwicklung nach dem Launch, je nach gewähltem Paket."
          }
        ]
      },
      "cta": {
        "h": "Eine App-Idee?",
        "p": "Wir machen daraus eine flüssige App für iOS und Android.",
        "btn": "App entwickeln"
      }
    },
    "creation-site-web": {
      "tag": "Leistung · Web",
      "title": "WEBSITE-ERSTELLUNG",
      "heroCta": "Website starten",
      "lead": "Ihre Website ist Ihr bester Verkäufer. Sie schläft nie.",
      "context": "Eine schöne Website, die nicht konvertiert, ist eine teure Visitenkarte. Wir gestalten jede Seite als Weg: in drei Sekunden Aufmerksamkeit gewinnen, Zweifel beseitigen und zur Aktion führen — Anruf, Angebot oder Kauf. Geschwindigkeit, Mobile, SEO und Tracking sind von Anfang an integriert, nicht nachträglich. Das Ergebnis: eine schnelle, elegante und vor allem messbare Website.",
      "valueProp": "Eine schnelle Website, die rund um die Uhr für Sie arbeitet und Besucher in Kunden verwandelt.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Geliefert, geschult, autonom",
            "p": "Sie gehen mit einer Website, die Sie bedienen können. Wir schulen Sie, statt Sie abhängig zu machen."
          }
        ]
      },
      "intro": "Schnelle, schöne Websites, die konvertieren. Schaufenster, E-Commerce oder Landingpage — Ihr bester Verkäufer, rund um die Uhr geöffnet.",
      "benefits": [
        {
          "h": "Schnell & flüssig",
          "p": "Eine performante Website, die schnell lädt: bessere Erfahrung, besseres SEO."
        },
        {
          "h": "Für Conversion gebaut",
          "p": "Jede Seite führt den Besucher zur Aktion: Anruf, Angebot oder Kauf."
        },
        {
          "h": "Auf jedem Bildschirm",
          "p": "Makellos auf Mobil, Tablet und Desktop."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Maßgeschneidertes Design",
        "Responsive Entwicklung",
        "Speed- & SEO-Optimierung",
        "Formulare & Kontakt",
        "Hosting & Go-live",
        "Schulung & Wartung"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Rahmen",
            "p": "Ziele, Struktur und Inhalte: Wir legen die Basis."
          },
          {
            "h": "Design & Dev",
            "p": "Wir gestalten, entwickeln und testen auf jedem Gerät."
          },
          {
            "h": "Go-live",
            "p": "Launch, Monitoring und Optimierung nach dem Release."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Kann ich sie selbst bearbeiten?",
            "a": "Ja, wir bauen eine leicht zu verwaltende Website und schulen Sie in der Bedienung."
          },
          {
            "q": "Ist SEO enthalten?",
            "a": "Die technischen SEO-Grundlagen sind von Anfang an integriert. Tiefere SEO-Betreuung ist als Option möglich."
          },
          {
            "q": "Wie lange dauert eine Website?",
            "a": "Eine Schaufenster-Website dauert meist 3 bis 6 Wochen, je nach Seiten und Funktionen."
          }
        ]
      },
      "cta": {
        "h": "Eine Website, die Ihrer Marke gerecht wird?",
        "p": "Wir bauen eine schnelle, schöne, effektive Website.",
        "btn": "Website starten"
      }
    },
    "design-ui-ux": {
      "tag": "Leistung · Design",
      "title": "UI/UX-DESIGN & BRANDING",
      "heroCta": "Produkt gestalten",
      "lead": "Ein komplexes Produkt, das einfach wirkt — das ist gutes Design.",
      "context": "Klare Interfaces. Durchdachte Flows. Design-Systeme, die bleiben. Vom Logo und der Markenidentität bis zum pixelgenauen Produktdesign machen wir komplexe Produkte einfach — und einfache Produkte unverzichtbar. Design ist kein Anstrich: Es sorgt dafür, dass man versteht, bleibt und wiederkommt.",
      "valueProp": "Klare Interfaces und konsistentes Design, die Ihr Produkt selbsterklärend machen.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Design-System geliefert",
            "p": "Sie erhalten eine wiederverwendbare Komponenten-Bibliothek, bereit zu wachsen."
          }
        ]
      },
      "intro": "Klare Interfaces, durchdachte Flows, langlebige Design-Systeme. Vom Logo bis zum pixelgenauen Produktdesign machen wir das Komplexe einfach und das Einfache essenziell.",
      "benefits": [
        {
          "h": "Einfach zu nutzen",
          "p": "Klare Flows, die Reibung und Abbrüche reduzieren."
        },
        {
          "h": "Überall konsistent",
          "p": "Ein Design-System vereint Interface, Marke und Kommunikation."
        },
        {
          "h": "Einprägsam",
          "p": "Eine starke Identität, die Sie erkennbar und begehrenswert macht."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Research & UX-Audit",
        "Wireframes & Flows",
        "UI-Design & Prototypen",
        "Design-System & Komponenten",
        "Logo & Markenidentität",
        "Entwickler-Handoff"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Verstehen",
            "p": "Wir untersuchen Ihre Nutzer, ihre Bedürfnisse und Hürden."
          },
          {
            "h": "Gestalten",
            "p": "Wireframes, Interfaces und früh getestete Prototypen."
          },
          {
            "h": "Systematisieren",
            "p": "Ein konsistentes Design-System, bereit für die Entwicklung."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "UX und UI — was ist der Unterschied?",
            "a": "UX ist Flow und Logik — alles klar und reibungslos. UI ist die Optik — Farben, Typo, Komponenten. Beides gehört zusammen."
          },
          {
            "q": "Machen Sie auch Branding?",
            "a": "Ja. Wir starten von Ihrem Logo und Ihrer Markenidentität oder erstellen sie und führen sie bis ins Produkt weiter."
          },
          {
            "q": "Bekomme ich die Quelldateien?",
            "a": "Ja, Sie erhalten die Dateien (Figma) und ein dokumentiertes Design-System, bereit für Ihre Teams."
          }
        ]
      },
      "cta": {
        "h": "Ein Produkt, das großes Design verdient?",
        "p": "Wir gestalten ein klares, konsistentes, einprägsames Erlebnis.",
        "btn": "Produkt gestalten"
      }
    },
    "identite-visuelle": {
      "tag": "Leistung · Design",
      "title": "VISUELLE IDENTITÄT & DESIGN",
      "heroCta": "Identität erstellen",
      "lead": "Man erkennt Sie, bevor man Sie liest.",
      "context": "Ihre visuelle Identität ist der erste Händedruck — oft der einzige. In Millisekunden entscheidet ein Besucher, ob er Ihnen vertraut. Wir bauen eine kohärente visuelle Welt — Logo, Farben, Typografie, Muster, Bildsprache — die Ihre Positionierung ohne ein Wort erzählt, überall funktioniert und Sie sofort in eine höhere Preisklasse hebt.",
      "valueProp": "Eine Identität, die man auf den ersten Blick erkennt und die sofort Vertrauen schafft.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Ihnen gehört alles",
            "p": "Quelldateien, Design und Varianten gehören Ihnen — keine Abhängigkeit."
          }
        ]
      },
      "intro": "Logo, Farben, Typografie, visuelle Welt: eine Identität, die zu Ihnen passt und auf den ersten Blick erkannt wird.",
      "benefits": [
        {
          "h": "Ein einprägsames Bild",
          "p": "Eine unverwechselbare visuelle Welt, die bleibt und Vertrauen schafft."
        },
        {
          "h": "Konsistenz",
          "p": "Alle Ihre Materialien sprechen mit einer visuellen Stimme, von Web bis Print."
        },
        {
          "h": "Professionalität",
          "p": "Ein gepflegtes Bild, das Sie eine Liga höher spielen lässt."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Logo & Varianten",
        "Farbpalette",
        "Typografie",
        "Vollständiges Corporate Design",
        "Social-Media-Vorlagen",
        "Print- & Web-Assets"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Exploration",
            "p": "Moodboards und kreative Richtungen aus Ihrer Strategie."
          },
          {
            "h": "Kreation",
            "p": "Wir gestalten Ihre Identität und verfeinern sie mit Ihnen."
          },
          {
            "h": "Lieferung",
            "p": "Komplettes Design + Quelldateien, überall einsatzbereit."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Bekomme ich die Quelldateien?",
            "a": "Ja, Ihre Identität gehört Ihnen: Vektordateien, Design und Varianten sind Ihr Eigentum."
          },
          {
            "q": "Überarbeiten Sie mein bestehendes Logo?",
            "a": "Komplettes Redesign oder sanfte Weiterentwicklung: Wir passen uns Ihrem Bedarf und Ihrer Geschichte an."
          },
          {
            "q": "Ist Print enthalten?",
            "a": "Ja, wir übertragen die Identität auf alle Materialien: Karten, Beschilderung, Verpackung, Social."
          }
        ]
      },
      "cta": {
        "h": "Lust auf ein Bild, das auffällt?",
        "p": "Wir gestalten eine Identität, die zu Ihnen passt.",
        "btn": "Identität erstellen"
      }
    },
    "seo-conversion": {
      "tag": "Leistung · SEO & Conversion",
      "title": "SEO & CONVERSION-OPTIMIERUNG",
      "heroCta": "Audit anfordern",
      "lead": "Von denen gefunden werden, die Sie bereits suchen.",
      "context": "Jeden Tag tippen Ihre künftigen Kunden Ihre Leistungen bei Google ein. Die eigentliche Frage: Finden sie Sie oder einen Wettbewerber? Wir bearbeiten beide Hälften der Gleichung: für die relevanten Suchen aufsteigen — technisches SEO, Content, lokales SEO Luxemburg — und diesen Traffic durch Conversion-Optimierung, Tracking und Tests in Kunden verwandeln. Kein Lärm: eine Methode und Zahlen.",
      "valueProp": "Bei Google von denen gefunden werden, die bereits suchen — und diesen Traffic in Kunden verwandeln.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Kostenloses Audit, ohne Fachchinesisch",
            "p": "Wir starten mit einer klaren, bezifferten Diagnose. Sie wissen genau, wo Sie anfangen."
          }
        ]
      },
      "intro": "Die beste Website der Welt nützt nichts, wenn niemand sie findet — und eine Flut an Besuchern ist wertlos, wenn sie wieder geht. Wir arbeiten an beidem: bei Google sichtbar sein und jeden Besuch in einen Kunden verwandeln.",
      "benefits": [
        {
          "h": "Mehr Sichtbarkeit",
          "p": "Wir steigen bei Google für die Suchen, die für Ihr Geschäft zählen."
        },
        {
          "h": "Mehr Conversions",
          "p": "Wir konvertieren mehr Besucher, ohne mehr für Werbung auszugeben."
        },
        {
          "h": "Datenbasierte Entscheidungen",
          "p": "Zuverlässiges Tracking und klare Dashboards: Wir wissen, was funktioniert."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "SEO- & Wettbewerbsaudit",
        "Technisches SEO & Core Web Vitals",
        "Content & Keywords",
        "Lokales SEO (Luxemburg)",
        "Conversion-Optimierung (CRO)",
        "Tracking, Analytics & Reporting"
      ],
      "method": {
        "title": "Unsere Methode",
        "steps": [
          {
            "h": "Audit",
            "p": "Wir analysieren Ihre Sichtbarkeit, Ihre Website und Ihre Wettbewerber. Ein klares, beziffertes Bild."
          },
          {
            "h": "Optimierung",
            "p": "Wir verbessern Technik, Content und Schlüsselseiten, um zu steigen und besser zu konvertieren."
          },
          {
            "h": "Tests",
            "p": "Wir testen, vergleichen und behalten, was funktioniert. Entscheidungen fallen datenbasiert."
          },
          {
            "h": "Messen",
            "p": "Monatliches Reporting, verfolgte Ziele, laufende Verbesserung."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Wie lange bis zu SEO-Ergebnissen?",
            "a": "SEO ist Langzeitarbeit: Erste Effekte zeigen sich oft nach 2 bis 3 Monaten und verstärken sich danach. Conversion kann sich schon mit den ersten Optimierungen verbessern."
          },
          {
            "q": "Muss ich meine ganze Website neu bauen?",
            "a": "Nicht unbedingt. Wir gehen vom Bestehenden aus: Oft genügen einige gezielte Optimierungen vor einem Relaunch."
          },
          {
            "q": "Machen Sie lokales SEO in Luxemburg?",
            "a": "Ja. Wir optimieren Ihr Google-Profil, Ihre Bewertungen und Ihre lokale Präsenz für „in meiner Nähe“-Suchen."
          },
          {
            "q": "Ist das Audit wirklich kostenlos?",
            "a": "Ja, das erste SEO- & Conversion-Audit ist kostenlos und unverbindlich — eine klare Diagnose, wo man anfängt."
          }
        ]
      },
      "cta": {
        "h": "Schauen wir uns Ihre Sichtbarkeit gemeinsam an?",
        "p": "Kostenloses SEO- & Conversion-Audit — ein klares Bild, ohne Fachchinesisch.",
        "btn": "Audit anfordern"
      }
    },
    "conseil-it": {
      "tag": "Leistung · Beratung",
      "title": "IT-BERATUNG & DIGITALSTRATEGIE",
      "heroCta": "Projekt planen",
      "lead": "Die richtige Technologie, zur richtigen Zeit, aus dem richtigen Grund.",
      "context": "Bevor eine Zeile Code entsteht, muss klar sein, wohin es geht. Wir helfen, die echten Fragen zu klären: welches Tool, welche Architektur, was bauen, kaufen oder integrieren — und in welcher Reihenfolge. Wir prüfen den Bestand, schärfen die Roadmap und bewerten die Prioritäten, damit Sie in das Richtige investieren und teure technische Sackgassen vermeiden. Ein externer, unabhängiger Blick im Dienst Ihrer Geschäftsziele.",
      "valueProp": "Eine klare Technologie-Roadmap, abgestimmt auf Ihre Ziele und Ihr Budget.",
      "proof": {
        "title": "Was Sie beruhigt",
        "items": [
          {
            "h": "In Luxemburg ansässig",
            "p": "Ein naher, reaktionsschneller Ansprechpartner, der Ihren lokalen Markt kennt."
          },
          {
            "h": "Ohne Verpflichtung",
            "p": "Wir beginnen mit einem kostenlosen Gespräch. Sie machen nur weiter, wenn es passt."
          },
          {
            "h": "Durchgehend transparent",
            "p": "Klares Angebot, angekündigte Fristen, keine Überraschungen: Sie wissen immer, wo das Projekt steht."
          },
          {
            "h": "Unabhängig",
            "p": "Wir verkaufen keine Lizenzen: Unsere Empfehlungen dienen Ihnen, nicht einem Anbieter."
          }
        ]
      },
      "intro": "IT-Beratung und Digitalstrategie: Audit, Architektur und Roadmap. Wir helfen Ihnen, die richtige Technologie zu wählen und in das zu investieren, was wirklich zählt.",
      "benefits": [
        {
          "h": "Eine klare Vision",
          "p": "Eine priorisierte Roadmap, die Technologie und Geschäftsziele verbindet."
        },
        {
          "h": "Weniger Risiko",
          "p": "Wir erkennen technische Sackgassen und versteckte Kosten früh."
        },
        {
          "h": "Fundierte Entscheidungen",
          "p": "Bauen, kaufen oder integrieren: Wir entscheiden mit Argumenten, nicht Bauchgefühl."
        }
      ],
      "includedTitle": "Was enthalten ist",
      "included": [
        "Technisches & Bestands-Audit",
        "Architektur & Tech-Auswahl",
        "Priorisierte Roadmap",
        "Kalkulation & Abwägungen",
        "Team-Begleitung",
        "Follow-up & Steuerung"
      ],
      "method": {
        "title": "So arbeiten wir",
        "steps": [
          {
            "h": "Audit",
            "p": "Wir analysieren Bestand, Tools und echte Bedürfnisse."
          },
          {
            "h": "Strategie",
            "p": "Wir definieren Zielarchitektur und Roadmap."
          },
          {
            "h": "Steuerung",
            "p": "Wir begleiten die Umsetzung und justieren unterwegs."
          }
        ]
      },
      "faq": {
        "title": "Häufige Fragen",
        "items": [
          {
            "q": "Für welche Unternehmensgröße?",
            "a": "Von Solo-Gründern bis KMU: Sobald Technologie Ihr Geschäft belastet, spart klares Scoping Zeit und Geld."
          },
          {
            "q": "Drängen Sie eigene Tools auf?",
            "a": "Nein. Wir sind unabhängig und verkaufen keine Lizenzen: Wir empfehlen, was Ihrem Projekt wirklich dient."
          },
          {
            "q": "Und nach der Beratung?",
            "a": "Wir können bei der Roadmap enden oder sie mit Ihnen umsetzen — Entwicklung, Design oder Steuerung."
          }
        ]
      },
      "cta": {
        "h": "Ein Digitalprojekt zu planen?",
        "p": "Wir klären Strategie und Technologie, bevor Sie investieren.",
        "btn": "Projekt planen"
      }
    },
    "objectifs": {
      "tag": "Ihre Ziele",
      "title": "GESCHÄFTSZIELE STATT LIEFERUNGEN",
      "lead": "Wir verkaufen keine Lieferungen. Wir verkaufen Ergebnisse.",
      "context": "Die meisten Agenturen sprechen über Posts, Seiten oder Kampagnen. Wir beginnen mit der einzigen Frage, die zählt: Was soll es Ihnen bringen? Erst dann wählen wir die Hebel. Jeder investierte Euro verfolgt ein klares Ziel — Bekanntheit, Leads, Verkäufe oder Loyalität — und jedes Ergebnis wird gemessen.",
      "intro": "Jede Maßnahme hat einen Grund und ein messbares Ergebnis. Wir gehen von Ihren Geschäftszielen aus, nicht von unseren Gewohnheiten — und richten Strategie, Kreation und Distribution danach aus.",
      "blocks": [
        {
          "h": "Bekanntheit",
          "p": "Gesehen, erkannt und erinnert werden in Ihrem Markt. Wir bauen eine Präsenz, die sich einprägt.",
          "items": [
            "Reichweite & Impressionen",
            "Markenbekanntheit",
            "Presse- & Social-Reichweite",
            "Share of Voice"
          ]
        },
        {
          "h": "Akquise",
          "p": "Wirklich qualifizierte Interessenten gewinnen, nicht nur Traffic. Wir verwandeln Aufmerksamkeit in Chancen.",
          "items": [
            "Qualifizierter Traffic",
            "Leads & Angebotsanfragen",
            "Kosten pro Akquise",
            "Neue Zielgruppen"
          ]
        },
        {
          "h": "Conversion",
          "p": "Interesse in Kunden verwandeln. Wir beseitigen Hürden und erleichtern jeden Schritt bis zum Kauf.",
          "items": [
            "Conversion-Rate",
            "Optimierte Journeys",
            "Warenkorb & Umsatz",
            "Social Proof"
          ]
        },
        {
          "h": "Kundenbindung",
          "p": "Wiederkommen und weiterempfehlen lassen. Eine geliebte Marke ist eine Marke, die bleibt.",
          "items": [
            "Retention & Wiederkauf",
            "Engagierte Community",
            "Bewertungen & Empfehlungen",
            "Customer Lifetime Value"
          ]
        }
      ],
      "cta": {
        "h": "Was ist Ihr nächstes Ziel?",
        "p": "Sagen Sie uns, wohin Sie wollen — wir zeichnen den Weg.",
        "btn": "Ziel festlegen"
      }
    }
  }
};
