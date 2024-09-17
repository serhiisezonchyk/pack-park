'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionDivProps = HTMLMotionProps<'div'>;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function Motionli({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

export default MotionDiv;
