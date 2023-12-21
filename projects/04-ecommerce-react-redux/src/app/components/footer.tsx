import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='w-full bg-[#283346] flex text-xl uppercase text-white flex-col mt-20 text-center overflow-hidden'>
      <div className='flex items-center justify-between w-full px-medium pl-12 font-bold flex-col md:flex-row gap-10 md:gap-4 py-8'>
        <Image
          src={'/assets/navbar-logo.png'}
          alt='Footer logo'
          width={130}
          height={130}
        />
        <span>garantía</span>
        <span>certificación</span>
        <span>contacto</span>
        <span>políticas de privacidad</span>
      </div>

      <div className='text-[12px] md:text-sm bg-gray-300 text-gray-500 w-full flex items-center justify-center p-3'>
        © 2020 CZ Mobile All Rights Reserved
      </div>
    </footer>
  );
};
