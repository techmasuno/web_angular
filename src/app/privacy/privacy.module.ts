import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisnailsComponent } from './crisnails/crisnails.component';



@NgModule({
  declarations: [
    CrisnailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CrisnailsComponent
  ]
})
export class PrivacityModule { }
