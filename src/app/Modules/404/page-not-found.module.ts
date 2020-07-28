import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../Home/home.module';

import { RedirectService } from "../../Services/redirect.service";

import { PageNotFoundComponent } from "../../Components/page-not-found.component";

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        BrowserModule,
        HomeModule
    ],
    exports: [PageNotFoundComponent],
    providers: [RedirectService]
})
export class PageNotFoundModule { }