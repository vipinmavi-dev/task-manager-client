interface Task {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    status: string;
    priority: string;
}
export interface Tasks {
    success: boolean;
    message: string;
    data: Task;
}
export interface AddEditModel {
    name: string;
    status: string;
    taskId: number | null;
}