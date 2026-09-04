import type { SupportedLang } from './languages';

export function formatLocalizedNumber(num: number | string, _lang: SupportedLang = 'en', width: number = 2): string {
  if (typeof num === 'number') {
    return num.toString().padStart(width, '0');
  }
  const numericVal = parseInt(num.toString(), 10);
  if (!isNaN(numericVal)) {
    return numericVal.toString().padStart(width, '0');
  }
  return num.toString();
}

export function toLocalizedText(text: string, _lang: SupportedLang = 'en'): string {
  return text;
}

export const localizedStepLabels: Record<SupportedLang, string> = {
  en: "Step",
  'pt-br': "Passo",
  tr: "Adım",
  ar: "الخطوة",
  es: "Paso",
  ja: "ステップ",
  fr: "Étape",
  de: "Schritt",
  pt: "Passo",
  ko: "단계",
  it: "Passo"
};
