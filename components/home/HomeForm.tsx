'use client';
import React from 'react';
import { Input } from '../ui/input';
import DatePicker from '../DatePicker';
import QuanitiySelector from '../QuanitiySelector';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { HomeFormType } from '@/types';
import { Form, FormField } from '../ui/form';
import { useRouter } from 'next/navigation';

const HomeForm = () => {
  const router = useRouter();

  const form = useForm<HomeFormType>({
    defaultValues: {
      city: '',
      startDate: new Date(),
      small: 1,
    },
  });
  function onSubmit(values: HomeFormType) {
    const queryObject = (Object.keys(values) as (keyof HomeFormType)[]).reduce(
      (acc, key) => {
        const value = values[key];
        if (value !== undefined && value !== null) {
          acc[key] =
            value instanceof Date ? value.toISOString() : String(value);
        }
        return acc;
      },
      {} as Record<string, string>
    );

    const params = new URLSearchParams(queryObject).toString();
    router.push(`/map?${params}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col sm:flex-row sm:rounded-xl sm:border-[1px] sm:divide-x-[1px]'>
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <Input
                className='sm:border-none rounded-3xl sm:focus-visible:ring-0 shadow-none min-w-52 w-full'
                placeholder='Search city...'
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <div className='flex flex-row rounded-3xl sm:rounded-none border-[1px] divide-x-[1px] sm:border-y-0 mt-4 sm:mt-0'>
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <DatePicker
                  minDate={new Date()}
                  className='w-full rounded-l-3xl sm:rounded-none flex-1 justify-center border-none shadow-none hover:bg-transparent'
                  date={field.value}
                  setDate={field.onChange}
                />
              )}
            />
            <FormField
              control={form.control}
              name='small'
              render={({ field }) => (
                <QuanitiySelector
                  units='Pc.'
                  min={1}
                  className='flex-1 justify-center w-fit px-2'
                  value={field.value}
                  setValue={field.onChange}
                />
              )}
            />
          </div>
        </div>
        <Button
          variant='default'
          type='submit'
          className='rounded-3xl mt-4 font-bold py-6 px-8 text-xl w-full sm:w-fit'
        >
          Find closest location
        </Button>
      </form>
    </Form>
  );
};

export default HomeForm;
