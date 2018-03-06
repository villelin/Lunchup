import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodModalPage } from './food-modal';

@NgModule({
  declarations: [
    FoodModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodModalPage),
  ],
})
export class FoodModalPageModule {}
