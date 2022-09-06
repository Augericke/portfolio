import React from 'react';
import { motion } from 'framer-motion';

type ShowOnScrollProps = {
  children: React.ReactElement;
  customClass?: string;
};

const ShowOnScroll: React.FC<ShowOnScrollProps> = ({
  children,
  customClass = 'p-0',
}) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [30, 0], opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1 }}
      className={customClass}
    >
      {children}
    </motion.div>
  );
};

export default ShowOnScroll;
