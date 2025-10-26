import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.headerMenu}>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/contact"> お問い合わせ</Link>
        </li>
      </ul>
    </header>
  );
}
