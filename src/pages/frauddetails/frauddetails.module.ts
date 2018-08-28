import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrauddetailsPage } from './frauddetails';

@NgModule({
  declarations: [
    FrauddetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FrauddetailsPage),
  ],
})
export class FrauddetailsPageModule {}
