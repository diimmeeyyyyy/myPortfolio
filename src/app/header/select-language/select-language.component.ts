import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss',
})
export class SelectLanguageComponent {
  selectedLanguage = '/assets/img/english.png';
  showLanguageOptions = false;

  toggleDropdown() {
    this.showLanguageOptions = !this.showLanguageOptions;
  }

  selectLanguage(event: MouseEvent, lang: string, imgSrc: string) {
    event.stopPropagation(); // Verhindert die Weitergabe des Ereignisses
    console.log(`Sprache ausgewählt: ${lang}`);
    this.selectedLanguage = imgSrc;
    this.showLanguageOptions = false;
  }
}
