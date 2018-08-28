import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ToastController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the DndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dnd',
  templateUrl: 'dnd.html',
})
export class DndPage {
  smsTrue:boolean=false;
  callTrue:boolean=false;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController,private datePicker: DatePicker,public platform :Platform, public navParams: NavParams) {
     let backAction =  platform.registerBackButtonAction(() => {        
                    this.navCtrl.pop();
                    backAction();
                  },2)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DndPage');
  }


      showDateTimePicker(event) {
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => { 
                      event.target.value = date 
                    },
            err => console.log('Error occurred while getting date: ' + err)
            )
        }

        submit(){
             let toast = this.toastCtrl.create({
                                 message: "submitted successfully!!",
                                 showCloseButton: true,
                                 closeButtonText: 'Ok',
                                 duration: 3000
                            });
                           toast.present();
        }

        daily(){
          this.smsTrue=true;
          this.callTrue=true;
             let toast = this.toastCtrl.create({
                                 message: "daily selected!!",
                                 showCloseButton: true,
                                 closeButtonText: 'Ok',
                                 duration: 3000
                            });
                           toast.present();
        }

        weekly(){
              this.smsTrue=true;
              this.callTrue=true;
              let toast = this.toastCtrl.create({
                                 message: "weekly  selected!!",
                                 showCloseButton: true,
                                 closeButtonText: 'Ok',
                                 duration: 3000
                            });
                           toast.present();
        }

        weekdays(){
              this.smsTrue=true;
              this.callTrue=true;
               let toast = this.toastCtrl.create({
                                 message: "wekdays selected!!",
                                 showCloseButton: true,
                                 closeButtonText: 'Ok',
                                 duration: 3000
                            });
                           toast.present();
        }

}
