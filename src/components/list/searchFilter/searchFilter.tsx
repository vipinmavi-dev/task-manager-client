import React from "react";
import Style from "./searchFilter.module.css";

function SearchFilter() {
    return(
        <section className={Style.filterContainer}>
          <div className={Style.searchWrapper}>
            <span className={Style.searchIcon}>⌕</span>

            <input
              type="text"
              placeholder="Search tasks..."
              className={Style.searchInput}
            />
          </div>

          <div className={Style.filterIcon}>
            ☷
          </div>

          <select className={Style.filterSelect} defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="todo">To Do</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="delayed">Delayed</option>
          </select>

          <select className={Style.filterSelect} defaultValue="all">
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </section>
    )
}

export default SearchFilter;