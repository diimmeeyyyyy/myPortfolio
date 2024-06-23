import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ImprintComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  imprintIsOpen: boolean = false;

  openImprint() {
    this.imprintIsOpen = true;
  }

  onImprintClose() {
    this.imprintIsOpen = false;
  }
}
