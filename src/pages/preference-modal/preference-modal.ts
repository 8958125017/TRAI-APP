import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController,MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { SetupService } from '../../services/setup.service';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the PreferenceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference-modal',
  templateUrl: 'preference-modal.html',
})
export class PreferenceModalPage {
    item:any;
    timeBands:any;
    weekItem:any=[];
    constructor(public navCtrl: NavController,private datePicker: DatePicker,public viewCtrl:ViewController, private fb: FormBuilder,public toastCtrl: ToastController,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
         this.item = navParams.get( 'type' );
         console.log("in modal ts::::::::;",this.item );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferenceModalPage');
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
  weekdays(day:any){
    console.log("day = = "+day);
    var index=this.weekItem.indexOf(day)
    if(index>=0){
       this.weekItem.splice(index,1);
    }
    else{
    	this.weekItem.push(day)
    }
  }

  submit(timeBands,priority){
    console.log("this.weekItem = = = "+this.weekItem);
    debugger
      if(this.weekItem.length<=0){
        let toast = this.toastCtrl.create({
                     message: 'Please select at least one weekday!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 2000
                });
                toast.present();
      }else if(!timeBands){
         let toast = this.toastCtrl.create({
                     message: 'Please select at least one timebands!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 2000
                });
                toast.present();
      }else if(!priority){
         let toast = this.toastCtrl.create({
                     message: 'Please select at least one priority!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 2000
                });
                toast.present();
      }else{
        var info = {}
         console.log("item::::::::",timeBands,priority)
         var date = {time:timeBands}
          this.viewCtrl.dismiss({type:this.item,time:date,priority:priority,weekdays:this.weekItem});      
      }
  		 
  }

}
