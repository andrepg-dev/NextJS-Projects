export const SkeletonCard = () => {
  return (
    <div className='md:w-full h-[470px] flex border-2 border-gray-200 animate-pulse rounded flex-col p-4'>
      <header className='p-4 flex justify-center items-center relative'>
        <div className='w-full h-[240px] bg-gray-200 rounded'></div>
      </header>
      <section className='flex flex-col justify-between h-full'>
        <div className='mt-4 h-6 bg-gray-200 rounded'></div>
        <div className='mt-2 h-6 bg-gray-200 rounded w-full'></div>
        <footer className='h-4 mt-auto flex justify-between items-end text-[13px] font-bold uppercase'>
          <div className='w-1/2 h-4 bg-gray-200 rounded'></div>
          <div className='ml-auto w-1/2 h-4 bg-gray-200 rounded'></div>
        </footer>
      </section>
    </div>
  );
};
