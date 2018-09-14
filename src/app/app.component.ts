import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, AlertController,App,Nav, Platform,LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { SettingPage } from '../pages/setting/setting';
import { DiscoverPage } from '../pages/discover/discover';
import { HistoryPage } from '../pages/history/history';
import { PreferencePage } from '../pages/preference/preference';
import { ComplaintsPage} from '../pages/complaints/complaints';
import { ComplaintsstatusPage} from '../pages/complaintsstatus/complaintsstatus';
import { UserData } from '../providers/user-data';
import { RegisterPage } from '../pages/register/register';
import { MapPage } from '../pages/map/map';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Network } from '@ionic-native/network';
import { SetupService } from '../services/setup.service';
import { HomePage } from '../pages/home/home';
import { DndPage } from '../pages/dnd/dnd';
export interface PageInterface {
  title: string;
  name: string;
  component: any;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
 
}

@Component({
 templateUrl: 'app.html'
})
export class MyApp {
   emailId?:any;
   userEmail?:any;
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  
  pages: PageInterface[] = [
    { title: 'Dashboard', name: 'DashboardPage', component: DashboardPage},
    { title: 'History', name: 'HistoryPage', component: HistoryPage },
    { title: 'DND', name: 'DndPage', component: DndPage },
    { title: 'Preference', name: 'PreferencePage', component: PreferencePage},
    { title: 'Complaints', name: 'ComplaintsPage', component: ComplaintsPage},
    { title: 'Complaints Status', name: 'ComplaintsstatusPage', component: ComplaintsstatusPage},
    { title: 'My Profile', name: 'MyprofilePage', component: MyprofilePage },
    { title: 'Map', name: 'MapPage', component: MapPage },
    { title: 'Discover', name: 'DiscoverPage', component: DiscoverPage }
  ];
  others: PageInterface[] = [
   { title: 'Setting', name: 'SettingPage', component: '' },
    { title: 'Privacy policy', name: 'DashboardPage', component: ''},
    { title: 'Terms & condition', name: 'HistoryPage', component: '' },
    { title: 'Help and feedback', name: 'PreferencePage', component: ''},
    { title: 'About TRAI', name: 'ComplaintsPage', component: ''},
    { title: 'Version 1.0.0', name: 'ComplaintsstatusPage', component: ComplaintsstatusPage},
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public  app: App,public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    public network: Network,
    public _setupService: SetupService
  ) {
   this.registerBackButtonAction();
    // Check if the user has already seen the tutorial
    var isLogin=localStorage.getItem('hasSeenTutorial');
        if (isLogin) {
          this.rootPage = DashboardPage;
        } else {
          this.rootPage = RegisterPage;
        }
        
      this.platform.ready().then(() => {
          this.statusBar.overlaysWebView(false);
          this.statusBar.backgroundColorByHexString('#0000FF');
          this.splashScreen.hide();          
              this._setupService.initializeNetworkEvents();
                 // Offline event
              this.events.subscribe('network:offline', () => {
                localStorage.setItem('NetworkStatus',"offline");               
                  this.nav.push(HomePage);               
              });

             // Online event
              this.events.subscribe('network:online', () => {
                var compName=localStorage.getItem('cmpName');            
                  localStorage.removeItem("NetworkStatus");   
                 if(compName == "RegisterPage"){
                   this.nav.setRoot(RegisterPage);
                 }else{               
                   this.nav.setRoot(compName); 
                }                 
              });
    });

    // load the conference data
   

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();
     events.subscribe('shareObject', (userData) => {       
       localStorage.setItem('userprofileEmailId',JSON.stringify(userData));
       this.userEmail=JSON.parse(localStorage.getItem('userprofileEmailId')); 
       this.emailId=this.userEmail;
  }); 
  }

  registerBackButtonAction(){
    this.platform.registerBackButtonAction(() => { 
                let nav = this.app.getActiveNavs()[0];
                let activeView = nav.getActive();
                if(activeView.name === "DashboardPage" || activeView.name === "RegisterPage") { 
                    if (nav.canGoBack()){ //Can we go back?
                        nav.pop();
                    } else {
                        const alert = this.alertCtrl.create({
                            title: 'App termination',
                            message: 'Do you want to close the app?',
                            buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Application exit prevented!');
                                }
                            },{
                                text: 'Close App',
                                handler: () => {
                                    this.platform.exitApp(); // Close this application
                                }
                            }]
                        });
                        alert.present();
                    }
                }else{
                  this.nav.push(DashboardPage);
                }
            });
}

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      
      this.nav.setRoot(page.component, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
    
    // if(page.component == DashboardPage){
    //   this.nav.setRoot(DashboardPage);
    // } else {
    //   this.nav.push(page.component);
    // }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      let loading = this.loadingCtrl.create({
       content: 'Logout please wait...'
      }); 
    loading.present();
    localStorage.removeItem("logindetail");
    localStorage.removeItem("hasSeenTutorial");
    setTimeout(()=>this.welcomeToBack(),
      loading.dismiss()
      ,1000)
      
    }
  }

  logout(){
          localStorage.removeItem("logindetail");
          localStorage.removeItem("hasSeenTutorial");
          localStorage.clear();
     this.nav.setRoot(RegisterPage);
  }
   welcomeToBack(){    
     this.nav.setRoot(RegisterPage);
   }

  // openTutorial() {
  //   this.nav.setRoot(TutorialPage);
  // }
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}

