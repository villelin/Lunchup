import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavesPage } from './faves';

@NgModule({
  declarations: [
    FavesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavesPage),
  ],
})
export class FavesPageModule {}
