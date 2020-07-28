import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from "./Modules/Home/home.module";
import { AboutModule } from "./Modules/About/about.module";
import { WorkModule } from "./Modules/Work/work.module";
import { PageNotFoundModule } from "./Modules/404/page-not-found.module";

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './Components/page-header.component';

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AboutModule,
    WorkModule,
    PageNotFoundModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
