import { Component } from '@angular/core';
import { CrewdesignationsComponent } from '../crewdesignations/crewdesignations.component'; 

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewdesignationsComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
  messageforcomp: string="hello world";
  usertoken: string="jhgb nm";
}

