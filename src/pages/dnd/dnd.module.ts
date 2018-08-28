import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DndPage } from './dnd';

@NgModule({
  declarations: [
    DndPage,
  ],
  imports: [
    IonicPageModule.forChild(DndPage),
  ],
})
export class DndPageModule {}
