import { Lang_Symbols } from './languages.d';

export type FromLanguage = Lang_Symbols | 'auto';

export interface State {
  from: FromLanguage;
  to: Lang_Symbols;
  text: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE'; payload: Lang_Symbols }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string };

export interface TextAreaProps {
  loading?: boolean;
  type: SectionType;
  lang?: FromLanguage;
  onChange: (value: string) => void;
  value: string;
}

export type SectionType = 'from' | 'to';
