import React, { useState, useEffect, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { debounce } from '../../../utils/helpers';
import DarkModeToggle from './darkModeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../animations/logo';
import Link from 'next/link';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  // Nav Items
  const navItems = [
    {
      name: 'about',
      link: '/#about',
    },
    {
      name: 'work',
      link: '/#work',
    },
    // {
    //   name: 'blog',
    //   link: '/blog',
    // },
    {
      name: 'contact',
      link: '/#contact',
    },
  ];

  // State for hide/show nav on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 50;
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
    <Popover
      className={`fixed z-50 flex h-[70px] w-screen items-center justify-center bg-primary dark:bg-primaryDark 
         ${scrollAtTop ? '' : 'shadow-lg'}
         ${showNav ? 'top-0' : 'top-[-60px] h-[0px] opacity-0'}
         transition-{top} duration-300 ease-in-out
        `}
    >
      {({ open }) => (
        <>
          <div className="flex w-11/12 items-center justify-between px-2 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="sr-only">AG</span>
              <Link href="/#about">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 flex items-center md:hidden">
              <Popover.Button
                className="inline-flex items-center justify-center rounded-md p-2
                        text-2xl  text-primaryDark transition-all duration-200 ease-linear dark:text-primary
                        "
              >
                <span className="h-6 w-6" aria-hidden="true">
                  {open ? <FiX /> : <FiMenu />}
                </span>
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden gap-2 space-x-10 md:flex">
              {navItems.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <a className="text-xl font-light text-white transition-all duration-200 ease-linear hover:text-primaryDark dark:hover:text-primary lg:text-2xl">
                      {item.name}
                    </a>
                  </Link>
                );
              })}
              <DarkModeToggle inverseColors={true} />
            </Popover.Group>
          </div>

          <Transition
            as={Fragment}
            enter="duration-700 ease-out"
            enterFrom="opacity-0 scale-95 translate-y-6"
            enterTo="opacity-100 scale-100 translate-y-12"
            leave="duration-400 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-y-6"
          >
            <Popover.Panel className="absolute top-0 right-0 w-5/12 origin-top-right transform p-2 transition sm:w-1/3 md:hidden">
              {({ close }) => (
                <div className="rounded-lg bg-primaryDark shadow-lg dark:bg-primary">
                  <div className="flex flex-col items-center justify-center gap-y-4 px-5 pt-5 pb-6 sm:flex-row sm:justify-between sm:gap-y-0">
                    <div className="flex flex-col gap-y-2">
                      {navItems.map((item, index) => {
                        return (
                          <Link key={index} href={item.link}>
                            <a className="text-xl font-light text-white transition-all duration-200 ease-linear hover:text-primary dark:hover:text-primaryDark">
                              <span onClick={() => close()}>{item.name}</span>
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                    <DarkModeToggle />
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavBar;
