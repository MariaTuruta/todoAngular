import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InitService} from './services/init/init.service';
import {LoggerInterceptorService} from './interceptor/logger-interceptor.service';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from '../modules/home/containers/home/home.component';
import {NavbarComponent} from '../core/navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';

const COMPONENTS = [
  HeaderComponent,
  HomeComponent,
  NavbarComponent,
  FooterComponent,
  TodoDetailsComponent,
];

const MODULES = [
  RouterModule,
  HttpClientModule,
];

export function initAppFactory(initService: InitService) {
  return () => initService.getConfigurations();
}

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
