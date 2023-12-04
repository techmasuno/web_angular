


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MainComponent } from './home/main/main.component';
import { CrisnailsComponent } from './privacy/crisnails/crisnails.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'services',
    component: MainComponent
  },
  {
    path: 'privacy-crisnails-app',
    component: CrisnailsComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
