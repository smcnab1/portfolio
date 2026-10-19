import { motion } from 'framer-motion';
import { FC } from 'react';

import Navigation from './Navigation';

const MobileMenu: FC = () => {
  return (
    <motion.div
      id='mobile-navigation'
      className='my-3 flex h-[calc(100dvh-7rem)] flex-col overflow-y-auto pb-8'
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navigation />
    </motion.div>
  );
};

export default MobileMenu;
