// Liste partagée des logos affichés dans l'overlay de compétences CRÉA.
export const creativeLogos = [
  ['01-photoshop.svg', 'Photoshop'],
  ['02-illustrator.svg', 'Illustrator'],
  ['03-indesign.svg', 'InDesign'],
  ['04-figma.svg', 'Figma'],
  ['05-canva.svg', 'Canva'],
  ['06-powerpoint.svg', 'PowerPoint'],
  ['07-word.svg', 'Word'],
].map(([file, label]) => ({ src: `/projets/Logo-crea/${file}`, label }));
