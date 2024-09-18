import { CommentType } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Slide = ({ item }: { item: CommentType }) => {
  return (
    <div className='p-6 space-y-8 h-full bg-card'>
      <div className='flex flex-row gap-4'>
        <div className='grayscale'>
          <Image
            width={64}
            height={64}
            src={item.src}
            alt={`Comment ${item.name}`}
            className='rounded-full object-contain '
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='uppercase text-muted-foreground'>{item.city}</p>
          <div className='flex flex-row gap-1'>
            {new Array(item.rate).fill(null).map((_,index) => {
              return <Star key={index} size={10} className='fill-primary text-primary' />;
            })}
          </div>
        </div>
      </div>
      <p className=''>{item.comment}</p>
    </div>
  );
};

export default Slide;
