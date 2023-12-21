interface CatalogItem {
  id: string;
  name: string;
  devices: number;
}

export interface Device extends CatalogItem {
  img: string;
  description: string;
}

export const FetchToCatalog = async (brandName: string) => {
  const { id } = await getIdBrand(brandName);

  if (id === 0) return { data: [], length: 0 };

  const getBrands = await fetch(`http://localhost:3000/api/catalog/${id}`);
  const data: Array<Device> = await getBrands.json();

  const result = data.slice(0, 20);
  return { data: result, length: result.length };
};

export async function getIdBrand(brandName: string) {
  const res = await fetch('http://localhost:3000/api/catalog');
  const data: Array<CatalogItem> = await res.json();

  const device = data.filter(
    (item) => item.name.toLowerCase() === brandName.toLowerCase()
  );

  // Without result
  if (device.length === 0) return { id: 0 };

  return { id: device[0].id };
}
