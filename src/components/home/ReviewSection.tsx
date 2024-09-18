'use client';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Button } from '../ui/button';
import Slide from '../ReviewItem';
import { comments } from '@/lib/consts';
import { useLocale } from 'next-intl';
import { LocaleType } from '@/types';

interface Props {
  className?: string;
}
const ReviewSection: React.FC<Props> = ({ className }) => {
  const locale = useLocale() as LocaleType;
  const data = comments[locale];
  return (
    <section className={cn('bg-muted', className)}>
      <div className='container mx-auto py-12 px-2'>
        <h2 className='text-3xl font-bold mb-4'>Our customers say it best</h2>
        <p className='text-xl text-muted-foreground mb-8'>
          Millions of bags stored. 1M+ customers all over the world.
        </p>
        <Swiper rewind={true} spaceBetween={30} slidesPerView='auto'>
          {data.map((el) => (
            <SwiperSlide
              key={el.id}
              className='border-2 rounded-lg  !w-full sm:!w-[340px] md:!w-[380px] lg:!w-[480px] !h-auto'
            >
              <Slide key={el.id} item={el} />
            </SwiperSlide>
          ))}
          <SliderActions />
        </Swiper>
      </div>
    </section>
  );
};

function SliderActions() {
  const swiper = useSwiper();
  return (
    <div className='flex w-full justify-between mt-6'>
      <Button
        asChild
        size={'icon'}
        className='cursor-pointer rounded-full size-14 p-2 hover:bg-background hover:text-primary shadow-none border-primary border-2'
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowLeft size={36} />
      </Button>
      <Button
        asChild
        size={'icon'}
        className='cursor-pointer rounded-full size-14 p-2 hover:bg-background hover:text-primary shadow-none border-primary border-2'
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowRight size={36} />
      </Button>
    </div>
  );
}

export default ReviewSection;
