export interface DevProjectImage {
  src: string;
  alt: string;
  type?: 'cover' | 'desktop' | 'mobile' | 'architecture' | 'document';
}

// Décrit les données nécessaires à l'affichage d'une carte projet DEV.
export interface DevProject {
  // Identifiant stable utilisé pour générer la route interne de la fiche projet.
  slug: string;
  name: string;
  description: string;
  // URL GitHub optionnelle, affichée seulement lorsqu'un dépôt fiable existe.
  url?: string;
  stack: string[];
  filters: string[];
  // Visuel de synthèse utilisé par la carte de la page DEV.
  cover?: DevProjectImage;
  // Visuels éditoriaux complémentaires réservés à la fiche projet.
  gallery?: DevProjectImage[];
  // Champs éditoriaux optionnels prévus pour les futures études de cas.
  context?: string;
  objectives?: string[];
  // Libellé de rôle affiché au-dessus de l'introduction de la fiche.
  projectType?: string;
  // Livrables documentaires d'un projet de cadrage ou de gestion de projet.
  deliverables?: string[];
  // Éléments de pilotage du projet, distincts de l'implémentation technique.
  projectManagement?: string[];
  // Outils utilisés pour organiser et suivre un projet.
  managementTools?: string[];
  // Technologies définies comme architecture proposée, sans les présenter comme réalisées.
  proposedStack?: string[];
  // Liste optionnelle des composants qui structurent l'interface du projet.
  architecture?: string[];
  // Étapes optionnelles utilisées pour représenter le cheminement d'une architecture technique.
  architectureFlow?: string[];
  // Explication synthétique associée au cheminement de l'architecture.
  architectureDescription?: string;
  // Titre optionnel pour préciser qu'une architecture est proposée et non réalisée.
  architectureTitle?: string;
  skills?: string[];
  features?: string[];
  // Constats issus d'un audit initial lorsque le projet est une optimisation existante.
  audit?: string[];
  // Optimisations de chargement et de ressources effectivement documentées pour le projet.
  performance?: string[];
  // Optimisations SEO techniques effectivement documentées pour le projet.
  seo?: string[];
  // Améliorations d'accessibilité effectivement documentées pour le projet.
  accessibility?: string[];
  // Exemples de spécifications décrivant une fonctionnalité prévue.
  specifications?: Array<{ title: string; description: string }>;
  // Ressources de veille utilisées pour confirmer des choix ou anticiper la maintenance.
  technologyWatch?: string[];
  // Sections éditoriales supplémentaires, avec un statut explicite lorsque nécessaire.
  sections?: Array<{ title: string; description?: string; items?: string[]; status?: 'current' | 'roadmap' | 'vision' }>;
  challenge?: string;
  solution?: string;
  // Étapes optionnelles qui détaillent une démarche de résolution itérative.
  solutionSteps?: string[];
  // Points de sécurité effectivement prévus ou réalisés dans le projet.
  security?: string[];
  results?: string[];
  improvements?: string[];
  // URL de démonstration optionnelle lorsqu'un projet en possède une.
  demoUrl?: string;
  // Liens vers des documents ou outils externes associés au projet.
  resources?: Array<{ label: string; href: string; download?: boolean }>;
  // Titre SEO spécifique lorsqu'un projet n'est pas une réalisation de développement.
  seoTitle?: string;
  // Étapes versionnées qui doivent être distinguées du périmètre actuellement réalisé.
  roadmap?: Array<{ version: string; title: string; status: 'roadmap' | 'vision'; description: string; items: string[] }>;
  featured?: boolean;
}

// Liste ordonnée des filtres affichés sur la page DEV.
export const devFilters = [
  ['all', 'Tous'],
  ['front-end', 'Front-end'],
  ['back-end', 'Back-end'],
  ['react', 'React'],
  ['javascript', 'Javascript'],
  ['css', 'CSS'],
  ['node', 'Node'],
  ['express', 'Express'],
  ['vite', 'Vite'],
  // Filtre de navigation utile au projet mobile personnel développé en TypeScript.
  ['typescript', 'TypeScript'],
  // Filtre dédié au cadrage, à la planification et aux spécifications Qwenta.
  ['gestion-projet', 'Gestion de projet'],
] as const;

