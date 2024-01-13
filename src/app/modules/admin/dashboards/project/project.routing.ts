import { Route } from '@angular/router';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';

export const projectRoutes: Route[] = [
    {
        path     : '',
        component: HomePageComponent,
       
    }
];
