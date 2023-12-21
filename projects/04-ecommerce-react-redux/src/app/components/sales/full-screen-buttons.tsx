'use client';
import { useAppDispatch } from '@/app/hooks/redux';
import { addFullScreen } from '@/app/store/slice/full-screen-selected-device';
import { Button } from '@/components/ui/button';
import { Fullscreen } from 'lucide-react';
import { ButtonTooltip } from '../button-tooltip';

interface Props {
  img: string;
  title: string;
  description: string;
  deal: { memory?: string; price?: number };
}

export const FullScreenButton = ({ img, title, description, deal }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addFullScreen({ img, title, description, deal }));
  };

  return (
    <ButtonTooltip message='Full screen'>
      <Button variant={'outline'} size={'icon'} onClick={handleClick}>
        <Fullscreen width={16} height={16} />
      </Button>
    </ButtonTooltip>
  );
};
