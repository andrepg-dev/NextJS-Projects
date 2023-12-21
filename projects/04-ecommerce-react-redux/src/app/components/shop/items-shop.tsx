import { Item } from '@/app/api/items/route';
import { Header } from './header';
import { Card } from '../sales/sales-card';

export const ItemsShop = async () => {
  const items = await getItems();

  return (
    <>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
        {items.map((item) => (
          <Card
            key={item.id}
            src={item.img}
            description={item.description}
            id={item.id}
            memory={item.deal.memory}
            price={item.deal.price}
            title={item.name}
            width='100%'
          />
        ))}
      </div>
    </>
  );
};

async function getItems() {
  const res = await fetch('http://localhost:3000/api/items');
  const data: Array<Item> = await res.json();

  return data;
}
