import { Task } from '../../domain/task/task.types';
import { ITasksService } from '../../domain/task/tasks-service.interface';
import { Injectable } from '@angular/core';


const STORAGE_NAME = 'angular-task-manager-tasks';

@Injectable({
    providedIn: 'root',
})
export class LocalTasksService implements ITasksService {
    public tasks: Task[]    = [];
    public pending: boolean = false;

    initialize (): Promise<boolean> {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                const lsData: string | null = localStorage.getItem(STORAGE_NAME);
                if (lsData) {
                    this.tasks = JSON.parse(lsData);
                } else {
                    this.tasks = [
                        {
                            id         : '1',
                            title      : 'Task 1',
                            description: 'Description',
                            date       : '10.10.2023',
                            status     : false,
                        },
                        {
                            id         : '2',
                            title      : 'Task 2',
                            description: 'Description',
                            date       : '11.10.2023',
                            status     : true,
                        },
                        {
                            id         : '3',
                            title      : 'Task 3',
                            description: 'Description',
                            date       : '01.01.2024',
                            status     : false,
                        },
                    ];
                }
                this.pending = false;
                resolve(true);
            }, 800);
        });
    }

    setState (taskId: string, state: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                for (let i = 0; i < this.tasks.length; i++) {
                    const task: Task = this.tasks[i];
                    if (task.id === taskId) {
                        task.status  = state;
                        this.pending = false;
                        this._saveState();
                        resolve(true);
                        return;
                    }
                }
                this.pending = false;
                resolve(false);
            }, 100);
        });
    }

    addTask (task: Pick<Task, 'title' | 'description'>): Promise<boolean> {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                this.tasks.push({
                    id    : Math.random().toString(),
                    date  : new Date().toLocaleString(),
                    status: false,
                    ...task,
                });
                this.pending = false;
                this._saveState();
                resolve(false);
            }, 200);
        });
    }

    removeTask (taskId: string): Promise<boolean> {
        return new Promise((resolve) => {
            this.pending = true;
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => task.id !== taskId);
                this._saveState();
                this.pending = false;
                resolve(false);
            }, 0);
        });
    }

    private _saveState () {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(this.tasks));
    }
}