# Portfolio — Arnaud Piette

Portfolio personnel réunissant mes deux domaines d’expertise :

**Direction créative & artistique** × **Développement web**

Le site est conçu comme une expérience à deux entrées permettant de découvrir séparément mon univers **CRÉA** et mon univers **DEV**, tout en conservant une identité commune.

---

## À propos

Je suis **Arnaud Piette**, directeur artistique et développeur web.

Mon parcours vient d’abord de la création : direction artistique, identité de marque, publicité, illustration, webdesign et conception d’expériences digitales.

J’ai ensuite complété cette expérience par une formation de développeur web afin de pouvoir aller plus loin dans la réalisation des expériences numériques que je conçois : intégration responsive, JavaScript, React, Node.js, Express, API REST, bases de données, performances, SEO et accessibilité.

Mon objectif est aujourd’hui de travailler à la rencontre de ces deux disciplines :

> **concevoir une expérience, lui donner une identité et être capable de participer concrètement à sa réalisation technique.**

---

## Concept du portfolio

Le portfolio est organisé autour de deux univers.

### CRÉA

Un univers consacré à mon expérience en :

- Direction de création
- Direction artistique
- Identité visuelle
- Branding
- Webdesign
- UX / UI
- Illustration
- Print
- Digital
- Vidéo

La direction graphique repose sur une interface claire et éditoriale, laissant une place importante aux projets et aux visuels.

### DEV

Un univers consacré à mes projets et compétences en développement :

- HTML5
- CSS3
- Sass
- JavaScript
- TypeScript
- React
- React Router
- Astro
- Node.js
- Express
- API REST
- JWT
- MongoDB / Mongoose
- Git / GitHub
- Vite
- Lighthouse

L'interface DEV adopte une identité plus sombre et technique tout en conservant les mêmes principes graphiques et ergonomiques que l'univers CRÉA.

---

## Navigation

La page d'accueil sert de point d'entrée entre les deux portfolios :

