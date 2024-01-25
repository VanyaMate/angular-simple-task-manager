import { Component } from '@angular/core';
import { LocalTasksService } from '../../../services/tasks/local-tasks.service';


@Component({
    selector   : 'app-create-task-form',
    standalone : true,
    imports    : [],
    templateUrl: './create-task-form.component.html',
    styleUrl   : './create-task-form.component.scss',
})
export class CreateTaskFormComponent {
    // TODO: Переделать в будущем на специальный компонент для работы с формами
    private _titleValue: string       = '';
    private _descriptionValue: string = '';

    constructor (
        private readonly _tasksService: LocalTasksService,
    ) {
    }

    protected onChange (e: Event, type: 'title' | 'description') {
        const value: string = (e.target as HTMLInputElement).value;
        if (type === 'title') {
            this._titleValue = value;
        } else {
            this._descriptionValue = value;
        }
    }

    protected onSubmit () {
        console.log('this.', this._titleValue, this._descriptionValue);
        if (this._titleValue.trim() !== '') {
            this._tasksService.addTask({
                title: this._titleValue, description: this._descriptionValue,
            });
        }
    }
}
