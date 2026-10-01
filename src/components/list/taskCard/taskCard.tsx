import React from "react";
import Style from "./taskCard.module.css";
import { Pencil, Trash2 } from "lucide-react";
import type { TaskCardProps } from "../../../types/task";
import { 
  StatusHash, 
  PriorityColorHash, 
  PriorityHash 
} from "../../../constants/app_const.ts";

function TaskCard({
  tasks, 
  updateTask, 
  Statuses, 
  deleteTaskHandler, 
  modalHandler
}: TaskCardProps) {
    return (
        <section className={Style.taskGrid}>
          {tasks?.length > 0 && tasks.map((task) => (
            <article className={Style.taskCard} key={task.id}>
              <div
                className={`${Style.taskTopBorder} ${Style[PriorityColorHash[task.priority]]}`}
              />

              <div className={Style.taskHeader}>
                <h2 className={Style.taskTitle}>
                  {task.name}
                </h2>

                <div>
                  <button
                    onClick={() => modalHandler({
                      name: "editTask", 
                      status: true, 
                      taskId: task.id
                    })}
                    aria-label={`Edit ${task.name}`}
                    className={Style.editButton}
                  >
                    <Pencil size={16}/>
                  </button>
                  <button
                    aria-label={`Delete ${task.name}`}
                    onClick={() => deleteTaskHandler(task.id)}
                    className={Style.deleteButton}
                  >
                    <Trash2 size={16}/>
                  </button>
                </div>
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

                <select onChange={updateTask} id="status" className={Style.select} value={task.status_id}>
                  <option value="" disabled>
                    Select status
                  </option>
                  {Statuses?.length > 0 && Statuses.map((status, index) => (
                      <option key={index} name={task.id} value={status.id}>
                          {StatusHash[status.name]}
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