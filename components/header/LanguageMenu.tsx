'use client';
import React, { useState } from 'react';
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

const LanguageMenu = () => {
  const [language, setLanguage] = useState<'ukr' | 'en'>('en');
  return (
    <div className='relative'>
      <span className='absolute top-1 right-0 rounded-full px-1 border-[1px] border-black py-0 bg-muted text-muted-foreground text-[6px]'>
        {language}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            asChild
            size='icon'
            variant='ghost'
            className='rounded-full p-2 cursor-pointer'
          >
            <Globe size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={(val) => setLanguage(val as 'ukr' | 'en')}
          >
            <DropdownMenuRadioItem value='ukr'>Ukrainian</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='en'>English</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageMenu;
