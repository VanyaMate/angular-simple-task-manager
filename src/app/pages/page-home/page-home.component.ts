import { Component } from '@angular/core';
import {
    TaskRowItemComponent,
} from '../../entities/task/task-row-item/task-row-item.component';
import { CheckboxComponent } from '../../shared/inputs/checkbox/checkbox.component';
import { LocalTasksService } from '../../services/tasks/local-tasks.service';
import { NgForOf, NgIf } from '@angular/common';
import {
    CreateTaskFormComponent,
} from '../../widget/task/create-task-form/create-task-form.component';


@Component({
    selector   : 'app-page-home',
    standalone : true,
    imports    : [
        TaskRowItemComponent,
        CheckboxComponent,
        NgForOf,
        NgIf,
        CreateTaskFormComponent,
    ],
    templateUrl: './page-home.component.html',
    styleUrl   : './page-home.component.scss',
})
export class PageHomeComponent {
    constructor (
        protected readonly _tasksService: LocalTasksService,
    ) {
    }

    toggleFor (taskId: string) {
        return (state: boolean) => this._tasksService.setState(taskId, state);
    }

    remove (event: Event) {
        const taskId: string = (event.target as HTMLButtonElement).getAttribute('data-task-id') ?? '';
        this._tasksService.removeTask(taskId);
    }
}
