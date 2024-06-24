import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common'; // Import hinzufügen
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectLanguageComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  hamburgerMenuOpen = false;
  activeMenuPoint: string = '';
  scrolled = false;

  constructor(
    private translateService: TranslateService,
    private location: Location,
    private router: Router
  ) {
    /* this.translateService.use(localStorage.getItem('lang') || 'en'); */
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 1;
  }

  isImprintPage() {
    return this.location.path() === '/imprint';
  }

  getHeaderLogo() {
    if (!this.scrolled && !this.isImprintPage()) {
      return '/assets/img/logo.png';
    } else {
      return '/assets/img/logo-hamburger-menu.png';
    }
  }

  getHamburgerMenuLogo() {
    if (window.innerWidth < 1024 && !this.scrolled) {
      return '/assets/img/logo-hamburger-menu.png';
    } else {
      return '';
    }
  }

  closeMenu() {
    this.hamburgerMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  screenIsLarge() {
    return window.innerWidth > 1024;
  }

  setActiveMenuPoint(menuPoint: string) {
    this.activeMenuPoint = menuPoint;
  }

  scrollToTop() {
    this.router.navigateByUrl('/').then(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }

  stickyMenu() {
    return this.scrolled && !this.isImprintPage();
  }

  disappearLogo() {
    return window.innerWidth < 1024 && !this.scrolled && this.hamburgerMenuOpen;
  }

  windowWidthSmallScreen() {
    return window.innerWidth < 1024;
  }
}
