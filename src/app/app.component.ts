import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule, Location } from '@angular/common';
import AOS from 'aos';

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
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private location: Location
  ) {
    this.translateService.setDefaultLang('de');
    this.translateService.use(localStorage.getItem('lang') || 'de');
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      delay: 500,
    });
  }

  isImprintPage() {
    return this.location.path() === '/imprint';
  }

  isPrivacyPolicyPage() {
    return this.location.path() === '/privacy-policy';
  }

  title = 'portfolio';
}
