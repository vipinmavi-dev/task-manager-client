import React from "react";
import styles from "./taskPage.module.css";
import { ROUTES } from "../../constants/routes.ts";
import {
  Statistics,
  SearchFilter,
  TaskCard
} from "../../components/list/index.tsx";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
import NavButton from "../../components/pageHeader/navButton/navButton.tsx";
const navButtons = [
  {
    buttonText: "+ New Task",
    redirectTo: ROUTES.ADD,
    className: "getStarted"
  }
]
function TaskManager() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <PageHeader siteName="Task Manager" NavButton={<NavButton navButtons={navButtons} />}/>

      <div className={styles.container}>
        {/* Statistics */}
        <Statistics/>

        {/* Search and filters */}
        <SearchFilter/>

        {/* Task count */}
        <div className={styles.taskCount}>
          {/* {tasks.length} tasks */}
          4 tasks
        </div>

        {/* Task Grid */}
        <TaskCard/>
      </div>
    </main>
  );
}

export default TaskManager;