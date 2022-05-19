import React, { useState, useEffect } from 'react';
import { debounce } from '../../../utils/helpers';

type NavBarProps = {

}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(()  => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 70;
      const scrollMinDisplay = 5;

      setVisible(
        // Show Nav either if scroll up by distance larger than scrollBuffer or within minDisplay range from top of page
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > scrollBuffer)
        || currentScrollPos < scrollMinDisplay
      );
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`fixed h-[90px] w-screen bg-green-500 text-center 
                    ${visible ? 'top-0' : 'top-[-60px] h-[0px]'} transition-all duration-500 ease-in-out`}>
      Random text
    </div>
  );
};

export default NavBar;
