import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImprintComponent } from '../imprint/imprint.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ImprintComponent, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}
  imprintIsOpen: boolean = false;

}
