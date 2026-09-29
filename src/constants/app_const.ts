export function NavButton(modalHandler) {
    return [
        {
          buttonText: "+ New Task",
          method: () => {modalHandler({
            name: "addTask",
            status: true,
            taskId: null
          })},
          className: "getStarted"
        }
    ]
}
export const StatusHash = {
  "todo": "To Do",
  "in_progress": "In Progress",
  "completed": "Completed",
  "delayed": "Delayed",
  "cancelled": "Cancelled",
}
export const PriorityHash = {
  low: "Low",
  medium: "Medium",
  high: "High"
}
export const PriorityColorHash = {
  low: "green",
  medium: "yellow",
  high: "red"
}