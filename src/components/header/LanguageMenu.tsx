'use client';
import React, { useTransition } from 'react';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const LanguageMenu = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const t = useTranslations('LanguageMenu');
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition(); // Handle transitions smoothly

  // Function to handle language change
  const onSelectChange = (value: string) => {
    const newPath = `/${value}${pathname.replace(/^\/(en|uk)/, '')}`
    console.log(newPath)
    startTransition(() => {
      router.replace(newPath); // Replace the route with new locale and current path
    });
  };

  return (
    <div className='relative'>
      <span className='absolute top-1 right-0 rounded-full px-1 border-[1px] border-black py-0 bg-muted text-muted-foreground text-[6px]'>
        {localActive}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            variant='ghost'
            disabled={isPending}
            className='rounded-full p-2 cursor-pointer'
          >
            <Globe size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={localActive}
            onValueChange={onSelectChange}
          >
            <DropdownMenuRadioItem value='uk'>
              🇺🇦 Українська
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='en'>🇬🇧 English</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default React.memo(LanguageMenu);
