import { Lang_Symbols } from '@/app/languages.d';
import { IconCopy, IconHearSound } from './icon';
import { Button } from './ui/button';

interface props {
  result: string;
  lang: Lang_Symbols;
}

export const TextAreaFooter = ({ result, lang }: props) => {
  // Speech Synthesis
  const navigator_sppech = new SpeechSynthesisUtterance();

  const handleHearSound = (text: string, lang: Lang_Symbols) => {
    if (!text || speechSynthesis.speaking) return;

    navigator_sppech.lang = lang;
    navigator_sppech.text = text;
    navigator_sppech.rate = 0.8;

    speechSynthesis.speak(navigator_sppech);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
