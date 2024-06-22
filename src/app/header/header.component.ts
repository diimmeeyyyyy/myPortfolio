import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  hamburgerMenuOpen = false;
  activeMenuPoint: string = '';
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 1;
  }

  getHeaderLogo() {
    if (!this.scrolled) {
      return '/assets/img/logo.png';
    } else {
      return '/assets/img/logo-hamburger-menu.png';
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
}