// Liste ordonnée des repositories affichés dans la grille DEV.
export const devProjects: DevProject[] = [
  {
    // Application personnelle Expo destinée à rendre visibles les économies liées à l'arrêt du tabac.
    slug: 'convertsseur',
    // Nom éditorial de l'application ; le slug et le dépôt historique restent inchangés.
    name: 'Smokonomy',
    description: 'Projet personnel d’Arnaud Piette : application web permettant de visualiser le coût du tabac et les économies potentielles réalisées après l’arrêt.',
    url: 'https://github.com/arnaudpiette/CONVERTSSEUR',
    stack: ['TypeScript', 'React Native', 'Expo', 'Expo Router', 'Zustand', 'AsyncStorage', 'Supabase', 'Jest'],
    filters: ['front-end', 'react', 'typescript'],
    featured: true,
    cover: { src: '/projets/dev/smokonomy/cover.webp', alt: 'Écran d’accueil mobile de Smokonomy présentant le calcul du budget cigarettes', type: 'mobile' },
    gallery: [
      { src: '/projets/dev/smokonomy/sos.webp', alt: 'Écran SOS mobile de Smokonomy montrant la valeur récupérée en évitant une cigarette', type: 'mobile' },
      { src: '/projets/dev/smokonomy/calcul-objectifs.webp', alt: 'Écran mobile de Smokonomy proposant un objectif à financer après le calcul du budget cigarettes', type: 'mobile' },
      { src: '/projets/dev/smokonomy/calcul-consommation.webp', alt: 'Écran mobile de Smokonomy permettant de renseigner la consommation et la marque de cigarettes', type: 'mobile' },
      { src: '/projets/dev/smokonomy/explorer.webp', alt: 'Écran Explorer mobile de Smokonomy avec une suggestion de voyage finançable', type: 'mobile' },
      { src: '/projets/dev/smokonomy/dashboard.webp', alt: 'Tableau de bord Explorer mobile de Smokonomy avec une suggestion de voyage', type: 'mobile' },
      { src: '/projets/dev/smokonomy/explorer-detail.webp', alt: 'Détail mobile d’une suggestion de voyage dans Smokonomy', type: 'mobile' },
    ],
    projectType: 'Projet personnel — sensibilisation à l’arrêt du tabac',
    // Titre de fiche spécifique à l’application personnelle Smokonomy.
    seoTitle: 'Smokonomy — Application web — Arnaud Piette',
    context: 'CONVERTSSEUR est une application personnelle conçue pour rendre visible le coût financier du tabac. Elle transforme la consommation déclarée en budget, économies potentielles et exemples concrets de projets ou d’achats que cette somme pourrait financer.',
    objectives: [
      'Faire prendre conscience du coût financier du tabac.',
      'Calculer un budget à partir de la consommation, du prix et du format du paquet.',
      'Projeter ce budget dans le temps et le relier à des objectifs concrets.',
      'Permettre de suivre une économie déclarée et la progression d’un objectif.',
      'Conserver un premier résultat localement, y compris sans compte.',
    ],
    architectureFlow: ['Écrans Expo Router', 'Hooks et composants React Native', 'Services de calcul et d’équivalences', 'Stores Zustand', 'AsyncStorage / Supabase'],
    architectureTitle: 'Architecture applicative',
    architectureDescription: 'L’application sépare les écrans Expo Router, les composants React Native, les services de calcul, les données d’équivalences et les stores Zustand. Les données invité sont persistées avec AsyncStorage ; une architecture Supabase existe pour les comptes authentifiés.',
    features: [
      'Saisie de la consommation quotidienne, de la marque, du prix et du format du paquet.',
      'Suggestions de produits de tabac et mode de saisie manuelle.',
      'Calcul du budget quotidien, mensuel et des projections par période.',
      'Suggestions d’achats ou projets, avec possibilité de choisir un objectif.',
      'Suivi quotidien de la consommation et des économies, sans double saisie pour un même objectif et une même date.',
      'Évolution de l’épargne visualisée par un graphique interactif.',
      'Outil SOS financier pour visualiser le bénéfice de ne pas fumer une cigarette.',
    ],
    sections: [
      {
        title: 'Logique métier et projections',
        status: 'current',
        description: 'Le calcul détermine d’abord le nombre de paquets fumés chaque jour, puis le budget quotidien et le budget mensuel sur une base de 30,4375 jours. Chaque projection correspond ensuite au budget mensuel multiplié par la durée sélectionnée.',
        items: ['Paquets par jour = cigarettes consommées par jour ÷ nombre de cigarettes par paquet.', 'Coût quotidien = paquets par jour × prix du paquet ; coût mensuel = coût quotidien × 30,4375.', 'Projection = coût mensuel × multiplicateur de la période.', 'Périodes implémentées : de 1 à 11 mois, puis de 1 à 60 ans.', 'Plan invité gratuit : 1 mois, 2 mois, 3 mois et 1 an.', 'Les périodes au-delà de ces limites sont prévues dans la logique d’accès Premium ; aucune période d’une semaine n’est implémentée dans le code actuel.'],
      },
      {
        title: 'Données et stockage',
        status: 'current',
        description: 'Le profil recueille la consommation quotidienne, la marque, le prix du paquet, le nombre de cigarettes par paquet et la devise. Les calculs, objectifs, favoris et entrées d’épargne sont conservés localement pour le parcours invité.',
        items: ['Zustand et AsyncStorage persistent notamment le profil, la période active, les objectifs et les économies.', 'Supabase est présent comme architecture de synchronisation pour les comptes authentifiés ; la fiche ne le présente pas comme une synchronisation finalisée.'],
      },
      {
        title: 'Objectifs, équivalences et visualisation',
        status: 'current',
        description: 'Le budget est rapproché d’un catalogue d’équivalences : expériences, loisirs, technologie, mobilité, voyages, maison ou projets personnels. L’utilisateur peut choisir un objectif et en suivre la progression.',
        items: ['Le graphique d’évolution affiche les économies manuelles et celles liées aux cigarettes évitées.', 'Le parcours gratuit conserve un historique de sept jours et une sélection limitée de propositions par période.', 'Les projections avancées, l’historique complet et certains usages multi-objectifs sont réservés aux niveaux d’accès définis par l’application.'],
      },
      {
        title: 'Expérience et accessibilité',
        status: 'current',
        description: 'L’interface est conçue avec React Native et adapte la largeur des cartes aux dimensions disponibles. Les actions principales utilisent des libellés d’accessibilité et des rôles de bouton lorsque nécessaires.',
        items: ['Choix rapides pour la consommation quotidienne, recherche de marque et saisie manuelle.', 'Étapes d’onboarding, retours explicites sur les limites d’accès et actions de partage.', 'Le graphique fournit une description accessible de ses données et des libellés pour chaque barre interactive.'],
      },
      {
        title: 'Tests et qualité',
        status: 'current',
        description: 'Le dépôt contient des tests Jest dédiés au calcul budgétaire, aux prix du tabac, aux équivalences, aux objectifs, au suivi quotidien et au stockage invité.',
      },
    ],
    challenge: 'Transformer une dépense quotidienne abstraite en une projection financière compréhensible, motivante et reliée à des objectifs personnels, sans réduire l’expérience à un simple convertisseur de valeurs.',
    solution: 'La solution combine une logique de calcul centralisée, des projections temporelles, un catalogue d’équivalences, des objectifs suivis dans le temps et un parcours local persistant. Les services isolent le calcul, les prévisions et le suivi afin de rendre les règles testables.',
    results: ['L’application permet d’estimer le budget cigarettes, de le projeter dans le temps et de l’associer à des projets concrets.', 'Elle offre un parcours invité persistant avec objectifs, suivi quotidien, graphique d’épargne et mécanisme SOS financier.'],
    improvements: ['Valider les achats réels sur appareils physiques avant toute activation Premium.', 'Finaliser la synchronisation Supabase et la suppression de compte côté serveur.', 'Ajouter les exports image/PDF prévus avant de les exposer.', 'Poursuivre les tests sur appareils, tailles d’écran et parcours d’accessibilité.'],
  },
  {
    // Projet personnel principal : assistant macOS local-first en évolution interne.
    slug: 'noon',
    cover: { src: '/projets/dev/noon/cover.webp', alt: 'Interface principale de l’assistant Noon sur macOS', type: 'cover' },
    gallery: [
      { src: '/projets/dev/noon/detail-01.webp', alt: 'Conversation Noon avec la documentation technique Node.js', type: 'desktop' },
      { src: '/projets/dev/noon/detail-02.webp', alt: 'Noon Control Center présentant l’état des composants de l’application', type: 'desktop' },
    ],
    name: 'Noon',
    description: 'Assistant personnel IA local-first pour macOS, avec mémoire privée, voix, projets, intégrations et orchestration de modèles.',
    stack: ['Electron', 'JavaScript', 'Node.js', 'SQLite', 'APIs IA', 'Architecture multi-provider', 'Mémoire locale', 'SafeStorage', 'OAuth Google', 'Git / GitHub'],
    filters: ['front-end', 'back-end', 'javascript', 'node'],
    featured: true,
    projectType: 'Projet personnel phare — V1 interne',
    seoTitle: 'Noon — Assistant personnel IA local — Arnaud Piette',
    context: 'Noon est un assistant personnel IA local-first que je conçois et développe pour macOS. Le projet vise à réunir conversation, mémoire privée, voix, projets, automatisations et intégrations dans une seule application, tout en gardant le contrôle sur les données transmises aux fournisseurs d’intelligence artificielle.',
    objectives: [
      'Disposer d’un assistant personnel utilisable quotidiennement.',
      'Conserver une mémoire privée locale et la continuité des conversations et projets.',
      'Utiliser la voix et exploiter plusieurs fournisseurs d’IA.',
      'Connecter des services externes de manière contrôlée.',
      'Préparer des actions sans effectuer d’action distante sensible sans validation.',
      'Proposer une expérience cohérente entre chat, mémoire, voix et outils.',
    ],
    architectureFlow: ['Interface Noon', 'Conversation / Voice / Projects', 'Model Router', 'Providers IA', 'Memory / SQLite', 'Integrations', 'macOS'],
    architectureTitle: 'Architecture conceptuelle V1',
    architectureDescription: 'L’interface, la logique métier, les données locales et les fournisseurs sont séparés. Noon conserve l’identité, les règles et les permissions ; les providers IA sont des moteurs consultés par le Model Router selon les besoins et les politiques appliquées.',
    sections: [
      {
        title: 'Mémoire privée',
        status: 'current',
        description: 'Noon conserve une mémoire locale persistante pour retrouver du contexte entre les conversations, maintenir la continuité après redémarrage et permettre la correction ou l’oubli d’informations. Les données privées restent hors du dépôt Git.',
        items: ['Les données locales privées sont distinctes des informations minimisées qui peuvent être envoyées à un fournisseur IA pour produire une réponse.', 'Les contenus privés sont chiffrés dans la base locale ; la clé est protégée par SafeStorage sur macOS.', 'Les mémoires corrigées, oubliées ou marquées local-only ne sont pas injectées dans une requête distante.'],
      },
      {
        title: 'Multi-provider',
        status: 'current',
        description: 'Noon reste l’identité et l’interface unique. Le Model Router peut sélectionner un moteur spécialisé selon la tâche ; le fournisseur ne devient pas l’identité de l’assistant.',
        items: ['Critères pris en compte : complexité, coût, confidentialité, qualité attendue, latence et disponibilité.', 'Les appels et outils de providers restent soumis aux règles de permissions et d’approbation de Noon.'],
      },
      {
        title: 'Voix',
        status: 'current',
        description: 'La V1 comprend un wake word local, une entrée vocale et une synthèse vocale. La conversation vocale dépend des providers disponibles et sa validation physique complète reste à terminer.',
        items: ['Cedar est la voix canonique prioritaire tant qu’Arbor n’est pas réellement disponible via l’API ou le provider utilisé par Noon.', 'Arbor reste une préférence future et n’est pas présenté comme opérationnel.', 'Le wake word local reste facultatif et le microphone ne démarre pas silencieusement au lancement.'],
      },
      {
        title: 'Intégrations',
        status: 'current',
        description: 'Noon prépare des intégrations Gmail, Google Calendar, GitHub et Figma avec des permissions explicites et minimales. Les parcours OAuth et les accès distants réels qui restent en test ne sont pas présentés comme finalisés.',
        items: ['Gmail et Calendar privilégient un accès contrôlé avec des autorisations minimales.', 'Les actions distantes sensibles nécessitent une validation utilisateur liée à l’action précise.'],
      },
      {
        title: 'Projets et proactivité',
        status: 'current',
        description: 'Les projets regroupent des conversations et leur contexte partagé, afin de faire de Noon un espace de travail plutôt qu’une simple succession de chats. Le moteur de brief quotidien structure journée, lendemain, agenda, rappels, notes, priorités et créneaux libres.',
        items: ['Une conversation peut être organisée dans un projet pour partager son contexte avec les sujets liés.', 'La proactivité peut proposer ou préparer ; les actions sensibles restent soumises à validation.', 'La livraison réelle du brief à heure fixe et après veille reste une validation à finaliser.'],
      },
      {
        title: 'Tests, fiabilité et packaging',
        status: 'current',
        description: 'La démarche V1 combine tests automatisés, contrôles de lint et build, vérification des migrations SQLite, tests de continuité et mémoire, contrôles de sécurité et vérification avant packaging.',
        items: ['Des tests E2E sont utilisés lorsqu’ils sont disponibles ; les validations physiques restent distinguées des tests automatisés.', 'Le packaging macOS x64 peut être construit pour un usage interne.', 'La V1 est une Internal Alpha : signature Developer ID, notarisation Apple et validation complète de distribution ne sont pas finalisées.'],
      },
      {
        title: 'Au-delà d’un simple chatbot',
        status: 'current',
        description: 'Noon associe mémoire persistante, local-first, projets, proactivité, outils, intégrations, automatisations, multi-provider et continuité, tout en gardant le contrôle utilisateur pour les décisions sensibles.',
      },
    ],
    challenge: 'Construire un assistant personnel capable de conserver une identité, une mémoire et des règles cohérentes tout en orchestrant plusieurs modèles, services externes et fonctionnalités locales. La difficulté est de concilier expérience utilisateur, confidentialité, IA, mémoire, automatisation, intégrations et fiabilité.',
    solution: 'La solution repose sur une architecture modulaire, une mémoire locale, un Model Router, la séparation entre UI, logique, données et providers, des permissions explicites, des tests automatisés, la validation utilisateur pour les actions sensibles et une abstraction des fournisseurs.',
    results: ['La V1 constitue un socle fonctionnel permettant de tester Noon comme assistant personnel macOS : conversation, mémoire persistante, continuité, voix, intégrations et orchestration IA sont réunies dans une même architecture.', 'Cette version reste une version interne et n’est pas encore une version publique distribuée.'],
    roadmap: [
      {
        version: 'V2',
        title: 'Intelligence multi-provider et proactivité',
        status: 'roadmap',
        description: 'Faire évoluer le socle V1 vers une orchestration plus complète de plusieurs intelligences, sans confondre les providers avec l’identité Noon.',
        items: ['Couche d’abstraction provider et routage selon coût, qualité, confidentialité, latence et disponibilité.', 'Second avis d’un autre modèle lorsque nécessaire, fournisseurs cloud et modèles locaux, délégation vers des outils spécialisés.', 'Amélioration de la proactivité, de la compréhension des projets, de l’agenda et des priorités.'],
      },
      {
        version: 'V3',
        title: 'Continuité privée multi-appareils',
        status: 'roadmap',
        description: 'Étendre Noon à Mac et iPhone avec une continuité privée et une synchronisation adaptée aux données concernées.',
        items: ['Synchronisation chiffrée des conversations, projets, rappels, préférences et contexte adapté.', 'Coffre local du Mac conservé pour les données critiques, avec séparation explicite des données synchronisées.', 'Reprise d’une tâche sur un autre appareil et raisonnement davantage orienté objectifs.'],
      },
      {
        version: 'V4',
        title: 'Plateforme d’assistants spécialisés',
        status: 'vision',
        description: 'Faire évoluer Noon vers une couche centrale capable d’héberger des assistants spécialisés avec des identités, mémoires, règles, outils et permissions isolés.',
        items: ['Assistants personnel, créatif, administratif, projet ou développement.', 'Noon conserve le contrôle des identités, permissions, sécurité, mémoire et orchestration.', 'Mode DEV natif prévu avec VS Code : analyse du dépôt, règles de projet et branche Git ; modification de plusieurs fichiers et usage du terminal.', 'Boucle prévue de tests, lint, build, détection d’erreurs, correction, vérification des régressions et analyse du diff.', 'Auto Router prévu : solution locale ou gratuite lorsque suffisante, provider peu coûteux, puis modèle plus puissant selon complexité, échecs, confidentialité, qualité, latence et coût.', 'Validation humaine requise avant tout commit ou push.'],
      },
      {
        version: 'V5',
        title: 'Système personnel IA',
        status: 'vision',
        description: 'Vision cible d’un système personnel quotidien, multi-appareils, multimodal et proactif, capable d’orchestrer modèles, agents, mémoire et automatisations contrôlées.',
        items: ['Mémoire longue durée structurée et compréhension des projets et objectifs.', 'Assistants spécialisés, Mode DEV avancé, intégrations profondes et confidentialité local-first.', 'L’utilisateur reste décisionnaire pour les actions sensibles.'],
      },
      {
        version: 'V5+',
        title: 'Vision long terme',
        status: 'vision',
        description: 'Axes de réflexion sans numéro de version formel : meilleure intelligence locale, autonomie hors ligne, personnalisation et expérience Mac/mobile cohérente.',
        items: ['Moins de dépendance à un provider unique.', 'Automatisations plus riches et écosystème d’assistants spécialisés.', 'Amélioration continue du Mode DEV.'],
      },
    ],
    improvements: ['Signature et notarisation macOS.', 'Validation réelle de certaines intégrations.', 'Amélioration continue de la voix.', 'Tests réels de sleep / wake et du comportement packagé.', 'Amélioration du routage IA.', 'Développement futur du Mode DEV.', 'Préparation du multi-device.'],
  },
  {
    // Fiche back-end du projet OpenClassrooms de référencement et notation de livres.
    slug: 'dev-web-livres',
    cover: { src: '/projets/dev/mon-vieux-grimoire/cover.svg', alt: 'Architecture backend de Mon Vieux Grimoire avec API Express, JWT et MongoDB', type: 'architecture' },
    name: 'Mon Vieux Grimoire',
    description: 'API REST sécurisée avec Node.js, Express et MongoDB pour gérer des livres et leurs utilisateurs.',
    url: 'https://github.com/arnaudpiette/Dev-Web-livres',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'JWT', 'bcrypt', 'Multer', 'Sharp', 'API REST', 'Git'],
    filters: ['back-end', 'javascript', 'node', 'express'],
    featured: true,
    context: 'Mon Vieux Grimoire est une application de référencement et de notation de livres. Le projet consistait à construire l’API back-end permettant de gérer les livres, les utilisateurs et leurs interactions, avec une attention particulière portée à la sécurité et à la gestion des données.',
    objectives: [
      'Développer une API REST avec Node.js et Express.',
      'Connecter l’application à une base MongoDB.',
      'Gérer les opérations CRUD sur les livres.',
      'Mettre en place l’authentification utilisateur et protéger les routes sensibles.',
      'Sécuriser les mots de passe.',
      'Gérer l’upload et l’optimisation des images.',
      'Vérifier que seul le propriétaire d’un livre peut le modifier ou le supprimer.',
      'Valider les données côté serveur.',
    ],
    architectureFlow: ['Routes', 'Middlewares', 'Contrôleurs', 'Modèles Mongoose', 'MongoDB'],
    architectureDescription: 'Les routes dirigent les requêtes vers les middlewares, qui appliquent notamment l’authentification. Les contrôleurs portent la logique métier et s’appuient sur les modèles Mongoose pour structurer et enregistrer les données dans MongoDB.',
    features: [
      'Création de compte et connexion utilisateur.',
      'Génération d’un token JWT.',
      'Récupération, ajout, modification et suppression de livres.',
      'Upload et optimisation des images.',
      'Système de notation et calcul de la note moyenne.',
      'Contrôle du propriétaire pour les opérations sensibles.',
    ],
    challenge: 'Sécuriser les opérations de modification et de suppression en vérifiant à la fois l’authentification de l’utilisateur et sa propriété sur la ressource. Être connecté identifie l’utilisateur grâce au token JWT ; avoir le droit de modifier un livre précis nécessite ensuite que le contrôleur vérifie que son identifiant correspond au propriétaire de ce livre.',
    solution: 'La solution repose sur un middleware d’authentification qui vérifie le JWT et récupère l’utilisateur authentifié. Le contrôleur vérifie ensuite le propriétaire de la ressource. Les modèles Mongoose structurent les données, bcrypt hash les mots de passe, Multer reçoit les images et Sharp les optimise, avec validation et gestion des erreurs côté serveur.',
    security: ['Mots de passe hashés avec bcrypt.', 'Routes protégées par authentification.', 'JWT pour identifier l’utilisateur authentifié.', 'Contrôle du propriétaire avant les modifications et suppressions.', 'Validation des données côté serveur.'],
    results: ['L’API permet de gérer les utilisateurs et les livres de manière structurée, avec des routes protégées et un contrôle d’autorisation sur les opérations sensibles.'],
    improvements: ['Ajouter des tests automatisés d’API.', 'Renforcer la validation des entrées.', 'Centraliser davantage la gestion des erreurs.', 'Mettre en place un rate limiting.', 'Améliorer les logs et la supervision.', 'Documenter l’API avec OpenAPI / Swagger.'],
  },
  {
    // Fiche de référence complète pour la première étude de cas DEV.
    slug: 'kasa',
    cover: { src: '/projets/dev/kasa/cover.webp', alt: 'Interface d’accueil Kasa présentant les logements', type: 'cover' },
    gallery: [
      { src: '/projets/dev/kasa/detail-01.webp', alt: 'Fiche détaillée d’un logement Kasa', type: 'desktop' },
      { src: '/projets/dev/kasa/mobile-01.webp', alt: 'Fiche logement Kasa en affichage mobile', type: 'mobile' },
    ],
    name: 'Kasa',
    description: 'Application front-end responsive de location immobilière développée avec React.',
    url: 'https://github.com/arnaudpiette/Kasa',
    stack: ['React', 'JavaScript', 'JSX', 'React Router', 'Sass', 'Vite', 'Git'],
    filters: ['front-end', 'react', 'javascript', 'css', 'vite'],
    featured: true,
    context: 'Kasa est une plateforme de location immobilière. Dans le cadre de ce projet OpenClassrooms, l’objectif était de reconstruire son interface front-end à partir de maquettes fournies, en mettant en place une architecture React réutilisable et responsive.',
    objectives: [
      'Intégrer les maquettes desktop et mobile.',
      'Construire l’application avec React.',
      'Créer des composants réutilisables.',
      'Mettre en place la navigation avec React Router.',
      'Afficher dynamiquement les logements à partir de données JSON.',
      'Gérer les URLs de logements invalides avec une page 404.',
      'Assurer une interface responsive.',
    ],
    architecture: ['Header', 'Footer', 'Layout', 'Banner', 'AccommodationCard', 'Collapse', 'Slideshow', 'Rating'],
    features: [
      'Liste des logements générée à partir des données JSON.',
      'Fiche logement dynamique et navigation basée sur son identifiant.',
      'Slideshow des photos avec navigation circulaire.',
      'Masquage des contrôles lorsque le logement ne possède qu’une image.',
      'Blocs Collapse réutilisables et affichage de la note.',
      'Page 404 pour les URLs invalides.',
      'Interface responsive desktop et mobile.',
    ],
    challenge: 'Transformer les maquettes en composants réutilisables tout en conservant des comportements différents selon les données et les tailles d’écran. Le Slideshow s’adapte à une ou plusieurs images, le Collapse à son état ouvert ou fermé, la note est calculée depuis la donnée et le logement est récupéré depuis l’identifiant présent dans l’URL.',
    solution: 'L’interface est découpée en composants React. Les props transmettent les données, les données JSON constituent la source des logements, React Router gère le routage dynamique et la logique conditionnelle adapte le rendu aux données. Les styles Sass/CSS assurent le responsive.',
    results: ['L’application permet de naviguer entre les logements et d’afficher leurs informations dynamiquement.', 'L’interface reste cohérente entre desktop et mobile grâce à une architecture basée sur des composants réutilisables.'],
    improvements: ['Connecter l’interface à une API réelle.', 'Ajouter des tests automatisés.', 'Améliorer encore la gestion des états de chargement et d’erreur.', 'Poursuivre les optimisations d’accessibilité.'],
  },
  {
    slug: 'portfolio', name: 'Portfolio', description: 'Le code source de ce portfolio Creative & DEV construit avec Astro.', url: 'https://github.com/arnaudpiette/Portfolio', stack: ['Astro', 'JavaScript', 'CSS'], filters: ['front-end', 'javascript', 'css', 'vite'], featured: false,
    cover: { src: '/projets/dev/portfolio/cover.webp', alt: 'Page d’accueil actuelle du portfolio Astro', type: 'cover' },
    gallery: [{ src: '/projets/dev/portfolio/detail-01.webp', alt: 'Page projets DEV du portfolio Astro', type: 'desktop' }],
  },
  {
    // Fiche d'optimisation front-end du site de photographe Nina Carducci.
    slug: 'nina-carducci',
    name: 'Nina Carducci',
    description: 'Optimisation SEO, performance et accessibilité d’un site web de photographe existant.',
    url: 'https://github.com/arnaudpiette/Nina-Carducci-Dev',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Lighthouse', 'Chrome DevTools', 'SEO', 'Accessibilité', 'Git'],
    filters: ['front-end', 'javascript', 'css'],
    featured: true,
    cover: { src: '/projets/dev/nina-carducci/cover.webp', alt: 'Page d’accueil du site de la photographe Nina Carducci', type: 'cover' },
    gallery: [
      { src: '/projets/dev/nina-carducci/detail-01.webp', alt: 'Galerie photographique du site Nina Carducci', type: 'desktop' },
      { src: '/projets/dev/nina-carducci/mobile-01.webp', alt: 'Site Nina Carducci en affichage mobile', type: 'mobile' },
    ],
    context: 'Nina Carducci est un site portfolio de photographe déjà existant. L’objectif du projet était d’en améliorer les performances, le référencement naturel et l’accessibilité sans reconstruire entièrement le site.',
    objectives: [
      'Analyser les performances du site existant.',
      'Optimiser les images et améliorer les temps de chargement.',
      'Renforcer le SEO technique et la structure sémantique.',
      'Améliorer l’accessibilité et corriger les problèmes détectés par les outils d’audit.',
      'Conserver le rendu et les fonctionnalités du site.',
    ],
    audit: ['Performance.', 'SEO.', 'Accessibilité.', 'Poids des ressources.', 'Chargement des images.', 'Structure HTML.', 'Métadonnées.'],
    performance: [
      'Optimisation des médias pour réduire leur poids et améliorer le chargement.',
      'Révision du chargement des images et des ressources.',
      'Réduction du travail inutile côté navigateur lors des optimisations ciblées.',
    ],
    seo: ['Title pertinent.', 'Meta description.', 'Structure sémantique.', 'Attributs alt.', 'Amélioration de la hiérarchie des contenus.'],
    accessibility: ['Navigation clavier.', 'Focus visible.', 'Attributs ARIA lorsque nécessaires.', 'Textes alternatifs.', 'Structure sémantique.', 'Amélioration du carousel et contrôle de l’interaction clavier.'],
    challenge: 'Améliorer significativement les performances et le référencement d’un site existant sans dégrader son rendu ni son expérience utilisateur. L’optimisation devait conserver l’identité visuelle, le contenu, les interactions, le fonctionnement du carousel et le responsive.',
    solution: 'La démarche repose sur un audit, l’identification des problèmes les plus coûteux, l’optimisation des assets, l’amélioration du HTML et des métadonnées, la correction de l’accessibilité, puis une nouvelle vérification avec Lighthouse et Chrome DevTools.',
    solutionSteps: ['Audit', 'Correction', 'Mesure', 'Nouvelle correction'],
    results: ['Le site a été allégé et optimisé afin d’améliorer son chargement, son référencement technique et son accessibilité, tout en conservant l’expérience et l’identité visuelle existantes.'],
    improvements: ['Poursuivre les tests sur plusieurs appareils et connexions.', 'Automatiser certains contrôles d’accessibilité.', 'Surveiller les Core Web Vitals en production.', 'Ajouter des tests de non-régression.', 'Poursuivre l’optimisation des ressources au fil des nouveaux contenus.'],
  },
  {
    slug: 'sophie-bluel', name: 'Sophie Bluel', description: 'Portfolio d’architecte avec galerie dynamique et authentification.', url: 'https://github.com/arnaudpiette/Portfolio-architecte-sophie-bluel', stack: ['JavaScript', 'CSS', 'API'], filters: ['front-end', 'javascript', 'css'],
    cover: { src: '/projets/dev/sophie-bluel/cover.webp', alt: 'Galerie du portfolio d’architecte Sophie Bluel', type: 'cover' },
    gallery: [{ src: '/projets/dev/sophie-bluel/mobile-01.webp', alt: 'Portfolio Sophie Bluel en affichage mobile', type: 'mobile' }],
  },
  {
    // Projet OpenClassrooms de cadrage, sans application complète développée ni dépôt GitHub associé.
    slug: 'openclassrooms-project',
    name: 'Menu Maker by Qwenta',
    description: 'Cadrage technique et gestion de projet d’une application web de création de menus pour restaurateurs.',
    stack: ['Gestion de projet', 'Kanban', 'Spécifications techniques'],
    filters: ['gestion-projet'],
    featured: true,
    cover: { src: '/projets/dev/qwenta/cover.webp', alt: 'Page d’accueil de Menu Maker by Qwenta', type: 'document' },
    gallery: [
      { src: '/projets/dev/qwenta/detail-01.webp', alt: 'Interface Qwenta de création de menu avec ajout de plats', type: 'desktop' },
      { src: '/projets/dev/qwenta/detail-02.webp', alt: 'Interface Qwenta de personnalisation typographique d’un menu', type: 'desktop' },
    ],
    projectType: 'Cadrage et gestion de projet',
    seoTitle: 'Menu Maker by Qwenta — Gestion de projet web — Arnaud Piette',
    context: 'Menu Maker est un projet de cadrage et de planification d’une application permettant à des restaurateurs de créer et gérer leurs menus en ligne. L’objectif n’était pas de développer l’application complète, mais de préparer sa réalisation en définissant les besoins, les fonctionnalités, les tâches, les choix techniques et l’organisation du projet.',
    objectives: [
      'Analyser le besoin client et le transformer en fonctionnalités.',
      'Rédiger les spécifications techniques et les user stories.',
      'Construire un Kanban et découper le développement en tâches.',
      'Définir les priorités, dépendances et estimations par story points.',
      'Proposer une architecture technique et organiser une veille technologique.',
    ],
    deliverables: ['Kanban technique.', 'Spécifications techniques.', 'Présentation destinée au client ou à l’interlocuteur projet.', 'Veille technologique.'],
    projectManagement: [
      'Kanban organisé autour de : À faire, En cours, À tester / Valider et Terminé.',
      'Cartes comprenant notamment user story, priorité, epic, story points, sous-tâches, critères de succès, spécifications techniques et dépendances.',
      'Story points utilisés pour estimer une complexité relative, et non une durée exacte.',
    ],
    managementTools: ['Notion / Kanban'],
    proposedStack: ['React', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Cloudinary', 'Puppeteer', 'Chromium', 'Brevo', 'GitHub Actions', 'Vercel', 'Render'],
    architectureFlow: ['React / Vite', 'API Node.js / Express', 'Prisma ORM', 'PostgreSQL'],
    architectureTitle: 'Flux d’architecture proposé',
    architectureDescription: 'Cette architecture est une proposition technique retenue pour l’implémentation future. Les services complémentaires prévus sont Cloudinary pour les images, Puppeteer avec Chromium pour l’export PDF, Brevo pour les e-mails transactionnels, GitHub Actions pour la CI, Vercel pour le front-end et Render pour l’API.',
    specifications: [
      { title: 'Catégories', description: 'Spécification prévue : POST /api/menus/:menuId/categories, PATCH /api/categories/:id et DELETE /api/categories/:id. Le modèle prévu est Menu 1 → N Category avec un champ position ; le contrôleur devait vérifier que le menu appartient à l’utilisateur authentifié avant modification.' },
      { title: 'Plats et images', description: 'Spécification prévue : Category 1 → N Dish, avec nom, prix, description et image. Le flux d’upload prévu était Multer, une limite de 2 Mo, Cloudinary puis l’enregistrement de l’URL dans PostgreSQL.' },
      { title: 'Export PDF', description: 'Fonctionnalité prévue : GET /api/menus/:id/export/pdf, route protégée. Le flux prévu était React → Express → Prisma → PostgreSQL → template HTML/CSS → Puppeteer / Chromium headless → PDF A4, avec les réponses Content-Type: application/pdf et Content-Disposition: attachment.' },
      { title: 'Déploiement', description: 'Scénario prévu : React / Vite sur Vercel, Node.js / Express sur Render, PostgreSQL avec Prisma, assets Cloudinary, e-mails Brevo et CI GitHub Actions. HTTPS devait être fourni par les plateformes et les variables sensibles placées en variables d’environnement.' },
    ],
    technologyWatch: ['OWASP pour suivre les évolutions de sécurité.', 'Prisma pour vérifier les choix liés à l’ORM et aux données.', 'Veille organisée pour comparer les solutions et anticiper la maintenance.'],
    challenge: 'Transformer un besoin fonctionnel en plan de développement suffisamment précis pour qu’une équipe puisse commencer l’implémentation. Cela implique de relier le besoin utilisateur aux user stories, aux tâches techniques, aux dépendances, à l’architecture et aux critères de validation.',
    solution: 'La solution repose sur un découpage fonctionnel, un Kanban, la priorisation, l’estimation relative, des spécifications détaillées, une architecture cohérente, l’identification des dépendances, des choix de services externes et une veille technologique.',
    results: ['Le projet aboutit à une feuille de route technique exploitable pour lancer le développement de Menu Maker, avec une vision claire des fonctionnalités, des dépendances, de l’architecture et des critères de validation.'],
    improvements: ['Implémenter l’application.', 'Confronter les estimations aux temps réels.', 'Compléter les tests.', 'Ajouter un environnement de staging.', 'Enrichir la documentation API.', 'Suivre les métriques de production.', 'Ajuster le backlog à partir des retours utilisateurs.'],
    resources: [
      { label: 'Consulter le Kanban et les spécifications sur Notion ↗', href: 'https://app.notion.com/p/3c63fe5aa75980cd86a0c63b0f3247bc?v=3c63fe5aa759804f904e000c9378247d&source=copy_link' },
      { label: 'Télécharger les spécifications techniques (PDF)', href: '/documents/qwenta/Piette_Arnaud_1_specifications_techniques_08-2026.pdf', download: true },
      { label: 'Télécharger la veille Inoreader (PDF)', href: '/documents/qwenta/Piette_Arnaud_3_veille_Inoreader_082026.pdf', download: true },
      { label: 'Télécharger la présentation du projet (PDF)', href: '/documents/qwenta/Piette_Arnaud_4_presentation_08-2026.pdf', download: true },
    ],
  },
].sort((firstProject, secondProject) => {
  // Maintient l'ordre éditorial défini pour la grille DEV et les routes générées.
  const displayOrder = ['noon', 'convertsseur', 'kasa', 'dev-web-livres', 'nina-carducci', 'openclassrooms-project', 'portfolio', 'sophie-bluel'];
  return displayOrder.indexOf(firstProject.slug) - displayOrder.indexOf(secondProject.slug);
});
