import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  allSkills = [
    {
      name: 'Angular',
      img: '/assets/img/angularIcon.png',
    },
    {
      name: 'Typescript',
      img: '/assets/img/TypescriptIcon.png',
    },
    {
      name: 'Javascript',
      img: '/assets/img/Javascript.png',
    },
    {
      name: 'Firebase',
      img: '/assets/img/FirebaseIcon.png',
    },
    {
      name: 'HTML',
      img: '/assets/img/HTMLIcon.png',
    },
    {
      name: 'CSS',
      img: '/assets/img/CSSIcon.png',
    },
    {
      name: 'Scrum',
      img: '/assets/img/scrumIcon.png',
    },
    {
      name: 'GIT',
      img: '/assets/img/GitIcon.png',
    },
    {
      name: 'Material Design',
      img: '/assets/img/MaterialDesign.png',
    },
    {
      name: 'API',
      img: '/assets/img/API.png',
    },
  ];
}
