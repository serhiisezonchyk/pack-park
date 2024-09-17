import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
interface Props {
  className?: string;
}
interface Step {
  id: number;
  title: string;
  description: string;
  src: string;
}
const steps: Step[] = [
  {
    id: 1,
    title: 'Book online or on the app',
    description:
      'Get the app and choose a convenient location. Your BounceShield™ Protection is activated upon booking online.',
    src: '/step1.png',
  },
  {
    id: 2,
    title: 'Head to the store',
    description:
      'Drop off your bags by showing your confirmation to a store employee.',
    src: '/step2.png',
  },
  {
    id: 3,
    title: 'Enjoy the day',
    description:
      'Do whatever you’d like, then show your confirmation to pick up your stuff.',
    src: '/step3.png',
  },
];
const HowItWorksSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className)}>
      <div className='container mx-auto py-6 px-2'>
        <h2 className='text-3xl font-bold'>How it works</h2>
        <ul className='mt-12 flex flex-col md:flex-row gap-4'>
          {steps.map((el) => (
            <SingleStep key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  );
};

function SingleStep({ item }: { item: Step }) {
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
