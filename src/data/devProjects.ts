// Décrit les données nécessaires à l'affichage d'une carte projet DEV.
export interface DevProject {
  // Identifiant stable utilisé pour générer la route interne de la fiche projet.
  slug: string;
  name: string;
  description: string;
  // URL GitHub existante, affichée depuis la fiche projet détaillée.
  url: string;
  stack: string[];
  filters: string[];
  // Champs éditoriaux optionnels prévus pour les futures études de cas.
  context?: string;
  objectives?: string[];
  // Liste optionnelle des composants qui structurent l'interface du projet.
  architecture?: string[];
  // Étapes optionnelles utilisées pour représenter le cheminement d'une architecture technique.
  architectureFlow?: string[];
  // Explication synthétique associée au cheminement de l'architecture.
  architectureDescription?: string;
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
] as const;

// Liste ordonnée des repositories affichés dans la grille DEV.
export const devProjects: DevProject[] = [
  {
    // Fiche back-end du projet OpenClassrooms de référencement et notation de livres.
    slug: 'dev-web-livres',
    name: 'Mon Vieux Grimoire',
    description: 'API REST sécurisée avec Node.js, Express et MongoDB pour gérer des livres et leurs utilisateurs.',
    url: 'https://github.com/arnaudpiette/Dev-Web-livres',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'JWT', 'bcrypt', 'Multer', 'Sharp', 'API REST', 'Git'],
    filters: ['front-end', 'javascript'],
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
  { slug: 'portfolio', name: 'Portfolio', description: 'Le code source de ce portfolio Creative & DEV construit avec Astro.', url: 'https://github.com/arnaudpiette/Portfolio', stack: ['Astro', 'JavaScript', 'CSS'], filters: ['front-end', 'javascript', 'css', 'vite'], featured: true },
  { slug: 'product-api', name: 'product-api', description: 'API produits et logique serveur en JavaScript.', url: 'https://github.com/arnaudpiette/product-api', stack: ['Node', 'Express', 'JavaScript'], filters: ['back-end', 'javascript', 'node', 'express'], featured: true },
  { slug: 'convertsseur', name: 'CONVERTSSEUR', description: 'Application de conversion développée en TypeScript.', url: 'https://github.com/arnaudpiette/CONVERTSSEUR', stack: ['TypeScript', 'Front-end'], filters: ['front-end', 'javascript', 'vite'] },
  {
    // Fiche d'optimisation front-end du site de photographe Nina Carducci.
    slug: 'nina-carducci',
    name: 'Nina Carducci',
    description: 'Optimisation SEO, performance et accessibilité d’un site web de photographe existant.',
    url: 'https://github.com/arnaudpiette/Nina-Carducci-Dev',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Lighthouse', 'Chrome DevTools', 'SEO', 'Accessibilité', 'Git'],
    filters: ['front-end', 'javascript', 'css'],
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
  { slug: 'sophie-bluel', name: 'Sophie Bluel', description: 'Portfolio d’architecte avec galerie dynamique et authentification.', url: 'https://github.com/arnaudpiette/Portfolio-architecte-sophie-bluel', stack: ['JavaScript', 'CSS', 'API'], filters: ['front-end', 'javascript', 'css'] },
  { slug: 'booki', name: 'Booki', description: 'Intégration responsive d’une plateforme de réservation.', url: 'https://github.com/arnaudpiette/Booki_avec_Companion', stack: ['HTML', 'CSS', 'Front-end'], filters: ['front-end', 'css'] },
  { slug: 'openclassrooms-project', name: 'OpenClassrooms Project', description: 'Projet d’apprentissage et d’intégration web.', url: 'https://github.com/arnaudpiette/OpenclassroomsProject', stack: ['HTML', 'CSS'], filters: ['front-end', 'css'] },
  { slug: 'react-router', name: 'React Router', description: 'Application React multipage avec React Router.', url: 'https://github.com/arnaudpiette/8832701-creez-une-application-react-multipages-avec-react-router', stack: ['React', 'JavaScript', 'Router'], filters: ['front-end', 'react', 'javascript', 'vite'] },
];
