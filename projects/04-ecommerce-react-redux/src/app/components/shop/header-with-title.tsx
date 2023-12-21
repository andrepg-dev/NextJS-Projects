import { Title } from '../sales/title';

export const HeaderWithTitle = ({ items }: { items: number }) => {
  return (
    <header className='flex justify-between relative'>
      <Title itemsNumber={items} title='shop' />
      <ul className='flex gap-8 uppercase text-sm font-medium list-disc text-gray-500'>
        <li>all</li>
        <li>Accesorios</li>
      </ul>
    </header>
  );
};
