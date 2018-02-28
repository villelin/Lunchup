import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomModalPage } from './random-modal';

@NgModule({
  declarations: [
    RandomModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomModalPage),
  ],
})
export class RandomModalPageModule {}
