import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() projectData: any;
  @Input() index: any;

  getContainerClass(index: number): string {
    return index % 2 === 0 ? 'row' : 'row-reverse';
  }

  /* getProjectClass(index: number): any {
    if (window.innerWidth > 1024) {
      return { 'align-items-start': index % 2 === 0 };
    } else {
      return { 'center': true };
    }
  } */

}
