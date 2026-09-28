import React from "react";
import styles from "./taskPage.module.css";
import {
  Statistics,
  SearchFilter,
  TaskCard
} from "../../components/list/index.tsx";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
import NavButton from "../../components/pageHeader/navButton/navButton.tsx";

function TaskManager(props: any) {
  return (
    <main className={styles.page}>
      {/* Header */}
      <PageHeader siteName="Task Manager" NavButton={<NavButton navButtons={props.navButtons} />}/>

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
          modalHandler={props.modalHandler}
        />
      </div>
      {props.addEditModel?.status && props.children}
    </main>
  );
}

export default TaskManager;