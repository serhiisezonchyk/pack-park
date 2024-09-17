'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionUlProps = HTMLMotionProps<'ul'>;

const MotionUl = React.forwardRef<HTMLUListElement, MotionUlProps>(
  function MotionUl({ children, ...props }, ref) {
    return (
      <motion.ul ref={ref} {...props}>
        {children}
      </motion.ul>
    );
  }
);

export default MotionUl;
