import { FrauddetailsPage } from '../../pages/frauddetails/frauddetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController,ToastController,LoadingController} from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { SetupService } from   '../../services/setup.service';
import { DashboardPage } from  '../../pages/dashboard/dashboard';
import { OtpReceivePage } from '../../pages/otp-receive/otp-receive';
import { ComplaintsstatusPage } from '../../pages/complaintsstatus/complaintsstatus';
/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  userList:any; 
  user:any;
  msg:any;
  site:any;   
  dndUserStatus :any =  { contactNo: '',duration:'',date:'',callType : ''  };
  duration:boolean=true;
  typecall:boolean=true;
  fromNumber:any;
  constructor(public fb:FormBuilder,public navCtrl: NavController,public loadingCtrl: LoadingController,public toastCtrl:ToastController,public menuCtrl:MenuController, public globalservice:SetupService,public navParams: NavParams) {
          this.user=JSON.parse(localStorage.getItem('logindetail'));
          if(this.user){
                  this.fromNumber=this.user[0].json.data.mobile;
                  
              }
          

          if(this.navParams.get('num')){
            this.dndUserStatus.contactNo=this.navParams.get('num') ;
            this.duration=true;
            this.typecall=true;
          }else if(this.navParams.get('objAddress')){
             this.dndUserStatus.contactNo=this.navParams.get('objAddress') ;
            this.duration=false;
            this.typecall=false;
          }

          if(this.navParams.get('duraton')){
            this.dndUserStatus.duration=this.navParams.get('duraton');
          }
          
         if(this.navParams.get('date')){
           this.dndUserStatus.date=this.navParams.get('date');
         }

         if(this.navParams.get('typeCall')){
           this.dndUserStatus.callType=this.navParams.get('typeCall');
         }
         
          
          
  }

  preference(item:any){        
        this.site=item;     
        console.log("this.site = = "+this.site);   
       }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }
  fraud(){
    this.navCtrl.push(FrauddetailsPage);
  }

  submit(){
            if(!this.site){
                    let toast = this.toastCtrl.create({
                     message: 'Please select at least one preference!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 2000
                });
                toast.present(); 
            }
            // else if(!this.msg){
            //          let toast = this.toastCtrl.create({
            //                        message: 'Please enter complain!',
            //                        showCloseButton: true,
            //                        closeButtonText: 'Ok',
            //                        duration: 2000
            //     });
            //     toast.present(); 
            // }
            else{
              let loading = this.loadingCtrl.create({
                  content: 'your complain submiting please wait...',
                  duration:15000,
               }); 
                loading.present();
                const url =this.globalservice.basePath +'/complaint';
                             let postData ={
                              mobile:this.fromNumber,
                              header: this.dndUserStatus.contactNo,
                                    data:{
                                          to:this.dndUserStatus.contactNo,
                                          from: this.fromNumber,
                                          compalin:this.msg,
                                          status:"pending",
                                          type:this.site
                                    }
                              
                                }
        
      this.globalservice.PostRequestUnautorized(url,postData).subscribe((response)=>{
        loading.dismiss();
             if (response[0].json.responseCode===200){
                         let toast = this.toastCtrl.create({
                         message: "complain sent successfully!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 2000
                    });
                   toast.present();    
                  this.navCtrl.setRoot(ComplaintsstatusPage);
         }else{
                         let toast = this.toastCtrl.create({
                                     message: "Somthing went wrong!!",
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