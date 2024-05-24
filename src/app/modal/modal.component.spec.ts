import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    fixture.componentInstance.title = "Testing Title";
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css(".title"));
    expect(title.nativeElement.textContent).toBe("Testing Title");
  });

  it('close when clicking the X', () => {
    let closeClicked = false;
    fixture.componentInstance.onClose = () => closeClicked = true;
    fixture.detectChanges();

    expect(closeClicked).toBe(false);
    const closeX = fixture.debugElement.query(By.css(".close"));
    closeX.nativeElement.click();
    expect(closeClicked).toBe(true);
  });
});
