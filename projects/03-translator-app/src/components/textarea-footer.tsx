'use client';

import { Lang_Symbols } from '@/app/languages.d';
import { IconCopy, IconHearSound, IconLoading } from './icon';
import { Button } from './ui/button';
import { useState } from 'react';
import { handleCopy, handleHearSound } from '@/lib/utils';

interface props {
  result: string;
  lang: Lang_Symbols;
}

export const SPEAKER_STATE = {
  ON: 'speaking',
  OFF: 'not_speaking',
  loading: 'Loading...',
};

export const TextAreaFooter = ({ result, lang }: props) => {
  const [isSpeaking, setIsSpeaking] = useState(SPEAKER_STATE.OFF);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <footer className='absolute bottom-2 left-2 cursor-pointer flex'>
      <Button
        variant={'ghost'}
        onClick={() => handleCopy(result, setIsCopied)}
        title='Copiar'
        size='sm'
      >
        <IconCopy width={25} className={`${isCopied && 'mr-2'}`} />
        {isCopied && 'Copiado ✅'}
      </Button>
      <Button
        variant={'ghost'}
        size={'sm'}
        title='Escuchar'
        onClick={() => handleHearSound(result, lang, setIsSpeaking)}
      >
        <IconHearSound
          width={25}
          className={`
          ${isSpeaking == SPEAKER_STATE.ON && 'text-blue-600'}
          `}
        />
        {isSpeaking == SPEAKER_STATE.loading && <IconLoading width={25} />}
      </Button>
    </footer>
  );
};
