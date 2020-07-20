import { Component } from '@angular/core';
import { RedirectService } from "../Services/redirect.service";

@Component({
    selector: 'home',
    templateUrl: '../Templates/home.component.html',
    styleUrls: ['../Styles/home.component.css']
})
export class HomeComponent {
    constructor(private externalRedirectCheck: RedirectService) { }

    onClick(link: string) {
        this.externalRedirectCheck.navigate(link);
    }
}