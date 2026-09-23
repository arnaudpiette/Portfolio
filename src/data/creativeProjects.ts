// Structure d'un projet créatif affiché dans la grille et les pages détail.
// Cette interface indique à TypeScript les informations obligatoires.
export interface ProjectItem {
  slug: string;
  title: string;
  // Affiche la pastille NEW sur la vignette de la card.
  isNew?: boolean;
  tags: ProjectTag[];
  subtitle: string;
  description: string;
  detailTitle: string;
  detailText: string;
  client?: string;
  role?: string;
  year?: string;
  accent: string;
  // Image utilisée uniquement comme vignette sur la page d'accueil.
  cover?: string;
  // "gallery" affiche la mosaïque. "video" affiche directement YouTube/Vimeo.
  mediaType?: 'gallery' | 'video';
  video?: ProjectVideo;
  videos?: ProjectVideo[];
  media: ProjectMedia[];
}

export interface ProjectVideo {
  url: string;
  title: string;
  poster?: string;
  provider?: 'youtube' | 'vimeo';
  aspectRatio?: string;
}

export interface ProjectTag {
  id: string;
  label: string;
}

export interface ProjectMedia {
  alt: string;
  src?: string;
  href?: string;
  background?: string;
  fit?: 'cover' | 'contain';
  layout?: 'portrait' | 'landscape' | 'square' | 'wide' | 'large' | 'hero' | 'three-columns';
  position?: string;
  title?: string;
  text?: string;
}

// Noms de fichiers construisant dynamiquement la galerie Illustrations.
const illustrationFiles = [
  '01-Vignerons.jpg',
  '02-saucisson.jpg',
  '03-Portrait-Sinan.png',
  '04-TOY-Pist_eau_let.png',
  '05-TOY-Bomb_a_eau.png',
  '06-Portrait-friends.png',
  '07-Forest-Voiture.png',
  '08-page-09.png',
  '09-page-10.png',
  '10-page-11.png',
  '11-page-14.png',
  '12-page-16.png',
  '13-page-18.png',
  '14-page-21.png',
  '15-page-22.png',
  '16-DrMilou3.png',
  '17-DrMilou5.png',
  '18-DrMilou-Main-chien.png',
  '19-Veto.png',
  '20-AXA-Rentrée_ZEN_2.gif',
  '21-Bourget-01.jpg',
  '21-ET.png',
  '22-Palais_des_congres.jpg',
  '23-D19.png',
  '24-COFFEE.png',
  '24-Vernet-Illu1.jpg',
  '25-FRITES.png',
  '26-Mister_moustache.png',
  '27-smartpool.png',
  '28-Netflix.png',
  '29-Opéra.png',
  '30-Manga-Girl.jpg',
  '31-Tintin-Lotus.png',
  '32-Tintin-Lune.png',
  '33-Tintin-Tibet.png',
  '35-WC.jpg',
  '36-Ampoule.png',
  '37-Autonomy.png',
  '38-blind-vador.jpg',
  '39-Boue.png',
  '40-Brainman1.png',
  '41-Breakfast.png',
  '42-City_explorer.png',
  '43-City-Master.png',
  '44-illu-cityscoot.png',
  '45-Jean_RIP.png',
  '46-NON-AA.png',
  '47-NON-B.jpg',
  '48-Pirate.png',
];

// Noms de fichiers construisant dynamiquement la galerie Autonomy.
const autonomyFiles = [
  '01-Autonomy.jpg',
  '02-Autonomy-metro.jpg',
  '03-Web_AG_O4A2333.jpg',
  '04-Autonomy-tshirt.jpg',
  '05-Web_AG_O4A2612.jpg',
  '06-Web_AG_O4A2435.jpg',
  '07-Autonomy-salon.jpg',
  '07-Web_AG_O4A2278.jpg',
  '08-AUTONOMY_MG_8050.jpg',
  '09-Web_AG_O4A9201.jpg',
  '10-Autonomy-signa-bâche_quartier.jpg',
  '11-autonomy_HOMEPAGE.jpg',
  '12-autonomy_ANIMATIONS.jpg',
  '13-AUTONOMY-Newsletter-7.jpg',
  '14-AUTONOMY-BOX.jpg',
  '15-Autonomy-1.jpg',
];

