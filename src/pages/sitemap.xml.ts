import type { APIRoute } from 'astro';
import { languages, type SupportedLang } from '../i18n/languages';

const SITE_URL = 'https://controllertesters.com';

interface RouteConfig {
  path: string;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

const routes: RouteConfig[] = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'stick-drift-test', priority: '0.9', changefreq: 'daily' },
  { path: 'f1-reaction-time-test', priority: '0.9', changefreq: 'daily' },
  { path: 'reaction-matrix', priority: '0.9', changefreq: 'daily' },
  { path: 'about', priority: '0.5', changefreq: 'monthly' },
  { path: 'contact', priority: '0.5', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.3', changefreq: 'monthly' },
  { path: 'terms', priority: '0.3', changefreq: 'monthly' },
];

const allLangs = Object.keys(languages) as SupportedLang[];

function getPageUrl(lang: SupportedLang, routePath: string): string {
  if (lang === 'en') {
    return routePath ? `${SITE_URL}/${routePath}` : `${SITE_URL}/`;
  }
  return routePath ? `${SITE_URL}/${lang}/${routePath}` : `${SITE_URL}/${lang}`;
}

export const GET: APIRoute = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: string[] = [];

  for (const route of routes) {
    for (const lang of allLangs) {
      const loc = getPageUrl(lang, route.path);

      // Generate xhtml:link alternates for Google Multilingual Indexing
      const alternateLinks = allLangs.map((l) => {
        const altHref = getPageUrl(l, route.path);
        const hreflang = languages[l].hreflang;
        return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altHref}" />`;
      });

      // Add x-default fallback to English version
      const xDefaultHref = getPageUrl('en', route.path);
      alternateLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />`);

      urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${alternateLinks.join('\n')}
  </url>`);
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
