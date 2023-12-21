import Image from 'next/image';
import { Routes } from '../routes';
import { LinkElement, OPTIONS_LINK_ICON } from './options-icons-navbar';
import { ButtonResponsiveNavbar } from './responsive/button-for-mobile';
import { MenuForMobile } from './responsive/menu-for-mobile';
import { GlobalSearcher } from './global-search';

export const NavBar = () => {
  return (
    <nav className='w-full bg-titulo flex gap-8 justify-between px-mobile pl-2 py-2 lg:py-0 z-50 md:px-medium'>
      <GlobalSearcher />
      <section>
        <Image
          src={'/assets/navbar-logo.png'}
          width={80}
          height={80}
          alt='Navbar Image'
          priority
          className='md:h-[80px] md:w-[80px] h-[60px] w-[60px]'
        />
      </section>

      <div className='hidden lg:flex items-center'>
        <Routes />
      </div>

      <div className='hidden lg:flex items-center text-white'>
        <div className='flex h-full items-center'>
          {OPTIONS_LINK_ICON.map((value, index) => (
            <LinkElement
              key={index}
              route={value.route}
              tooltip={value.tooltip}
            >
              {value.icon}
            </LinkElement>
          ))}
        </div>
      </div>

      {/* Menu responsive button */}
      <div className='flex lg:hidden items-center'>
        <ButtonResponsiveNavbar />
        <MenuForMobile />
      </div>
    </nav>
  );
};
