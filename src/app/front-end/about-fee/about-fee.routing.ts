import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutFeeComponent } from './about-fee.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutFeeComponent,
        children: [
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AboutfeeRoutingModule { }
