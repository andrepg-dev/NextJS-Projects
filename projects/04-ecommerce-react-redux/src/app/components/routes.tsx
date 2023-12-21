'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const OPTIONS = [
  { label: 'Inicio', path: '/' },
  { label: 'Tienda', path: '/shop' },
  { label: 'Contacto', path: '/contacts' },
  { label: 'Garantia', path: '/warranty' },
  { label: 'Certificación', path: '/certification' },
];

export const Routes = () => {
  const pathname = usePathname();

  return (
    <ul className='flex gap-4'>
      {OPTIONS.map((option, index) => (
        <li key={index}>
          <Link
            className={cn(
              'relative hover:text-white text-gray-400',
              option.path === pathname && 'menu-active text-white'
            )}
            href={option.path}
          >
            <Button
              className={cn(
                'bg-titulo',
                option.path === pathname && 'bg-[#121a2d]',
                option.path != pathname && 'hover:bg-[#121a2d]/20'
              )}
            >
              {option.label}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
