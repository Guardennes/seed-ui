import { Routes } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/seed/home/home.component';
import { CreateNewAppComponent } from './create-new-app/create-new-app.component';

export default [
    {
        path: '',
        component: LandingHomeComponent,
    },
    {
        path: 'form-1',
        component: CreateNewAppComponent,
    },
] as Routes;
