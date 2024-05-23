import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternBoardComponent } from './pattern-board.component';

describe('PatternBoardComponent', () => {
  let component: PatternBoardComponent;
  let fixture: ComponentFixture<PatternBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
