import React from "react";
import styles from "./taskPage.module.css";
import {
  Statistics,
  SearchFilter,
  TaskCard
} from "../../components/list/index.tsx";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
import NavButton from "../../components/pageHeader/navButton/navButton.tsx";
import { WillTaskRender } from "../../utils/FilterTasks.ts"

function TaskManager({
  modalHandler,
  tasks=[],
  updateTask,
  Statuses,
  Priorityes,
  deleteTaskHandler,
  APItasksCounts,
  navButtons,
  addEditModel,
  children,
  updateFilter,
  Filter
}: any) {
  
  return (
    <main className={styles.page}>
      {/* Header */}
      <PageHeader 
        siteName="Task Manager" 
        NavButton={<NavButton navButtons={navButtons} />}/>

      <div className={styles.container}>
        {/* Statistics */}
        <Statistics
          APItasksCounts={APItasksCounts}
        />

        {/* Search and filters */}
        <SearchFilter
          Statuses={Statuses}
          Priorityes={Priorityes}
          updateFilter={updateFilter}
          tasks={tasks}
          FilterSearch={Filter.search}
        />

        {/* Task count */}
        <div className={styles.taskCount}>
          
          {tasks?.length} tasks
        </div>

        {/* Task Grid */}
        <section className={styles.taskGrid}>
        {
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
                            taskId: task.id
                        })
                    }
                />
            );
        })
        }
        </section>
      </div>
      {addEditModel?.status && children}
    </main>
  );
}

export default TaskManager;