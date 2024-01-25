import { Task } from './task.types';


export interface ITasksService {
    tasks: Task[];
    pending: boolean;

    initialize (): Promise<boolean>;

    setState (taskId: string, state: boolean): Promise<boolean>;

    addTask (task: Pick<Task, 'title' | 'description'>): Promise<boolean>;

    removeTask (taskId: string): Promise<boolean>;
}