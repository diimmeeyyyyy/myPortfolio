import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService
      .get('pollolocodescription')
      .subscribe((res: string) => {
        this.projects[0].description = res;
      });

    this.translateService.get('pokedexdescription').subscribe((res: string) => {
      this.projects[1].description = res;
    });
    this.translateService.get('joindescription').subscribe((res: string) => {
      this.projects[2].description = res;
    });
    this.translateService
      .get('dabubbledescription')
      .subscribe((res: string) => {
        this.projects[3].description = res;
      });
    this.translateService
      .get('olympiagrilldescription')
      .subscribe((res: string) => {
        this.projects[4].description = res;
      });

    this.translateService.onLangChange.subscribe(() => {
      this.ngOnInit();
    });
  }

  projects = [
    {
      title: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description: '',
      img: 'assets/img/polloLoco.png',
      github: 'https://github.com/diimmeeyyyyy/El_Pollo_Loco',
      livetest: 'https://dimitrios-kapetanis.com/ElPolloLoco/index',
    },
    {
      title: 'Pokédex',
      skills: 'JavaScript | HTML | CSS | API',
      description: '',
      img: 'assets/img/pokedex.png',
      github: 'https://github.com/diimmeeyyyyy/Pokedex',
      livetest: 'https://dimitrios-kapetanis.com/pokedex/index',
    },
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS',
      description: '',
      img: 'assets/img/join.png',
      github: 'https://github.com/diimmeeyyyyy/join',
      livetest: 'https://dimitrios-kapetanis.com/join',
    },
    {
      title: 'DA-Bubble',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: '',
      img: 'assets/img/dabubble.png',
      github: 'https://github.com/TechCoder95/dabubble',
      livetest: 'https://dabubble.dimitrios-kapetanis.com',
    },
    {
      title: 'Olympia - Grill',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'assets/img/olympiagrill.png',
      img: 'assets/img/olympiagrill.png',
      github: 'https://github.com/diimmeeyyyyy/OlympiaGrill_Website_Angular',
      livetest: 'https://olympiagrill.dimitrios-kapetanis.com',
    },
  ];
}
