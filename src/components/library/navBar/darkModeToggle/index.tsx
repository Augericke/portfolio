import React from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import { FaMoon, FaSun } from 'react-icons/fa';
type DarkModeToggleProps = {};

const DarkModeToggle: React.FC<DarkModeToggleProps> = (
  props: DarkModeToggleProps
) => {
  // State for dark mode
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleDarkModeToggle = () => setDarkTheme(!darkTheme);

  return (
    <div className="ml-[5%]">
      <span onClick={handleDarkModeToggle}>
        {darkTheme ? (
          <FaSun size="30" className="top-navigation-icon" />
        ) : (
          <FaMoon size="30" className="top-navigation-icon" />
        )}
      </span>
    </div>
  );
};

export default DarkModeToggle;
