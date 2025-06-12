import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-crewdesignations',
  standalone: true,
  imports: [],
  templateUrl: './crewdesignations.component.html',
  styleUrl: './crewdesignations.component.css'
})
export class CrewdesignationsComponent {
  
  @Input() message: string=" "
  @Input() token: string=" "
}
