import { cn } from '@/lib/utils';

interface Props {
  img: string;
  title: string;
  deal: { memory: string; price: number };
  description: string;
}

export const DialogContentFullScreen = ({
  title,
  deal,
  description,
  img,
}: Props) => {
  return (
    <section
      className={cn(
        'w-[90%] max-h-[35rem] sm:w-[60%] md:w-[50%] lg:w-[55rem] lg:h-[25rem] flex lg:flex-row flex-col relative  rounded-lg overflow-hidden'
      )}
    >
      <div className='border-r w-full lg:w-[40%] bg-white flex justify-center py-4 overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='w-[40%] lg:w-full max-h-[10rem] md:max-h-full h-full object-contain scale-90 hover:scale-95 transition-transform'
        />
      </div>

      <section className='bg-white lg:w-[60%] flex flex-col overflow-auto '>
        <header className='p-6 flex justify-between'>
          <h1 className='text-3xl text-titulo font-black uppercase'>{title}</h1>
        </header>
        <p className='p-6 border-t border-b'>{description}</p>
        <div className='grid grid-cols-2 grid-rows-2 h-full [&>div]:p-6'>
          <div className='text-gray-500 flex flex-col gap-1 lg:grid lg:grid-cols-2 border-r border-b'>
            <span>Memoria: </span>
            <span className='text-black'>
              {deal.memory ? deal.memory : 'No definido'}
            </span>
          </div>
          <div className='text-gray-500 flex flex-col gap-1 lg:grid lg:grid-cols-2 border-b'>
            <span>Precio: </span>
            <span className='text-black'>
              {deal.price
                ? `L. ${Math.round(deal.price * 29).toLocaleString()}`
                : 'No definido'}
            </span>
          </div>
          <div className='text-gray-500 flex flex-col gap-1 lg:grid lg:grid-cols-2 border-r'>
            <span>Tag: </span>
            <span className='text-black'>{title.split(' ')[0]}</span>
          </div>
          <div className='text-gray-500 flex flex-col gap-1 lg:grid lg:grid-cols-2'>
            <span>Categoría: </span>
            <span className='text-black'>Accesorios</span>
          </div>
        </div>
      </section>
    </section>
  );
};
