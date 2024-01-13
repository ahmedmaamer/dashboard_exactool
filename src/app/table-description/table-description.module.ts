
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { projectRoutes } from 'app/modules/admin/dashboards/project/project.routing';
import { ProjectDescriptionComponent } from 'app/project-description/project-description.component';
import { TableDescriptionComponent } from 'app/table-description/table-description.component';
import { TableDeforestationComponent } from 'app/table-deforestation/table-deforestation.component';
import { TableAfforestationAndReforestationComponent } from 'app/table-afforestation-and-reforestation/table-afforestation-and-reforestation.component';
import { LandUseChangesComponent } from 'app/land-use-changes/land-use-changes.component';
import { TableGrasslandComponent } from 'app/table-grassland/table-grassland.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        ProjectComponent,
        TableDeforestationComponent ,
        TableAfforestationAndReforestationComponent,
        ProjectDescriptionComponent,
        TableGrasslandComponent,
        LandUseChangesComponent
    ],
    imports     : [
        FormsModule,
        TableDescriptionComponent,
        RouterModule.forChild(projectRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
        MatOptionModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TableDescriptionModule { }

