import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        loadComponent: () => import('./modules/tasks/pages/task-list/task-list.component').then((m) =>m.TaskListComponent)
    },
];
