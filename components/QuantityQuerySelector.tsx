'use client';
import React from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
  className?: string;
  units?: string;
  count: number;
  setCount: (num: number) => void;
}
const QuanitiyQuerySelector: React.FC<Props> = ({
  className,
  units = '',
  count,
  setCount,
}) => {
  return (
    <div
      className={cn('flex flex-row items-center gap-2 flex-nowrap', className)}
    >
      <Button
        size='icon'
        variant={'default'}
        disabled={count < 1}
        className='bg-transparent hover:text-background active:text-background rounded-full border-primary border-[1px] size-8 p-2 cursor-pointer text-primary '
        onClick={() => {
          setCount(count === 0 ? 0 : count - 1);
        }}
      >
        <Minus />
      </Button>
      <div className='select-none text-nowrap text-sm'>
        {count} {units}
      </div>
      <Button
        asChild
        size='icon'
        variant={'default'}
        className='bg-transparent hover:text-background active:text-background rounded-full border-primary border-[1px] size-8 p-2 cursor-pointer text-primary'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <Plus size={4} />
      </Button>
    </div>
  );
};

export default React.memo(QuanitiyQuerySelector);
