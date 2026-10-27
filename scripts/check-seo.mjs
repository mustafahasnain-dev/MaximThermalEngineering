// Build-time SEO check. Runs on dist/ after `astro build` and exits 1 on any error:
// missing/duplicate/over-long title or description, H1 count other than one, missing or wrong canonical,
// image without alt text, broken internal link or #anchor, invalid JSON-LD.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://www.maximthermalengg.com';
const LIMITS = { title: 60, description: 155 };

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith('.html') ? [p] : [];
  });

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return m ? decode(m[2] ?? m[3] ?? '') : null;
};
const urlFor = (file) => {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  return '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '/');
};

const pages = walk(DIST).map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  return { file, url: urlFor(file), html };
});
const byUrl = new Map(pages.map((p) => [p.url, p]));
const idsOf = (html) => new Set([...html.matchAll(/\sid\s*=\s*"([^"]+)"/g)].map((m) => m[1]));

const errors = [];
const err = (p, msg) => errors.push(`${p.url}  ${msg}`);
const seen = { title: new Map(), description: new Map() };

for (const p of pages) {
  const { html } = p;
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(html);

  // Title and description
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '');
  const descTag = html.match(/<meta[^>]+name="description"[^>]*>/i)?.[0];
  const description = descTag ? attr(descTag, 'content') ?? '' : '';
  for (const [k, v] of [['title', title], ['description', description]]) {
    if (!v) err(p, `missing ${k}`);
    else {
      if (v.length > LIMITS[k]) err(p, `${k} is ${v.length} chars (max ${LIMITS[k]}): "${v}"`);
      if (!noindex) {
        if (seen[k].has(v)) err(p, `duplicate ${k}, also on ${seen[k].get(v)}`);
        else seen[k].set(v, p.url);
      }
    }
  }

  // One H1
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1 !== 1) err(p, `has ${h1} <h1> elements (expected 1)`);

  // Canonical
  const canonTag = html.match(/<link[^>]+rel="canonical"[^>]*>/i)?.[0];
  const canonical = canonTag ? attr(canonTag, 'href') : null;
  if (!canonical) err(p, 'missing canonical');
  else if (canonical !== SITE + p.url) err(p, `canonical ${canonical} does not match ${SITE + p.url}`);

  // Images need non-empty alt (decorative images must be aria-hidden)
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const alt = attr(tag, 'alt');
    if (alt === null || (alt.trim() === '' && attr(tag, 'aria-hidden') !== 'true')) err(p, `image without alt text: ${attr(tag, 'src')}`);
  }

  // Internal links and anchors
  const ownIds = idsOf(html);
  for (const m of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(m[0], 'href');
    if (!href || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    const [pathPart, hash] = href.split('#');
    if (pathPart === '') {
      if (hash && !ownIds.has(hash)) err(p, `broken anchor #${hash}`);
      continue;
    }
    const target = byUrl.get(pathPart.split('?')[0]);
    if (!target) {
      const asset = path.join(DIST, pathPart);
      if (!fs.existsSync(asset)) err(p, `broken link ${href}`);
      continue;
    }
    if (hash && !idsOf(target.html).has(hash)) err(p, `broken anchor ${href}`);
  }

  // JSON-LD
  for (const m of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]);
      for (const item of Array.isArray(data) ? data : [data]) {
        if (item['@context'] !== 'https://schema.org') err(p, `JSON-LD item without schema.org @context (${item['@type']})`);
        if (!item['@type']) err(p, 'JSON-LD item without @type');
      }
    } catch (e) {
      err(p, `invalid JSON-LD: ${e.message}`);
    }
  }
}

if (errors.length) {
  console.error(`\nSEO check failed with ${errors.length} error(s):\n`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log(`SEO check passed: ${pages.length} pages, 0 errors.`);
