import React, {useEffect, useState} from "react";
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
      label: "TO DO",
      type: "todo",
      icon: "↶",
    },
    {
      value: 1,
      label: "In Progress",
      type: "in_progress",
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
      type: "cancelled",
      icon: "×",
    },
  ];
function Statistics({APItasksCounts}: any) {
    var counts;
    const [statisticsState, setStatisticsState] = useState(statistics);
    useEffect(() => {
      if(APItasksCounts?.total){
        counts = statistics.map((item) => {
          return {
            ...item,
            value: APItasksCounts[item.type] 
          };
        });
        setStatisticsState(counts);
      } 
    },[APItasksCounts])
    
    return(
        <section className={styles.statisticsGrid}>
        {statisticsState.map((item) => (
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