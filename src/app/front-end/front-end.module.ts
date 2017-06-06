import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontEndComponent } from './front-end.component';
import { FeeRoutingModule } from './fee-routing.module';
import { AboutFeeComponent } from './about-fee/about-fee.component';

@NgModule({
  imports: [
    CommonModule,
    FeeRoutingModule,
  ],
  exports: [],
  declarations: [
    FrontEndComponent,
    AboutFeeComponent
  ],
  providers: [],
})
export class FrontEndModule {
}
