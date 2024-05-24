import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternBoardComponent } from './pattern-board.component';
import { By } from '@angular/platform-browser';

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

  it('should render color buttons', () => {
    const elements = fixture.debugElement.queryAll(By.css('.pattern-button'));
    expect(elements.length).toBe(16);
  });

  it('should render out different groups', () => {
    const elements = fixture.debugElement.queryAll(By.css('h2'));
    expect(elements.length).toBe(2);
  });
});
