import React, {useEffect, useState} from "react";
import styles from "./statistic.module.css";
import type { StatisticsProps } from "../../../types/task.ts";
const statistics = [
    {
      value: 0,
      label: "Total",
      type: "total",
      icon: "☷",
    },
    {
      value: 0,
      label: "TO DO",
      type: "todo",
      icon: "◷",
    },
    {
      value: 0,
      label: "In Progress",
      type: "in_progress",
      icon: "↶",
    },
    {
      value: 0,
      label: "Completed",
      type: "completed",
      icon: "✓",
    },
    {
      value: 0,
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
function Statistics({APItasksCounts}: StatisticsProps) {
    const [statisticsState, setStatisticsState] = useState(statistics);
    useEffect(() => {
      if(APItasksCounts?.total){
        
        setStatisticsState(()=>statistics.map((item) => {
          return {
            ...item,
            value: APItasksCounts[item.type] 
          };
        }));
      } 
    },[APItasksCounts])
    
    return(
        <section className={styles.statisticsGrid}>
        {statisticsState.map((item) => (
          <div
            key={item.label}
            className={`${styles.statCard} ${styles[item.type]}`}
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