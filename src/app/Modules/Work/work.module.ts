import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../Home/home.module';

import { RedirectService } from "../../Services/redirect.service";

import { WorkComponent } from "../../Components/work.component";

@NgModule({
    declarations: [WorkComponent],
    imports: [
        BrowserModule,
        HomeModule
    ],
    exports: [WorkComponent],
    providers: [RedirectService]
})
export class WorkModule { }