import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditAdminUserComponent } from './edit-admin-user/edit-admin-user.component';


@NgModule({
  declarations: [
    EditAdminUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditAdminUserComponent
  ]
})
export class AdminModule { }
