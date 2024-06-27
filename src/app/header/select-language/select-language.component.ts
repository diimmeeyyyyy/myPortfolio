import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss',
})
export class SelectLanguageComponent implements OnInit {
  selectedLanguageImg = '/assets/img/german.png';
  showLanguageOptions = false;
  lang: string = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    if (this.lang === 'de') {
      this.selectedLanguageImg = '/assets/img/german.png';
    } else if (this.lang === 'es') {
      this.selectedLanguageImg = '/assets/img/spanish.png';
    } else {
      this.selectedLanguageImg = '/assets/img/english.png';
    }
  }

  toggleDropdown() {
    this.showLanguageOptions = !this.showLanguageOptions;
  }

  selectLanguage(event: MouseEvent, lang: string, imgSrc: string) {
    event.stopPropagation(); // Verhindert die Weitergabe des Ereignisses
    /* alert(`Sprache ausgewählt: ${lang}`); */
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.selectedLanguageImg = imgSrc;
    this.showLanguageOptions = false;
  }
}
