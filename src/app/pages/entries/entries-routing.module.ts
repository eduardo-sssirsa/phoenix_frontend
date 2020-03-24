import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {WarrantiesComponent} from './warranties/warranties.component';
import {SalepointComponent} from './salepoint/salepoint.component';
import {EntriesComponent} from './entries.component';

const routes: Routes = [{
    path: '',
    component: EntriesComponent,
    children: [
        {
            path: 'news',
            component: NewsComponent,
        },
        {
            path: 'warranties',
            component: WarrantiesComponent,
        },
        {
            path: 'warehouse',
            component: WarehouseComponent, 
        },
        {
            path: 'salepoint',
            component: SalepointComponent
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntriesRoutingModule {

}