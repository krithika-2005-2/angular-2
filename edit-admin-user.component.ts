import { Component } from '@angular/core';


@Component({
  selector: 'app-edit-admin-user',
  templateUrl: './edit-admin-user.component.html',
  styleUrl: './edit-admin-user.component.css'
})
export class EditAdminUserComponent { 
   adminName: string='ARC';
   anchorUrl: string="https://www.google.com/";
   disabled: boolean=false;   
   classname: string="c1" ;

   
}
