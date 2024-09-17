import React from 'react';
import { Input } from '../ui/input';
import DatePicker from '../DatePicker';
import QuanitiySelector from '../QuanitiySelector';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import MotionP from '../motion/MotionP';
import MotionH1 from '../motion/MotionH1';
import MotionForm from '../motion/MotionForm';
import MotionDiv from '../motion/MotionDiv';
import HomeForm from './HomeForm';
interface Props {
  className?: string;
}
const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div className='container sm:py-10 mx-auto'>
        <div className='flex flex-col-reverse sm:flex-row gap-4 px-2'>
          <div className='flex-1'>
            <MotionP
              className='text-sm text text-muted-foreground mb-4 tracking-wide'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              10,000+ locations reviewed to keep your luggage safe
            </MotionP>
            <MotionH1
              className='text-4xl md:text-5xl font-bold mb-10 tracking-wide'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Luggage storage near you
            </MotionH1>
            <MotionP
              className='tracking-wide font-light'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Freedom to explore from $1,05 / hour
            </MotionP>
            <MotionDiv
              className='mt-10'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <HomeForm/>
            </MotionDiv>
          </div>
          <MotionDiv
            className='relative w-full h-[350px] sm:h-auto'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <Image
              src='/default_hero_4.png'
              alt='Hero image'
              fill={true}
              className='object-contain'
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
