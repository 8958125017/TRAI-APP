import { Component, ElementRef,  NgZone, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,ToastController ,Events,Platform,LoadingController} from 'ionic-angular';
import { AgmMap, MapsAPILoader, } from '@agm/core';
import { } from 'googlemaps'
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styles: [`
    agm-map {
      height: 100%;
      width:100%;
    }
  `],
})
export class MapPage {
   @ViewChild("search")
   searchElementRef: ElementRef;
   @ViewChild(AgmMap)
   agmMap: AgmMap
   latitude: any=28.445883;
   longitude: any= 77.033588;
   zoom: number;
   icon:any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public events: Events,public platform: Platform,public loadingCtrl: LoadingController,private mapsAPILoader: MapsAPILoader,) 
   {
     this.zoom=16
  }
  mapClicked(){

  }
 
}
