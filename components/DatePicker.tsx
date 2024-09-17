'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { DatetimePicker } from './ui/date-time-picker';
interface Props {
  className?: string;
  icon?: boolean;
  date: Date;
  setDate: (date: Date) => void;
  minDate?: Date;
}
const DatePicker: React.FC<Props> = ({
  className,
  icon = false,
  date,
  setDate,
  minDate,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          {date ? format(date, 'iii, dd/LL, HH:mm') : <span>Pick a date</span>}
          {icon && <CalendarIcon className='ml-2 h-4 w-4' />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-4'>
        <DatetimePicker
          selected={date}
          setDate={setDate}
          initialFocus
          minDate={minDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(DatePicker);
