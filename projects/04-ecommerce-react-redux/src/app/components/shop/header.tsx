import { Button } from '@/components/ui/button';
import { PanelTopOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className='w-full rounded grid grid-cols-2 md:grid-cols-4 overflow-hidden text-sm font-medium tracking-wide border'>
      <Button className='uppercase rounded-none border-b md:border-none flex gap-3 bg-titulo'>
        Catalog
        <PanelTopOpen size={16} />
      </Button>
      <Button className='uppercase rounded-none md:border-r md:border-b-transparent border-b' variant={'ghost'}>
        per Page
      </Button>
      <Button className='uppercase rounded-none border-r' variant={'ghost'}>
        sort
      </Button>
      <Button className='uppercase rounded-none' variant={'ghost'}>
        view
      </Button>
    </header>
  );
};
