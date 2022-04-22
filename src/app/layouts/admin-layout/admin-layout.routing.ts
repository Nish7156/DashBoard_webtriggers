import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserInfoRegisterComponent } from 'src/app/pages/user-info-register/user-info-register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard/:id',      component: DashboardComponent },
    { path: 'user-profile/:id',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'user-info-register', component: UserInfoRegisterComponent }
];
