import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneus/not-found/not-found.component';
//import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path:'entries',
            loadChildren: () => import('./entries/entries.module')
                .then(m => m.EntriesModule),
        },
        {
            path:'departures',
            loadChildren: () => import('./departures/departures.module')
                .then(m => m.DeparturesModule),
        },
        {
            path: '**',
            component: NotFoundComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {

}