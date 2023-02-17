import React, { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const styles = require("./themeSelector.module.scss");

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState(theme === "light");

  const handleThemeOnClick = () => {
    setTheme(isLight ? "dark" : "light");
    setIsLight(!isLight);
  };

  const switchVariants = {
    on: {
      boxShadow: "inset 20px -2px white, inset 4px 0px 0px 0px white",
      rotate: 0,
    },
    off: {
      boxShadow: "inset 7px -2px white, inset 4px 0px 0px 0px white",
      rotate: 360,
    },
  };

  return (
    <div
      className={isLight ? styles.toggleBarOn : styles.toggleBarOff}
      onClick={handleThemeOnClick}
    >
      <motion.span
        layout
        variants={switchVariants}
        animate={isLight ? "on" : "off"}
        transition={{ duration: 0.6 }}
        className={styles.toggleIcon}
      />
    </div>
  );
};

export default ThemeSelector;
