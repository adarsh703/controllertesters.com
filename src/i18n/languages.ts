export const defaultLang = 'en' as const;

export type SupportedLang = 'en' | 'pt-br' | 'tr' | 'ar' | 'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it';

export interface LanguageInfo {
  code: SupportedLang;
  name: string;
  nativeName: string;
  hreflang: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

export const languages: Record<SupportedLang, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    hreflang: 'en',
    dir: 'ltr',
    flag: '🇺🇸',
  },
  'pt-br': {
    code: 'pt-br',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    hreflang: 'pt-BR',
    dir: 'ltr',
    flag: '🇧🇷',
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    hreflang: 'tr',
    dir: 'ltr',
    flag: '🇹🇷',
  },
  ar: {
    code: 'ar',
    name: 'Arabic (Egypt)',
    nativeName: 'العربية',
    hreflang: 'ar',
    dir: 'rtl',
    flag: '🇪🇬',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    hreflang: 'es',
    dir: 'ltr',
    flag: '🇪🇸',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    hreflang: 'ja',
    dir: 'ltr',
    flag: '🇯🇵',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    hreflang: 'fr',
    dir: 'ltr',
    flag: '🇫🇷',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    hreflang: 'de',
    dir: 'ltr',
    flag: '🇩🇪',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    hreflang: 'pt',
    dir: 'ltr',
    flag: '🇵🇹',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    hreflang: 'ko',
    dir: 'ltr',
    flag: '🇰🇷',
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    hreflang: 'it',
    dir: 'ltr',
    flag: '🇮🇹',
  },
};

export const nonDefaultLocales: SupportedLang[] = [
  'pt-br',
  'tr',
  'ar',
  'es',
  'ja',
  'fr',
  'de',
  'pt',
  'ko',
  'it',
];
