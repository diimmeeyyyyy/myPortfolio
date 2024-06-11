import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MyWorkComponent } from './my-work/my-work.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    SkillSetComponent,
    AboutMeComponent,
    MyWorkComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