```text
/
│
├── /creative
│   └── Portfolio CRÉA
│
├── /dev
│   └── Portfolio DEV
│
└── /projets/[slug]
    └── Pages détaillées des projets créatifs


Un switch CRÉA / DEV permet de passer directement d'un univers à l'autre.

Lors du changement d'univers, le site conserve autant que possible la position de navigation afin de rendre la transition plus fluide.

Fonctionnalités actuelles
Landing page
Deux entrées distinctes CRÉA / DEV
Animations graphiques au survol
Navigation clavier
Adaptation responsive mobile / desktop
Portfolio CRÉA
Galerie de projets
Filtres par expertise
Pages projet dynamiques
Galeries d'images
Vidéos YouTube / Vimeo
Slideshow
Affichage des compétences créatives
Formulaire de contact
Portfolio DEV
Galerie de repositories GitHub
Filtres par technologie
Présentation de la stack Front-end / Back-end
Accès direct aux repositories
Affichage des compétences techniques
Formulaire de contact
Interface commune
Switch CRÉA / DEV
Header responsive
Overlays accessibles avec <dialog>
États focus-visible
Navigation clavier
Chargement différé des images
Transitions Astro
Interface responsive
Ambiance sonore optionnelle
Projets DEV actuellement présentés

Le portfolio référence notamment :

Kasa — React, JavaScript, CSS
Nina Carducci — optimisation, SEO et accessibilité
Sophie Bluel — JavaScript, API et galerie dynamique
Booki — HTML / CSS responsive
Dev-Web-livres — JavaScript Front-end
product-api — Node.js / Express
Portfolio — Astro
différents exercices et expérimentations React / TypeScript

Cette sélection évoluera progressivement avec l'ajout de nouveaux projets et de fiches techniques plus détaillées.

Stack du portfolio
Framework
Astro
Langages
HTML
CSS
JavaScript
TypeScript
Fonctionnalités Astro utilisées
Routing basé sur les fichiers
Pages dynamiques
Composants .astro
Client Router / View Transitions
Génération statique
Outils
Node.js
npm
Git
GitHub
VS Code
Architecture du projet
Portfolio/
│
├── public/
│   ├── projets/
│   │   ├── Logo-crea/
│   │   ├── Logo-dev/
│   │   └── ...
│   ├── sounds/
│   └── favicon.*
│
├── src/
│   │
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── ExternalVideoPlayer.astro
│   │   ├── ModeSwitch.astro
│   │   ├── MusicPlayButton.astro
│   │   ├── PortfolioFooter.astro
│   │   ├── PortfolioHeader.astro
│   │   ├── PortfolioOverlays.astro
│   │   ├── PortfolioSignature.astro
│   │   ├── ProjectMosaic.astro
│   │   └── SkillsShowcase.astro
│   │
│   ├── lib/
│   │   ├── dev.ts
│   │   └── wp.ts
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── creative.astro
│   │   ├── dev.astro
│   │   └── projets/
│   │       └── [slug].astro
│   │
│   └── styles/
│       └── ...
│
├── astro.config.mjs
├── package.json
└── README.md
Installation
Prérequis

Le projet nécessite :

Node.js >= 22.12
Cloner le repository
git clone https://github.com/arnaudpiette/Portfolio.git
cd Portfolio
Installer les dépendances
npm install
Lancer le serveur de développement
npm run dev

Le site est ensuite disponible par défaut sur :

http://localhost:4321
Build de production

Créer une version de production :

npm run build

Astro génère alors le site dans :

dist/

Pour tester cette version localement :

npm run preview
Responsive

Le portfolio est pensé pour fonctionner sur :

desktop
tablette
mobile

Les layouts, galeries, filtres, headers et composants interactifs s'adaptent aux différentes tailles d'écran.

Accessibilité

L'accessibilité fait partie des objectifs du projet.

Plusieurs bonnes pratiques sont déjà intégrées :

HTML sémantique
navigation clavier
aria-label
états focus-visible
boutons natifs pour les interactions
fenêtres modales basées sur <dialog>
attribut inert lorsque certains panneaux sont fermés
textes alternatifs sur les images
prise en compte de prefers-reduced-motion sur certains composants

Un audit complet avec Lighthouse, WAVE et/ou axe DevTools est prévu avant la mise en production finale.

SEO & performances

Le projet fera l'objet d'une optimisation progressive :

métadonnées spécifiques aux pages
structure HTML sémantique
optimisation des images
amélioration des performances Lighthouse
optimisation de l'accessibilité
Open Graph
sitemap
robots.txt
données structurées
stratégie de mots-clés adaptée au positionnement professionnel
Design System

Le portfolio repose sur une identité commune déclinée en deux univers.

CRÉA
Fond clair
+
Typographie sombre
+
Accent orange fluorescent

Un univers lumineux, éditorial et expressif.

DEV
Fond sombre
+
Typographie claire
+
Accent vert fluorescent

Un univers structuré, technique et contrasté.

Les couleurs fluorescentes sont utilisées principalement comme accents graphiques.

Le fluo apporte l'énergie ; il ne constitue pas la base de lecture.

Les contrastes, états actifs et interactions sont pensés afin de ne jamais dépendre uniquement de la couleur.

Projet OpenClassrooms

Ce portfolio constitue également le Projet 8 de mon parcours Développeur Web OpenClassrooms.

Les objectifs principaux sont :

concevoir un portfolio professionnel
valoriser plusieurs projets de formation
présenter mon profil et mon positionnement
assurer une expérience responsive
respecter les bonnes pratiques d'accessibilité
optimiser les performances
travailler le référencement naturel
documenter le projet
déployer le site en production
présenter le travail lors d'une soutenance

Le projet est piloté avec un Kanban Trello organisé autour des colonnes :

À faire
En cours
À tester / Valider
Terminé
Roadmap

Le portfolio est actuellement en cours d'évolution.

Principales étapes à venir :

 Finaliser le positionnement CRÉA / DEV
 Finaliser le Design System
 Enrichir le contenu éditorial
 Ajouter les fiches détaillées des projets OpenClassrooms
 Ajouter les projets Kasa et Mon Vieux Grimoire
 Ajouter Noon comme projet personnel
 Refactorer certaines données et composants
 Optimiser les images
 Effectuer les audits SEO
 Effectuer les audits d'accessibilité
 Effectuer les tests Lighthouse
 Vérifier le responsive complet
 Déployer sur Vercel
 Connecter le domaine définitif
Auteur

Arnaud Piette

Direction créative & artistique
Développement web

GitHub : github.com/arnaudpiette

Contact : arno.piette@gmail.com

Statut

🚧 Portfolio en développement

Le site et son architecture évoluent actuellement dans le cadre du Projet 8 OpenClassrooms.


### Deux choix que j'ai faits volontairement

J'ai utilisé les routes **réellement présentes aujourd'hui**, donc `/creative` et `/dev`, et non `/creation` et `/developpement`. Ta landing pointe actuellement précisément vers ces deux routes. 

J'ai aussi indiqué les audits accessibilité/SEO comme **« prévus »**, et non comme validés : ton code contient déjà plusieurs bonnes pratiques (`aria-label`, `<dialog>`, `inert`, focus visible, etc.), mais tu n'as pas encore effectué l'audit final du Projet 8. 

### Pour le mettre dans ton dépôt

Dans VS Code, ouvre `README.md`, supprime tout le README Astro actuel et colle celui-ci.

Puis :

```bash
git add README.md
git commit -m "docs: documenter le portfolio et le projet 8"
git push origin main