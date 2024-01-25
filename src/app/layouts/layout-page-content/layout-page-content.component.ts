import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
    selector   : 'app-layout-page-content',
    standalone : true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './layout-page-content.component.html',
    styleUrl   : './layout-page-content.component.scss',
})
export class LayoutPageContentComponent {

}
