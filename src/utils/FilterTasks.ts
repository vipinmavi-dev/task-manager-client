import type { FiltersType } from "../types/task.ts";

export function WillTaskRender(Filter:FiltersType, task:any): boolean {
    
    if (// no filter then render all tasks
        Filter.status.value === "all" && 
        Filter.priority.value ==="all" && 
        Filter.search.value === ""
    ){
        return true;
    } else if( // check for status filter
        Filter.status.value !== "all" && 
        Filter.status.value !== task.status
    ){
        return false;
    }
    else if( // check for priority filter
        Filter.priority.value !== "all" &&
        Filter.priority.value !== task.priority
    ){
        return false;
    }else if(Filter.search.isExactMatch){ // Search login starts from here
        if(Filter.search.value === task.name){
            return true;
        }else{
            return false;
        }
    }else return true;

}