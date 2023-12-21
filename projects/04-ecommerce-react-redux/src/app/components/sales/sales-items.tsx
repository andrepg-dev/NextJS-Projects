import { Item } from '@/app/api/items/route';
import { Card } from './sales-card';

export const SalesItems = async () => {
  const items = await getItems();

  return items.map((item) => (
    <Card
      key={item.id}
      {...item}
      price={item.deal.price}
      src={item.img}
      title={item.name}
      memory={item.deal.memory}
    />
  ));
};

const getItems = async () => {
  const res = await fetch('http://localhost:3000/api/items');
  const data: Array<Item> = await res.json();

  return data.slice(13, 25);
};
