import { Component } from '@angular/core';
import { IonicPage,NavController,Platform,AlertController,NavParams,ToastController,LoadingController} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { UserData } from '../../providers/user-data';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { SetupService } from '../../services/setup.service'
import {  DashboardPage } from '../../pages/dashboard/dashboard';
import {  FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
declare var SMS:any;
declare var document:any;
declare var window: any

@IonicPage()
@Component({
  selector: 'page-otp-receive',
  templateUrl: 'otp-receive.html',
})
export class OtpReceivePage {
  otpForm: FormGroup;
  userDetails:any;
  otpVerifyDetail: any = { 
    		                  contactNumber: "",  
    		                  otp: ""                          
                        };

  constructor(
              public userData: UserData,
              public alertCtrl: AlertController,
              private fb: FormBuilder,
              public platform:Platform,
              public toastCtrl: ToastController,
              public androidPermissions: AndroidPermissions,
              public loadingCtrl: LoadingController,
              public http:Http,
              public _setupService: SetupService,
              public navCtrl:NavController,
              public navParams: NavParams) {
              this.userDetails=JSON.parse(localStorage.getItem('logindetail'));  
              debugger 
              if(this.userDetails){
                  this.otpVerifyDetail.contactNumber=this.userDetails[0].json.data.mobile;
                  this.otpVerifyDetail.otp="";
              }
              
    

    document.addEventListener('onSMSArrive', function(e){
    var sms = e.data;      
     console.log("received sms "+JSON.stringify( sms ) );
      if(sms.address) //look for your message address
     {      
       var otpArray = sms.body.split(':');
       var otp = otpArray[1];
       this.otpVerifyDetail.otp=otp;
        this.stopSMS();
        this.verify_otp();
     }
      
    });
   
      }
    

    otpFormInit(){
            this.otpForm = this.fb.group({
                  'otp': new FormControl('', Validators.required),
                  'contact': new FormControl('')                                 
                 });
              }

    verifyOTP()
    {
      
       let loading = this.loadingCtrl.create({
           content: 'otp Verifing please wait...'
      }); 
        loading.present();
   
      // if(!this.otpVerifyDetail.otp)
      // {
      // 	loading.dismiss();
      //   let toast = this.toastCtrl.create({
      //                message: 'Please enter your OTP and proceed',
      //                showCloseButton: true,
      //                closeButtonText: 'Ok',
      //                duration: 5000
      //           });
      //           toast.present();        
      // }
      // else
      // {
      	let postData = {                                   
                                    otp : this.otpVerifyDetail.otp,
                                    mobile : this.otpVerifyDetail.contactNumber                                    
                       };   

     const url = this._setupService.basePath + '/verify';
        
     this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{
     loading.dismiss();
     
       if(response[0].json.statusCode==200){
      	let toast = this.toastCtrl.create({
                     message: response[0].json.message,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
       localStorage.setItem('hasSeenTutorial', "true");
       this.navCtrl.setRoot(DashboardPage);
      }else{
        let toast = this.toastCtrl.create({
                     message: "something went wrong",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
      }
     });
       
    //  }
    }

  ngOnInit() { 
        this.otpFormInit();
         this.otpForm.reset();      
      }



  watchSMS() {
    let _scope = this;
    if(window.SMS) window.SMS.startWatch(function(){
        console.log('Succeed to start watching SMS');
        document.addEventListener('onSMSArrive', _scope.smsArived);
      }, function(){
        console.log('failed to start watching SMS');
      });
  }

  stopWatchSMS() {
    if(window.SMS) window.SMS.stopWatch(function(){
        console.log('Succeed to stop watching SMS');
      }, function(){
        console.log('failed to stop watching SMS');
      });
  }

  smsArived = (result: any) => {
    let sms = result.data;
    console.log('sms', sms);
    let sender = sms.address;
    console.log('sender', sender);
    let otp_text = sms.body;
    console.log('OTP', otp_text);
    this.otpVerifyDetail.otp=otp_text    
    this.stopWatchSMS();
  }




  login(){  
  
     let loading = this.loadingCtrl.create({
        content: 'resend otp please wait...',       
        duration:15000,      
      }); 
       loading.present();
    const url =this._setupService.basePath +'/register';
    let postData ={
          mobile : this.otpVerifyDetail.contactNumber,
      };
      
      this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{
       loading.dismiss();        
             if (response[0].json.statusCode===200){                
             let toast = this.toastCtrl.create({
                         message: "otp sent successfully!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 2000
                    });
                   toast.present();          
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