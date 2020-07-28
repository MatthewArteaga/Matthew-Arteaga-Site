import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../Home/home.module';

import { RedirectService } from "../../Services/redirect.service";

import { AboutComponent } from "../../Components/about.component";

@NgModule({
    declarations: [AboutComponent],
    imports: [
        BrowserModule,
        HomeModule
    ],
    exports: [AboutComponent],
    providers: [RedirectService]
})
export class AboutModule { }