import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';

const routes: Routes = [
  {
    path: 'splash-screen',
 component: SplashScreenComponent,
  },
 
   {
    path: 'home',
    component: HomeComponent,
  },
   

 

  

  //  Redirection par défaut → login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
