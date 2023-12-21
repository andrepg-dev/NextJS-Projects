import { Title } from '@/app/components/sales/title';
import { Suspense } from 'react';
import { DeviceItems } from './deviceItems';
import { SkeletonSalesItems } from '@/app/components/sales/skeleton-sales-items';

export default async function xiaomi({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main className='md:px-medium px-mobile pt-10 flex flex-col gap-8'>
      <Title title={`Resultados para ${id}`} itemsNumber={20} />

      <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center'>
        <Suspense fallback={<SkeletonSalesItems />}>
          <DeviceItems id={id} />
        </Suspense>
      </article>
    </main>
  );
}
