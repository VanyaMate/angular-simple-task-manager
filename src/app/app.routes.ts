import { Routes } from '@angular/router';
import {
    LayoutPageContentComponent,
} from './layouts/layout-page-content/layout-page-content.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTaskComponent } from './pages/page-task/page-task.component';


export const routes: Routes = [
    {
        path     : '',
        component: LayoutPageContentComponent,
        children : [
            {
                path: '', component: PageHomeComponent,
            },
            {
                path: ':id', component: PageTaskComponent,
            },
        ],
    },
];
