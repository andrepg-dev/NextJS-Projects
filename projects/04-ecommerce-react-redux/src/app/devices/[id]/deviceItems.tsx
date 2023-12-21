import { Card } from '@/app/components/sales/sales-card';
import { FetchToCatalog } from '@/lib/getBrands';

export const DeviceItems = async ({ id }: { id: string }) => {
  const { data: devices } = await FetchToCatalog(id);

  return devices.map((item) => (
    <Card
      key={item.id}
      description={item.description}
      id={item.id}
      src={item.img}
      title={item.name}
      width='280px'
    />
  ));
};
