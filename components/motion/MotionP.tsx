'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionPProps = HTMLMotionProps<'p'>;

const MotionP = React.forwardRef<HTMLParagraphElement, MotionPProps>(
  function Motionli({ children, ...props }, ref) {
    return (
      <motion.p ref={ref} {...props}>
        {children}
      </motion.p>
    );
  }
);

export default MotionP;