import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from '../Logo';
import ToogleMenu from './ToogleMenu';
import LanguageMenu from './LanguageMenu';
import { ThemeToggle } from './ThemeToggle';
interface Props {
  className?: string;
}
const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        `overflow-hidden h-16 fixed top-0 left-0 right-0 flex items-center px-2 bg-background z-50 
  after:content-[""] after:-z-10 after:size-32 after:bg-primary/10  after:absolute after:rounded-full after:-right-12 after:-bottom-16 after:shadow-[0_10px_10px_15px] after:shadow-primary/10`,
        className
      )}
    >
      <div className='container my-0 mx-auto'>
        <div className='flex justify-between gap-2 items-center'>
          <Link href={'/'} className=' flex items-center'>
            <Logo className='w-7 h-auto' />
            <h1 className='ml-2 text-xl font-bold uppercase leading-tight text-primary/80 -tracking-tighter'>
              PackPark
            </h1>
          </Link>
          <nav className='flex gap-2 sm:gap-4 items-center'>
            <LanguageMenu />
            <ThemeToggle />
            <ul className='gap-4 hidden sm:flex'>
              <li className='transition-all duration-300 ease-in-out hover:text-primary/90'>
                <Link href='/map'>For travalers</Link>
              </li>
              <li className='transition-all duration-300 ease-in-out hover:text-primary/90'>
                <Link href='/map'>Become a partner</Link>
              </li>
              <li className='transition-all duration-300 ease-in-out hover:text-primary/90'>
                <Link href='/about'>About</Link>
              </li>
            </ul>
            <ToogleMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
