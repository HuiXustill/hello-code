import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutFeeComponent } from './about-fee.component';
import { AboutfeeRoutingModule } from './about-fee.routing';

@NgModule({
  imports: [
    CommonModule,
    // AboutfeeRoutingModule,
  ],
  declarations: [AboutFeeComponent]
})
export class AboutfeeModule { }
