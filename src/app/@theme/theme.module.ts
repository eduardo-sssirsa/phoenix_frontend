import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule,
  } from '@nebular/theme';
  import { NbEvaIconsModule } from '@nebular/eva-icons';

  import {
    FooterComponent,
    HeaderComponent,
  } from './components';
  

import {
    OneColumnLayoutComponent
  } from './layouts';


  const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
  ];
    
  
const COMPONENTS = [
    OneColumnLayoutComponent,
    FooterComponent,
    HeaderComponent,
  ];

  import { DEFAULT_THEME } from './styles/theme.default';
  import { DARK_THEME } from './styles/theme.dark';  

  @NgModule({
    imports: [CommonModule, ...NB_MODULES],
    exports: [CommonModule, ...COMPONENTS],
    declarations: [...COMPONENTS],
  })
  export class ThemeModule {
    static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders>{
        ngModule: ThemeModule,
        providers: [
          ...NbThemeModule.forRoot(
            {
              name: 'default',
            },
            [ DEFAULT_THEME, DARK_THEME ],
          ).providers,
        ],
      };
    }
  }
  