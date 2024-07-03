import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
// In Ihrer Komponentenklasse
hoverEffect(event: MouseEvent, entering: boolean) {
  const target = event.target as HTMLElement;
  if (target.tagName === 'IMG' && entering) {
    target.style.transform = 'translateX(-15px)';
    target.style.transition = 'transform 0.3s ease-in-out';
  } else if (target.tagName === 'IMG') {
    target.style.transition = 'transform 0.3s ease-in-out';
    target.style.transform = 'translateX(0)';
  }
}

}
