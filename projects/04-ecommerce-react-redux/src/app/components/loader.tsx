import Image from 'next/image';

export const Loader = () => {
  return (
    <div className='flex justify-center items-center bg-white h-[75.2svh] flex-col z-50 gap-4 text-2xl text-[#4b494c]'>
      <Image
        src={'/assets/loading-img.png'}
        width={150}
        height={150}
        alt='Loading image'
      />
    </div>
  );
};
