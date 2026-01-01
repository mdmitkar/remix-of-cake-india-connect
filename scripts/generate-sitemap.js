import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://popinzbakingacademy.com';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/student-courses', priority: '0.9', changefreq: 'weekly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  const distPath = path.resolve(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated');
};

const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml
`;

  const distPath = path.resolve(__dirname, '../dist');
  fs.writeFileSync(path.join(distPath, 'robots.txt'), robots);
  console.log('✅ robots.txt generated');
};

generateSitemap();
generateRobotsTxt();
