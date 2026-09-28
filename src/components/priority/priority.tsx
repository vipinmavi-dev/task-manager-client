import React from "react";
import Styles from "./priority.module.css";

function Priority(
    { form, priority, onClick }: 
    { form: any, priority: string; onClick: any }) {
    return (
        <div className={Styles.priorityGroup} >
            {(["Low", "Medium", "High"]).map((item, index) => (
                <button
                    key={item}
                    type="button"
                    id="priority_id"
                    name="priority_id"
                    value={index + 1}
                    className={`${Styles.priorityButton} ${Number(priority) === index + 1 ? Styles[item] : ""}`}
                    onClick={onClick}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Priority;