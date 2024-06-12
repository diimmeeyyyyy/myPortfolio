import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  projects = [
    {
      title: 'Pollo Loco',
      skills: 'Javascript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: 'assets/img/polloLoco.png',
    },
    {
      title: 'Pokédex',
      skills: 'Javascript | HTML | CSS | API',
      description:
        'Based on the PokéAPI, a simple library that provides and catalogues pokemon information.',
      img: 'assets/img/pokedex.png',
    },
    {
      title: 'Join',
      skills: 'Javascript | HTML | CSS',
      description:
        'Task manager inspired by the kanban system. Create and organize tasks using drag & drop functions, assign users and categories.',
      img: 'assets/img/join.png',
    },
    {
      title: 'Olympia - Grill',
      skills: 'Angular | Typescript | HTML | CSS | Firebase',
      description:
        'Website for my parents restaurant where clients can individually select and pre-order their food',
      img: 'assets/img/join.png',
    },
  ];
}
