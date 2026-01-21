jest.mock('app/core/auth/account.service');
jest.mock('app/login/login.service');

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';



import HomeComponent from './home.component';

describe('Home Component', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    
    })
      .overrideTemplate(HomeComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
   
  });

  describe('ngOnInit', () => {
    it('Should synchronize account variable with current account', () => {
      
      
      comp.ngOnInit();


     
    });
  });

  describe('login', () => {
    it('Should call loginService.login on login', () => {
      // WHEN
      comp.login();

      // THEN
      
    });
  });
});
