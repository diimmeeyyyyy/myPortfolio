import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  @Output() closeImprint = new EventEmitter<void>();

  close() {
    this.closeImprint.emit();
  }
}
