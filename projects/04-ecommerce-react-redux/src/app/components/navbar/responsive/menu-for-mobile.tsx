'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ShoppingCart } from '@/app/icons';
import { setToggleMenu } from '@/app/store/slice/open-responsive-menu';
import { Contact, Copyright, Home, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const MenuForMobile = () => {
  const value = useAppSelector((state) => state.toogleMenu.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setToggleMenu());
  };

  return (
    value && (
      <div className='fixed top-0 left-0 z-50 h-screen w-screen backdrop-blur-xl'>
        <aside
          id='sidebar'
          className='fixed left-0 top-0 z-40 h-screen w-64 transition-transform'
          aria-label='Sidebar'
        >
          <div className='flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900'>
            <div className='mb-10 flex items-center rounded-lg px-3 py-2 text-white border bg-[#005cb5] '>
              <Image
                alt='Logo page'
                width={25}
                height={25}
                src={'/assets/navbar-logo.png'}
              />
              <span className='ml-3 text-base font-semibold'>CZ Mobile</span>
            </div>
            <ul className='space-y-2 text-sm font-medium'>
              <li>
                <Link
                  href='/'
                  onClick={handleClick}
                  className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
                >
                  <Home size={20} />
                  <span className='ml-3 flex-1 whitespace-nowrap'>Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/shop'
                  onClick={handleClick}
                  className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
                >
                  <ShoppingCart />
                  <span className='ml-3 flex-1 whitespace-nowrap'>Tienda</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/contacts'
                  onClick={handleClick}
                  className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
                >
                  <Contact size={20} />
                  <span className='ml-3 flex-1 whitespace-nowrap'>
                    Contacto
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/warranty'}
                  onClick={handleClick}
                  className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
                >
                  <Smartphone size={20} />
                  <span className='ml-3 flex-1 whitespace-nowrap'>
                    Garantía
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href='/certification'
                  onClick={handleClick}
                  className='flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
                >
                  <Copyright size={20} />
                  <span className='ml-3 flex-1 whitespace-nowrap'>
                    Certificación
                  </span>
                </Link>
              </li>
            </ul>
            <div className='mt-auto flex'>
              <div className='flex w-full justify-between'>
                <span className='text-sm font-medium text-black dark:text-white'>
                  <a
                    href='mailto:motor@stockware.ru'
                    className='hover:border-b  '
                  >
                    @info@czmobile.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    )
  );
};
