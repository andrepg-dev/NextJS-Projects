import { HeaderWithTitle } from '@/app/components/shop/header-with-title';
import { ItemsShop } from '@/app/components/shop/items-shop';
import { SkeletonItemsShop } from '@/app/components/shop/items-shop-skeleton';
import { RouterShop } from '@/app/components/shop/navbar';
import { Searcher } from '@/app/components/shop/search';
import { Suspense } from 'react';

export default async function ShopPage() {
  return (
    <main className='flex flex-col gap-10 text-titulo'>
      <RouterShop />
      <article className='md:px-medium px-mobile flex flex-col gap-6'>
        <HeaderWithTitle items={42} />

        <section className='flex gap-8 flex-col xl:flex-row'>
          <aside className='w-full xl:min-w-[23rem] xl:w-[23rem] p-6 flex gap-3 border rounded h-[128px] sticky xl:top-4 left-0 z-30 bg-white'>
            <Searcher />
          </aside>
          <article className='w-full flex flex-col gap-4'>
            <Suspense fallback={<SkeletonItemsShop />}>
              <ItemsShop />
            </Suspense>
          </article>
        </section>
      </article>
    </main>
  );
}
