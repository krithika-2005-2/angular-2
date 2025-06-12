import { Component } from '@angular/core';
import { EditAdminUserComponent } from '../edit-admin-user/edit-admin-user.component';

@Component({
  selector: 'app-add-admin-user',
  standalone: true,
  imports: [EditAdminUserComponent],
  templateUrl: './add-admin-user.component.html',
  styleUrls: ['./add-admin-user.component.css']
})
export class AddAdminUserComponent {
  userName: string= 'arcadmin';
  userId: number= 10;
  name: string="";
}
