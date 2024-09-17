import { Star } from 'lucide-react';
import Image from 'next/image';
export interface Comment {
  id: number;
  src: string;
  name: string;
  city: string;
  rate: number;
  comment: string;
}
export const comments: Comment[] = [
  {
    id: 1,
    src: '/user-1.png',
    name: 'Christina R.',
    city: 'New York',
    rate: 5,
    comment:
      'Good experience. My bag was safe in a luggage room. Very nice people working in this hotel. ',
  },
  {
    id: 2,
    src: '/user-2.png',
    name: 'Becky M.',
    city: 'London',
    rate: 5,
    comment:
      'Smooth check in and check out of our luggage and super friendly people ! Very easy and completely felt at ease my luggage was safe',
  },
  {
    id: 3,
    src: '/user-3.png',
    name: 'Milad M.',
    city: 'Paris',
    rate: 5,
    comment:
      'Very easy to use. Took less than 5 mins for drop off and pick up. Everything was there, safe and secure!',
  },
  {
    id: 4,
    src: '/user-4.png',
    name: 'Cailyn W.',
    city: 'Los Angeles',
    rate: 5,
    comment:
      'Very easy and convenient way to store luggage. The staff were friendly and efficient. Thank you!',
  },
  {
    id: 5,
    src: '/user-5.png',
    name: 'Deborah H.',
    city: 'Rome',
    rate: 5,
    comment:
      'Easy to find, very affordable, friendly staff and secure location. Would absolutely recommend.',
  },
  {
    id: 6,
    src: '/user-6.png',
    name: 'Dragan V.',
    city: 'Sydney',
    rate: 5,
    comment:
      'Just what I needed, was able to drop my bags off for a few hours and pick up late night due to their being open 24hrs.  Very convenient.',
  },
];
const Slide = ({ item }: { item: Comment }) => {
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
