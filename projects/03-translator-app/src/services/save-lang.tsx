'use client';

import { Lang_Symbols } from '@/app/languages.d';

// Save the language to local storage
export function saveLangToLocalStorage({
  lang,
}: {
  lang: { from: Lang_Symbols; to: Lang_Symbols };
}) {
  const data = JSON.stringify(lang);
  localStorage.setItem('lang', data);
}

// Get the language from local storage
export function getLangToLocalStorage() {
  if (typeof window === 'undefined') return { from: null, to: null };
  const langData = localStorage.getItem('lang');

  if (!langData) return { from: null, to: null };

  const lang = JSON.parse(langData);

  return lang;
}
