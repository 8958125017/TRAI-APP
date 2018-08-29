import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform ,LoadingController,ToastController} from 'ionic-angular';
import { RegisterPage} from  '../../pages/register/register';
import { SetupService } from '../../services/setup.service';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  name:any="";
  email:any="";
  mobile:any;
  nameEdit:boolean=false;
  emailEdit:boolean=false;
  dob:any="";
  dobEdit:boolean=false;
  profession:any="";
  professionEdit:boolean=false;
  userDetails:any;
  ids:any;
  constructor(public navCtrl: NavController,public setupservice:SetupService,public platform:Platform, public navParams: NavParams,public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
     let backAction =  platform.registerBackButtonAction(() => {
                    this.navCtrl.pop();
                    backAction();
                  },2)

     this.userDetails=JSON.parse(localStorage.getItem('logindetail'));  
              if(this.userDetails){
                 this.ids=this.userDetails[0].json.data._id;
                
              }
  }

  ionViewDidLoad() {   
       
  }

  ngOnInit(){
   let postData= {
            _id:this.ids,
       }
    const url = this.setupservice.basePath +'/viewProfile'
    this.setupservice.PostRequest(url,postData).subscribe((response)=>{     
      var res = JSON.parse(response[0].json._body); 
      if(res.responseCode===200){
            this.name = res.data.name ? res.data.name : 'NA',
            this.email = res.data.email ? res.data.email : 'NA',
            this.dob = res.data.DOB ? res.data.DOB : 'NA',
            this.profession = res.data.profession ? res.data.profession : 'NA',
            this.mobile = res.data.mobile ? res.data.mobile : 'NA',
            this.ids = res.data._id ? res.data._id : 'NA'
      } else{
              let toast = this.toastCtrl.create({
                     message: "something went wrong",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present();
      }
      
     });
  }

  logout(){
       this.navCtrl.setRoot(RegisterPage);
  }
  nameEditFunc()
  {
    this.nameEdit=!this.nameEdit;
    console.log(this.nameEdit)
  }
  emailEditFunc()
  {
    this.emailEdit=!this.emailEdit;
    console.log(this.emailEdit)
  }
  dobEditFunc()
  {
    this.dobEdit=!this.dobEdit;
    console.log(this.dobEdit)
  }
  professionEditFunc()
  {
    this.professionEdit=!this.professionEdit;
    console.log(this.professionEdit)
  }
  submit()
  {

    let loading = this.loadingCtrl.create({
           content: 'profile updating please wait...'
      }); 
        loading.present();

    var response = {
      name: "",
      email: "",
      dob: "",
      profession: "",
      mobile: "",
      _id:""
    }
        let postDatas = {
            _id:this.ids,
            name: this.name,
            email: this.email,
            DOB: this.dob,
            profession: this.profession
    }
    
    const url = this.setupservice.basePath +'/updateUser'
    this.setupservice.PostRequest(url,postDatas).subscribe((responses)=>{
      loading.dismiss();    
      var res = JSON.parse(response[0].json._body); 
      if(res.responseCode===200){
            this.name = res.data.name
            this.email = res.data.email
            this.dob = res.data.DOB
            this.profession = res.data.profession
            this.mobile = res.data.mobile
            this.ids = res.data._id      
          let toast = this.toastCtrl.create({
                     message: "profile updated successfully!",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present();
       }else{
            let toast = this.toastCtrl.create({
                     message: "something went wrong",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present();
       }
      
    
    })
  }
}
