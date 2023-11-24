import { Lang_Symbols } from '@/app/languages.d';
import { SectionType } from '@/app/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Textarea
export const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === 'from') return 'Introducir texto';
  if (type === 'to' && loading === true) return 'Traduciendo...';
  if (type === 'to') return 'Traducción';
};

export const getValue = (type: SectionType, value?: string, text?: string) => {
  if (type === 'to') return value;

  return text;
};

// Speech Synthesis
const navigator_sppech = new SpeechSynthesisUtterance();

export const handleHearSound = (text: string, lang: Lang_Symbols) => {
  if (!text || speechSynthesis.speaking) return;

  navigator_sppech.lang = lang;
  navigator_sppech.text = text;
  navigator_sppech.rate = 0.8;

  speechSynthesis.speak(navigator_sppech);
};

export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
};
