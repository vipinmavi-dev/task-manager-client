import React from "react";
import styles from "./taskPage.module.css";

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

function TaskManager() {
  return (
    <main className={styles.page}>
      {/* Header */}
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

      <div className={styles.container}>
        {/* Statistics */}
        <section className={styles.statisticsGrid}>
          {statistics.map((item) => (
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

        {/* Search and filters */}
        <section className={styles.filterContainer}>
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>⌕</span>

            <input
              type="text"
              placeholder="Search tasks..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterIcon}>
            ☷
          </div>

          <select className={styles.filterSelect} defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="todo">To Do</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="delayed">Delayed</option>
          </select>

          <select className={styles.filterSelect} defaultValue="all">
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </section>

        {/* Task count */}
        <div className={styles.taskCount}>
          {tasks.length} tasks
        </div>

        {/* Task Grid */}
        <section className={styles.taskGrid}>
          {tasks.map((task) => (
            <article className={styles.taskCard} key={task.title}>
              <div
                className={`${styles.taskTopBorder} ${styles[task.color]}`}
              />

              <div className={styles.taskHeader}>
                <h2 className={styles.taskTitle}>
                  {task.title}
                </h2>

                <button
                  className={styles.deleteButton}
                  aria-label={`Delete ${task.title}`}
                >
                  ♧
                </button>
              </div>

              <p className={styles.taskDescription}>
                {task.description}
              </p>

              <div className={styles.badges}>
                <span
                  className={`${styles.statusBadge} ${styles[
                    task.status
                      .toLowerCase()
                      .replace(" ", "")
                  ]
                    }`}
                >
                  <span className={styles.badgeIcon}>
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
                  className={`${styles.priorityBadge} ${styles[task.priority.toLowerCase()]
                    }`}
                >
                  {task.priority}
                </span>
              </div>

              {/* <button className={styles.statusButton}>
                <span>Change status</span>
                <span className={styles.chevron}>⌄</span>
              </button> */}
              {/*-------------- Start ------------*/}
              <div className={styles.selectWrapper}>
                <label htmlFor="status" className={styles.label}>
                  Status
                </label>

                <select id="status" className={styles.select} defaultValue="">
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
              <div className={styles.taskDates}>
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
      </div>
    </main>
  );
}

export default TaskManager;