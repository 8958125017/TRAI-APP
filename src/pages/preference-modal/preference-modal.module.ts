import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferenceModalPage } from './preference-modal';

@NgModule({
  declarations: [
    PreferenceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferenceModalPage),
  ],
})
export class PreferenceModalPageModule {}
