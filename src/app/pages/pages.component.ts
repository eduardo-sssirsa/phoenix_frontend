import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'phoenix-pages',
    styleUrls: ['pages.component.scss'],
    template: `
    <phoenix-one-column-layout>
        <nb-menu [items]="menu"></nb-menu>
        <router-outlet></router-outlet>
    </phoenix-one-column-layout>
    `
})
export class PagesComponent {
    menu = MENU_ITEMS;
}