'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionH1Props = HTMLMotionProps<'h1'>;

const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function Motionli({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

export default MotionH1;
