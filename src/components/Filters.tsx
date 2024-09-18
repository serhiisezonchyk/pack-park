import React, { useCallback, useEffect } from 'react';
import DatePicker from './DatePicker';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import QuanitiyQuerySelector from './QuantityQuerySelector';
import { parseAsInteger, parseAsIsoDateTime, useQueryState } from 'nuqs';
import Image from 'next/image';
import { addHours, compareDesc } from 'date-fns';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}
const Filters: React.FC<Props> = ({ className }) => {
  const t = useTranslations('Filters');
  const [city, setCity] = useQueryState('city');
  const [smallCount, setSmallCount] = useQueryState(
    'small',
    parseAsInteger.withDefault(0)
  );
  const [largeCount, setLargeCount] = useQueryState(
    'large',
    parseAsInteger.withDefault(0)
  );
  const [startDate, setStartDate] = useQueryState(
    'startDate',
    parseAsIsoDateTime.withDefault(new Date())
  );
  const [endDate, setEndDate] = useQueryState(
    'endDate',
    parseAsIsoDateTime.withDefault(addHours(startDate, 1))
  );
  useEffect(() => {
    switch (compareDesc(startDate, endDate)) {
      case -1:
        setEndDate(addHours(startDate, 1));
      default:
        break;
    }
  }, [startDate, endDate]);
  return (
    <div className={cn(className)}>
      <div className='py-4 space-y-4 mb-8'>
        <h2 className='font-semibold'>{t('cityHeader')}</h2>
        <Input
          value={city || ''}
          onChange={(e) => setCity(e.target.value)}
          placeholder={t('cityPlaceholder')}
        />
      </div>
      <div className='border-b-[1px] mb-12'>
        <h2 className='font-semibold'>{t('dateHeader')}</h2>
        <div className='divide-y-2'>
          <div className='flex justify-between items-center py-4'>
            <p className='font-thin text-muted-foreground'>
              {t('startDateHeader')}
            </p>
            <DatePicker
              className='w-fit border-none shadow-none'
              icon
              date={startDate}
              minDate={new Date()}
              setDate={setStartDate}
            />
          </div>
          <div className='flex justify-between items-center py-4'>
            <p className='font-thin text-muted-foreground'>
              {t('endDateHeader')}
            </p>
            <DatePicker
              className='w-fit border-none shadow-none'
              icon
              date={endDate}
              minDate={startDate}
              setDate={setEndDate}
            />
          </div>
        </div>
      </div>

      <div className='border-b-[1px] mb-12'>
        <h2 className='font-semibold'>{t('countHeader')}</h2>
        <div className='divide-y-2'>
          <div className='flex items-center py-4'>
            <div className='flex-1 flex flex-row items-center'>
              <div className='relative h-[60px] w-[60px] justify-center'>
                <Image
                  src='/small.png'
                  alt='small luggage image'
                  fill={true}
                  className='object-contain'
                />
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='font-semibold'>{t('smallTitle')}</p>
                <p className='text-muted-foreground text-sm'>
                  {t('smallDescription')}
                </p>
              </div>
            </div>
            <QuanitiyQuerySelector
              count={smallCount}
              setCount={setSmallCount}
            />
          </div>
          <div className='flex items-center py-4'>
            <div className='flex-1 flex flex-row items-center'>
              <div className='relative h-[60px] w-[60px]'>
                <Image
                  src='/large.png'
                  alt='large luggage image'
                  fill={true}
                  className='object-contain'
                />
              </div>
              <div className='flex flex-col justify-between gap-2'>
                <p className='font-semibold'>{t('largeTitle')}</p>
                <p className='text-muted-foreground text-sm'>
                  {t('largeDescription')}
                </p>
              </div>
            </div>
            <QuanitiyQuerySelector
              count={largeCount}
              setCount={setLargeCount}
            />
          </div>
        </div>
      </div>

      <div className='h-screen'></div>
    </div>
  );
};

export default React.memo(Filters);
