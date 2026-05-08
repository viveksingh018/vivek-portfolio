import React from 'react';
import { motion } from 'framer-motion';

const BentoBox = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-neutral-900/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BentoBox;