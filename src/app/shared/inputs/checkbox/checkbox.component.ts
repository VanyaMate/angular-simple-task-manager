import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
    selector   : 'app-checkbox',
    standalone : true,
    imports    : [ NgClass ],
    templateUrl: './checkbox.component.html',
    styleUrl   : './checkbox.component.scss',
})
export class CheckboxComponent implements OnInit {
    @Input() initialState: boolean | undefined;
    @Input() onToggle: ((state: boolean) => any) | undefined;

    protected state: boolean = false;

    ngOnInit (): void {
        this.state = this.initialState ?? false;
    }

    protected toggle (): void {
        this.state = !this.state;
        this.onToggle && this.onToggle(this.state);
    }
}
