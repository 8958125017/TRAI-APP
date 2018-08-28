import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { RegisterPage} from  '../../pages/register/register';
/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  constructor(public navCtrl: NavController,public platform:Platform, public navParams: NavParams) {
  	 let backAction =  platform.registerBackButtonAction(() => {        
                    this.navCtrl.pop();
                    backAction();
                  },2)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }
  
   logout(){
       this.navCtrl.setRoot(RegisterPage);
  }
}
