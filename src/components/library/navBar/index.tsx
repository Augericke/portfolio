import React, { useState, useEffect } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import { debounce } from '../../../utils/helpers';
import { FaMoon, FaSun } from 'react-icons/fa';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  // State for dark mode
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleDarkModeToggle = () => setDarkTheme(!darkTheme);

  // State for hide/show nav on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 10;
      const scrollMinDisplay = 5;

      setVisible(
        // Show Nav either if scroll up by distance larger than scrollBuffer or within minDisplay range from top of page
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > scrollBuffer) ||
          currentScrollPos < scrollMinDisplay
      );
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`fixed flex h-[70px] w-screen items-center justify-between
                     bg-white dark:bg-black
                    ${
                      visible ? 'top-0' : 'top-[-60px] h-[0px] opacity-0'
                    } transition-all duration-300 ease-in-out`}
    >
      <div>
        <span onClick={handleDarkModeToggle}>
          {darkTheme ? (
            <FaSun size="30" className="top-navigation-icon" />
          ) : (
            <FaMoon size="30" className="top-navigation-icon" />
          )}
        </span>
      </div>
      <div>
        <p className="text-black dark:text-white">some text</p>
        <p className="text-black dark:text-white">some text</p>
        <p className="text-black dark:text-white">some text</p>
      </div>
    </div>
  );
};

export default NavBar;
