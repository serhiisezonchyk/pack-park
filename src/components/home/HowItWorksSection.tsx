import { steps } from '@/lib/consts';
import { cn } from '@/lib/utils';
import { LocaleType, StepType } from '@/types';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
interface Props {
  className?: string;
  steps?: StepType[];
}

const HowItWorksSection: React.FC<Props> = ({ className }) => {
  const t = useTranslations('HowItWorksSection');
  const locale = useLocale() as LocaleType;
  const data = steps[locale];
  return (
    <section className={cn(className)}>
      <div className='container mx-auto py-6 px-2'>
        <h2 className='text-3xl font-bold'></h2>
        <ul className='mt-12 flex flex-col md:flex-row gap-4'>
          {data.map((el) => (
            <SingleStep key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  );
};

function SingleStep({ item }: { item: StepType }) {
  return (
    <li className='flex flex-col sm:flex-row md:flex-col w-full md:w-1/3 gap-6'>
      <Image
        src={item.src}
        alt={item.title}
        height={296}
        width={296}
        className='object-contain w-[200px] self-center'
      />

      <div className='space-y-4'>
        <h3 className='font-bold text-2xl'>{item.title}</h3>
        <p className='text-muted-foreground'>{item.description}</p>
      </div>
    </li>
  );
}
export default HowItWorksSection;
