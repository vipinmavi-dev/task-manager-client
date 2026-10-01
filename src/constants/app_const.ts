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
  "todo": {
    name: "To Do",
    icon: "◷"
  },
  "in_progress": {
    name: "In Progress",
    icon: "↶"
  },
  "completed": {
    name: "Completed",
    icon: "✓"
  },
  "delayed": {
    name: "Delayed",
    icon: "!"
  },
  "cancelled": {
    name: "Cancelled",
    icon: "✗"
  },
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