import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { MiscellaneousComponent } from './miscellaneous.component'
import {MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        MiscellaneousRoutingModule,
    ],
    declarations: [
        MiscellaneousComponent,
        NotFoundComponent,
    ],
})
export class MiscellaneousModule { }