import {
  CircleUserRoundIcon,
  Heart,
  Search,
  ShoppingCartIcon,
} from 'lucide-react';
import Link from 'next/link';
import { ButtonTooltip } from '../button-tooltip';
import { cn } from '@/lib/utils';

export const OPTIONS_LINK_ICON = [
  { route: 'search', icon: <Search size={22} />, tooltip: 'Buscar ' },
  { route: 'whishlist', icon: <Heart size={20} />, tooltip: 'Lista de deseos' },
  {
    route: 'cart',
    icon: <ShoppingCartIcon size={20} />,
    tooltip: 'Carro de compras',
  },
  {
    route: 'account',
    icon: <CircleUserRoundIcon size={20} />,
    tooltip: 'Cuenta',
  },
];

interface LinkProps {
  route: string;
  children: React.ReactNode;
  tooltip: string;
}

export const LinkElement = ({ route, children, tooltip }: LinkProps) => {
  return (
    <ButtonTooltip message={tooltip} delay={200}>
      <Link
        href={route}
        as={route}
        className={cn(
          'hover:bg-[#121a2d] px-4 flex gap-3 items-center h-[45px] rounded'
        )}
      >
        {children}
      </Link>
    </ButtonTooltip>
  );
};
