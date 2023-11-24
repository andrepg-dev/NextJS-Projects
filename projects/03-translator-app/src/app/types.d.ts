import { Lang_Symbols } from './languages.d';

export interface State {
  from: Lang_Symbols;
  to: Lang_Symbols;
  text: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: Lang_Symbols }
  | { type: 'SET_TO_LANGUAGE'; payload: Lang_Symbols }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string };

export interface TextAreaProps {
  loading?: boolean;
  type: SectionType;
  lang?: Lang_Symbols;
  onChange: (value: string) => void;
  value: string;
}

export type SectionType = 'from' | 'to';
