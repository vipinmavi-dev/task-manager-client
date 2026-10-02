import React from "react";
import Style from "./searchFilter.module.css";
import { StatusHash, PriorityHash } from "../../../constants/app_const.ts";
import { X } from "lucide-react";
import type {
  FiltersType,
  StatusesPriorityesTypes,
  Task,
  FilterBodyType
} from "../../../types/task.ts";

function SearchFilter(
  { Statuses, Priorityes, updateFilter, tasks, FilterSearch }:
    {
      Statuses: StatusesPriorityesTypes[],
      Priorityes: StatusesPriorityesTypes[],
      updateFilter: (arg: Partial<FiltersType>) => void,
      tasks: Task[],
      FilterSearch: FilterBodyType
    }) {
  return (
    <section className={Style.filterContainer}>
      <div className={Style.searchWrapper}>
        <span className={Style.searchIcon}>⌕</span>
        {/* <input
              type="text"
              placeholder="Search tasks..."
              className={Style.searchInput}
              list="taskList"
            />
             <datalist id="taskList">
                <option value="Bhara kesayi"></option>
                <option value="Spray in buyer"></option>
                <option value="Mitthi"></option>
                <option value="Kila work"></option>
                <option value="Client"></option>
              </datalist> */}
        <input
          type="text"
          placeholder="Search tasks..."
          className={Style.searchInput}
          value={FilterSearch.value}
          onChange={(e) => updateFilter(
            { search: { key: "name", value: e.target.value, isExactMatch: false } }
          )}
        />
        {FilterSearch.value !== "" && (
          <button
            type="button"
            className={Style.clearSearch}
            onClick={() =>
              updateFilter({
                search: {
                  key: "name",
                  value: "",
                  isExactMatch: false
                }
              })
            }
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
        <div className={(FilterSearch.isExactMatch || FilterSearch.value === "") ? "" : Style.searchOptions}>
          {
            tasks.map((task: Task) => {
              let condition = (
                !FilterSearch.isExactMatch &&
                FilterSearch.value !== "" &&
                task.name.toLowerCase().includes(FilterSearch.value.toLowerCase())
              );
              if (condition) {
                
                return <div
                  key={task.id}
                  className={Style.searchOption}
                  onClick={() => updateFilter(
                    { search: { key: "name", value: task.name, isExactMatch: true } }
                  )}
                >
                  {task.name}
                </div>
              }
              else return null;
            })
          }
          {/* <div className={Style.searchOption}>Bhara kesayi</div> */}
        </div>
      </div>

      <div className={Style.filterIcon}>
        ☷
      </div>

      <select
        onChange={(e) => updateFilter(
          { status: { key: "status", value: e.target.value } })
        }
        className={Style.filterSelect}
        defaultValue="all"
      >
        <option value="all">All Statuses</option>
        {
          Statuses.map((status: any) => (
            <option key={status.id} value={status.name.toLowerCase()}>
              {StatusHash[status.name].name}
            </option>
          ))
        }
      </select>

      <select
        onChange={(e) => updateFilter(
          { priority: { key: "priority", value: e.target.value } }
        )}
        className={Style.filterSelect}
        defaultValue="all"
      >
        <option value="all">All Priorities</option>
        {
          Priorityes.map((priority: any) => (
            <option key={priority.id} value={priority.name}>
              {PriorityHash[priority.name]}
            </option>
          ))
        }
      </select>
    </section>
  )
}

export default SearchFilter;