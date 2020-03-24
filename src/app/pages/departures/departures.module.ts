import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeparturesRoutingModule } from './departures-routing.module';
import {NewsComponent} from './news/news.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {WarrantiesComponent} from './warranties/warranties.component';
import {SalepointComponent} from './salepoint/salepoint.component';
import { ObsoleteComponent } from './obsolete/obsolete.component';
import { DeparturesComponent } from './depaartures.component';


@NgModule({
    imports: [
        FormsModule,
        DeparturesRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DeparturesComponent,
        NewsComponent,
        WarehouseComponent,
        WarrantiesComponent,
        SalepointComponent,
        ObsoleteComponent,
    ]
})
export class DeparturesModule { }