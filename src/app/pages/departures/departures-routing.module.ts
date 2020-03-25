import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {SalepointComponent} from './salepoint/salepoint.component';
import  {ObsoleteComponent} from './obsolete/obsolete.component';
import {DeparturesComponent} from './departures.component';

const routes: Routes = [{
    path: '',
    component: DeparturesComponent,
    children: [
        {
            path: 'news',
            component: NewsComponent,
        },
        {
            path: 'warehouse',
            component: WarehouseComponent, 
        },
        {
            path: 'salepoint',
            component: SalepointComponent,
        },
        {
            path: 'obsolete',
            component: ObsoleteComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DeparturesRoutingModule {

}