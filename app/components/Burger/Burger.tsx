"use client";
import { useState } from "react";
import styles from "./Burger.module.css";

export default function Burger() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  // Glemte at vi skal bruke Tailwind her... fiks all CSS-en slik at den er Tailwind da =)
  return (
    <div className={styles.burger}>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div
            className={styles.menuIcon + (active ? " " + styles.active : "")}
            onClick={handleClick}
            tabIndex={0}
            role="button"
            aria-pressed={active}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
