import React from "react";
import styles from "../../Styles/ClearButton.module.css";
import { onCLS } from "web-vitals";
interface ClearButtonProps {
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export default function ClearButton({ disabled, onClick }: ClearButtonProps) {
  return (
    <div>
      <input
        type="button"
        value="クリア"
        className={styles.ClearButton}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
}
