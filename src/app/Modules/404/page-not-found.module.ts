import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedirectService } from "../../Services/redirect.service";

import { PageNotFoundComponent } from "../../Components/page-not-found.component";

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [BrowserModule],
    exports: [PageNotFoundComponent],
    providers: [RedirectService]
})
export class PageNotFoundModule { }