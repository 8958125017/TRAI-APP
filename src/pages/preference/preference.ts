import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,AlertController,ToastController,LoadingController,ModalController} from 'ionic-angular';
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
  realState:boolean=false;
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
                        realState     : {type:false,time:0,day:0,priority:0},
                        education     : {type:false,time:0,day:0,priority:0},
                        health        : {type:false,time:0,day:0,priority:0},
                        consumer      : {type:false,time:0,day:0,priority:0},
                        communication : {type:false,time:0,day:0,priority:0},
                        dnd           : {type:false,time:0,day:0,priority:0}
                      };

  preferenceItem:any=[];
  userDetails:any
  contactNumber:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private sms: SMS,public toastCtrl:ToastController,private modalCtrl: ModalController,public platform:Platform, public navParams: NavParams,public setupservice:SetupService,public loadingCtrl: LoadingController) {
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
                if(response[0].json.status===200){
                console.log(">>>>>>>>>>>>>>>>>>>.",JSON.parse(response[0].json._body).data[JSON.parse(response[0].json._body).data.length-1])
                var altered = []
                var index = -1
                var newData = JSON.parse(response[0].json._body).data[JSON.parse(response[0].json._body).data.length-1]
                var response = JSON.parse(response[0].json._body)
                console.log("33333333333",newData)
                var j = 0;
                var i = 0;
                for(j=0;j<newData.preference.length;j++)
                {
                  console.log("11111111111",newData.preference[j])
                  for(i=0;i<=j;i++)
                  {
                   console.log("$$$$$$$$$$$$$$$",altered[i] , newData.preference[j].type, '---',i,j)
                   if(altered[i])
                   if(altered[i].type == newData.preference[j].type)
                     break;
                  }
                  console.log("------------>>>>>>>>>>>>>",i,j)
                  if(i-1 ==j)
                  {
                    console.log("data pushed")
                    altered.push(newData.preference[j])
                  }
                }
                console.log("!!!!!!!!!!!!!!!!!!!!",altered,response.data[response.data.length-1].preference)
                response.data[response.data.length-1].preference = altered
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<<",response.data[response.data.length-1].preference)
                // response = {data:responsed}
                // var response = JSON.parse(response[0].json._body);
                this.preferenceItem = response.data[response.data.length-1].preference
                // this.preferenceItem = []
                //console.log("this.preferenceItem:::::::::::::::::::::::::",this.preferenceItem)
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
                  this.preferenceDetail.realState.type = true
                }
                else
                   this.preferenceDetail.banking.type = false
                   if((response.data[response.data.length-1].preference.find((element)=>{
                          return  element.type==4;
                     })))
                {
                  this.preferenceDetail.education.type = true
                }
                else
                  this.preferenceDetail.education.type = false
                  if((response.data[response.data.length-1].preference.find((element)=>{
                         return  element.type==5;
                    })))
                {
                  this.preferenceDetail.health.type = true
                }
                else this.preferenceDetail.health.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==6;
                  })))
                {
                  this.preferenceDetail.consumer.type = true
                }
                else this.preferenceDetail.consumer.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==7;
                  })))
                {
                  this.preferenceDetail.communication.type = true
                }
                else  this.preferenceDetail.communication.type = false
                if((response.data[response.data.length-1].preference.find((element)=>{
                       return  element.type==8;
                  })))
                {
                  this.preferenceDetail.dnd.type = true
                }
                else{
                  this.preferenceDetail.dnd.type = false
                }
              }
                // preferenceDetail.tourism
              })
  }

  logout(){
       this.navCtrl.setRoot(RegisterPage);
  }



        checkBoxModal(data)
        {
          console.log("data:::::::::::::::::",data,this.preferenceItem)
          var indexed=this.preferenceItem.findIndex((element)=>{
                        return  element.type==data;
                   });
                   if(indexed>=0)
                   {
                     this.preferenceItem.splice(indexed,1);
                   }
                   else{
                     if(data==8 || data=="8")
                     {
                       this.preferenceItem = []
                                    this.preferenceDetail.communication.type = false

                                    this.preferenceDetail.consumer.type = false

                                    this.preferenceDetail.health.type = false

                                    this.preferenceDetail.education.type = false

                                    this.preferenceDetail.banking.type = false

                                    this.preferenceDetail.realState.type  = false

                                    this.preferenceDetail.banking.type = false
                       
                     }
                     else
                     {
                       var indexed=this.preferenceItem.findIndex((element)=>{
                        return  element.type==8 || element.type=="8";
                       });
                       if(indexed>=0)
                       this.preferenceItem.splice(indexed,1);
                       this.preferenceDetail.dnd.type = false
                     }
                     this.openModal(data);
                   }
                   
                 console.log("--------------------------------checkModal",this.preferenceItem)
        }





       dndFunction(val:any){
         this.preferenceItem=val;
       }

       confirmSubmit(){         
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
                    console.log("this.preferenceItem11111111111::::::::::::::::: ",this.preferenceItem)
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
                              var array = this.preferenceItem.map(element=>{
                               return element.type
                             })
                             
                             this.sms.send('+918448166243', 'START - '+array);
                             this.ionViewDidLoad();
                     
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
                     if(item==8){
                              this.preferenceItem=[];
                              this.preferenceDetail.tourism.type=false;
                              this.preferenceDetail.banking.type=false;
                              this.preferenceDetail.realState.type=false;
                              this.preferenceDetail.education.type=false;
                              this.preferenceDetail.health.type=false;
                              this.preferenceDetail.consumer.type=false;
                              this.preferenceDetail.communication.type=false;
                              this.preferenceItem.push(data);
                     }else{ 

                        this.preferenceItem.push(data);
                        console.log("???????????????????????????",this.preferenceItem)
                     }
                     
                    }                
                }  
                
              });

              modal.present().then(result => {
                console.log("result::::::",result)
              });
            
          }

          submit(){
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
                                     this.confirmSubmit(); 
                                }
                            }]
                        });
                        alert.present();
          }

}
