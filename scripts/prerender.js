import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const dist = path.resolve(root, 'dist');

const routes = ['/', '/student-courses'];

async function prerender() {
  console.log('🚀 Starting pre-rendering...');

  // Start Vite preview server
  const server = await preview({
    root,
    build: { outDir: 'dist' },
    preview: { port: 3000 }
  });
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });

  try {
    for (const url of routes) {
      const page = await browser.newPage();
      const fullUrl = `http://localhost:3000${url}`;
      console.log(`Rendering ${fullUrl}...`);
      
      await page.goto(fullUrl, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1000)); // Wait for hydration/animations

      const html = await page.content();
      
      // Post-process HTML
      const finalHtml = html
        .replace(/http:\/\/localhost:3000/g, 'https://popinzbakingacademy.com')
        .replace(/<script[^>]+src="\/@vite\/client"[^>]*><\/script>/g, ''); // Remove dev scripts if any

      // Determine output path
      const filePath = url === '/' 
        ? path.join(dist, 'index.html')
        : path.join(dist, url.substring(1), 'index.html');

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, finalHtml);
      console.log(`✅ Saved ${filePath}`);
    }
  } catch (e) {
    console.error('Error during prerendering:', e);
    process.exit(1);
  } finally {
    await browser.close();
    server.httpServer.close();
    console.log('✨ Pre-rendering complete.');
  }
}

prerender();
