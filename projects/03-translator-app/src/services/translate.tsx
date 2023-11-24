import { Lang_Symbols } from '@/app/languages.d';

interface TranslationProps {
  text: string;
  from: Lang_Symbols;
  to: Lang_Symbols;
}

export const translate = async ({ text, from, to }: TranslationProps) => {
  if (!text.trim()) return '';

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}`;

  const response = await fetch(url);
  const data = await response.json();

  // [ [resultado 1], [resultado 2] ]
  const result = data[0].map((item: any) => item[0]).join('');
  console.log(data[0].length);

  return result;
};
