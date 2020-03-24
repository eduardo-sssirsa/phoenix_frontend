import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { EntriesModule } from './entries/entries.module';
import { DeparturesModule } from './departures/departures.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneus/miscallaneous.module';

@NgModule({
    imports:[
        PagesRoutingModule,
        NbMenuModule,
        EntriesModule,
        DeparturesModule,
        MiscellaneousModule,
    ],
    declarations:[
        PagesComponent,
    ],
})
export class PagesModule {

}