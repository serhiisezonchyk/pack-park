import Header from '@/components/header/Header';
import React from 'react';
interface Props {
  children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header className='border-b-[1px] border-b-primary/10'/>
      <main className='mt-16 h-[calc(100vh-4rem-1px)]'>{children}</main>
    </>
  );
};

export default layout;
