import { languages, defaultLang, type SupportedLang } from './languages';
import { ui } from './ui';

export function getLangFromUrl(url: URL | string): SupportedLang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && segments[0] in languages) {
    return segments[0] as SupportedLang;
  }
  
  return defaultLang;
}

export function getRouteFromUrl(url: URL | string): string {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return '/';
  }
  
  if (segments[0] in languages) {
    const subSegments = segments.slice(1);
    return subSegments.length === 0 ? '/' : `/${subSegments.join('/')}`;
  }
  
  return `/${segments.join('/')}`;
}

export function getLocalizedUrl(targetLang: SupportedLang, currentPathOrUrl: URL | string, baseUrl: string = 'https://controllertesters.com'): string {
  const route = getRouteFromUrl(currentPathOrUrl);
  const cleanRoute = route === '/' ? '' : route;
  
  if (targetLang === defaultLang) {
    return cleanRoute === '' ? `${baseUrl}/` : `${baseUrl}${cleanRoute}`;
  }
  
  return `${baseUrl}/${targetLang}${cleanRoute}`;
}

export function getLocalizedRelativePath(targetLang: SupportedLang, currentPathOrUrl: URL | string): string {
  const route = getRouteFromUrl(currentPathOrUrl);
  const cleanRoute = route === '/' ? '' : route;
  
  if (targetLang === defaultLang) {
    return cleanRoute === '' ? '/' : cleanRoute;
  }
  
  return `/${targetLang}${cleanRoute}`;
}

export function useTranslations(lang: SupportedLang) {
  const currentUI = ui[lang] || ui[defaultLang];
  return function t(key: string): string {
    return currentUI[key] || ui[defaultLang][key] || key;
  };
}

export interface HreflangItem {
  hreflang: string;
  href: string;
  lang: SupportedLang | 'x-default';
}

export function getHreflangList(currentPathOrUrl: URL | string, baseUrl: string = 'https://controllertesters.com'): HreflangItem[] {
  const route = getRouteFromUrl(currentPathOrUrl);
  const cleanRoute = route === '/' ? '' : route;
  
  const list: HreflangItem[] = [];
  
  // 1. x-default points to default language (English)
  list.push({
    hreflang: 'x-default',
    href: cleanRoute === '' ? `${baseUrl}/` : `${baseUrl}${cleanRoute}`,
    lang: 'x-default',
  });
  
  // 2. All supported locales
  for (const langCode of Object.keys(languages) as SupportedLang[]) {
    const langInfo = languages[langCode];
    const href = langCode === defaultLang
      ? (cleanRoute === '' ? `${baseUrl}/` : `${baseUrl}${cleanRoute}`)
      : `${baseUrl}/${langCode}${cleanRoute}`;
      
    list.push({
      hreflang: langInfo.hreflang,
      href,
      lang: langCode,
    });
  }
  
  return list;
}
