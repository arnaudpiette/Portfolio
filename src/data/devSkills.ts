// Décrit un logo de compétence affiché dans les overlays DEV.
export interface DevSkillLogo {
  src: string;
  label: string;
  className?: string;
}

// Décrit un groupe de compétences affiché dans les overlays DEV.
export interface DevSkillGroup {
  title: string;
  logos: DevSkillLogo[];
}

// Construit une entrée de logo à partir du dossier d'assets DEV existant.
const logo = (file: string, label: string, className?: string): DevSkillLogo => ({
  src: `/projets/Logo-dev/${file}`,
  label,
  className,
});

// Organise les compétences DEV communes à la page liste et aux fiches projets.
export const devSkillGroups: DevSkillGroup[] = [
  {
    title: 'Front-end',
    logos: [
      logo('01-html5.svg', 'HTML5'),
      logo('02-css3.svg', 'CSS3', 'logo-enlarged'),
      logo('03-javascript.svg', 'JavaScript'),
      logo('04-sass.svg', 'Sass'),
      logo('05-react.svg', 'React'),
      logo('06-jsx.svg', 'JSX', 'logo-extra-enlarged'),
      logo('07-react-router.svg', 'React Router'),
      logo('08-nextjs.svg', 'Next.js', 'logo-dev-light logo-hover-blue'),
      logo('09-astro.svg', 'Astro'),
      logo('19-git.svg', 'Git'),
      logo('22-figma.svg', 'Figma', 'logo-enlarged'),
      logo('23-lighthouse.svg', 'Lighthouse'),
    ],
  },
  {
    title: 'Back-end',
    logos: [
      logo('10-json.svg', 'JSON', 'logo-enlarged logo-dev-light logo-hover-blue'),
      logo('11-nodejs.svg', 'Node.js'),
      logo('12-expressjs.svg', 'Express.js', 'logo-extra-enlarged logo-dev-light logo-hover-blue'),
      logo('13-jwt.svg', 'JWT'),
      logo('14-bcrypt.svg', 'bcrypt', 'logo-extra-enlarged'),
      logo('15-multer.svg', 'Multer'),
      logo('16-sharp.svg', 'Sharp'),
      logo('17-mongodb.svg', 'MongoDB'),
      logo('18-mongoose.svg', 'Mongoose', 'logo-extra-enlarged logo-dev-light logo-hover-native'),
      logo('20-github.svg', 'GitHub', 'logo-dev-light logo-hover-blue'),
      logo('21-npm.svg', 'npm'),
      logo('24-api-rest.svg', 'API REST'),
    ],
  },
];
