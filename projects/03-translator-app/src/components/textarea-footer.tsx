import { Lang_Symbols } from '@/app/languages.d';
import { IconCopy, IconHearSound } from './icon';
import { Button } from './ui/button';
import { handleCopy, handleHearSound } from '@/lib/utils';

interface props {
  result: string;
  lang: Lang_Symbols;
}

export const TextAreaFooter = ({ result, lang }: props) => {
  return (
    <footer className='absolute bottom-2 left-2 cursor-pointer flex gap-1'>
      <Button
        variant={'ghost'}
        size={'icon'}
        onClick={() => handleCopy(result)}
        title='Copiar'
      >
        <IconCopy width={25} />
      </Button>
      <Button
        variant={'ghost'}
        size={'icon'}
        title='Escuchar'
        onClick={() => handleHearSound(result, lang)}
      >
        <IconHearSound width={25} />
      </Button>
    </footer>
  );
};
