import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private location: Location
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  isImprintPage() {
    return this.location.path() === '/imprint';
  }

  title = 'portfolio';
}
