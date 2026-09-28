import React from "react";
import Style from "./textArea.module.css";

function TextArea({
  id,
  placeholder,
  required,
  value,
  handleChange,
}: {
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      id={id}
      name={id}
      placeholder={placeholder}
      className={Style.textarea}
      rows={3}
      required={required}
      value={value}
      onChange={handleChange}
    />
  );
}
export default TextArea;
