import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './Components/page-header.component';
import { PageFooterComponent } from './Components/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    PageHeaderComponent, 
    PageFooterComponent
  ]
})
export class AppModule { }
