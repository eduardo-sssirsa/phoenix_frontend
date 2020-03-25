import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';

import { DeparturesRoutingModule } from './departures-routing.module';
import {NewsComponent} from './news/news.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {SalepointComponent} from './salepoint/salepoint.component';
import { ObsoleteComponent } from './obsolete/obsolete.component';
import { DeparturesComponent } from './departures.component';


@NgModule({
    imports: [
        FormsModule,
        DeparturesRoutingModule,
        ReactiveFormsModule,
        NbCardModule,
    ],
    declarations: [
        DeparturesComponent,
        NewsComponent,
        WarehouseComponent,
        SalepointComponent,
        ObsoleteComponent,
    ]
})
export class DeparturesModule { }