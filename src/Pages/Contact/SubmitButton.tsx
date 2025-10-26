import React from "react";
import styles from "../../Styles/SubmitButton.module.css";
interface SubmitButtonProps {
  disabled: boolean;
}
export default function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <input
      type="submit"
      value="送信"
      className={styles.Button}
      disabled={disabled}
    />
  );
}
