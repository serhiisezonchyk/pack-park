'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionLiProps = HTMLMotionProps<'li'>;

const MotionLi = React.forwardRef<HTMLLIElement, MotionLiProps>(
  function Motionli({ children, ...props }, ref) {
    return (
      <motion.li ref={ref} {...props}>
        {children}
      </motion.li>
    );
  }
);

export default MotionLi;
