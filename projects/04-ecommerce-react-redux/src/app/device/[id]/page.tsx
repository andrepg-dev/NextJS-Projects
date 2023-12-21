// TODO: Lo que tengo que hacer es crear un slice para esto en especifico que será casi igual al de select Full Screen ✅

import { MobileDevice } from '@/lib/type';
export default async function DevicePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getMovileDetails(params.id);

  return (
    <main>
      <div></div>
    </main>
  );
}

const getMovileDetails = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/items/device/${id}`);
  const data: MobileDevice = await res.json();

  // Solo tomar las propiedades que necesito
  return data;
};