// Génère les noms homogènes des seize logos de la galerie dédiée.
const logoFiles = Array.from({ length: 16 }, (_, index) =>
  `${String(index + 1).padStart(2, '0')}Logo.png`
);

// Liste ordonnée des projets utilisés par la grille CRÉA et les routes dynamiques.
// Pour ajouter un projet, duplique un bloc complet entre { et }.
// Le slug doit être unique, sans espace ni accent.
export const fallbackProjects: ProjectItem[] = [

  {
    // Adresse de la page : /projets/studio-atlas/
    slug: 'call-of-light',
    title: 'Call of Light',
    isNew: true,
    // Plusieurs tags peuvent être ajoutés dans ce tableau.
    tags: [{ id: 'last-work', label: 'Last work' }, { id: 'da', label: 'DA' }, { id: 'brand-id', label: 'Brand ID' }],
    subtitle: 'Identité visuelle et univers graphique',
    description: '3 propositions de direction artistique pour le jeu vidéo « Call of Light ».',
    // Texte général de présentation du projet.
    detailTitle: 'Nouveau jeu vidéo',
    detailText: "Création d'un nouveau jeu vidéo, Call of Light. Sur la base d'un scénario commun, j'ai développé trois univers graphiques distincts.",
    accent: 'linear-gradient(135deg, #10172d 0%, #29375f 58%, #d97706 100%)',
    cover: '/projets/call-of-light/cover.jpg',
    // Remplace "background" par "src: '/projets/atlas/image.jpg'"
    // pour afficher un véritable visuel placé dans le dossier public.
    // Les champs title et text sont facultatifs et propres à chaque média.
    media: Array.from({ length: 41 }, (_, index) => {
      const page = String(index + 1).padStart(2, '0');
      return {
        src: `/projets/call-of-light/page-${page}.jpg`,
        alt: `Call of Light — page ${index + 1}`,
        layout: index + 1 === 9
          ? 'large' as const
          : index + 1 === 26
          ? 'three-columns' as const
          : index + 1 === 2 || index + 1 === 10 || index + 1 === 12 || index + 1 === 13 || index + 1 === 14 || index + 1 === 15 || index + 1 === 16 || index + 1 === 17 || index + 1 === 27
            ? 'wide' as const
            : index + 1 === 25
              ? 'square' as const
              : undefined,
      };
    }),
  },
  {
    slug: 'drmilou-app',
    title: 'DrMilou App',
    isNew: false,
    tags: [
      { id: 'last-work', label: 'Last work' },
      { id: 'digital', label: 'Digital' },
      { id: 'da', label: 'DA' },
    ],
    subtitle: 'Application mobile',
    description: 'Conception de l’univers graphique et des interfaces de l’application mobile DrMilou.',
    detailTitle: 'L’expérience vétérinaire accessible depuis son mobile',
    detailText: 'Une application pensée pour faciliter le parcours des propriétaires d’animaux, avec une interface claire, rassurante et fidèle à l’identité de DrMilou.',
    accent: 'linear-gradient(135deg, #9ecfe3 0%, #bce2f1 58%, #d8f0f8 100%)',
    cover: '/projets/DrMilou%20App/Cover-DrMilou-app.gif',
    media: [
      { src: '/projets/DrMilou%20App/01-Dr%20Milou%20App%20Icon%20-%201200px.png', alt: 'Icône de l’application mobile DrMilou', layout: 'square' },
      { src: '/projets/DrMilou%20App/02-Dr%20Milou-Visu%2001-APP.png', alt: 'Présentation de l’application mobile DrMilou', layout: 'wide' },
      { src: '/projets/DrMilou%20App/Google-screen%201.png', alt: 'Écran de l’application DrMilou — vue 1', layout: 'portrait', fit: 'contain' },
      { src: '/projets/DrMilou%20App/Google-screen%202.png', alt: 'Écran de l’application DrMilou — vue 2', layout: 'portrait', fit: 'contain' },
      { src: '/projets/DrMilou%20App/Google-screen%203.png', alt: 'Écran de l’application DrMilou — vue 3', layout: 'portrait', fit: 'contain' },
      { src: '/projets/DrMilou%20App/Google-screen%204.png', alt: 'Écran de l’application DrMilou — vue 4', layout: 'portrait', fit: 'contain' },
      { src: '/projets/DrMilou%20App/Google-screen%205.png', alt: 'Écran de l’application DrMilou — vue 5', layout: 'portrait', fit: 'contain' },
    ],
  },
  {
    slug: 'lavie',
    title: 'LaVIE',
    isNew: false,
    tags: [{ id: 'brand-id', label: 'Brand ID' }, { id: 'da', label: 'DA' }],
    subtitle: 'Photographies et visuels',
    description: "Création d'une série de visuel pour la marque LaVIE en collaboration avec Rynarts Production",
    detailTitle: 'Nouvelle campagne photographique',
    detailText: 'Clarifier la marque et son positionnement avec une identité visuelle forte et des visuels impactants pour les réseaux sociaux.',
    accent: 'linear-gradient(135deg, #6f4b08 0%, #a86f0b 55%, #d4a70d 100%)',
    cover: '/projets/lavie/cover.jpg',
    media: Array.from({ length: 16 }, (_, index) => {
      const page = String(index + 1).padStart(2, '0');
      return {
        src: `/projets/lavie/page-${page}.jpg`,
        alt: `Campagne LaVIE — visuel ${index + 1}`,
      };
    }),
  },
  {
    slug: 'cet-55-ans',
    title: 'CET 55 ans',
    tags: [{ id: 'da', label: 'DA' }, { id: 'illustration', label: 'Illustration' }, { id: 'print', label: 'Print' }],
    subtitle: 'Identité anniversaire',
    description: 'Création d’une identité visuelle et d’un magazine hors-série pour célébrer les 55 ans du CET.',
    detailTitle: 'Une identité conçue pour célébrer 55 ans d’histoire',
    detailText: 'Une direction artistique anniversaire déployée sur une édition spéciale, des visuels digitaux et une série d’illustrations.',
    accent: 'linear-gradient(135deg, #173f8f 0%, #315db0 58%, #c94f54 82%, #c49b43 100%)',
    cover: '/projets/cet55/cover.jpg',
    media: Array.from({ length: 22 }, (_, index) => {
      const pageNumber = index + 1;
      const page = String(pageNumber).padStart(2, '0');
      const extension = [3, 5, 6].includes(pageNumber) ? 'jpg' : 'png';
      return {
        src: `/projets/cet55/page-${page}.${extension}`,
        alt: `CET 55 ans — visuel ${pageNumber}`,
        fit: pageNumber >= 9 ? 'contain' as const : 'cover' as const,
      };
    }),
  },
  {
    // PROJET VIDÉO VIMEO
    // La vidéo reste hébergée chez Vimeo et est pilotée avec son API officielle.
    // Le caractère # reste dans le titre, mais pas dans l'adresse de la page.
    slug: 'dunk-ton-cv',
    title: '#DunkTonCV',
    isNew: false,
    tags: [
      { id: 'video', label: 'Vidéo' },
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'Digital', label: 'Digital' },
    ],
    subtitle: 'DECATHLON - Campagen RH',
    description: 'Comment aider un nouveau magasin à recruter des salariés dans son environnement local pour le dynamiser ?',
    detailTitle: '',
    detailText: 'Présentation du projet, de sa direction artistique et de sa réalisation.',
    role: 'Direction artistique | Directeur de création | Graphiste',
    accent: 'linear-gradient(135deg, #244a75 0%, #5687bd 58%, #aebdce 100%)',
    cover: '/projets/projet-video-vimeo/cover-decathlon-dunk.jpg',
    mediaType: 'video',
    video: {
      url: 'https://vimeo.com/254131750?fl=pl&fe=sh',
      title: 'DECATHLON RH',
      provider: 'vimeo',
      aspectRatio: '16 / 9',
    },
    // Ajoute éventuellement ici des images complémentaires sous la vidéo.
    media: [],
  },
  {
    // PROJET COSTERMANS
    slug: 'costermans',
    title: 'Costermans',
    isNew: false,
    tags: [
      { id: 'publicite', label: 'Publicité' },
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'print', label: 'Print' },
    ],
    subtitle: 'Campagne print',
    description: 'Création d’un visuel pour Art Interiors by Costermans.',
    detailTitle: 'Art Interiors',
    detailText: 'Direction de création et déclinaison graphique de la campagne Costermans.',
    role: 'Direction de création | Direction artistique',
    accent: 'linear-gradient(135deg, #241b69 0%, #49399e 58%, #968dd0 100%)',
    cover: '/projets/projet-video-vimeo/cover-Costermans.jpg',
    media: [
      {
        src: '/projets/Costermans/Costermans-dbl.jpg',
        alt: 'Campagne publicitaire Costermans',
        layout: 'hero',
      },
    ],
  },
  {
    slug: 'loterie',
    title: 'Loterie',
    isNew: false,
    tags: [
      { id: 'da', label: 'DA' },
      { id: 'print', label: 'Print' },
    ],
    subtitle: 'Campagne print',
    description: 'Création d’une campagne print pour la Loterie autour de la prévention de l’assuétude.',
    detailTitle: 'Campagne de sensibilisation',
    detailText: 'Direction artistique et conception graphique de la campagne.',
    role: 'Direction artistique',
    accent: 'linear-gradient(135deg, #5f5142 0%, #8b765c 58%, #b49c78 100%)',
    cover: '/projets/Loterie/Cover-assuetude.jpg',
    media: [
      {
        src: '/projets/Loterie/assuetude-print.jpg',
        alt: 'Campagne print Loterie — assuétude',
        layout: 'hero',
      },
    ],
  },
  {
    slug: 'harley',
    title: 'Harley',
    isNew: false,
    tags: [
      { id: 'da', label: 'DA' },
      { id: 'print', label: 'Print' },
    ],
    subtitle: 'Campagne print',
    description: 'Création d’une campagne print pour Harley.',
    detailTitle: 'Harley en mouvement',
    detailText: 'Direction artistique et conception graphique de la campagne.',
    role: 'Direction artistique',
    accent: 'linear-gradient(135deg, #1d1d1d 0%, #484848 58%, #8b6a45 100%)',
    cover: '/projets/Harley/Cover-Harley.jpg',
    media: [
      {
        src: '/projets/Harley/harley-move.jpg',
        alt: 'Campagne print Harley',
        layout: 'hero',
      },
    ],
  },
  {
    slug: 'messieurs',
    title: 'Messieurs',
    isNew: false,
    tags: [
      { id: 'da', label: 'DA' },
      { id: 'digital', label: 'Digital' },
    ],
    subtitle: 'Site web WordPress',
    description: 'Direction artistique et design du site web WordPress de Messieurs.',
    detailTitle: 'Une présence digitale sur mesure',
    detailText: 'Conception de l’expérience, de l’interface et de l’univers graphique du site.',
    role: 'Direction artistique | Web design',
    accent: 'linear-gradient(135deg, #252525 0%, #4f4f4f 58%, #8b8b8b 100%)',
    cover: '/projets/Messieurs/cover-Messieur.png',
    media: [
      {
        src: '/projets/Messieurs/Messieurs-homepage.jpg',
        href: 'https://www.agencemessieurs.com/',
        alt: 'Design du site WordPress Messieurs',
        layout: 'hero',
        position: 'top',
      },
    ],
  },
  {
    slug: 'decathlon-ppc',
    title: 'Decathlon PPC',
    isNew: false,
    tags: [
      { id: 'video', label: 'Vidéo' },
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'publicite', label: 'Publicité' },
    ],
    subtitle: 'Campagne publicitaire',
    description: 'Conception et réalisation d’un projet vidéo pour Decathlon PPC.',
    detailTitle: '',
    detailText: 'Direction de création et direction artistique du projet Decathlon PPC.',
    role: 'Direction de création | Direction artistique',
    accent: 'linear-gradient(135deg, #0064c8 0%, #1687e8 55%, #65b9f4 100%)',
    cover: '/projets/Decathlon%20PPC/Cover-PPC.jpg',
    mediaType: 'video',
    video: {
      url: 'https://vimeo.com/108124257?fl=pl&fe=sh',
      title: 'Decathlon PPC',
      provider: 'vimeo',
      aspectRatio: '16 / 9',
    },
    media: [],
  },
  {
    slug: 'decathlon-19-secondes-chrono',
    title: 'Decathlon 19 secondes chrono',
    isNew: false,
    tags: [
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'digital', label: 'Digital' },
    ],
    subtitle: 'Campagne de recrutement',
    description: "Recrutement rapide et original de nouveaux collaborateurs.",
    detailTitle: 'Postuler en 19 secondes',
    detailText: 'Direction de création et direction artistique de l’expérience digitale Decathlon.',
    role: 'Direction de création | Direction artistique',
    accent: 'linear-gradient(135deg, #0064c8 0%, #1687e8 55%, #65b9f4 100%)',
    cover: '/projets/Decathlon%2019/cover-D19.png',
    media: [
      { src: '/projets/Decathlon%2019/01-D19-1.jpg', alt: 'Decathlon 19 secondes chrono — présentation', layout: 'large' },
      { src: '/projets/Decathlon%2019/02-D19-chrono-home.jpg', alt: 'Decathlon 19 secondes chrono — accueil', layout: 'wide' },
      { src: '/projets/Decathlon%2019/03-Decathlon-RH-Paris19_chrono.jpg', alt: 'Decathlon 19 secondes chrono — jeu chrono', layout: 'wide' },
      { src: '/projets/Decathlon%2019/04-Decathlon-RH-Paris19_bravo.jpg', alt: 'Decathlon 19 secondes chrono — écran bravo', layout: 'wide' },
      { src: '/projets/Decathlon%2019/05-Decathlon-RH-Paris19_perdu.jpg', alt: 'Decathlon 19 secondes chrono — écran perdu', layout: 'wide' },
      { src: '/projets/Decathlon%2019/06-Decathlon-RH-Paris19_Postes.jpg', alt: 'Decathlon 19 secondes chrono — présentation des postes', layout: 'large' },
      { src: '/projets/Decathlon%2019/07-Decathlon-RH-Paris19_PQnousRejoindre.jpg', alt: 'Decathlon 19 secondes chrono — pourquoi nous rejoindre', layout: 'wide' },
      { src: '/projets/Decathlon%2019/08-Decathlon-RH-Univers_Graphique.png', alt: 'Decathlon 19 secondes chrono — univers graphique', layout: 'portrait' },
    ],
  },
  {
    // SECOND PROJET VIDÉO VIMEO
    slug: 'wheeliz-fauteuil',
    title: 'Wheeliz',
    isNew: false,
    tags: [
      { id: 'video', label: 'Vidéo' },
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'digital', label: 'Digital' },
    ],
    subtitle: 'La voiture-sandwich',
    description: 'Création d’une vidéo de communication pour Wheeliz.',
    detailTitle: '',
    detailText: 'Présentation de la direction artistique et de la réalisation du projet vidéo Wheeliz.',
    role: 'Direction artistique | Directeur de création | Graphiste',
    accent: 'linear-gradient(135deg, #1d2929 0%, #405957 58%, #7c8f84 100%)',
    cover: '/projets/projet-video-vimeo/cover-Wheeliz-fauteuil.jpg',
    mediaType: 'video',
    video: {
      url: 'https://vimeo.com/254101554?fl=pl&fe=sh',
      title: 'Wheeliz',
      provider: 'vimeo',
      aspectRatio: '16 / 9',
    },
    media: [],
  },
    {
    slug: 'ibm',
    title: 'IBM',
    isNew: false,
    tags: [
      { id: 'da', label: 'DA' },
      { id: 'illustration', label: 'Illustrations' },
      { id: 'video', label: 'Vidéo' },
      { id: 'brand-id', label: 'Brand ID' },
    ],
    subtitle: 'Direction artistique, illustration et vidéo',
    description: 'Création d’un univers de marque animé pour IBM.',
    detailTitle: 'Une identité en mouvement',
    detailText: 'Direction artistique, illustrations et contenus vidéo développés pour IBM.',
    accent: 'linear-gradient(135deg, #061f80 0%, #0f62fe 55%, #78a9ff 100%)',
    cover: '/projets/IBM/Cover-IBM-01.jpg',
    mediaType: 'video',
    videos: [
      {
        url: 'https://youtu.be/eD09BHfgl_g?si=mavyLKDehIDQU4KI',
        title: 'IBM — vidéo 1',
        provider: 'youtube',
        aspectRatio: '16 / 9',
      },
      {
        url: 'https://youtu.be/HCfGFmw_xmE?si=G8Roch6HeafySUgK',
        title: 'IBM — vidéo 2',
        provider: 'youtube',
        aspectRatio: '16 / 9',
      },
      {
        url: 'https://youtu.be/6TfBvZ1EhW8?si=fqPJ_0zaD8f9k6KQ',
        title: 'IBM — vidéo 3',
        provider: 'youtube',
        aspectRatio: '16 / 9',
      },
    ],
    media: [
      {
        src: '/projets/IBM/IBM-01.gif',
        alt: 'Animation IBM',
        layout: 'hero',
      },
    ],
  },
  {
    // PROJET TROISIEME LIEU
    slug: 'wheeliz-video',
    title: 'Système D',
    isNew: false,
    tags: [
      { id: 'video', label: 'Vidéo' },
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'digital', label: 'Digital' },
    ],
    subtitle: 'Campagne vidéo',
    description: 'Trois films qui mettent en scène de façon décalée, l’ingéniosité dont certains font preuve pour se déplacer sans voiture aménagée…  Avec Wheeliz, tout serait tellement plus simple !',
    detailTitle: '',
    detailText: 'Présentation de la direction artistique et de la réalisation du projet vidéo Wheeliz.',
    role: 'Direction artistique | Directeur de création | Graphiste',
    accent: 'linear-gradient(135deg, #705033 0%, #a97345 58%, #168397 100%)',
    cover: '/projets/projet-video-vimeo/cover-Wheeliz-video.jpg',
    mediaType: 'video',
    video: {
      url: 'https://youtu.be/LNapG8E5GN8?si=z78iwI1ilNccknyG',
      title: 'Système D',
      provider: 'youtube',
      aspectRatio: '16 / 9',
    },
    media: [],
  },
 
  {
    // PROJET VIDÉO YOUTUBE

    slug: 'troisieme-lieu',
    title: 'Troisième Lieu',
    isNew: false,
    tags: [{ id: 'da', label: 'DA' }, { id: 'brand-id', label: 'Brand ID' }, { id: 'digital', label: 'Digital' }],
    subtitle: 'Identité visuelle & site web',
    description: 'Création de l’identité visuelle de Troisième Lieu et de son déploiement sur les supports digitaux.',
    detailTitle: 'Une identité chaleureuse, pensée comme un lieu de rencontre',
    detailText: 'Logo, palette colorée, typographies, illustrations et principes de mise en page composent un univers cohérent, décliné sur le site web et les présentations.',
    accent: 'linear-gradient(135deg, #f36f4b 0%, #ef9366 48%, #f6c84a 100%)',
    cover: '/projets/ToisiemeLieu/Cover-TroisiemeLieu.jpg',
    media: [
      { src: '/projets/ToisiemeLieu/01-LOGO.png', alt: 'Logo de Troisième Lieu', layout: 'large' },
      { src: '/projets/ToisiemeLieu/02-COULEUR.png', alt: 'Palette de couleurs de Troisième Lieu', layout: 'large' },
      { src: '/projets/ToisiemeLieu/03-TYPO.png', alt: 'Univers typographique de Troisième Lieu', layout: 'wide' },
      { src: '/projets/ToisiemeLieu/04-ILLUS.png', alt: 'Illustrations de Troisième Lieu', layout: 'wide' },
      { src: '/projets/ToisiemeLieu/05-TroisiemeLieu-Website.jpg', alt: 'Maquette du site web de Troisième Lieu', layout: 'portrait', fit: 'contain' },
      { src: '/projets/ToisiemeLieu/06-PPT1.png', alt: 'Présentation Troisième Lieu — page 1', layout: 'landscape' },
      { src: '/projets/ToisiemeLieu/07-PPT2.png', alt: 'Présentation Troisième Lieu — page 2', layout: 'landscape' },
      { src: '/projets/ToisiemeLieu/08-PPT3.png', alt: 'Présentation Troisième Lieu — page 3', layout: 'landscape' },
      { src: '/projets/ToisiemeLieu/09-PPT4.png', alt: 'Présentation Troisième Lieu — page 4', layout: 'landscape' },
    ],
  },
  {
    slug: 'ardeche-a-paris',
    title: 'L’Ardèche à Paris',
    isNew: false,
    tags: [
      { id: 'digital', label: 'Digital' },
      { id: 'illustration', label: 'Illustration' },
    ],
    subtitle: 'Site web & univers graphique',
    description: 'Création d’un univers digital chaleureux pour faire découvrir les produits ardéchois à Paris.',
    detailTitle: 'Faire voyager l’Ardèche jusqu’à Paris',
    detailText: 'Une expérience visuelle colorée qui valorise les produits, leurs origines et le savoir-faire ardéchois à travers une navigation simple et généreuse.',
    accent: 'linear-gradient(135deg, #f05a3f 0%, #f4a340 52%, #f4cf54 100%)',
    cover: '/projets/Ardeche%20Paris/Cover-Illus.png',
    media: [
      { src: '/projets/Ardeche%20Paris/01-homepagemosaique.jpg', alt: 'Page d’accueil du site L’Ardèche à Paris', layout: 'large' },
      { src: '/projets/Ardeche%20Paris/02-page-produits.jpg', alt: 'Page produits du site L’Ardèche à Paris', layout: 'portrait', fit: 'contain' },
    ],
  },
  {
    slug: 'illustrations',
    title: 'Illustrations',
    tags: [{ id: 'illustration', label: 'Illustration' }, { id: 'da', label: 'DA' }],
    subtitle: 'Sélection d’illustrations',
    description: 'Une collection de personnages, scènes et univers illustrés réalisés pour différents projets et clients.',
    detailTitle: 'Des univers graphiques aux styles multiples',
    detailText: 'Illustrations éditoriales, publicitaires et digitales : une sélection de créations qui explore différentes techniques, palettes et narrations.',
    accent: 'linear-gradient(135deg, #d94b38 0%, #ef8a42 52%, #f5ce5c 100%)',
    cover: '/projets/illustrations/cover-saucisson.jpg',
    media: illustrationFiles.map((filename, index) => ({
      src: encodeURI(`/projets/illustrations/${filename}`),
      alt: `Illustration — visuel ${index + 1}`,
    })),
  },
  {
    slug: 'logos',
    title: 'Logos',
    tags: [
      { id: 'da', label: 'DA' },
      { id: 'brand-id', label: 'Brand ID' },
      { id: 'logo', label: 'Logo' },
    ],
    subtitle: 'Sélection d’identités visuelles',
    description: 'Une sélection de logos et de signes graphiques conçus pour différents projets et univers de marque.',
    detailTitle: 'Identités visuelles',
    detailText: 'Une collection de créations de logos et de systèmes graphiques.',
    accent: 'linear-gradient(135deg, #ececec 0%, #d4d4d4 55%, #b7b7b7 100%)',
    cover: '/projets/Logos/Cover-logo.png',
    media: logoFiles.map((filename, index) => ({
      src: `/projets/Logos/${filename}`,
      alt: `Logo — création ${index + 1}`,
      layout: 'square',
    })),
  },
  {
    slug: 'autonomy',
    title: 'Autonomy',
    tags: [
      { id: 'dc', label: 'DC' },
      { id: 'da', label: 'DA' },
      { id: 'brand-id', label: 'Brand ID' },
      { id: 'video', label: 'Vidéos' },
    ],
    subtitle: 'Identité de marque du festival Autonomy',
    description: 'Création de l’identité visuelle et des supports de communication d’Autonomy.',
    detailTitle: 'Une identité de marque en mouvement',
    detailText: 'Direction de création, direction artistique, identité visuelle et contenus vidéo pour Autonomy.',
    accent: 'linear-gradient(135deg, #0000FF 0%, #535353 58%, #8c8c8c 100%)',
    cover: '/projets/Autonomy/cover-Autonomy.jpg',
    mediaType: 'video',
    video: {
      url: 'https://vimeo.com/302733417?fl=pl&fe=sh',
      title: 'Autonomy',
      provider: 'vimeo',
      aspectRatio: '16 / 9',
    },
    media: autonomyFiles.map((filename, index) => ({
      src: encodeURI(`/projets/Autonomy/${filename}`),
      alt: `Autonomy — visuel ${index + 1}`,
    })),
  },
];

// BOUTONS DE FILTRE AFFICHÉS SUR LA PAGE D'ACCUEIL
// L'id doit correspondre à l'id utilisé dans les tags des projets.
export const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'last-work', label: 'Last work' },
  { id: 'dc', label: 'DC' },
  { id: 'da', label: 'DA' },
  { id: 'brand-id', label: 'Brand ID' },
  { id: 'publicite', label: 'Publicité' },
  { id: 'digital', label: 'Digital' },
  { id: 'illustration', label: 'Illustration' },
  { id: 'logo', label: 'Logo' },
  { id: 'print', label: 'Print' },
  { id: 'video', label: 'Vidéo' },
];
