import { Component } from '@angular/core';

@Component({
    selector: 'phoenix-one-column-layout',
    styleUrls: ['./one-column-layout.scss'],
    template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <phoenix-header></phoenix-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <phoenix-footer></phoenix-footer>
      </nb-layout-footer>
    </nb-layout>        
    `
})
export class OneColumnLayoutComponent {

}