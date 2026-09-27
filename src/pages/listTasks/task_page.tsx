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
import { useNavigate } from "react-router-dom";

function TaskManager(props: any) {
  const navigate = useNavigate();
  const navButtons = [
    {
      buttonText: "+ New Task",
      // redirectTo: ROUTES.ADD,
      method: () => {props.setShowAddTask(true)},
      className: "getStarted"
    }
  ]
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
        <TaskCard 
          APItasks= {props.APItasks} 
          updateTask={props.updateTask}
          Statuses={props.Statuses}
          deleteTaskHandler={props.deleteTaskHandler}
        />
      </div>
      {props.showAddTask && props.children}
    </main>
  );
}

export default TaskManager;