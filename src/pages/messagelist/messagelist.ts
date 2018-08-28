import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
declare var SMS:any;
/**
 * Generated class for the MessagelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagelist',
  templateUrl: 'messagelist.html',
})
export class MessagelistPage {
messages:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,
public androidPermissions: AndroidPermissions) {
	 this.checkPermission()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistPage');
  }

   checkPermission()
    {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {          
          //if permission granted
          this.ReadSMSList();
        },
      err =>{
        
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
        then(success=>{
          this.ReadSMSList();
        },
      err=>{
        alert("cancelled")
      });
      });
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      
    }
    ReadSMSList()
    {
    
    this.platform.ready().then((readySource) => {
    
    let filter = {
           box : 'inbox', // 'inbox' (default), 'sent', 'draft'
           indexFrom : 0, // start from index 0
           maxCount : 100, // count of SMS to return each time
                };
    
           if(SMS) SMS.listSMS(filter, (ListSms)=>{               
               this.messages=ListSms
              },
    
              Error=>{
                console.log(JSON.stringify(Error));
                return false;
              });
         
        });
    }


}
