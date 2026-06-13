import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routes = [
  '/',
  '/about',
  '/offerings',
  '/rd',
  '/esg-calculator',
  '/blogs',
  '/demo',
];

for (const url of routes) {
  const { html: appHtml, helmet } = render(url);

  const headTags = helmet
    ? [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()].join('\n    ')
    : '';

  const html = template
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const filePath =
    url === '/' ? toAbs('dist/index.html') : toAbs(`dist${url}/index.html`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  console.log('Pre-rendered:', url, '→', filePath);
}
