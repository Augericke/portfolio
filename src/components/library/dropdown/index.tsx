import React, { useState, useRef } from "react";
import { useOutsideClick } from "../../../utils/hooks/useOutsideClick";
import { motion } from "framer-motion";
import Button from "../button";

import styles from "./dropdown.module.scss";
import MenuToggle from "./menuToggle";

type DropdownProps = {
  options: string[] | React.ReactElement[];
  content?: string | React.ReactElement;
  customContentClassName?: string;
  customMenuClassName?: string;
  onClick?: (index: number) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  content,
  options,
  customContentClassName,
  customMenuClassName,
  onClick = (index: number) => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = options.map((option, index) => {
    return (
      <span key={`dropdown-option-${index}`} onClick={() => onClick(index)}>
        {option}
      </span>
    );
  });

  const menuContainerVariants = {
    hidden: { opacity: 0, y: -15, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0,
        staggerChildren: 0.1,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    show: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "linear",
      },
    },
  };

  const menuContent = content ? (
    content
  ) : (
    <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  );

  return (
    <div ref={isOpen ? wrapperRef : null} className={styles.dropdownContainer}>
      <Button
        content={menuContent}
        customClassName={
          customContentClassName
            ? `${styles.dropdownButton} ${customContentClassName}`
            : styles.dropdownButton
        }
        variant="primary"
        onClick={handleOpen}
      />
      {isOpen ? (
        <motion.ul
          className={
            customMenuClassName
              ? `${styles.menu} ${customMenuClassName}`
              : styles.menu
          }
          variants={menuContainerVariants}
          initial="hidden"
          animate="show"
        >
          {menuItems.map((menuItem, index) => (
            <motion.li
              key={index}
              className={styles.menuItem}
              variants={menuItemVariants}
            >
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setIsOpen(false);
                },
              })}
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
