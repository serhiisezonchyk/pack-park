'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
interface Props {
  className?: string;
}

const list = [
  'Free cancellation',
  '10,000+ locations globally',
  'from $4.13/day',
  'Rated 4.9 by 628,581+ people',
  '$10,000 protection',
];
const SwiperSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
        <Swiper
          freeMode={true}
          spaceBetween={10}
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView='auto'
          loop={true}
          speed={6000}
        >
          {[...list, ...list].map((el, index) => (
            <SwiperSlide
              key={index}
              className='text-center border-[1px] bg-muted text-muted-foreground px-8 py-4 flex select-none sm:!min-w-48 md:!min-w-52 lg:!min-w-64 !w-fit uppercase'
            >
              {el}
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default React.memo(SwiperSection);
