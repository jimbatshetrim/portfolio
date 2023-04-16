import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRAMEWORKS, LANGUAGES, LanguageType } from '../misc/app.constant';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  skills: LanguageType[] = LANGUAGES;
  frameworks: LanguageType[] = FRAMEWORKS;

}
