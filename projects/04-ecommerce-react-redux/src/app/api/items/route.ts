import gsmarena from 'gsmarena-api';

interface Deal {
  deal: {
    memory: string;
    storeImg: string;
    price: number;
    currency: string;
    discount: number;
  };
}

export interface Item extends Deal {
  name: string;
  img: string;
  url: string;
  id: string;
  description: string;
}

const newItems: Array<Item> = [];

export async function GET() {
  const items = await gsmarena.deals.getDeals();

  for (let i = 0; i < items.length; i++) {
    const { name, img, url, id, description, deal } = items[i];
    newItems.push({ name, img, url, id, description, deal });
  }

  return Response.json(newItems);
}
