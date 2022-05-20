import React, { useState, useEffect } from 'react';
import DarkModeToggle from './darkModeToggle';
import { debounce } from '../../../utils/helpers';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  // State for hide/show nav on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 10;
      const scrollMinDisplay = 5;

      setShowNav(
        // Show Nav either if scroll up by distance larger than scrollBuffer or within minDisplay range from top of page
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > scrollBuffer) ||
          currentScrollPos < scrollMinDisplay
      );
      setScrollAtTop(currentScrollPos <= scrollBuffer);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, showNav, scrollAtTop]);

  return (
    <div
      className={`fixed flex h-[70px] w-screen items-center justify-between
                  bg-primary dark:bg-primaryDark
                  ${scrollAtTop ? '' : 'opacity-80 shadow-lg'}
                  ${showNav ? 'top-0' : 'top-[-60px] h-[0px] opacity-0'}
                  transition-all duration-300 ease-in-out`}
    >
      <DarkModeToggle />
      <div className="mr-[10%] flex flex-row gap-7">
        <p className="text-xl font-light text-white">about</p>
        <p className="text-xl font-light text-white">work</p>
        <p className="text-xl font-light text-white">blog</p>
        <p className="text-xl font-light text-white">contact </p>
      </div>
    </div>
  );
};

export default NavBar;
