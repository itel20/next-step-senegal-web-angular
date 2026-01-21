import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import HomeComponent from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template:  `<jhi-home></jhi-home>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule, CommonModule],

})
export class AppComponent {
  title = 'next-step-web-angular';
}
