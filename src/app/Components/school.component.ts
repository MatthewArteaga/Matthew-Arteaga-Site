import { Component } from '@angular/core';
import { RedirectService } from "../Services/redirect.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'home',
    templateUrl: '../Templates/school.component.html',
    styleUrls: ['../Styles/school.component.css'],
    animations: [
        trigger('onOffGmail', [
            // ...
            state('on', style({
                height: '100px',
                width: '100px',
            })),
            state('off', style({
                height: '75px',
                width: '75px',
            })),
            transition('on => off', [
                animate('0.10s')
            ]),
            transition('off => on', [
                animate('0.10s')
            ]),
        ]),
        trigger('onOffLinkedIn', [
            // ...
            state('on', style({
                height: '100px',
                width: '100px',
            })),
            state('off', style({
                height: '75px',
                width: '75px',
            })),
            transition('on => off', [
                animate('0.10s')
            ]),
            transition('off => on', [
                animate('0.10s')
            ]),
        ]),
        trigger('onOffGitHub', [
            // ...
            state('on', style({
                height: '100px',
                width: '100px',
            })),
            state('off', style({
                height: '75px',
                width: '75px',
            })),
            transition('on => off', [
                animate('0.10s')
            ]),
            transition('off => on', [
                animate('0.10s')
            ]),
        ]),
        trigger('onOffInstagram', [
            // ...
            state('on', style({
                height: '100px',
                width: '100px',
            })),
            state('off', style({
                height: '75px',
                width: '75px',
            })),
            transition('on => off', [
                animate('0.10s')
            ]),
            transition('off => on', [
                animate('0.10s')
            ]),
        ]),
    ]
})
export class SchoolComponent {
    constructor(private externalRedirectCheck: RedirectService) { }
}