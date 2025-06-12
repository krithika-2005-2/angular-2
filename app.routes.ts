import { Routes } from '@angular/router';
import { AddAdminUserComponent } from './admin/add-admin-user/add-admin-user.component';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
    
    },
    {
         path: 'add-admin-user',
        loadComponent: () => import('./admin/add-admin-user/add-admin-user.component').then(c=>c.AddAdminUserComponent)
    }
    

];
