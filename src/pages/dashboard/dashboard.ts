import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,ToastController,AlertController,LoadingController,Events} from 'ionic-angular';
import { HistoryPage } from '../../pages/history/history';
import { PreferencePage } from '../../pages/preference/preference';
import { ComplaintsPage } from '../../pages/complaints/complaints';
import { ComplaintsstatusPage } from '../../pages/complaintsstatus/complaintsstatus';
import { DndPage } from '../../pages/dnd/dnd';
import { RegisterPage } from '../../pages/register/register';
import { Sim } from '@ionic-native/sim';
import * as moment from 'moment';
import { SetupService } from '../../services/setup.service';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public simInfo: any;
  public cards: any;
  public simName:any;
  public contactNumber
  public userDetails:any;
  public currentDate : any;
  public currentTime : any;
  preferenceItem:any=[];
  activeDnd:boolean=false;
  constructor(private sim: Sim,public navCtrl: NavController,public setupservice:SetupService, public navParams: NavParams,public menuCtrl:MenuController) {
    this.userDetails=JSON.parse(localStorage.getItem('logindetail'));                 
              if(this.userDetails){
                  this.contactNumber=this.userDetails[0].json.data.mobile;    
                  this.currentDate = moment(new Date()).format("DD-MM-YYYY");   
                  this.currentTime = moment(new Date()).format("HH:mm");          
              }
              this.loadUserPreference();
    this.getSimData()
  }
   async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        for(var sim of this.cards){
          this.simName=sim.carrierName;
        }
        console.log(simData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  history(){
    this.navCtrl.push(HistoryPage);

  }

  preference(){
    this.navCtrl.push(PreferencePage);

  }

  dnd(){
    this.navCtrl.push(DndPage);

  }

  complaints(){
    this.navCtrl.push(ComplaintsPage);

  }

  complaintsStatus(){
    this.navCtrl.push(ComplaintsstatusPage);

  }

  ionViewDidEnter(){
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
loadUserPreference() {    
  
              var url = this.setupservice.basePath +'/getUserPrefrence'
              var postData = {
                              "mobile":this.contactNumber
                             }
                           
              this.setupservice.PostRequest(url,postData).subscribe((response)=>{
                
                var response = JSON.parse(response[0].json._body);
                this.preferenceItem = response.data[response.data.length-1].preference;
                if((response.data[response.data.length-1].preference.find((element)=>{
                      return  element.type==8;
                  })))
                {
                   this.activeDnd=true;
                  console.log("this.preferenceItem DND :::::::::::",this.preferenceItem)
                  var index = this.preferenceItem.findIndex(element=>{
                    return element.type == 8
                  }) 
                  if(index>=0)
                  {
                 this.activeDnd=true;                 
                 
                 }            
                }
                else{
                
                }
                // preferenceDetail.tourism
              })
  }
  

}
