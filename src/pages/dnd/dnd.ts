import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ToastController,LoadingController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { SetupService } from '../../services/setup.service';
import { DashboardPage } from '../../pages/dashboard/dashboard';

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
 
    item:any;
    timeBands:any;
    weekItem:any=[];
    userDetails:any;
    contrast:any;
    contactNumber:any;
    preferenceItem:any=[]; 
  constructor(
                public navCtrl: NavController,
                public toastCtrl:ToastController,
                private datePicker: DatePicker,
                public platform :Platform,
                public navParams: NavParams,
                public setupservice:SetupService,
                public loadingCtrl: LoadingController
                ){
                   let backAction =  platform.registerBackButtonAction(() => {        
                                  this.navCtrl.pop();
                                  backAction();
                                },2)
                  this.userDetails=JSON.parse(localStorage.getItem('logindetail'));
                  if(this.userDetails){
                    this.contactNumber=this.userDetails[0].json.data.mobile;
                  }
             }

      ionViewDidLoad() {
        console.log('ionViewDidLoad DndPage');
      }

    weekdays(day:any){                     
                      var index=this.weekItem.indexOf(day)
                      if(index>=0){
                         this.weekItem.splice(index,1);
                      }
                      else{
                        this.weekItem.push(day)
                      }
    }

    submit(timeBands,priority){
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
                var date =  {
                             time:timeBands
                            }
                let data =  { 
                             type:7,
                             time:date,
                             priority:priority,
                             weekdays:this.weekItem
                           }
                this.preferenceItem.push(data);
                let loading = this.loadingCtrl.create({
                      content: 'preference submiting please wait...',
                      duration:15000,
                 });
                    loading.present();

                   let postData ={
                                   mobile :this.contactNumber,
                                   data   : {
                                              preference : this.preferenceItem
                                             }
                                 }
             const url = this.setupservice.basePath +'/userPrefrence';
             this.setupservice.PostRequest(url,postData).subscribe((response)=>{
             loading.dismiss();
                if(response[0].json.status===200){
                  this.navCtrl.push(DashboardPage);
                  let toast = this.toastCtrl.create({
                                     message: "DND Activated successfully!!",
                                     showCloseButton: true,
                                     closeButtonText: 'Ok',
                                     duration: 1000
                                });
                               toast.present();
                }else{
                    let toast = this.toastCtrl.create({
                                     message: "something went wrong",
                                     showCloseButton: true,
                                     closeButtonText: 'Ok',
                                     duration: 2000
                                });
                               toast.present();
                } 
              });                
            }
      }
}

