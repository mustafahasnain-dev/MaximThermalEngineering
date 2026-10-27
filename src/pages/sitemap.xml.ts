import type { APIRoute } from 'astro';
import { pages } from '../lib/pages';
import { posts } from '../data/posts';
import { projects } from '../data/projects';

const SITE = 'https://www.maximthermalengg.com';

export const GET: APIRoute = () => {
  const paths = [
    '/',
    ...[...pages.keys()].filter((n) => n !== 'home' && n !== 'project' && !n.startsWith('project_')).map((n) => `/${n}/`),
    '/blog/',
    '/category/heat-exchanger/',
    ...posts.map((p) => `/heat-exchanger/${p.slug}/`),
    '/project/',
    '/project-category/project/',
    ...projects.map((p) => `/project/${p.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
