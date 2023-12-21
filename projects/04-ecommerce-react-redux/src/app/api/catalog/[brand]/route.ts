import gsmarena from 'gsmarena-api';
import { array } from '../array';

interface BrandProps {
  params: {
    brand: string;
  };
}

interface ItemProps {
  id: string;
  name: string;
  devices: number;
}

export async function GET(request: Request, { params }: BrandProps) {
  const { brand } = params;
  const val = await validate(brand);

  if (val) {
    const devices = await gsmarena.catalog.getBrand(brand);
    return Response.json(devices);
  }

  return Response.json({ error: 'Brand not found' }, { status: 404 });
}

async function validate(brand: string) {
  const data: Array<ItemProps> = array;
  const value = data.find((item) => item.id === brand);

  if (value) return true;
  return false;
}
