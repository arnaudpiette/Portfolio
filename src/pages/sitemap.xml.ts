import type { APIRoute } from 'astro';
import { fallbackProjects } from '../data/creativeProjects';
import { devProjects } from '../data/devProjects';

const publicPaths = [
  '/',
  '/creative',
  '/dev',
  ...fallbackProjects.map((project) => `/projets/${project.slug}`),
  ...devProjects.map((project) => `/dev/projets/${project.slug}`),
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Astro site configuration is required to generate the sitemap.');
  }

  const urls = publicPaths
    .map((path) => new URL(path, site).href)
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
