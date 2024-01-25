import {
    AfterContentInit,
    Component,
    ContentChild, ContentChildren,
    Directive,
    ElementRef,
    Input,
    OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { PComponent } from '../../../shared/typography/p/p.component';
import { Task } from '../../../domain/task/task.types';
import { NgIf, NgTemplateOutlet } from '@angular/common';


@Component({
    selector   : 'app-task-row-item',
    standalone : true,
    imports    : [
        PComponent,
        NgIf,
        NgTemplateOutlet,
    ],
    templateUrl: './task-row-item.component.html',
    styleUrl   : './task-row-item.component.scss',
})
export class TaskRowItemComponent {
    @ContentChild('prefix', { read: TemplateRef }) prefix: TemplateRef<any> | undefined;
    @ContentChild('postfix', { read: TemplateRef }) postfix: TemplateRef<any> | undefined;
    @Input() task: Task | undefined;
}
