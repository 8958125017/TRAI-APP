import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Contacts } from '@ionic-native/contacts';
import { CallLog } from '@ionic-native/call-log';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
//import { AddcontactPage } from '../pages/addcontact/addcontact';
//import { MessagelistPage } from '../pages/messagelist/messagelist';
import { FirstCapsPipe } from '../pipe/pipe';
import { UserData } from '../providers/user-data';
import { SetupService } from '../services/setup.service';
import { ConferenceData } from '../providers/conference-data';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { SettingPage } from '../pages/setting/setting';
import { DiscoverPage } from '../pages/discover/discover';
import { HistoryPage } from '../pages/history/history';
import { PreferencePage } from '../pages/preference/preference';
import { ComplaintsPage} from '../pages/complaints/complaints';
import { ComplaintsstatusPage} from '../pages/complaintsstatus/complaintsstatus';
import { DndPage} from '../pages/dnd/dnd';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { FrauddetailsPage } from '../pages/frauddetails/frauddetails';
import { DatePicker } from '@ionic-native/date-picker';
import { OtpReceivePage } from '../pages/otp-receive/otp-receive';
import { PreferenceModalPage } from '../pages/preference-modal/preference-modal';
@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    // HomePage,
    // ListPage,
    // AddcontactPage,
    // MessagelistPage,
    FirstCapsPipe,
    DashboardPage,
    MyprofilePage,
    SettingPage,
    DiscoverPage,
    HistoryPage,
    PreferencePage,
    ComplaintsPage,
    ComplaintsstatusPage,
    DndPage,
    UserDetailPage,
    FrauddetailsPage,
    OtpReceivePage,
    PreferenceModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
       { component: RegisterPage, name: 'RegisterPage', segment: 'register' },
        // { component: HomePage, name: 'HomePage', segment: 'home' },
        // { component: ListPage, name: 'ListPage', segment: 'list' },
        { component: DashboardPage, name: 'DashboardPage', segment: 'dashboard' },
        { component: MyprofilePage, name: 'MyprofilePage', segment: 'myprofile' },
        { component: SettingPage, name: 'SettingPage', segment: 'setting' },
        { component: DiscoverPage, name: 'DiscoverPage', segment: 'discover' },
        { component: HistoryPage, name: 'HistoryPage', segment: 'history' },
        { component: PreferencePage, name: 'PreferencePage', segment: 'preference' },
        { component: ComplaintsPage, name: 'ComplaintsPage', segment: 'complaints' },
        { component: ComplaintsstatusPage,name:'ComplaintsstatusPage',segment:'complaintsstatus'},
        { component: DndPage,name:'DndPage',segment:'dnd'},
        { component: UserDetailPage,name:'UserDetailPage',segment:'userdetail'},
        { component: FrauddetailsPage,name:'FrauddetailsPage',segment:'frauddetail'},
        { component: OtpReceivePage,name:'OtpReceivePage',segment:'otpreceive'},
        { component: PreferenceModalPage, name: 'PreferenceModalPage', segment: 'preference-modal'},
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    // HomePage,
    // ListPage,
    //MessagelistPage,
    //AddcontactPage,
    DashboardPage,
    MyprofilePage,
    SettingPage,
    DiscoverPage,
    HistoryPage,
    PreferencePage,
    ComplaintsPage,
    ComplaintsstatusPage,
    DndPage,
    UserDetailPage,
    FrauddetailsPage,
    OtpReceivePage,
    PreferenceModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
        provide: ErrorHandler,
        useClass: IonicErrorHandler
    },
    InAppBrowser,
    Network,
     CallNumber,
       AndroidPermissions,
    Contacts,
    CallLog,
    UserData,
    ConferenceData,
    SetupService,
    DatePicker

  ]
})
export class AppModule {}
