import { SkeletonCard } from '../card-skeleton';

export const SkeletonItemsShop = () => {
  const items = Array.from({ length: 9 });

  return (
    <>
      <header className='w-full rounded grid grid-cols-2 md:grid-cols-4 overflow-hidden text-sm font-medium tracking-wide border animate-pulse'>
        <div className='uppercase rounded-none border-b md:border-none flex gap-3 bg-gray-200 h-8'></div>
        <div className='uppercase rounded-none md:border-r md:border-b-transparent border-b h-8'></div>
        <div className='uppercase rounded-none border-r h-8'></div>
        <div className='uppercase rounded-none h-8'></div>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
        {items.map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </>
  );
};
