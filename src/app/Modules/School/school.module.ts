import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../Home/home.module';

import { RedirectService } from "../../Services/redirect.service";

import { SchoolComponent } from "../../Components/school.component";

@NgModule({
    declarations: [SchoolComponent],
    imports: [
        BrowserModule,
        HomeModule
    ],
    exports: [SchoolComponent],
    providers: [RedirectService]
})
export class SchoolModule { }