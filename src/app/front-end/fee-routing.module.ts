import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end.component';
import { AboutFeeComponent } from './about-fee/about-fee.component';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { AboutReactComponent } from './about-react/about-react.component';
import { AboutVueComponent } from './about-vue/about-vue.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FrontEndComponent,
        children: [
          // {
          //   path: 'about-fee',
          //   loadChildren: 'app/front-end/about-fee/about-fee.module#AboutfeeModule',
          //   data: {preload: true}
          // },
          { path: 'about-fee', component: AboutFeeComponent, },
          { path: 'about-angular', component: AboutAngularComponent, },
          { path: 'about-react', component: AboutReactComponent, },
          { path: 'about-vue', component: AboutVueComponent, },
          { path: '', component: AboutFeeComponent, },
        ]
      }
      ])
    ],
  exports: [
    RouterModule
  ]
})
export class FeeRoutingModule { }
