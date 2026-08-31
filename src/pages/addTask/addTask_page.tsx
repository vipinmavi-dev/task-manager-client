import React, { useState } from "react";
import Styles from "./addTask.module.css";

type Priority = "Low" | "Medium" | "High";

function NewTask() {
  const [priority, setPriority] = useState<Priority>("Medium");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add your task submission logic here.
    console.log("Task submitted with priority:", priority);
  };

  const handleClose = () => {
    // Add your modal close logic here.
    console.log("Close modal");
  };

  return (
    <div className={Styles.overlay}>
      <div
        className={Styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="newTaskTitle"
      >
        {/* Modal Header */}
        <header className={Styles.modalHeader}>
          <h2 id="newTaskTitle">New Task</h2>

          <button
            type="button"
            className={Styles.closeButton}
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        </header>

        {/* Modal Body */}
        <form
          className={Styles.form}
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <div className={Styles.formGroup}>
            <label htmlFor="taskTitle">
              Title <span className={Styles.required}>*</span>
            </label>

            <input
              id="taskTitle"
              name="title"
              type="text"
              placeholder="What needs to be done?"
              className={`${Styles.input} ${Styles.titleInput}`}
              autoFocus
              required
            />
          </div>

          {/* Description */}
          <div className={Styles.formGroup}>
            <label htmlFor="taskDescription">
              Description
            </label>

            <textarea
              id="taskDescription"
              name="description"
              placeholder="Add details (optional)"
              className={Styles.textarea}
              rows={3}
            />
          </div>

          {/* Priority */}
          <div className={Styles.formGroup}>
            <span className={Styles.label}>
              Priority
            </span>

            <div className={Styles.priorityGroup}>
              {(["Low", "Medium", "High"] as Priority[]).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className={`${Styles.priorityButton} ${
                      priority === item
                        ? Styles.activePriority
                        : ""
                    }`}
                    onClick={() => setPriority(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Actions */}
          <div className={Styles.formActions}>
            <button
              type="button"
              className={Styles.cancelButton}
              onClick={handleClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={Styles.addButton}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;