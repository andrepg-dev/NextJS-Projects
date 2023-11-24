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

