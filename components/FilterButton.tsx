'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Filter, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Filters from './Filters';
const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = (open: boolean) => {
    setOpen(open);
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    const handleResize = () => {
      if (open) {
        toggleMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);
  const menuVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: '0%',
      transition: {
        duration: 0.3,
        type: 'tween',
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.3,
        type: 'tween',
      },
    },
  };
  return (
    <>
      <Button
        asChild
        size='icon'
        className='absolute md:hidden top-0 left-0 p-2 size-12 rounded-full cursor-pointer m-2 z-40'
        onClick={() => toggleMenu(true)}
      >
        <Filter />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='fixed top-0 overflow-hidden w-full h-screen bg-background z-50'
          >
            <div className='fixed top-0 right-0 left-0 h-12 flex justify-end items-center border-b-[1px] bg-background'>
              <X
                size={42}
                onClick={() => toggleMenu(false)}
                className='cursor-pointer hover:text-primary transition-all duration-200 p-2 mr-2'
              />
            </div>
            <div className='mt-12 overflow-y-auto'>
              <Filters className='px-2 sm:px-8'/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterButton;
