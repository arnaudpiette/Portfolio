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
  skills?: string[];
  features?: string[];
  challenge?: string;
  solution?: string;
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
  { slug: 'dev-web-livres', name: 'Dev-Web-livres', description: 'Front-end du projet de gestion et de notation de livres.', url: 'https://github.com/arnaudpiette/Dev-Web-livres', stack: ['JavaScript', 'Front-end'], filters: ['front-end', 'javascript'], featured: true },
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
  { slug: 'nina-carducci', name: 'Nina Carducci', description: 'Optimisation, accessibilité et référencement d’un site de photographe.', url: 'https://github.com/arnaudpiette/Nina-Carducci-Dev', stack: ['JavaScript', 'CSS', 'SEO'], filters: ['front-end', 'javascript', 'css'] },
  { slug: 'sophie-bluel', name: 'Sophie Bluel', description: 'Portfolio d’architecte avec galerie dynamique et authentification.', url: 'https://github.com/arnaudpiette/Portfolio-architecte-sophie-bluel', stack: ['JavaScript', 'CSS', 'API'], filters: ['front-end', 'javascript', 'css'] },
  { slug: 'booki', name: 'Booki', description: 'Intégration responsive d’une plateforme de réservation.', url: 'https://github.com/arnaudpiette/Booki_avec_Companion', stack: ['HTML', 'CSS', 'Front-end'], filters: ['front-end', 'css'] },
  { slug: 'openclassrooms-project', name: 'OpenClassrooms Project', description: 'Projet d’apprentissage et d’intégration web.', url: 'https://github.com/arnaudpiette/OpenclassroomsProject', stack: ['HTML', 'CSS'], filters: ['front-end', 'css'] },
  { slug: 'react-router', name: 'React Router', description: 'Application React multipage avec React Router.', url: 'https://github.com/arnaudpiette/8832701-creez-une-application-react-multipages-avec-react-router', stack: ['React', 'JavaScript', 'Router'], filters: ['front-end', 'react', 'javascript', 'vite'] },
];
