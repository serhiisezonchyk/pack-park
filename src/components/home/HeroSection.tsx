import React from 'react';
import Image from 'next/image';
import MotionP from '../motion/MotionP';
import MotionH1 from '../motion/MotionH1';
import MotionDiv from '../motion/MotionDiv';
import HomeForm from './HomeForm';
import { useTranslations } from 'next-intl';
interface Props {
  className?: string;
}
const HeroSection: React.FC<Props> = ({ className }) => {
  const t = useTranslations('Hero');
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
              {t('locations')}
            </MotionP>
            <MotionH1
              className='text-4xl md:text-5xl font-bold mb-10 tracking-wide'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {t('header')}
            </MotionH1>
            <MotionP
              className='tracking-wide font-light'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              {t('price')}
            </MotionP>
            <MotionDiv
              className='mt-10'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <HomeForm />
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
