import Header from '@/components/header/Header';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ReviewSection from '@/components/home/ReviewSection';
import SwiperSection from '@/components/home/SwiperSection';
import 'swiper/css';

export default function Home() {
  return (
    <div>
      <Header className='border-b-0' />
      <HeroSection className='mt-16'/>
      <SwiperSection className='mt-4'/>
      <HowItWorksSection className='mt-16'/>
      <ReviewSection className='mt-16'/>
    </div>
  );
}
