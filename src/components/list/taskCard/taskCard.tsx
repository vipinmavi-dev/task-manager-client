import React from "react";
import Style from "./taskCard.module.css";
const tasks = [
    {
      title: "Complete project documentation",
      description:
        "Write up the full technical spec and API reference for the v2 release.",
      status: "In Progress",
      priority: "High",
      created: "2026-04-05",
      updated: "2026-04-07",
      color: "red",
    },
    {
      title: "Review code changes",
      description: "Go through the open PRs and leave actionable feedback.",
      status: "To Do",
      priority: "Medium",
      created: "2026-04-06",
      updated: "2026-04-06",
      color: "yellow",
    },
    {
      title: "Fix login redirect bug",
      description:
        "Users are being sent to /home instead of /dashboard after OAuth.",
      status: "Completed",
      priority: "High",
      created: "2026-04-03",
      updated: "2026-04-08",
      color: "red",
    },
    {
      title: "Update dependencies",
      description:
        "Bump all packages to latest stable and resolve any breaking changes.",
      status: "Delayed",
      priority: "Low",
      created: "2026-04-01",
      updated: "2026-04-05",
      color: "green",
    },
];

function TaskCard() {
    return (
        <section className={Style.taskGrid}>
          {tasks.map((task) => (
            <article className={Style.taskCard} key={task.title}>
              <div
                className={`${Style.taskTopBorder} ${Style[task.color]}`}
              />

              <div className={Style.taskHeader}>
                <h2 className={Style.taskTitle}>
                  {task.title}
                </h2>

                <button
                  className={Style.deleteButton}
                  aria-label={`Delete ${task.title}`}
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

                  {task.status}
                </span>

                <span
                  className={`${Style.priorityBadge} ${Style[task.priority.toLowerCase()]
                    }`}
                >
                  {task.priority}
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

                <select id="status" className={Style.select} defaultValue="">
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              {/*-------------- End ------------*/}
              <div className={Style.taskDates}>
                <span>
                  Created {task.created}
                </span>

                <span>
                  Updated {task.updated}
                </span>
              </div>
            </article>
          ))}
        </section>
    )
}
export default TaskCard;