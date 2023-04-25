import { Component } from '@angular/core';
import { COLOR_OPTIONS } from './misc/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    document.documentElement.style.setProperty('--primary', COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length) + 1])
  }
}
