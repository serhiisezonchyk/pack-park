'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, delay, motion } from 'framer-motion';
import { Button } from '../ui/button';
const links = [
  { href: '/map', text: 'For travelers' },
  { href: '/partner', text: 'Become a partner' },
  { href: '/about', text: 'About' },
];
const ToggleMenu = () => {
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

  const mobileMenuVariant = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
      transition: {
        duration: 0.3,
        type: 'tween',
      },
    },
    exit: {
      y: '-100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.4,
      },
    },
  };

  const ulVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <Button
        onClick={() => toggleMenu(true)}
        size='icon'
        variant='ghost'
        className='rounded-full p-2 cursor-pointer sm:hidden'
      >
        <Menu size={16} />
      </Button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/40 z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleMenu(false)}
            />
            <motion.div
              variants={mobileMenuVariant}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed z-50 top-0 bg-background left-0 right-0 w-full h-fit rounded-b-xl py-12'
            >
              <div className='absolute top-0 right-0 p-2 m-2 cursor-pointer hover:text-primary transition-all duration-200'>
                <X size={16} onClick={() => toggleMenu(false)} />
              </div>
              <motion.ul className='text-center space-y-2' variants={ulVariant}>
                {links.map((el) => (
                  <LinkItem key={el.href} item={el} onClick={toggleMenu} />
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

function LinkItem({
  item,
  onClick,
}: {
  item: { href: string; text: string };
  onClick: (value: boolean) => void;
}) {
  const liVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.li
      className='hover:text-primary duration-300 transition-all ease-in-out uppercase tracking-wider cursor-pointer py-2'
      variants={liVariant}
    >
      <Link href={item.href} onClick={() => onClick(false)}>
        {item.text}
      </Link>
    </motion.li>
  );
}
export default ToggleMenu;
