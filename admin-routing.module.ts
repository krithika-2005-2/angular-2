import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAdminUserComponent } from './edit-admin-user/edit-admin-user.component';

const routes: Routes = [
  {
    path: '',
    component: EditAdminUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
