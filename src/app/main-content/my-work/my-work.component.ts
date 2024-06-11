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
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen',
      img: 'assets/img/polloLoco.png',
    },
    {
      title: 'Pokédex',
      skills: 'Javascript | HTML | CSS | API',
      description:
        'Based on the PokéAPI, a simple library that provides and catalogues pokemon information',
      img: '',
    },
  ];
}
