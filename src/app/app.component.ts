import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalTasksService } from './services/tasks/local-tasks.service';


@Component({
    selector   : 'app-root',
    standalone : true,
    imports    : [ RouterOutlet ],
    templateUrl: './app.component.html',
    styleUrl   : './app.component.scss',
    providers  : [ LocalTasksService ],
})
export class AppComponent implements OnInit {
    constructor (
        private readonly _tasksService: LocalTasksService,
    ) {
    }


    ngOnInit (): void {
        this._tasksService.initialize();
    }
}
