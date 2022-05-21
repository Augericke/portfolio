import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type DarkModeToggleProps = {};

const DarkModeToggle: React.FC<DarkModeToggleProps> = (
  props: DarkModeToggleProps
) => {
  // State for dark mode
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleDarkModeToggle = () => setDarkTheme(!darkTheme);

  return (
    <div
      className={`flex h-7 w-14 items-center justify-start rounded-3xl
              bg-primaryDark transition-all duration-300 ease-in-out dark:bg-primary
                ${darkTheme ? 'justify-start' : 'justify-end'}`} // Needed to trigger framer animation
      onClick={handleDarkModeToggle}
    >
      <motion.div
        layout
        className="grid h-7 w-8 items-center justify-center overflow-hidden rounded-3xl bg-white p-0"
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.i
            key={darkTheme}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: [-15, 0], y: [10, 0], opacity: 1 }}
            exit={{ x: 15, y: -5, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {darkTheme ? (
              <FaSun size={20} className="text-primaryDark" />
            ) : (
              <FaMoon size={18} className="text-primary" />
            )}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;
