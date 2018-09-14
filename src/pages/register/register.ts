
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController,ToastController,LoadingController} from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { SetupService } from   '../../services/setup.service';
import { DashboardPage } from  '../../pages/dashboard/dashboard';
import { OtpReceivePage } from '../../pages/otp-receive/otp-receive';
import { UserData } from '../../providers/user-data';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regForm:FormGroup;
  userDetails:any;
  registerDetail: any = { contactNo: '',  };
  constructor(public userData: UserData,public fb:FormBuilder,public navCtrl: NavController,public loadingCtrl: LoadingController,public toastCtrl:ToastController,public menuCtrl:MenuController, public globalservice:SetupService,public navParams: NavParams) {
  }


  ngOnInit(){
   this.registerForm();
  }

  registerForm(){
   this.regForm=this.fb.group({
     'contactNo': new FormControl('',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
   })
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    console.log('ionViewDidLoad RegisterPage');
  }


  onLogin(){
  
    if(!this.registerDetail.contactNo){
       let toast = this.toastCtrl.create({
                         message: "please enter contact number!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 2000,
                    });
                   toast.present();
    }else if(this.registerDetail.contactNo.length<10 || this.registerDetail.contactNo.length>10){
        let toast = this.toastCtrl.create({
                         message: "number should be 10 degits only!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 2000,
                    });
                   toast.present();
    }else{
     
     let loading = this.loadingCtrl.create({
        content: 'Logging please wait...',       
        duration:15000,      
      }); 
       loading.present();
     // localStorage.setItem('userNumber',JSON.stringify(this.registerDetail.contactNo));
    // this.navCtrl.setRoot(DashboardPage);
    //  loading.dismiss(); 
    const url =this.globalservice.basePath +'/register';
    let postData ={
          mobile : this.registerDetail.contactNo,
      };
      
      this.globalservice.PostRequestUnautorized(url,postData).subscribe((response)=>{
       loading.dismiss(); 
             if (response[0].json.statusCode===200){
                localStorage.setItem('logindetail',JSON.stringify(response));                
                this.navCtrl.setRoot(OtpReceivePage);
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
}
