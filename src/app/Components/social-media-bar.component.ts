import { Component } from '@angular/core';
import { RedirectService } from "../Services/redirect.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'social-media',
    templateUrl: '../Templates/social-media-bar.component.html',
    styleUrls: ['../Styles/social-media-bar.component.css'],
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
export class SocialMediaBarComponent {
    constructor(private externalRedirectCheck: RedirectService) { }

    isOnLinkedIn = false;
    isOnGitHub = false;
    isOnInstagram = false;
    isOnGmail = false;


    toggle(button: string) {
        if (button === 'LinkedIn') {
            this.isOnLinkedIn = !this.isOnLinkedIn;
        } else if (button === 'GitHub') {
            this.isOnGitHub = !this.isOnGitHub;
        } else if (button === 'Gmail') {
            this.isOnGmail = !this.isOnGmail;
        } else {
            this.isOnInstagram = !this.isOnInstagram;
        }
    }

    onClick(link: string) {
        this.externalRedirectCheck.navigate(link);
    }
}