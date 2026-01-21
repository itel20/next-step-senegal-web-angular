import { Component, OnInit,AfterViewInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIcons, faLaptopCode, faPencilAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { faSearch, faRobot, faBookOpen, faVial, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ RouterModule, FormsModule, NgFor,FontAwesomeModule],
})
export default class HomeComponent implements OnInit, AfterViewInit {
 
  searchQuery = '';

  jobs = [
    { id: 1, title: 'Développeur Web', description: 'Angular / Spring Boot', icon: faLaptopCode },
    { id: 1, title: 'Développeur Web', description: 'Angular / Spring Boot', icon: faLaptopCode },
    { id: 2, title: 'Designer UX/UI', description: 'Figma / Adobe XD', icon: faPencilAlt },
    { id: 3, title: 'Chef de projet', description: 'Méthodologie Agile / Scrum', icon: faTasks },
  ];

  isShrunk = false;
  constructor(private router: Router) {}


  // icônes
  faSearch = faSearch;
  faRobot = faRobot;
  faBookOpen = faBookOpen;
  faVial = faVial;
  faGraduationCap = faGraduationCap;
  ngOnInit(): void {
      setTimeout(() => {
      this.isShrunk = true;
    }, 5 * 1000);
  }

  login(): void {
    
  }

  goToChatbotPage(): void {
    this.router.navigate(['/chatbot']);
  }

  onSearch(): void {
    // TODO: implémentation future
  }

  startOrientation(): void {
    // TODO: implémentation future
  }

  doTest(): void {
    // TODO: implémentation future
  }

  discover(): void {
    // TODO: implémentation future
  }

  viewDetails(job: any): void {
    // TODO: implémentation future
  }

  filteredJobs(): any[] {
    if (!this.searchQuery) {
      return this.jobs;
    }

    return this.jobs.filter(job => job.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
  ngAfterViewInit(): void {
    const input = document.querySelector('.search-bar input');
    if (input) {
      input.addEventListener('focus', event => {
        event.preventDefault();
        window.scrollTo(0, 0);
      });
    }
  }
}
