import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedirectService } from "../../Services/redirect.service";

import { HomeComponent } from "../../Components/home.component";
import { SocialMediaBarComponent } from "../../Components/social-media-bar.component";

@NgModule({
    declarations: [
        HomeComponent,
        SocialMediaBarComponent
    ],
    imports: [BrowserModule],
    exports: [
        HomeComponent,
        SocialMediaBarComponent
    ],
    providers: [RedirectService]
})
export class HomeModule { }