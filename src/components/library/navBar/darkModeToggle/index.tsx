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
    // <div className="ml-[5%]">
    //   <span onClick={handleDarkModeToggle}>
    //     {darkTheme ? (
    //       <FaSun size="30" className="top-navigation-icon" />
    //     ) : (
    //       <FaMoon size="30" className="top-navigation-icon" />
    //     )}
    //   </span>
    // </div>
    <div
      className={`flex h-8 w-20 items-center justify-start rounded-3xl
              bg-primaryDark transition-all duration-300 ease-in-out dark:bg-primary
                ${darkTheme ? 'justify-start' : 'justify-end'}`} // Needed to trigger framer animation
      onClick={handleDarkModeToggle}
    >
      <motion.div
        layout
        className="grid h-8 w-9 items-center justify-center overflow-hidden rounded-xl bg-white p-0"
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.i
            key={darkTheme}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {darkTheme ? (
              <FaSun size={25} className="text-primaryDark" />
            ) : (
              <FaMoon size={20} className="text-primary" />
            )}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;
