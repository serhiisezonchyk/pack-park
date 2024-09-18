import { cn } from '@/lib/utils';
import { ShoppingBagIcon } from 'lucide-react';
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('w-12 h-auto ', className)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'

      >
        <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z'></path>
        <path d='M3 6h18'></path>
        <path d='M16 10a4 4 0 0 1-8 0'></path>



        <g transform='translate(12, 14)'>
          <path
            d='M0,-3 C-2.5,-3 -3.5,-1 -3.5,0 C-3.5,2 0,4 0,4 C0,4 3.5,2 3.5,0 C3.5,-1 2.5,-3 0,-3Z'
            fill='#2196F3'
          />
          <circle cx='0' cy='0' r='1.5' fill='white' />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
