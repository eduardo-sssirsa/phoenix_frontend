import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntriesRoutingModule } from './entries-routing.module';
import {NewsComponent} from './news/news.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {WarrantiesComponent} from './warranties/warranties.component';
import {SalepointComponent} from './salepoint/salepoint.component';
import { EntriesComponent } from './entries.component';

@NgModule({
    imports: [
        FormsModule,
        EntriesRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        EntriesComponent,
        NewsComponent,
        WarehouseComponent,
        WarrantiesComponent,
        SalepointComponent,
    ]
})
export class EntriesModule { }