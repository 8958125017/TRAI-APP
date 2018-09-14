import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,Platform,ToastController,LoadingController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { SetupService } from '../../services/setup.service';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { SMS } from '@ionic-native/sms';
import * as $ from 'jquery'
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
  providers: [SMS]
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
                private sms: SMS,
                public alertCtrl: AlertController,
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
                  this.loadUserPreference();
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

    confirmSubmit(timeBands,priority){
      
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
                               type:8,
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
                  this.navCtrl.setRoot(DashboardPage);
                  let toast = this.toastCtrl.create({
                                     message: "DND Activated successfully!!",
                                     showCloseButton: true,
                                     closeButtonText: 'Ok',
                                     duration: 1000
                                });
                               toast.present();
                                var array = this.preferenceItem.map(element=>{
                                 return element.type
                                })
                             
                             this.sms.send('+918448166243', 'START - ' + array);
                               this.loadUserPreference();
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
timeCheck(){
  
}
      loadUserPreference() {    
              var url = this.setupservice.basePath +'/getUserPrefrence'
              var postData = {
                              "mobile":this.contactNumber
                             }
                             this.weekItem=[];
              this.setupservice.PostRequest(url,postData).subscribe((response)=>{
                
                var response = JSON.parse(response[0].json._body);
                this.preferenceItem = response.data[response.data.length-1].preference;
                if((response.data[response.data.length-1].preference.find((element)=>{
                      return  element.type==8;
                  })))
                {
                  console.log("this.preferenceItem DND :::::::::::",this.preferenceItem)
                  var index = this.preferenceItem.findIndex(element=>{
                    return element.type == 8
                  }) 
                  if(index>=0)
                  {
                 this.timeBands=this.preferenceItem[index].time.time;                 
                 this.contrast =this.preferenceItem[index].priority;   
                 this.weekItem =this.preferenceItem[index].weekdays;                 
                 this.weekItem.map(id=>{
                           $("#weekId"+id).prop("checked", true);
                 })    
                 }            
                }
                else{
                
                }
                // preferenceDetail.tourism
              })
  }

   submit(timeBands,priority){
            const alert = this.alertCtrl.create({
                            title: 'Submit Preferences',
                            message: 'Do you want to submit preferences?,service charge will be applicable',
                            buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Application exit prevented!');
                                }
                            },{
                                text: 'submit',
                                handler: () => {
                                     this.confirmSubmit(timeBands,priority); 
                                }
                            }]
                        });
                        alert.present();
          }
}

