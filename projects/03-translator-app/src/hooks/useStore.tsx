'use client';

import { Lang_Symbols } from '@/app/languages.d';
import { type Action, type State } from '@/app/types';
import { getLangToLocalStorage } from '@/services/save-lang';
import { useReducer } from 'react';

const { from, to } = getLangToLocalStorage();

const initialState: State = {
  from: from || 'en',
  to: to || 'es',
  text: '',
  result: '',
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      from: state.to,
      to: state.from,
      text: state.result,
      result: '',
    };
  }

  if (type === 'SET_TEXT') {
    return {
      ...state,
      text: action.payload,
      loading: true,
    };
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading: false,
    };
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      from: action.payload,
    };
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      to: action.payload,
    };
  }

  return state;
}

export function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    interchangeLanguages: () => dispatch({ type: 'INTERCHANGE_LANGUAGES' }),
    setText: (text: string) => dispatch({ type: 'SET_TEXT', payload: text }),
    setResult: (result: string) =>
      dispatch({ type: 'SET_RESULT', payload: result }),
    setFrom: (lang: Lang_Symbols) =>
      dispatch({ type: 'SET_FROM_LANGUAGE', payload: lang }),
    setTo: (lang: Lang_Symbols) =>
      dispatch({ type: 'SET_TO_LANGUAGE', payload: lang }),
  };

  const handleText = (result: string) => {
    dispatch({ type: 'SET_TEXT', payload: result });
  };

  return { state, actions, handleText };
}
