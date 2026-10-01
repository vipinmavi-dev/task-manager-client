import React from "react";
import Style from "./taskCard.module.css";
import { Pencil, Trash2 } from "lucide-react";
import { StatusHash } from "../../../constants/app_const.ts";

function TaskCard({
  task,
  updateTask,
  Statuses,
  deleteTaskHandler,
  modalHandler
}: any) {
  return (
    <article className={Style.taskCard} key={task.title}>
      <div
        className={`${Style.taskTopBorder} ${Style[task.color]}`}
      />

      <div className={Style.taskHeader}>

        <h2 className={Style.taskTitle}>
          {task.name}
        </h2>

        <div>
        <button
          onClick={modalHandler}
          aria-label={`Edit ${task.name}`}
          className={Style.editButton}
        >
          <Pencil size={16} />
        </button>
        <button
          aria-label={`Delete ${task.name}`}
          onClick={deleteTaskHandler}
          className={Style.deleteButton}
        >
          <Trash2 size={16} />
        </button>
        </div>

      </div>

      <p className={Style.taskDescription}>
        {task.description}
      </p>

      <div className={Style.badges}>
        <span
          className={`${Style.statusBadge} ${Style[ task.status ]}`}
        >
          <span className={Style.badgeIcon}>
            { StatusHash[task.status].icon }
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

        <select onChange={ updateTask } name={task.id} id="status" className={Style.select} value={task.status_id}>
          <option value="" disabled>
            Select status
          </option>
          {
            Statuses.map((status: any) => (
              <option name={task.id} key={status.id} value={status.id}>
                {StatusHash[status.name].name}
              </option>
            ))
          }
        </select>
      </div>
      {/*-------------- End ------------*/}
      <div className={Style.taskDates}>
        <span>
          Created: {task.created_at}
        </span>

        <span>
          Updated: {task.updated_at}
        </span>
      </div>
    </article>
  )
}
export default TaskCard;