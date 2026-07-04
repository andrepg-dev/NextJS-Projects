import { Lang_Symbols } from '@/app/languages.d';
import type { FromLanguage } from '@/app/types';

interface TranslationProps {
  text: string;
  from: FromLanguage;
  to: Lang_Symbols;
}

export const translate = async ({ text, from, to }: TranslationProps) => {
  if (!text.trim()) return '';

  const searchParams = new URLSearchParams({
    client: 'gtx',
    sl: from,
    tl: to,
    dt: 't',
    q: text,
  });
  const url = `https://translate.googleapis.com/translate_a/single?${searchParams.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  // [ [resultado 1], [resultado 2] ]
  const result = data[0].map((item: any) => item[0]).join('');
  return result;
};
