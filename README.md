# Portfolio — Arnaud Piette

**Directeur artistique & Développeur web**

Portfolio P8 du parcours Développeur Web OpenClassrooms, en phase de livraison.

Site de production : [arnaudpiette.com](https://arnaudpiette.com)

## Présentation

Ce portfolio réunit deux pratiques complémentaires : la direction artistique et le développement web. Il propose deux univers distincts, reliés par une expérience de navigation commune.

- **CRÉA** — direction artistique, branding, graphisme, webdesign, UX/UI et projets créatifs.
- **DEV** — front-end, back-end, projets OpenClassrooms, projets personnels et études de cas techniques.

## Stack

- Astro 7
- HTML, CSS, JavaScript et TypeScript
- Composants `.astro` et routing basé sur les fichiers
- Génération statique avec `getStaticPaths()`
- ClientRouter et View Transitions Astro

## Fonctionnalités

- Landing page CRÉA / DEV et switch entre les deux univers
- Portfolio CRÉA et portfolio DEV avec filtres, fiches projets et galeries
- Hero immersif canvas : séquence WebP de 37 frames, préchargement progressif, `requestAnimationFrame` et interaction pointeur
- Comportement responsive : interaction adaptée au tactile, `prefers-reduced-motion` et fallback statique
- Navigation clavier, overlays natifs `<dialog>`, filtres accessibles et ambiance sonore optionnelle
- Visuels DEV optimisés en WebP/SVG
- SEO technique : titles, meta descriptions, Open Graph textuel, canonical, sitemap et robots.txt

## Accessibilité

Le projet met en œuvre des pratiques d’accessibilité courantes : HTML sémantique, un H1 par page, navigation clavier, états `:focus-visible`, textes alternatifs, labels accessibles et panneaux contrôlés par `aria-expanded`, `aria-controls` et `inert`.

Les overlays reposent sur l’élément natif `<dialog>` et les animations tiennent compte de `prefers-reduced-motion`. Le projet ne revendique pas de certification WCAG.

## Performance

- Images WebP et SVG quand approprié
- Chargement différé des médias de contenu
- Covers DEV optimisées
- Hero rendu dans un canvas avec fallback image statique
- Réduction de mouvement sans chargement de séquence canvas
- Anciennes ressources hero retirées du projet

## Projets DEV présentés

La sélection comprend notamment Noon, Kasa, Mon Vieux Grimoire, Nina Carducci, Qwenta Menu Maker, Sophie Bluel, ce Portfolio et Smokonomy.

Les projets présentés ne sont pas tous des projets OpenClassrooms : la sélection rassemble aussi des projets personnels et des études de cas.

## Architecture

```text
src/
├── components/   # composants partagés et interfaces
├── data/         # données des projets et compétences
├── layouts/      # layout HTML commun
├── pages/        # routes Astro et pages statiques
├── scripts/      # comportements client
└── styles/       # styles globaux et spécifiques
public/           # médias, visuels et fichiers publics
```

- `src/data/devProjects.ts` centralise les données des projets DEV.
- `src/pages/dev/projets/[slug].astro` rend la fiche DEV générique ; `getStaticPaths()` crée une page statique par projet.
- `src/data/creativeProjects.ts` centralise les données CRÉA.
- `src/pages/projets/[slug].astro` crée de la même manière les fiches CRÉA statiques.

## Installation

Prérequis : Node.js **22.12 ou supérieur**.

```bash
npm install
npm run dev
```

Le serveur de développement est disponible par défaut sur `http://localhost:4321`.

```bash
npm run build
npm run preview
```

`npm run build` génère le site statique dans `dist/`.

## SEO

Les pages publiques possèdent des titles et meta descriptions spécifiques, un canonical absolu basé sur `https://arnaudpiette.com`, une structure H1, ainsi que des métadonnées Open Graph textuelles.

Les routes statiques sont recensées dans [`/sitemap.xml`](https://arnaudpiette.com/sitemap.xml), avec les directives correspondantes dans [`/robots.txt`](https://arnaudpiette.com/robots.txt).

## Projet OpenClassrooms

Ce portfolio constitue le Projet 8 du parcours Développeur Web OpenClassrooms. Il présente un portfolio professionnel responsive, accessible et optimisé pour le référencement naturel.

## Auteur

Arnaud Piette — Direction artistique & développement web
[GitHub](https://github.com/arnaudpiette)
