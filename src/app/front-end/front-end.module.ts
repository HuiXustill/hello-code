import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontEndComponent } from './front-end.component';
import { FeeRoutingModule } from './fee-routing.module';
import { AboutFeeComponent } from './about-fee/about-fee.component';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { AboutReactComponent } from './about-react/about-react.component';
import { AboutVueComponent } from './about-vue/about-vue.component';

@NgModule({
  imports: [
    CommonModule,
    FeeRoutingModule,
  ],
  exports: [],
  declarations: [
    FrontEndComponent,
    AboutFeeComponent,
    AboutAngularComponent,
    AboutReactComponent,
    AboutVueComponent,
  ],
  providers: [],
})
export class FrontEndModule {
}
