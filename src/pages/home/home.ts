import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Device]
})
export class HomePage {
public mobileId : {};
  constructor(public navCtrl: NavController,public device : Device,private callNumber: CallNumber) {  
    
   }
    home(){
    	this.mobileId = JSON.parse(this.device.uuid);
       // alert("this.device.uuid "+JSON.stringify(this.mobileId));
    }

 
 call(num:string){
        this.callNumber.callNumber(num, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
}
}
