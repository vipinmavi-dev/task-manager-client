import React from "react";
import styles from "./header.module.css";

function Header() {
    return(
        <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton} aria-label="Go back">
              <a href="/">
                ←
              </a>
            </button>

            <div className={styles.logo}>
              <span>✓</span>
            </div>

            <h1 className={styles.pageTitle}>Task Manager</h1>
          </div>

          <a href="/add">
            <button className={styles.newTaskButton}>
              <span className={styles.plusIcon}>+</span>
              <span>New Task</span>
            </button>
          </a>
        </div>
      </header>
    )
}

export default Header;