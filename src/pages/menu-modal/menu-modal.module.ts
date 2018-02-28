import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuModalPage } from './menu-modal';

@NgModule({
  declarations: [
    MenuModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuModalPage),
  ],
})
export class MenuModalPageModule {}
