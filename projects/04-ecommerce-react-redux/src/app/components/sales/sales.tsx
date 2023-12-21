import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import { SalesItems } from './sales-items';
import { SkeletonSalesItems } from './skeleton-sales-items';
import { Title } from './title';

export const Sales = async () => {
  return (
    <article className='flex flex-col gap-8 justify-between '>
      <Title itemsNumber={12} title='Más Vendidos' withLine />

      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center'>
        <Suspense fallback={<SkeletonSalesItems />}>
          <SalesItems />
        </Suspense>
      </section>

      <Link href={'/shop'}>
        <Button className='w-full py-6 bg-[#121a2d]'>Load more</Button>
      </Link>
    </article>
  );
};
