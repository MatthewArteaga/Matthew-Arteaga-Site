import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home.component';
import { AboutComponent } from './Components/about.component';
import { SchoolComponent } from "./Components/school.component";
import { WorkComponent } from './Components/work.component';
import { PageNotFoundComponent } from './Components/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export default appRoutes;