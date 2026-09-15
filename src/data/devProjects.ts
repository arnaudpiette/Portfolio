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
  { slug: 'kasa', name: 'Kasa', description: 'Application de location d’appartements développée avec React.', url: 'https://github.com/arnaudpiette/Kasa', stack: ['React', 'JavaScript', 'CSS'], filters: ['front-end', 'react', 'javascript', 'css', 'vite'], featured: true },
  { slug: 'portfolio', name: 'Portfolio', description: 'Le code source de ce portfolio Creative & DEV construit avec Astro.', url: 'https://github.com/arnaudpiette/Portfolio', stack: ['Astro', 'JavaScript', 'CSS'], filters: ['front-end', 'javascript', 'css', 'vite'], featured: true },
  { slug: 'product-api', name: 'product-api', description: 'API produits et logique serveur en JavaScript.', url: 'https://github.com/arnaudpiette/product-api', stack: ['Node', 'Express', 'JavaScript'], filters: ['back-end', 'javascript', 'node', 'express'], featured: true },
  { slug: 'convertsseur', name: 'CONVERTSSEUR', description: 'Application de conversion développée en TypeScript.', url: 'https://github.com/arnaudpiette/CONVERTSSEUR', stack: ['TypeScript', 'Front-end'], filters: ['front-end', 'javascript', 'vite'] },
  { slug: 'nina-carducci', name: 'Nina Carducci', description: 'Optimisation, accessibilité et référencement d’un site de photographe.', url: 'https://github.com/arnaudpiette/Nina-Carducci-Dev', stack: ['JavaScript', 'CSS', 'SEO'], filters: ['front-end', 'javascript', 'css'] },
  { slug: 'sophie-bluel', name: 'Sophie Bluel', description: 'Portfolio d’architecte avec galerie dynamique et authentification.', url: 'https://github.com/arnaudpiette/Portfolio-architecte-sophie-bluel', stack: ['JavaScript', 'CSS', 'API'], filters: ['front-end', 'javascript', 'css'] },
  { slug: 'booki', name: 'Booki', description: 'Intégration responsive d’une plateforme de réservation.', url: 'https://github.com/arnaudpiette/Booki_avec_Companion', stack: ['HTML', 'CSS', 'Front-end'], filters: ['front-end', 'css'] },
  { slug: 'openclassrooms-project', name: 'OpenClassrooms Project', description: 'Projet d’apprentissage et d’intégration web.', url: 'https://github.com/arnaudpiette/OpenclassroomsProject', stack: ['HTML', 'CSS'], filters: ['front-end', 'css'] },
  { slug: 'react-router', name: 'React Router', description: 'Application React multipage avec React Router.', url: 'https://github.com/arnaudpiette/8832701-creez-une-application-react-multipages-avec-react-router', stack: ['React', 'JavaScript', 'Router'], filters: ['front-end', 'react', 'javascript', 'vite'] },
];
