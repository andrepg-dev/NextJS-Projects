'use client';

import { Lang_Symbols } from '@/app/languages.d';
import { IconCopy, IconHearSound } from './icon';
import { Button } from './ui/button';
import { useState } from 'react';
import { handleCopy, handleHearSound } from '@/lib/utils';

interface props {
  result: string;
  lang: Lang_Symbols;
}

export const TextAreaFooter = ({ result, lang }: props) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
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
          className={`${isSpeaking && 'text-blue-600'}`}
        />
      </Button>
    </footer>
  );
};
