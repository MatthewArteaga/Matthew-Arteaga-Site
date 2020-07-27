import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedirectService } from "../../Services/redirect.service";

import { AboutComponent } from "../../Components/about.component";

@NgModule({
    declarations: [AboutComponent],
    imports: [BrowserModule],
    exports: [AboutComponent],
    providers: [RedirectService]
})
export class AboutModule { }