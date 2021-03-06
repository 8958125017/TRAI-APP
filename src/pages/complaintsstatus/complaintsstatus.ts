import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,LoadingController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service';
import { UserDetailPage } from '../../pages/user-detail/user-detail';
import { RegisterPage} from  '../../pages/register/register';
/**
 * Generated class for the ConplaintsstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaintsstatus',
  templateUrl: 'complaintsstatus.html',
})

export class ComplaintsstatusPage {
searchTerm: string = '';
items: any;
userDetails:any;
contactNumber:any;
complaintsStatus:any;
complaintsLength:any;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public globalservice:SetupService, public platform:Platform,public navParams: NavParams) {
     let backAction =  platform.registerBackButtonAction(() => {        
                    this.navCtrl.pop();
                    backAction();
                  },2)

       this.userDetails=JSON.parse(localStorage.getItem('logindetail')); 
               
              if(this.userDetails){
                  this.contactNumber=this.userDetails[0].json.data.mobile;
                  
              }

     this.getComplaintStatus();
  }
pending:any=0;
  getComplaintStatus(){
     let loading = this.loadingCtrl.create({
           content: ' please wait...',
           duration:10000
      }); 
        loading.present();
    const url =this.globalservice.basePath +'/getComplaintStatus'
    let postData ={
            mobile : this.contactNumber
    }
    
    this.globalservice.PostRequest(url,postData).subscribe((response)=>{
        loading.dismiss();
      
     if(response[0].json.status===200){
      var  result=response[0].json.json().data;
      console.log("------------------>>>>",result)
      for (var i =0; i<result.length ; i++) {
        if(result[i].data.status=="pending"){
            this.pending++
        }
      }
      this.complaintsStatus =result;
      this.complaintsLength = this.complaintsStatus.length;
     }else{

     }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsPage');
    this.setFilteredItems();
  }


    setFilteredItems() {
 
        this.items = this.globalservice.filterItems(this.searchTerm);
 
    }

    getuserInfo(name:any){
         this.navCtrl.push(UserDetailPage);
    }

     logout(){
       this.navCtrl.setRoot(RegisterPage);
  }

}
