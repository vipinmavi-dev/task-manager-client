import React, { useEffect } from "react";
import Style from "./taskCard.module.css";

const StatusHash = {
    "todo": "To Do",
    "in_progress": "In Progress",
    "completed": "Completed",
    "delayed": "Delayed",
    "cancelled": "Cancelled",
}
const PriorityColorHash = {
    low: "green",
    medium: "yellow",
    high: "red"
}
const PriorityHash = {
    low: "Low",
    medium: "Medium",
    high: "High"
}
function TaskCard({APItasks}: any) {
    var tasks;
    useEffect(() => {
      tasks = APItasks?.map((task)=>{
        return {
          ...task,
          status: StatusHash[task.status],
          color: PriorityColorHash[task.priority]
        }
      })
    },[])

    return (
        <section className={Style.taskGrid}>
          {APItasks?.map((task) => (
            <article className={Style.taskCard} key={task.name}>
              <div
                className={`${Style.taskTopBorder} ${Style[PriorityColorHash[task.priority]]}`}
              />

              <div className={Style.taskHeader}>
                <h2 className={Style.taskTitle}>
                  {task.name}
                </h2>

                <button
                  className={Style.deleteButton}
                  aria-label={`Delete ${task.name}`}
                >
                  ♧
                </button>
              </div>

              <p className={Style.taskDescription}>
                {task.description}
              </p>

              <div className={Style.badges}>
                <span
                  className={`${Style.statusBadge} ${Style[
                    task.status
                      .toLowerCase()
                      .replace(" ", "")
                  ]
                    }`}
                >
                  <span className={Style.badgeIcon}>
                    {task.status === "Completed"
                      ? "✓"
                      : task.status === "Delayed"
                        ? "!"
                        : task.status === "In Progress"
                          ? "↶"
                          : "◷"}
                  </span>

                  {StatusHash[task.status]}
                </span>

                <span
                  className={`${Style.priorityBadge} ${Style[task.priority.toLowerCase()]
                    }`}
                >
                  {PriorityHash[task.priority]}
                </span>
              </div>

              {/* <button className={Style.statusButton}>
                <span>Change status</span>
                <span className={Style.chevron}>⌄</span>
              </button> */}
              {/*-------------- Start ------------*/}
              <div className={Style.selectWrapper}>
                <label htmlFor="status" className={Style.label}>
                  Status
                </label>

                <select id="status" className={Style.select} value={StatusHash[task.status]}>
                  <option value="" disabled>
                    Select status
                  </option>
                  {Object.entries(StatusHash).map(([value, label]) => (
                      <option key={value} value={value}>
                          {label}
                      </option>
                  ))}
                </select>
              </div>
              {/*-------------- End ------------*/}
              <div className={Style.taskDates}>
                <span>
                  Created {task.created_at}
                </span>

                <span>
                  Updated {task.updated_at}
                </span>
              </div>
            </article>
          ))}
        </section>
    )
}
export default TaskCard;