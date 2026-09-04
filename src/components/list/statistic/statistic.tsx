import React from "react";
import styles from "./statistic.module.css";
const statistics = [
    {
      value: 4,
      label: "Total",
      type: "total",
      icon: "☷",
    },
    {
      value: 1,
      label: "In Progress",
      type: "progress",
      icon: "↶",
    },
    {
      value: 1,
      label: "Completed",
      type: "completed",
      icon: "✓",
    },
    {
      value: 1,
      label: "Delayed",
      type: "delayed",
      icon: "!",
    },
    {
      value: 0,
      label: "Failed",
      type: "failed",
      icon: "×",
    },
  ];
function Statistics() {
    return(
        <section className={styles.statisticsGrid}>
        {statistics.map((item) => (
          <div
            key={item.label}
            className={`${styles.statCard} ${styles[item.type]}`} // TODO: CSS need to be fixed
          >
            <div className={styles.statIcon}>
              {item.icon}
            </div>

            <div className={styles.statContent}>
              <strong className={styles.statValue}>
                {item.value}
              </strong>

              <span className={styles.statLabel}>
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </section>
    )
}

export default Statistics;