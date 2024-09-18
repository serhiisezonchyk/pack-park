'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
  className?: string;
  units: string;
  value: number;
  setValue: (value: number) => void;
  min?: number;
}
const QuanitiySelector: React.FC<Props> = ({
  className,
  units,
  value,
  setValue,
  min = 0,
}) => {
  return (
    <div
      className={cn('flex flex-row items-center gap-2 flex-nowrap', className)}
    >
      <Button
        asChild
        size='icon'
        variant={'ghost'}
        className='hover:bg-transparent active:bg-transparent size-4 cursor-pointer text-primary'
        onClick={() => {
          setValue(value <= min ? value : value - 1);
        }}
      >
        <Minus />
      </Button>
      <div className='select-none text-nowrap text-sm'>
        {value} {units}
      </div>
      <Button
        asChild
        size='icon'
        variant={'ghost'}
        className='hover:bg-transparent active:bg-transparent size-4 cursor-pointer text-primary'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <Plus size={4} />
      </Button>
    </div>
  );
};

export default QuanitiySelector;
