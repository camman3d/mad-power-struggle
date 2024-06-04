import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDefFormComponent } from './light-def-form.component';

describe('LightDefFormComponent', () => {
  let component: LightDefFormComponent;
  let fixture: ComponentFixture<LightDefFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDefFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightDefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
