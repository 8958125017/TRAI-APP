import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ToastController,LoadingController} from 'ionic-angular';
import { RegisterPage} from  '../../pages/register/register';
import { SetupService } from '../../services/setup.service';
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
  preferenceDetailsInfo : any[]=[];
  preferenceDetail: any = { 
                        tourism       : false, 
                        banking       : false,                 
                        education     : false,
                        health        : false,
                        consumer      : false,
                        communication : false,
                        dnd           : false
                      };
preferenceItem:any=[];
userDetails:any
contactNumber:any;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController,public platform:Platform, public navParams: NavParams,public setupservice:SetupService,public loadingCtrl: LoadingController) {
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
    console.log('ionViewDidLoad PreferencePage');
                      var url = this.setupservice.basePath +'/getUserPrefrence'
              var postData = {"mobile":this.contactNumber}
              console.log("111111111111111111111111111111111111",url,postData)
              this.setupservice.PostRequest(url,postData).subscribe((response)=>{
                console.log("prefrences:::::::::::::::::::::::::",response = JSON.parse(response[0].json._body))
                console.log("response:::::::::::::::::::111111111111",this.preferenceItem = response.data[response.data.length-1].preference)
                if(response.data[response.data.length-1].preference.indexOf(1)>=0)
                {
                  this.preferenceDetail.tourism = true
                }
                else
                  this.preferenceDetail.tourism = false
                 if(response.data[response.data.length-1].preference.indexOf(2)>=0)
                {
                  this.preferenceDetail.banking = true
                }
                else
                   this.preferenceDetail.banking = false
                 if(response.data[response.data.length-1].preference.indexOf(3)>=0)
                {
                  this.preferenceDetail.education = true
                }
                else
                  this.preferenceDetail.education = false
                 if(response.data[response.data.length-1].preference.indexOf(4)>=0)
                {
                  this.preferenceDetail.health = true
                }
                else this.preferenceDetail.health = false
                 if(response.data[response.data.length-1].preference.indexOf(5)>=0)
                {
                  this.preferenceDetail.consumer = true
                }
                else this.preferenceDetail.consumer = false
                 if(response.data[response.data.length-1].preference.indexOf(6)>=0)
                {
                  this.preferenceDetail.communication = true
                }
                else  this.preferenceDetail.communication = false
                 if(response.data[response.data.length-1].preference.indexOf(7)>=0)
                {
                  this.preferenceDetail.dnd = true
                }
                else
                  this.preferenceDetail.dnd = false
                // preferenceDetail.tourism
              })
  }

  logout(){
       this.navCtrl.setRoot(RegisterPage);
  }

  

       preference(item){
         //debugger;
      var index=this.preferenceItem.findIndex((inter)=>{
             return  inter===item;
        }); 

         if(index===-1){
                   if(item===7) {
                     this.preferenceDetail.tourism=false;
                     this.preferenceDetail.banking=false;
                     this.preferenceDetail.education=false;
                     this.preferenceDetail.health=false;
                     this.preferenceDetail.consumer=false;
                     this.preferenceDetail.communication=false;
                     this.preferenceDetail.dnd=true;
                     this.preferenceItem =[];
                    this.preferenceItem.push(item);
                   }else{
                         if( this.preferenceDetail.dnd){
                           this.preferenceItem =[];
                         }
                     this.preferenceDetail.dnd=false;

                     this.preferenceItem.push(item);

                   }
         }else{

            this.preferenceItem.splice(index,1);
         }
         console.log(this.preferenceItem);


       }

       

      
       dndFunction(val:any){         
         this.preferenceItem=val;         
       }

       submit(){
        if(!this.preferenceItem){
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
                     // this.preferenceDetail.tourism=false;
                     // this.preferenceDetail.banking=false;
                     // this.preferenceDetail.education=false;
                     // this.preferenceDetail.health=false;
                     // this.preferenceDetail.consumer=false;
                     // this.preferenceDetail.communication=false;
                     // this.preferenceDetail.dnd=false;
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

}


 