import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import { allPageMeta, type PageMeta } from '../src/lib/pageMeta';

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
  let html = replaceOnce(template, /(<title>)[\s\S]*?(<\/title>)/, escapeHtml(meta.title));
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, escapeHtml(meta.url));
  for (const [attr, value] of tags) {
    html = replaceOnce(html, new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`), escapeHtml(value));
  }
  if (meta.jsonLd) {
    html = replaceOnce(
      html,
      /(<script type="application\/ld\+json" id="seo-json-ld">)[\s\S]*?(<\/script>)/,
      JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')
    );
  }
  return html;
}

// GitHub Pages only answers 200 for real files, so every route gets its own `<route>.html`.
export function prerenderRoutes(): Plugin {
  let outDir = 'dist';
  return {
    name: 'ayoya-prerender-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      for (const meta of allPageMeta()) {
        const file = path.join(outDir, `${meta.path}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, renderHead(template, meta));
      }
    }
  };
}
