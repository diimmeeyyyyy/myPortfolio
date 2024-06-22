import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
