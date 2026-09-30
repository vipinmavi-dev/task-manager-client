import React from "react";
import Styles from "./addTask.module.css";
import FormInputFieldWrapper from "../../components/auth/formElement/InputFieldWrapper/formInputField.tsx";
import {TextArea, Input, Label} from "../../components/UI_Elements/index.tsx";
import Priority from "../../components/priority/priority.tsx";
import type { AddEditModel } from "../../types/task.ts";

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
    addEditModel: AddEditModel
    modalHandler:(a: Partial<AddEditModel>)=>void;
    isLoading: boolean;
};

function NewTask({
    handleInputChange,
    handleSubmit,
    form,
    addEditModel,
    modalHandler,
    isLoading
}: NewTaskProps) {
  const addTaskConst = {
    title: "New Task",
    submitButton: "Add Task",
  }
  const EditTaskConst = {
    title: "Edit Task",
    submitButton: "Update Task",
  }
  var pageConst = addEditModel.name === "addTask" ?
  addTaskConst : EditTaskConst;
  return (
    <div className={Styles.overlay}>
      <div
        className={Styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="newTaskTitle"
      >
        <header className={Styles.modalHeader}>
          <h2 id="newTaskTitle">{pageConst.title}</h2>

          <button
            type="button"
            className={Styles.closeButton}
            onClick={modalHandler}
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
          <FormInputFieldWrapper>
            <Label
              text="Title"
              htmlFor="name"
              showRequiredSign={false}
            />
            <Input
              id="name"
              type="text"
              placeholder="What needs to be done?"
              required
              value={form.name}
              handleChange={handleInputChange}
            />
          </FormInputFieldWrapper>

          {/* Description */}

          <FormInputFieldWrapper>
            <Label
              text="Description"
              htmlFor="taskTitle"
              showRequiredSign={false}
            />
            <TextArea
              required={false}
              id="description"
              placeholder="Add details (optional)"
              value={form.description}
              handleChange={handleInputChange}
            />
          </FormInputFieldWrapper>

          {/* Priority */}
          <FormInputFieldWrapper>
            <Label
              text="Priority"
              htmlFor="priority_id"
              showRequiredSign={false}
            />
            <Priority
              form={form}
              priority={form.priority_id.toString()}
              onClick={handleInputChange}
            />
          </FormInputFieldWrapper>

          {/* Actions */}
          <div className={Styles.formActions}>
            <button
              type="button"
              className={Styles.cancelButton}
              onClick={modalHandler}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={Styles.addButton}
            >
              {pageConst.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;