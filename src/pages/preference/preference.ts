import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ToastController,LoadingController,ModalController} from 'ionic-angular';
import { RegisterPage} from  '../../pages/register/register';
import { SetupService } from '../../services/setup.service';
import { PreferenceModalPage }  from '../../pages/preference-modal/preference-modal';
import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the PreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
  providers: [SMS]
})
export class PreferencePage {
  tourism:boolean=false;
  banking:boolean=false;
  real:boolean=false;
  education:boolean=false;
  health:boolean=false;
  consumer:boolean=false;
  communication:boolean=false;
  dnd:boolean=false;
  info: any = {};
  preferenceDetailsInfo : any[]=[];
  preferenceDetail: any = {
                        tourism       : {type:false,time:false,day:false,priority:false},
                        banking       : {type:false,time:0,day:0,priority:0},
                        education     : {type:false,time:0,day:0,priority:0},
                        health        : {type:false,time:0,day:0,priority:0},
                        consumer      : {type:false,time:0,day:0,priority:0},
                        communication : {type:false,time:0,day:0,priority:0},
                        dnd           : {type:false,time:0,day:0,priority:0}
                      };

preferenceItem:any=[];
userDetails:any
contactNumber:any;
  constructor(public navCtrl: NavController,private sms: SMS,public toastCtrl:ToastController,private modalCtrl: ModalController,public platform:Platform, public navParams: NavParams,public setupservice:SetupService,public loadingCtrl: LoadingController) {
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
              var url = this.setupservice.basePath +'/getUserPrefrence'
              var postData = {
                              "mobile":this.contactNumber
                             }
              this.setupservice.PostRequest(url,postData).subscribe((response)=>{
                var response = JSON.parse(response[0].json._body);
                this.preferenceItem = response.data[response.data.length-1].preference
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==1;
                  })))
                {
                  this.preferenceDetail.tourism.type = true
                }
                else
                  this.preferenceDetail.tourism.type = false
                  if((response.data[response.data.length-1].preference.find((element)=>{
                         return  element.type==2;
                    })))
                {
                  this.preferenceDetail.banking.type = true
                }
                else
                   this.preferenceDetail.banking.type = false
                   if((response.data[response.data.length-1].preference.find((element)=>{
                          return  element.type==3;
                     })))
                {
                  this.preferenceDetail.education.type = true
                }
                else
                  this.preferenceDetail.education.type = false
                  if((response.data[response.data.length-1].preference.find((element)=>{
                         return  element.type==4;
                    })))
                {
                  this.preferenceDetail.health.type = true
                }
                else this.preferenceDetail.health.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==5;
                  })))
                {
                  this.preferenceDetail.consumer.type = true
                }
                else this.preferenceDetail.consumer.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==6;
                  })))
                {
                  this.preferenceDetail.communication.type = true
                }
                else  this.preferenceDetail.communication.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==7;
                  })))
                {
                  this.preferenceDetail.dnd.type = true
                }
                else
                  this.preferenceDetail.dnd.type = false
                // preferenceDetail.tourism
              })
  }

  logout(){
       this.navCtrl.setRoot(RegisterPage);
  }



        checkBoxModal(data)
        {
          var indexed=this.preferenceItem.findIndex((element)=>{
                        return  element.type==data;
                   });
                   if(indexed>=0)
                   {
                     this.preferenceItem.splice(indexed,1);
                   }
                   else{
                     this.openModal(data);

                   }
                   
                 console.log("--------------------------------checkModal",this.preferenceItem)
        }





       dndFunction(val:any){
         this.preferenceItem=val;
       }

       submit(){
         
        if(this.preferenceItem.length<=0){
          let toast = this.toastCtrl.create({
                     message: 'Please select at least one preference!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 2000
                });
                toast.present();
        }else{

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
                   let toast = this.toastCtrl.create({
                                     message: "preference submitted successfully!!",
                                     showCloseButton: true,
                                     closeButtonText: 'Ok',
                                     duration: 5000
                              });
                             toast.present();
                             this.ionViewDidLoad();
                     // this.preferenceDetail.tourism.type=false;
                     // this.preferenceDetail.banking.type=false;
                     // this.preferenceDetail.education.type=false;
                     // this.preferenceDetail.health.type=false;
                     // this.preferenceDetail.consumer.type=false;
                     // this.preferenceDetail.communication.type=false;
                     // this.preferenceDetail.dnd.type=false;
            }else{
                 let toast = this.toastCtrl.create({
                                     message: "something went wrong!!",
                                     showCloseButton: true,
                                     closeButtonText: 'Ok',
                                     duration: 5000
                              });
                             toast.present();
                  }
                })
            }
               console.log("this.preferenceDetailsInfo = = "+JSON.stringify(this.preferenceDetailsInfo));

          }



        openModal(data) {  
          console.log("open modal::::::",data)
              // var data = { message : 'hello world' };
              let modal = this.modalCtrl.create('PreferenceModalPage',{type:data});
             
              modal.onDidDismiss(data => { 
              if(data){
                 var item = data.type
                 var index=this.preferenceItem.findIndex((element)=>{
                        return  element.type==item;
                   });
                   console.log("index:::",index)
                   if(index>=0)
                   {
                     console.log("pop in modal")
                     this.preferenceItem.splice(index,1);
                   }
                   else
                   {
                      console.log("push in modal")
                   this.preferenceItem.push(data);
                 }
                 console.log("-",JSON.stringify(this.preferenceItem));
              }       
                
              });

              modal.present().then(result => {
                console.log("result::::::",result)
              });
            
          }

}
