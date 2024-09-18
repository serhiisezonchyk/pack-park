'use client';

import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
type MotionFormProps = HTMLMotionProps<'form'>;

const MotionForm = React.forwardRef<HTMLFormElement, MotionFormProps>(
  function Motionli({ children, ...props }, ref) {
    return (
      <motion.form ref={ref} {...props}>
        {children}
      </motion.form>
    );
  }
);

export default MotionForm;
