'use client';

import type { FromLanguage } from '@/app/types';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onChanges: (event: FromLanguage) => void;
  value: string;
  entries: [string, string][];
  allowAuto?: boolean;
}

const AUTO_LANGUAGE_ENTRY: [FromLanguage, string] = ['auto', 'Detectar idioma'];

export const SelectLanguage = ({
  onChanges,
  value,
  entries,
  allowAuto = false,
}: Props) => {
  const [open, setOpen] = useState(false);
  const languageEntries = allowAuto
    ? [AUTO_LANGUAGE_ENTRY, ...entries]
    : entries;
  const selectedLanguage = languageEntries.find(([key]) => key === value)?.[1];

  const handleChange = (event: FromLanguage) => {
    if (event === 'auto' && !allowAuto) return;

    onChanges(event);

    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          aria-label='Seleccionar idioma'
          className='w-full justify-between gap-2 font-normal'
        >
          <span className='truncate text-left'>
            {selectedLanguage ?? 'Seleccionar idioma'}
          </span>
          <ChevronsUpDown className='h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] p-0'>
        <Command>
          <CommandInput placeholder='Buscar idioma...' />
          <CommandList>
            <CommandEmpty>No se encontró ese idioma.</CommandEmpty>
            <CommandGroup>
              {languageEntries.map(([key, label]) => (
                <CommandItem
                  key={key}
                  value={`${label} ${key}`}
                  onSelect={() => handleChange(key as FromLanguage)}
                  className='cursor-pointer justify-between'
                >
                  <span>{label}</span>
                  <span className='ml-auto flex items-center gap-2 text-xs text-muted-foreground'>
                    {key}
                    <Check
                      className={cn(
                        'h-4 w-4 text-blue-600',
                        value === key ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
