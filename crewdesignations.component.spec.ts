import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewdesignationsComponent } from './crewdesignations.component';

describe('CrewdesignationsComponent', () => {
  let component: CrewdesignationsComponent;
  let fixture: ComponentFixture<CrewdesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewdesignationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewdesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
