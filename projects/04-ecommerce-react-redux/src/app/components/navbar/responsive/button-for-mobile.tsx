'use client';
import { useAppDispatch } from '@/app/hooks/redux';
import { setToggleMenu } from '@/app/store/slice/open-responsive-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const ButtonResponsiveNavbar = () => {
  const dispatch = useAppDispatch();
  const handleToogleMenu = () => {
    return dispatch(setToggleMenu());
  };

  return (
    <Button
      className='flex gap-1 text-white bg-transparent border-transparent'
      variant={'outline'}
      size={'sm'}
      onClick={handleToogleMenu}
    >
      <Menu width={20} height={20} />
      MENU
    </Button>
  );
};
