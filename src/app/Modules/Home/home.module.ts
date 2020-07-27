import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedirectService } from "../../Services/redirect.service";

import { HomeComponent } from "../../Components/home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule],
    exports: [HomeComponent],
    providers: [RedirectService]
})
export class HomeModule { }