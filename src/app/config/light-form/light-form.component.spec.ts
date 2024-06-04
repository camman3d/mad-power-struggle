import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightFormComponent } from './light-form.component';

describe('LightFormComponent', () => {
  let component: LightFormComponent;
  let fixture: ComponentFixture<LightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
