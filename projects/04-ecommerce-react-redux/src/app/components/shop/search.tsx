import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const Searcher = () => {
  return (
    <div className='flex gap-3 flex-col w-full'>
      <h3 className='text-xl text-gray-500 font-bold'>Buscar producto</h3>
      <div className='flex w-full items-center space-x-2'>
        <Input type='text' placeholder='Buscar productos' />
        <Button type='submit' className='bg-titulo'>
          <Search size={18} />
        </Button>
      </div>
    </div>
  );
};
