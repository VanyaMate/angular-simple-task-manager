import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
    selector   : 'app-p',
    standalone : true,
    imports: [
        NgClass,
    ],
    templateUrl: './p.component.html',
    styleUrl   : './p.component.scss',
})
export class PComponent {
    @Input() type: 'default' | 'second' | 'invisible' | undefined;
}
