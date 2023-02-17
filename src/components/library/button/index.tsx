import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  /**
   * The content of the button
   */
  content: string | React.ReactNode;
  /**
   * The variant of the button
   */
  variant?: "primary" | "inverse-primary";
  /**
   * The custom class name for the button. If specified, overrides the default class
   */
  customClassName?: string;
  /**
   * Whether the button is disabled. If true, the on click handler will not fire. Defaults to false
   */
  disabled?: boolean;
  /**
   * The click handler
   */
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    content,
    variant = "primary",
    customClassName,
    disabled = false,
    onClick = () => {},
  } = props;

  const baseClassNames =
    variant === "primary"
      ? `${styles.button} ${styles.primaryButton}`
      : `${styles.button} ${styles.inversePrimaryButton}`;

  const classNames = customClassName
    ? `${baseClassNames} ${customClassName}`
    : baseClassNames;

  return (
    <>
      <button
        className={classNames}
        onClick={() => {
          disabled ? {} : onClick();
        }}
        disabled={disabled}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
