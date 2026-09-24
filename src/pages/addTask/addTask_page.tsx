import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./addTask.module.css";

type NewTaskProps = {
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

    handleSubmit: (
        e: React.SubmitEvent<HTMLFormElement>
    ) => void;

    form: {
        name: string;
        description: string;
        priority_id: Number;
    }
};

function NewTask({
    handleInputChange,
    handleSubmit,
    form
}: NewTaskProps) {
  
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/list");
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
              name="name"
              type="text"
              placeholder="What needs to be done?"
              className={`${Styles.input} ${Styles.titleInput}`}
              autoFocus
              required
              value= {form.name}
              onChange={handleInputChange}
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
              value= {form.description}
              onChange={handleInputChange}
            />
          </div>

          {/* Priority */}
          <div className={Styles.formGroup}>
            <span className={Styles.label}>
              Priority
            </span>

            <div className={Styles.priorityGroup}>
              {(["Low", "Medium", "High"]).map(
                (item, index) => (
                  <button
                    key={item}
                    type="button"
                    name="priority_id"
                    placeholder={index + 1+" / "+ form.priority_id +"/ "+ item}
                    value={index+1}
                    className={`${Styles.priorityButton} ${
                      form.priority_id == index + 1
                        ? Styles[item]
                        : ""
                    }`}
                    onClick={handleInputChange}
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