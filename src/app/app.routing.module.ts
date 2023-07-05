


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisnailsComponent } from './privacy/crisnails/crisnails.component';
import { MainComponent } from './home/main/main.component';


const routes: Routes = [
  {
    path: 'home',
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
  ]
})
export class AppRoutingModule { }
