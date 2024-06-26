import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() projectData: any;
  @Input() index: any;

  getContainerClass(index: number): string {
    return index % 2 === 0 ? 'row' : 'row-reverse';
  }

  // In Ihrer project.component.ts
isImageOnLeft(index: number): boolean {
  // Eine Logik, die bestimmt, ob das Bild links sein soll, basierend auf dem Index oder einer anderen Bedingung
  return index % 2 === 0; // Beispiel: Wechselt die Seite für jedes Projekt
}
}


