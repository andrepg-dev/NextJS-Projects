'use client';

import { Calculator, Calendar, Smile } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { catalog_options } from '../catalog';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

export function GlobalSearcher() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem onSelect={() => runCommand(() => {})}>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {})}>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {})}>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Phone brand'>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/apple'))}>
              <span>Apple</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/google'))}>
              <span>Google</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/samsung'))}>
              <span>Samsung</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/huawei'))}>
              <span>Huawei</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/xiaomi'))}>
              <span>Xiaomi</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/devices/motorola'))}>
              <span>Motorola</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
