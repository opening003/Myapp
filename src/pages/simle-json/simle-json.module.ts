import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimleJsonPage } from './simle-json';

@NgModule({
  declarations: [
    SimleJsonPage,
  ],
  imports: [
    IonicPageModule.forChild(SimleJsonPage),
  ],
})
export class SimleJsonPageModule {}
