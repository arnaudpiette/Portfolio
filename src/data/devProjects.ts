export interface DevProject {
  name: string;
  description: string;
  url: string;
  stack: string[];
  filters: string[];
  featured?: boolean;
}

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

export const devProjects: DevProject[] = [
  { name: 'Dev-Web-livres', description: 'Front-end du projet de gestion et de notation de livres.', url: 'https://github.com/arnaudpiette/Dev-Web-livres', stack: ['JavaScript', 'Front-end'], filters: ['front-end', 'javascript'], featured: true },
  { name: 'Kasa', description: 'Application de location d’appartements développée avec React.', url: 'https://github.com/arnaudpiette/Kasa', stack: ['React', 'JavaScript', 'CSS'], filters: ['front-end', 'react', 'javascript', 'css', 'vite'], featured: true },
  { name: 'Portfolio', description: 'Le code source de ce portfolio Creative & DEV construit avec Astro.', url: 'https://github.com/arnaudpiette/Portfolio', stack: ['Astro', 'JavaScript', 'CSS'], filters: ['front-end', 'javascript', 'css', 'vite'], featured: true },
  { name: 'product-api', description: 'API produits et logique serveur en JavaScript.', url: 'https://github.com/arnaudpiette/product-api', stack: ['Node', 'Express', 'JavaScript'], filters: ['back-end', 'javascript', 'node', 'express'], featured: true },
  { name: 'CONVERTSSEUR', description: 'Application de conversion développée en TypeScript.', url: 'https://github.com/arnaudpiette/CONVERTSSEUR', stack: ['TypeScript', 'Front-end'], filters: ['front-end', 'javascript', 'vite'] },
  { name: 'Nina Carducci', description: 'Optimisation, accessibilité et référencement d’un site de photographe.', url: 'https://github.com/arnaudpiette/Nina-Carducci', stack: ['JavaScript', 'CSS', 'SEO'], filters: ['front-end', 'javascript', 'css'] },
  { name: 'Sophie Bluel', description: 'Portfolio d’architecte avec galerie dynamique et authentification.', url: 'https://github.com/arnaudpiette/Portfolio-architecte-sophie-bluel', stack: ['JavaScript', 'CSS', 'API'], filters: ['front-end', 'javascript', 'css'] },
  { name: 'Booki', description: 'Intégration responsive d’une plateforme de réservation.', url: 'https://github.com/arnaudpiette/Booki_avec_Companion', stack: ['HTML', 'CSS', 'Front-end'], filters: ['front-end', 'css'] },
  { name: 'OpenClassrooms Project', description: 'Projet d’apprentissage et d’intégration web.', url: 'https://github.com/arnaudpiette/OpenclassroomsProject', stack: ['HTML', 'CSS'], filters: ['front-end', 'css'] },
  { name: 'React Router', description: 'Application React multipage avec React Router.', url: 'https://github.com/arnaudpiette/8832701-creez-une-application-react-multipages-avec-react-router', stack: ['React', 'JavaScript', 'Router'], filters: ['front-end', 'react', 'javascript', 'vite'] },
];
