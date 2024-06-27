import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  @Output() closeImprint = new EventEmitter<void>();

  /* constructor(private router: Router) {} */

  /* ngOnInit() {
    this.navigateToImprint();
  } */

  close() {
    this.closeImprint.emit();
  }

  /* navigateToImprint() {
    this.router.navigate(['/imprint']);
  } */
}
