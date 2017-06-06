/**
 * Created by sity on 2017/4/28.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
  {
    path: 'front-end',
    loadChildren: './front-end/front-end.module#FrontEndModule', //Lazy load front-end module
    data: { preload: true }
  },
  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth.module#AuthModule', //Lazy load account module
  //   data: { preload: true }
  // },
  // {path: '**', redirectTo: '/account/error404'},
  // {path: 'app/main/dashboard', redirectTo: '/app/main/dashboard'},
  // {path: '', redirectTo: '/account/login',pathMatch: 'full'},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
