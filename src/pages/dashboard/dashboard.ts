import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,ToastController,AlertController,LoadingController,Events} from 'ionic-angular';
import { HistoryPage } from '../../pages/history/history';
import { PreferencePage } from '../../pages/preference/preference';
import { ComplaintsPage } from '../../pages/complaints/complaints';
import { ComplaintsstatusPage } from '../../pages/complaintsstatus/complaintsstatus';
import { DndPage } from '../../pages/dnd/dnd';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }


  history(){
    this.navCtrl.push(HistoryPage);

  }

  preference(){
    this.navCtrl.push(PreferencePage);

  }

  dnd(){
    this.navCtrl.push(DndPage);

  }

  complaints(){
    this.navCtrl.push(ComplaintsPage);

  }

  complaintsStatus(){
    this.navCtrl.push(ComplaintsstatusPage);

  }

  ionViewDidEnter(){
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  

}
