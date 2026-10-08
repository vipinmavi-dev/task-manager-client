import React from "react";
import styles from "./taskPage.module.css";
import {
  Statistics,
  SearchFilter,
  TaskCard,
} from "../../components/list/index.tsx";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
import { WillTaskRender } from "../../utils/FilterTasks.ts";

function TaskManager({
  modalHandler,
  tasks = [],
  updateTask,
  Statuses,
  Priorityes,
  deleteTaskHandler,
  APItasksCounts,
  navButtonsData,
  addEditModel,
  children,
  updateFilter,
  Filter,
  isLogin,
}: any) {
  return (
    <main className={styles.page}>
      {/* Header */}
      <PageHeader siteName="Task Manager" navButtonsData={navButtonsData} />

      <div className={styles.container}>
        {/* Statistics */}
        {/* <div className={isLogin ? "" : styles.welcomeMessage}>
          {isLogin || <h3>Welcome Guest </h3>}
        </div> */}
        <Statistics APItasksCounts={APItasksCounts} />

        {/* Search and filters */}
        <SearchFilter
          Statuses={Statuses}
          Priorityes={Priorityes}
          updateFilter={updateFilter}
          tasks={tasks}
          FilterSearch={Filter.search}
        />

        {/* Task count */}
        {/* <div className={styles.taskCount}>{tasks?.length} tasks</div> */}

        {/* Task Grid */}
        <section className={styles.taskGrid}>
          {tasks.filter((task: any) => WillTaskRender(Filter, task)).length >
          0 ? (
            tasks.map((task: any) => {
              if (!WillTaskRender(Filter, task)) {
                return null;
              }

              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  Statuses={Statuses}
                  deleteTaskHandler={() => deleteTaskHandler(task.id)}
                  modalHandler={() =>
                    modalHandler({
                      name: "editTask",
                      status: true,
                      taskId: task.id,
                    })
                  }
                />
              );
            })
          ) : (
            <div className={styles.noTasks}>
              <div className={styles.noTasksIcon}>📋</div>
              <h3>{isLogin || <span>Welcome Guest, </span>}No tasks found</h3>
              <p>
                {tasks.length === 0
                  ? "You don't have any tasks yet."
                  : "No tasks match your current search or filter."}
              </p>
            </div>
          )}
        </section>
      </div>
      {addEditModel?.status && children}
    </main>
  );
}

export default TaskManager;
