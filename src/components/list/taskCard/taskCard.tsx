import React, {useEffect} from "react";
import Style from "./taskCard.module.css";
import { Pencil, Trash2 } from "lucide-react";

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
function TaskCard({
  APItasks, 
  updateTask, 
  Statuses, 
  deleteTaskHandler, 
  modalHandler
}: any) {
  useEffect(() => {
    if (!APItasks || APItasks.length === 0) {
      console.warn("No tasks available to display.", APItasks);
    }
  })
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

                <div>
                  <button
                    onClick={() => modalHandler({name: "editTask", status: true, taskId: task.id})}
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
                  {Statuses.map((status, index) => (
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