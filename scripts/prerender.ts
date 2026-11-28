import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';
import { createServer, type Plugin } from 'vite';
import { ALL_PRODUCTS, PRODUCT_GALLERIES } from '../src/data';
import { ARTICLES } from '../src/data/articles';
import { BOOKS } from '../src/data/books';
import { allPageMeta, type PageMeta } from '../src/lib/pageMeta';
import { ORGANIZATION_JSON_LD, SITE_URL } from '../src/lib/seo';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Throws when a tag is missing so a change to index.html cannot silently ship wrong head tags.
function replaceOnce(html: string, pattern: RegExp, value: string): string {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in index.html`);
  return html.replace(pattern, (_match, before: string, after: string) => `${before}${value}${after}`);
}

function renderHead(template: string, meta: PageMeta): string {
  const tags: [string, string][] = [
    ['name="description"', meta.description],
    ['property="og:title"', meta.title],
    ['property="og:description"', meta.description],
    ['property="og:url"', meta.url],
    ['property="og:image"', meta.image],
    ['name="twitter:title"', meta.title],
    ['name="twitter:description"', meta.description],
    ['name="twitter:image"', meta.image]
  ];
  const withoutHomePreload = template.replace(/\n\s*<link rel="preload"[^>]*data-home-preload[^>]*>/g, '');
  let html = replaceOnce(withoutHomePreload, /(<title>)[\s\S]*?(<\/title>)/, escapeHtml(meta.title));
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, escapeHtml(meta.url));
  for (const [attr, value] of tags) {
    html = replaceOnce(html, new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`), escapeHtml(value));
  }
  if (meta.jsonLd) html = withJsonLd(html, meta.jsonLd);
  return html;
}

function withJsonLd(html: string, data: object): string {
  return replaceOnce(
    html,
    /(<script type="application\/ld\+json" id="seo-json-ld">)[\s\S]*?(<\/script>)/,
    JSON.stringify(data).replace(/</g, '\\u003c')
  );
}

// Built from the same page list, so a new product reaches the sitemap without extra work.
function sitemap(): string {
  const entry = (url: string, images: string[] = []) =>
    [
      '  <url>',
      `    <loc>${url}</loc>`,
      ...images.map(src => `    <image:image><image:loc>${escapeHtml(src)}</image:loc></image:image>`),
      '  </url>'
    ].join('\n');
  const pages = allPageMeta().map(meta => {
    const product = ALL_PRODUCTS.find(p => meta.path === `/san-pham/${p.id}`);
    const article = ARTICLES.find(a => meta.path === `/bai-viet/${a.slug}`);
    const book = BOOKS.find(b => meta.path === `/thu-vien-sach/${b.slug}`);
    const photos = product
      ? (PRODUCT_GALLERIES[product.id] ?? [product.image])
      : article
        ? [article.hero.src, ...article.blocks.flatMap(block => (block.type === 'img' ? [block.src] : []))]
        : book?.cover
          ? [book.cover.src]
          : [];
    return entry(meta.url, photos.map(src => (src.startsWith('/') ? `${SITE_URL}${src}` : src)));
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    entry(`${SITE_URL}/`),
    ...pages,
    '</urlset>',
    ''
  ].join('\n');
}

// Puts the rendered page inside #root, in place of the placeholder used by the dev server.
function withBody(html: string, route: string, body: string): string {
  const pattern = /<div id="root"><!--home-shell-->[\s\S]*?<!--\/home-shell--><\/div>/;
  if (!pattern.test(html)) throw new Error('prerender: #root placeholder not found in index.html');
  return html.replace(pattern, () => `<div id="root" data-ssr="${route}">${body}</div>`);
}

// The stylesheet is small enough to travel inside the page, which saves a blocking request.
function inlineCss(html: string, outDir: string): string {
  const pattern = /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/;
  const match = html.match(pattern);
  if (!match) throw new Error('prerender: built stylesheet link not found');
  const css = fs.readFileSync(path.join(outDir, match[1]), 'utf8').trim();
  return html.replace(pattern, () => `<style>${css}</style>`);
}

// The page is already readable without it, so the script waits behind the photos on a slow network.
function lowerScriptPriority(html: string): string {
  return replaceOnce(html, /(<script type="module")()/, ' fetchpriority="low"');
}

// A product photo without its smaller copies would show as a broken image on phones, so stop the build.
function checkPhotoCopies(publicDir: string) {
  const photos = new Set([...ALL_PRODUCTS.map(p => p.image), ...Object.values(PRODUCT_GALLERIES).flat()]);
  const missing = [...photos]
    .filter(src => src.startsWith('/products/'))
    .flatMap(src => ['thumbs', 'mid'].map(dir => `products/${dir}/${path.parse(src).name}.webp`).concat(src.slice(1)))
    .filter(file => !fs.existsSync(path.join(publicDir, file)));
  if (missing.length) throw new Error(`prerender: missing photo files in public/: ${missing.join(', ')}`);
}

// GitHub Pages only answers 200 for real files, so every route gets its own `<route>.html`,
// already filled with its content so it shows before any script has run.
export function prerenderRoutes(): Plugin {
  let outDir = 'dist';
  let root = process.cwd();
  return {
    name: 'ayoya-prerender-routes',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      checkPhotoCopies(path.join(root, 'public'));
      const indexFile = path.join(outDir, 'index.html');
      const template = withJsonLd(lowerScriptPriority(inlineCss(fs.readFileSync(indexFile, 'utf8'), outDir)), ORGANIZATION_JSON_LD);
      const server = await createServer({
        configFile: false,
        root,
        mode: 'production',
        logLevel: 'error',
        appType: 'custom',
        plugins: [react()],
        // The router's Node build is CommonJS; leaving out the "node" condition selects its ES module build.
        ssr: { noExternal: ['react-router-dom', 'react-router'], resolve: { conditions: ['module', 'import', 'production'] } },
        server: { middlewareMode: true, hmr: false, watch: null },
        optimizeDeps: { noDiscovery: true, include: [] }
      });
      try {
        const { render } = (await server.ssrLoadModule('/src/entry-server.tsx')) as { render: (url: string) => string };
        for (const meta of allPageMeta()) {
          const file = path.join(outDir, `${meta.path}.html`);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, withBody(renderHead(template, meta), meta.path, render(meta.path)));
        }
        fs.writeFileSync(indexFile, withBody(template, '/', render('/')));
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap());
      } finally {
        await server.close();
      }
    }
  };
}
