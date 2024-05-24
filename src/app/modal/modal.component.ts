import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { bootstrapXLg } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [provideIcons({bootstrapXLg})]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input({required: true}) title!: string;
  @Input({required: true}) onClose!: () => void;

  stopProp(event: MouseEvent) {
    event.stopPropagation();
  }
  
  handler(ev: KeyboardEvent) {
    if (ev.key === "Escape") {
      this.onClose();
    }
  }
  ngOnInit(): void {
    window.addEventListener('keydown', this.handler.bind(this));
  }
  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handler);
  }
}
