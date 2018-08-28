import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,LoadingController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service';
import { UserDetailPage } from '../../pages/user-detail/user-detail';
import { RegisterPage} from  '../../pages/register/register';
import { Device } from '@ionic-native/device';
import { AndroidPermissions } from '@ionic-native/android-permissions';
declare var SMS:any;
/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
   providers: [Device]
})
export class ComplaintsPage {
  searchTerm: string = '';
  items: any;
  section: string = 'one';  
  public mobileId : {};
  messages:any=[];
  userDetails:any;
  contactNumber:any;
  constructor(public navCtrl: NavController,public globalservice:SetupService,public androidPermissions: AndroidPermissions,public device : Device, public loadingCtrl:LoadingController,public platform:Platform,public navParams: NavParams) {
     let backAction =  platform.registerBackButtonAction(() => {        
                    this.navCtrl.pop();
                    backAction();
                  },2)
     this.userDetails=JSON.parse(localStorage.getItem('logindetail'));  
               
              if(this.userDetails){
                  this.contactNumber=this.userDetails[0].json.data.mobile;                 
              }
      this.callLog();
     this.checkPermission();
  }

   callLog(){
      let loading = this.loadingCtrl.create({
        content: 'Loading call logs please wait...',
        
        duration:15000,
       
      }); 
       loading.present();
       this.mobileId = JSON.parse(this.device.uuid);
     //  alert("this.mobileId = = "+JSON.stringify(this.mobileId));
       loading.dismiss();
       //alert("this.device.uuid "+JSON.stringify(this.mobileId));
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
        console.log("error");
      });
      });
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      
    }
    ReadSMSList()
    {
    let loading = this.loadingCtrl.create({
        content: 'Loading sms logs please wait...',
        
        duration:15000,
       
      }); 
       loading.present();
    this.platform.ready().then((readySource) => {
    
    let filter = {
           box : 'inbox', // 'inbox' (default), 'sent', 'draft'
           indexFrom : 0, // start from index 0
           maxCount : 100, // count of SMS to return each time
                };
    
           if(SMS) SMS.listSMS(filter, (ListSms)=>{  
           loading.dismiss();             
               this.messages=ListSms
            //   alert("this.messages = = "+JSON.stringify(this.messages));
              },
    
              Error=>{
                console.log(JSON.stringify(Error));
                return false;
              });
         
        });
    }
  

    getuserInfo(num:any){
         this.navCtrl.push(UserDetailPage);
    }

    reportCall(number:any,date:any,duration:any,type:any){
        this.navCtrl.push(UserDetailPage,{'num': number,'date':date,'duraton':duration,'typeCall':type});
    }

    reportSms(number:any){
        this.navCtrl.push(UserDetailPage,{objAddress: number});      
       
    }

     

}