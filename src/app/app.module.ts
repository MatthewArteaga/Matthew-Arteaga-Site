import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './Components/page-header.component';
import { PageFooterComponent } from './Components/page-footer.component';
import { HomeComponent } from './Components/home.component';
import { AboutComponent } from './Components/about.component';
import { WorkComponent } from './Components/work.component';
import { PageNotFoundComponent } from "./Components/page-not-found.component";

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
