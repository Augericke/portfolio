import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const usePrefersDarkMode = (): boolean => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(mediaQuery.matches);

    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return value;
};

const useDarkMode = () => {
  const browserPreference = usePrefersDarkMode();
  const [activeState, setActiveState] = useLocalStorage('dark-theme', false);
  const isActive = typeof activeState !== 'undefined' ? activeState : browserPreference;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isActive ? bodyClass.add(className) : bodyClass.remove(className);
  }, [activeState, isActive]);

  return [activeState, setActiveState];
};

export default useDarkMode;
