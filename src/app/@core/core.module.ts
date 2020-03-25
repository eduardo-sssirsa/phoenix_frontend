import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {AnalyticsService} from './utils/analytics.service';
import {LayoutService} from './utils/layout.service';
import {SeoService} from './utils/seo.service';


export const NB_CORE_PROVIDERS = [
  AnalyticsService,
  LayoutService,
  SeoService,
];


@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [
    ],
    declarations: [],
  })
  export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
  
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
