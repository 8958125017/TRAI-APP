webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_history_history__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_preference_preference__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_complaints_complaints__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_complaintsstatus_complaintsstatus__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dnd_dnd__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    DashboardPage.prototype.history = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_history_history__["a" /* HistoryPage */]);
    };
    DashboardPage.prototype.preference = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_preference_preference__["a" /* PreferencePage */]);
    };
    DashboardPage.prototype.dnd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_dnd_dnd__["a" /* DndPage */]);
    };
    DashboardPage.prototype.complaints = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_complaints_complaints__["a" /* ComplaintsPage */]);
    };
    DashboardPage.prototype.complaintsStatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */]);
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/dashboard/dashboard.html"*/`<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n    </button>\n    <!-- <ion-icon name="menu"><img menuToggle src="../assets/icon/menu.png" alt=""></ion-icon> -->\n\n    <ion-title>\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <!-- Calls Start -->\n    <ion-row>\n      <ion-col col-6 class="trai-dash-head">Dashboard</ion-col>\n      <ion-col col-6 class="trai-dash-sim">SIM:\n        <span>1 Vodafone</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row (click)="history()">\n      <ion-col col-12 class="trai-c-a" padding-0>\n        <ion-grid class="trai-grid-c">\n          <ion-row>\n            <ion-col col-2 class="trai-img-a">\n              <div class="trai-img-ab">\n                <img src="assets/icon/calls-sms.png" />\n              </div>\n            </ion-col>\n            <ion-col col-10 class="trai-text-a">\n\n              <ion-row>\n                <ion-col col-8 style="padding: 0px;">\n                  <div class="trai-cal-h3">\n                    <span>Last 30 days</span>\n                  </div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="trai-cal-span">\n                    3\n                    <span>\n                      <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon> 2%</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-5 no-padding>\n                  <small class="trai-cal-phone">\n                    <ion-icon class=" icon icon-md ion-ios-call-outline" name="ios-call-outline" role="img" aria-label="call outline" ng-reflect-name="ios-call-outline"></ion-icon>&nbsp;+91 7273099884</small>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                  <small class="trai-cal-phone">\n                    <ion-icon class="icon-default-color icon icon-md ios-calendar-outline" name="ios-calendar-outline" role="img" aria-label="calendar outline"\n                      ng-reflect-name="ios-calendar-outline"></ion-icon>&nbsp; 10-08-2018</small>\n                </ion-col>\n                <ion-col col-3 no-padding>\n                  <small class="trai-cal-phone">\n                    <img style="width: 20%;" src="assets/icon/recive.png" alt="">&nbsp;1:30m</small>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <!-- Calls END -->\n    <!-- DND Start -->\n\n    <ion-row padding-top (click)="dnd()">\n      <ion-col col-12 class="trai-c-a" padding-0>\n        <ion-grid class="trai-grid-c">\n          <ion-row>\n            <ion-col col-2 class="trai-dnd-a">\n              <div class="trai-img-ab">\n                <img src="assets/icon/dnd.png" />\n              </div>\n            </ion-col>\n            <ion-col col-10 class="trai-text-a">\n\n              <ion-row>\n                <ion-col col-8 style="padding: 0px;">\n                  <div class="trai-cal-h3">\n                    <span>DND</span>\n                  </div>\n                </ion-col>\n                <ion-col col-4 no-padding text-right>\n                  <small class="trai-active-d">Active DND</small>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n\n                <ion-col col-8 no-padding>\n                  <small class="trai-dnd-small">\n                    <ion-icon class="icon-default-color icon icon-md ion-ios-clock-outline" name="ios-clock-outline" role="img" aria-label="clock outline"\n                      ng-reflect-name="ios-clock-outline"></ion-icon>&nbsp;\n                    <b>From</b>\n                    <span>07:30PM</span>\n                    <b>To</b>\n                    <span>12:00AM</span>\n                  </small>\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <!-- DND END -->\n\n    <!-- Complaint Start -->\n\n    <ion-row padding-top (click)="complaints()">\n      <ion-col col-12 class="trai-c-a" padding-0>\n        <ion-grid class="trai-grid-c">\n          <ion-row>\n            <ion-col col-2 class="trai-complaints-a">\n              <div class="trai-img-ab">\n                <img src="assets/icon/complaints.png" />\n              </div>\n            </ion-col>\n            <ion-col col-10 class="trai-text-a">\n\n              <ion-row>\n                <ion-col col-12 style="padding: 0px;">\n                  <div class="trai-cal-h3">\n                    <span>Complaints</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 no-padding>\n                  <small class="trai-comp-t">Report Call | Report SMS</small>\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <!-- Complaint END -->\n    <!-- Complaint status Start -->\n\n    <ion-row padding-top (click)="complaintsStatus()">\n      <ion-col col-12 class="trai-c-a" padding-0>\n        <ion-grid class="trai-grid-c">\n          <ion-row>\n            <ion-col col-2 class="trai-complaints-status-a">\n              <div class="trai-img-ab">\n                <img src="assets/icon/complaints-status.png" />\n              </div>\n            </ion-col>\n            <ion-col col-10 class="trai-text-a">\n\n              <ion-row>\n                <ion-col col-12 style="padding: 0px;">\n                  <div class="trai-cal-h3">\n                    <span>Complaints Status</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-8 no-padding>\n                  <small class="trai-comp-t">\n                    <b>Last Complaint URN:</b> # - - - - -.</small>\n                </ion-col>\n                <ion-col col-4 no-padding>\n                  <small class="trai-comp-t">Pending</small>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <!-- Complaint status END -->\n\n    <!-- preference Start -->\n\n    <ion-row padding-top (click)="preference()">\n      <ion-col col-12 class="trai-c-a" padding-0>\n        <ion-grid class="trai-grid-c">\n          <ion-row>\n            <ion-col col-2 class="trai-preference-a">\n              <div class="trai-img-ab">\n                <img src="assets/icon/preference.png" />\n              </div>\n            </ion-col>\n            <ion-col col-10 class="trai-text-a">\n\n              <ion-row>\n                <ion-col col-12 style="padding: 0px;">\n                  <div class="trai-cal-h3">\n                    <span>Preference</span>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 no-padding>\n                  <small class="trai-comp-t">\n                    <b>Preference Registered:</b>\n                    <span>Tourism, Health.... view</span>\n                  </small>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <!-- preference END -->\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_detail_user_detail__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var HistoryPage = (function () {
    function HistoryPage(navCtrl, loadingCtrl, androidPermissions, device, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.androidPermissions = androidPermissions;
        this.device = device;
        this.platform = platform;
        this.navParams = navParams;
        this.section = 'one';
        this.messages = [];
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.callLog();
        this.checkPermission();
    }
    HistoryPage.prototype.callLog = function () {
        var loading = this.loadingCtrl.create({
            content: 'Loading call logs please wait...',
            duration: 15000,
        });
        loading.present();
        this.mobileId = JSON.parse(this.device.uuid);
        //  alert("this.mobileId = = "+JSON.stringify(this.mobileId));
        loading.dismiss();
        //alert("this.device.uuid "+JSON.stringify(this.mobileId));
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            //if permission granted
            _this.ReadSMSList();
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                _this.ReadSMSList();
            }, function (err) {
                console.log("error");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    HistoryPage.prototype.ReadSMSList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading sms logs please wait...',
            duration: 15000,
        });
        loading.present();
        this.platform.ready().then(function (readySource) {
            var filter = {
                box: 'inbox',
                indexFrom: 0,
                maxCount: 100,
            };
            if (SMS)
                SMS.listSMS(filter, function (ListSms) {
                    loading.dismiss();
                    _this.messages = ListSms;
                    //   alert("this.messages = = "+JSON.stringify(this.messages));
                }, function (Error) {
                    console.log(JSON.stringify(Error));
                    return false;
                });
        });
    };
    HistoryPage.prototype.getuserInfo = function (num) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_user_detail_user_detail__["a" /* UserDetailPage */]);
    };
    HistoryPage.prototype.report = function (number) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_user_detail_user_detail__["a" /* UserDetailPage */], { num: number });
    };
    HistoryPage.prototype.reportCall = function (number, date, duration, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_user_detail_user_detail__["a" /* UserDetailPage */], { 'num': number, 'date': date, 'duraton': duration, 'typeCall': type });
    };
    HistoryPage.prototype.reportSms = function (number) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_user_detail_user_detail__["a" /* UserDetailPage */], { objAddress: number });
        // this.navCtrl.setRoot(UserDetailPage,{'num': 'objCall.phoneNumber','date':'objCall.date','duraton':'objCall.duration','typeCall':'objCall.type'}); 
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/history/history.html"*/`<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n    </button>\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n    <ion-title>\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n    </ion-title>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n\n  <!-- Header start -->\n  <ion-grid class="trai-my-head">\n    <ion-row>\n      <ion-col col-12 class="trai-pref-head" no-padding>\n        <div class="trai-head-img">\n          <img src="assets/icon/calls-sms.png" />\n        </div>\n        <div class="trai-head-text">\n            <span>Last 30 days Calls & SMS Variation</span>\n        </div>\n        <div class="trai-line"></div>\n        <ion-grid>\n          <ion-row class="trai-pref-c">\n            <ion-col col-12>\n              <div class="call-head">\n                <span class="trai-my-head-a"> 30 days Calls</span>\n                <span class="trai-my-head-b">\n                  <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon> 2% Spam\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Header end -->\n\n  <ion-grid class="trai-cal-cont">\n    <ion-toolbar padding color="light" mode="md" class="tool-custom" style=" margin-top: 15px;   border-radius: 35px;\n  background: #fff; padding: 0;min-height:0;">\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n        <ion-segment-button active value="one" (click)="callLog()">\n          Call\n        </ion-segment-button>\n        <ion-segment-button value="two" (click)="checkPermission()">\n          SMS\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n\n\n  <ion-card>\n\n    <ion-card-content no-padding>\n      <!-- Add card content here! -->\n      <div [ngSwitch]="section">\n        <ion-list *ngSwitchCase="\'one\'" inset>\n          <ion-item ion-item class="trai-cal-data-a" *ngFor="let d of mobileId">\n            <ion-row>\n              <ion-col col-6>\n                <small>\n                  <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;{{d.phoneNumber}}</small>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <small>\n                  <ion-icon class="icon-default-color" name="ios-trending-up-outline"></ion-icon>&nbsp;{{d.callDuration}}</small>\n              </ion-col>\n            </ion-row>\n            <ion-row class="trai-cont-set">\n              <ion-col col-4>\n                <small>\n                  <img style="width: 10px; display: inline;" src="assets/icon/outgoing.svg" alt="">&nbsp;{{d.type}}</small>\n              </ion-col>\n              <ion-col col-4>\n                <small>\n                  <ion-icon class="icon-default-color" name="ios-clock-outline"></ion-icon>&nbsp;{{d.date | date:\'dd/MM/yyyy\'}}</small>\n              </ion-col>\n              <ion-col col-4  text-right (click)="reportCall(d.phoneNumber,d.date,d.callDuration,d.type)">\n                  <small>\n                    <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper" (click)="report(d)"></ion-icon>&nbsp;Report</small>\n                </ion-col>\n\n            </ion-row>\n          </ion-item>\n          \n          \n          \n          \n\n\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'two\'" inset>\n          \n          <ion-item ion-item *ngFor="let x of messages">\n              <ion-row>\n                <ion-col style="font-size: 12px;">\n                  {{x.address}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row style="font-size:14px;">\n                <ion-col col-6>\n                  <small>\n                    <ion-icon class="icon-default-color" ios="ios-text" md="md-text"></ion-icon>&nbsp;{{(x.body | slice:0:22)+"..."}}</small>\n                </ion-col>\n                <ion-col col-3 (click)="reportSms(x.address)">\n                  <small>\n                    <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper"></ion-icon>&nbsp;Report</small>\n                </ion-col>\n                <ion-col col-3>\n                  <small>\n                    <ion-icon class="icon-default-color" name="ios-clock-outline"></ion-icon>&nbsp;{{x.date | date:\'dd/MM/yyyy\'}}</small>\n                </ion-col>\n\n              </ion-row>\n            </ion-item>\n            \n\n        </ion-list>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n</ion-grid>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/history/history.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencePage = (function () {
    function PreferencePage(navCtrl, toastCtrl, modalCtrl, platform, navParams, setupservice, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.setupservice = setupservice;
        this.loadingCtrl = loadingCtrl;
        this.tourism = false;
        this.banking = false;
        this.real = false;
        this.education = false;
        this.health = false;
        this.consumer = false;
        this.communication = false;
        this.dnd = false;
        this.info = {};
        this.preferenceDetailsInfo = [];
        this.preferenceDetail = {
            tourism: { type: false, time: false, day: false, priority: false },
            banking: { type: false, time: 0, day: 0, priority: 0 },
            education: { type: false, time: 0, day: 0, priority: 0 },
            health: { type: false, time: 0, day: 0, priority: 0 },
            consumer: { type: false, time: 0, day: 0, priority: 0 },
            communication: { type: false, time: 0, day: 0, priority: 0 },
            dnd: { type: false, time: 0, day: 0, priority: 0 }
        };
        this.preferenceItem = [];
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userDetails = JSON.parse(localStorage.getItem('logindetail'));
        if (this.userDetails) {
            this.contactNumber = this.userDetails[0].json.data.mobile;
        }
    }
    PreferencePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PreferencePage');
        var url = this.setupservice.basePath + '/getUserPrefrence';
        var postData = { "mobile": this.contactNumber };
        console.log("111111111111111111111111111111111111", url, postData);
        this.setupservice.PostRequest(url, postData).subscribe(function (response) {
            console.log("prefrences:::::::::::::::::::::::::", response = JSON.parse(response[0].json._body));
            console.log("response:::::::::::::::::::111111111111", _this.preferenceItem = response.data[response.data.length - 1].preference
            // this.preferenceItem = []
            );
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 1;
            }))) {
                _this.preferenceDetail.tourism.type = true;
            }
            else
                _this.preferenceDetail.tourism.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 2;
            }))) {
                _this.preferenceDetail.banking.type = true;
            }
            else
                _this.preferenceDetail.banking.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 3;
            }))) {
                _this.preferenceDetail.education.type = true;
            }
            else
                _this.preferenceDetail.education.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 4;
            }))) {
                _this.preferenceDetail.health.type = true;
            }
            else
                _this.preferenceDetail.health.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 5;
            }))) {
                _this.preferenceDetail.consumer.type = true;
            }
            else
                _this.preferenceDetail.consumer.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 6;
            }))) {
                _this.preferenceDetail.communication.type = true;
            }
            else
                _this.preferenceDetail.communication.type = false;
            if ((response.data[response.data.length - 1].preference.find(function (element) {
                return element.type == 7;
            }))) {
                _this.preferenceDetail.dnd.type = true;
            }
            else
                _this.preferenceDetail.dnd.type = false;
            // preferenceDetail.tourism
        });
    };
    PreferencePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    PreferencePage.prototype.checkBoxModal = function (data) {
        var indexed = this.preferenceItem.findIndex(function (element) {
            return element.type == data;
        });
        if (indexed >= 0) {
            this.preferenceItem.splice(indexed, 1);
        }
        else
            this.openModal(data);
        console.log("--------------------------------checkModal", this.preferenceItem);
    };
    PreferencePage.prototype.dndFunction = function (val) {
        this.preferenceItem = val;
    };
    PreferencePage.prototype.submit = function () {
        var _this = this;
        if (!this.preferenceItem) {
            var toast = this.toastCtrl.create({
                message: 'Please select at least one preference!',
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000
            });
            toast.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'preference submiting please wait...',
                duration: 15000,
            });
            loading_1.present();
            var postData = {
                mobile: this.contactNumber,
                data: {
                    preference: this.preferenceItem
                }
            };
            var url = this.setupservice.basePath + '/userPrefrence';
            this.setupservice.PostRequest(url, postData).subscribe(function (response) {
                loading_1.dismiss();
                if (response[0].json.status === 200) {
                    var toast = _this.toastCtrl.create({
                        message: "preference submitted successfully!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.ionViewDidLoad();
                    // this.preferenceDetail.tourism=false;
                    // this.preferenceDetail.banking=false;
                    // this.preferenceDetail.education=false;
                    // this.preferenceDetail.health=false;
                    // this.preferenceDetail.consumer=false;
                    // this.preferenceDetail.communication=false;
                    // this.preferenceDetail.dnd=false;
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "something went wrong!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
        console.log("this.preferenceDetailsInfo = = " + JSON.stringify(this.preferenceDetailsInfo));
    };
    PreferencePage.prototype.openModal = function (data) {
        var _this = this;
        console.log("open modal::::::", data);
        // var data = { message : 'hello world' };
        var modal = this.modalCtrl.create('PreferenceModalPage', { type: data });
        // let modal = this.modalCtrl.create(PreferenceModalPage, { 
        //   'prop': 'prop1', 
        //   onFeedBack: (data) => {
        //   }
        // }
        // );
        modal.onDidDismiss(function (data) {
            console.log("data:::::::::", data.type);
            var item = data.type;
            var index = _this.preferenceItem.findIndex(function (element) {
                return element.type == item;
            });
            console.log("index:::", index);
            if (index >= 0) {
                console.log("pop in modal");
                _this.preferenceItem.splice(index, 1);
            }
            else {
                console.log("push in modal");
                _this.preferenceItem.push(data);
            }
            console.log("--------------------------------------------", JSON.stringify(_this.preferenceItem));
        });
        modal.present().then(function (result) {
            // console.log("result::::::",result)
        });
    };
    PreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preference',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/preference/preference.html"*/`<!--\n  Generated template for the PreferencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n    </button>\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n    <ion-title>\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding-top>\n  <!-- Header start -->\n  <ion-grid class="trai-my-head">\n    <ion-row>\n      <ion-col col-12 class="trai-pref-head" no-padding>\n        <div class="trai-head-img">\n          <img src="assets/icon/preference.png" />\n        </div>\n        <div class="trai-head-text">\n          <span>Preference</span>\n        </div>\n        <div class="trai-line"></div>\n        <ion-grid>\n          <ion-row>\n            <div class="scrollmenu">\n              <span style="color: #32ff7e; font-weight: 300;" *ngIf="preferenceDetail.tourism.type">\n                <img style="width: 15px;" src="assets/icon/wintergreen-coin.svg" /> Tourism</span>\n              <span style="color: #18dcff; font-weight: 300;" *ngIf="preferenceDetail.banking.type">\n                <img style="width: 15px;" src="assets/icon/neon-blue-coin.svg" /> Banking/Insurance/Financial Products/ Credit Cards</span>\n              <span style="color: #fd9644; font-weight: 300;" *ngIf="preferenceDetail.education.type">\n                <img style="width: 15px;" src="assets/icon/orange-coin.svg" /> Education</span>\n              <span style="color: #26de81; font-weight: 300;" *ngIf="preferenceDetail.health.type">\n                <img style="width: 15px;" src="assets/icon/l-green-coin.svg" /> Health</span>\n              <span style="color:  #a55eea; font-weight: 300;" *ngIf="preferenceDetail.consumer.type">\n                <img style="width: 15px;" src="assets/icon/purple-coin.svg" /> Consumer Goods and Automobile</span>\n              <span style="color: #0fb9b1; font-weight: 300;" *ngIf="preferenceDetail.communication.type">\n                <img style="width: 15px;" src="assets/icon/bright-coin.svg" /> Communication/Broadcasting/Entertainment/IT</span>\n              <span style="color: #FC5C65; font-weight: 300;" *ngIf="preferenceDetail.dnd.type">\n                <img style="width: 15px;" src="assets/icon/red-coin.svg" /> DND</span>\n            </div>\n          </ion-row>\n        </ion-grid>\n        <!-- <ion-grid>\n          <ion-row class="trai-pref-c">\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.tourism">\n              <div class="coin">\n\n                <span>Tourism</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.banking">\n              <div class="coin">\n\n                <span>Banking</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.education">\n              <div class="coin">\n\n                <span>Education</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.health">\n              <div class="coin">\n\n                <span>Health</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.consumer">\n              <div class="coin">\n\n                <span>Consumer Goods</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.communication">\n              <div class="coin">\n\n                <span>Communication</span>\n              </div>\n            </ion-col>\n            <ion-col col-4 no-padding *ngIf="preferenceDetail.dnd">\n              <div class="coin">\n\n                <span>DND</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Header end -->\n  <!-- Content start -->\n  <ion-grid class="trai-preference-content">\n    <ion-row>\n      <ion-item class="trai-preference-c-head">\n        <ion-label>Tourism</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.tourism.type" color="secondary" (click)="checkBoxModal(1)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head" (click)="checkBoxModal(2)">\n        <ion-label>Banking/Insurance/Financial Products/ Credit Cards</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.banking.type" color="secondary" (click)="checkBoxModal(2)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head">\n        <ion-label>Education</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.education.type" color="secondary" (click)="checkBoxModal(3)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head">\n        <ion-label>Health</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.health.type" color="secondary" (click)="checkBoxModal(4)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head">\n        <ion-label>Consumer Goods and Automobile</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.consumer.type" color="secondary" (click)="checkBoxModal(5)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head">\n        <ion-label>Communication/Broadcasting/Entertainment/IT</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.communication.type" color="secondary" (click)="checkBoxModal(6)"></ion-checkbox>\n      </ion-item>\n      <ion-item class="trai-preference-c-head" (click)="checkBoxModal(7)">\n        <ion-label>DND</ion-label>\n        <ion-checkbox [(ngModel)]="preferenceDetail.dnd.type" color="secondary" (click)="checkBoxModal(7)"></ion-checkbox>\n      </ion-item>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col col-12 text-center>\n        <button ion-button round (click)="submit()">Submit</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/preference/preference.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PreferencePage);
    return PreferencePage;
}());

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintsPage = (function () {
    function ComplaintsPage(navCtrl, globalservice, androidPermissions, device, loadingCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.globalservice = globalservice;
        this.androidPermissions = androidPermissions;
        this.device = device;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.searchTerm = '';
        this.section = 'one';
        this.messages = [];
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userDetails = JSON.parse(localStorage.getItem('logindetail'));
        if (this.userDetails) {
            this.contactNumber = this.userDetails[0].json.data.mobile;
        }
        this.callLog();
        this.checkPermission();
    }
    ComplaintsPage.prototype.callLog = function () {
        var loading = this.loadingCtrl.create({
            content: 'Loading call logs please wait...',
            duration: 15000,
        });
        loading.present();
        this.mobileId = JSON.parse(this.device.uuid);
        //  alert("this.mobileId = = "+JSON.stringify(this.mobileId));
        loading.dismiss();
        //alert("this.device.uuid "+JSON.stringify(this.mobileId));
    };
    ComplaintsPage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            //if permission granted
            _this.ReadSMSList();
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                _this.ReadSMSList();
            }, function (err) {
                console.log("error");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    ComplaintsPage.prototype.ReadSMSList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading sms logs please wait...',
            duration: 15000,
        });
        loading.present();
        this.platform.ready().then(function (readySource) {
            var filter = {
                box: 'inbox',
                indexFrom: 0,
                maxCount: 100,
            };
            if (SMS)
                SMS.listSMS(filter, function (ListSms) {
                    loading.dismiss();
                    _this.messages = ListSms;
                    //   alert("this.messages = = "+JSON.stringify(this.messages));
                }, function (Error) {
                    console.log(JSON.stringify(Error));
                    return false;
                });
        });
    };
    ComplaintsPage.prototype.getuserInfo = function (num) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__["a" /* UserDetailPage */]);
    };
    ComplaintsPage.prototype.reportCall = function (number, date, duration, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__["a" /* UserDetailPage */], { 'num': number, 'date': date, 'duraton': duration, 'typeCall': type });
    };
    ComplaintsPage.prototype.reportSms = function (number) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__["a" /* UserDetailPage */], { objAddress: number });
    };
    ComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaints',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/complaints/complaints.html"*/`<!--\n\n  Generated template for the ConplaintsstatusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n\n    </button>\n\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n\n\n    <ion-title>\n\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <img class="trai-logout" menuToggle src="assets/icon/logout.png" alt="">\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding-top>\n\n  <!-- Header start -->\n\n  <ion-grid padding-0 class="trai-my-head">\n\n    <ion-row>\n\n      <ion-col col-12 class="trai-pref-head" no-padding>\n\n        <div class="trai-head-img" style="background: #72a4ff;">\n\n          <img src="assets/icon/complaints.png" />\n\n        </div>\n\n        <div class="trai-head-text">\n\n          <span style="color: #72a4ff;">Complaints</span>\n\n        </div>\n\n        <div class="trai-line"></div>\n\n        <ion-grid>\n\n          <ion-row class="trai-pref-c">\n\n            <ion-col col-12>\n\n              <div class="dnd-head">\n\n                <span class="trai-my-head-a" text-center style="color: #747577;">\n\n                  <span (click)="callLog()">Report Calls</span> |\n\n                  <span (click)="smsLog()">Report SMS</span>\n\n                </span>\n\n              </div>\n\n\n\n            </ion-col>\n\n\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Header end -->\n\n  <ion-grid class="trai-my-comp-s">\n\n    <ion-grid class="trai-cal-cont">\n\n      <ion-toolbar padding color="light" mode="md" class="tool-custom" style=" margin-top: 15px;   border-radius: 35px;\n\n      background: #fff; padding: 0;min-height:0;">\n\n        <ion-segment color="dark" mode="md" [(ngModel)]="section">\n\n          <ion-segment-button active value="one" (click)="callLog()" id="pills-home-tab">\n\n            Call\n\n          </ion-segment-button>\n\n          <ion-segment-button value="two" (click)="smsLog()">\n\n            SMS\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </ion-toolbar>\n\n\n\n\n\n\n\n      <ion-card>\n\n\n\n        <ion-card-content no-padding>\n\n          <!-- Add card content here! -->\n\n          <div [ngSwitch]="section">\n\n            <ion-list *ngSwitchCase="\'one\'" inset>\n\n              <ion-item ion-item class="trai-cal-data-a" *ngFor="let d of mobileId">\n\n                <ion-row>\n\n                  <ion-col col-6>\n\n                    <small>\n\n                      <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;+91 {{d.phoneNumber}}</small>\n\n                  </ion-col>\n\n                  <ion-col col-6 text-right>\n\n                    <small>\n\n                      <ion-icon class="icon-default-color" name="ios-trending-up-outline"></ion-icon>&nbsp;{{d.callDuration}}</small>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row class="trai-cont-set">\n\n                  <ion-col col-4>\n\n                    <small>\n\n                      <img style="width: 10px; display: inline;" src="assets/icon/outgoing.svg" alt="">&nbsp;{{d.type}}</small>\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <small>\n\n                      <ion-icon class="icon-default-color" name="ios-clock-outline"></ion-icon>&nbsp;{{d.date | date:\'dd/MM/yyyy\'}}</small>\n\n                  </ion-col>\n\n                  <ion-col col-4 text-right (click)="reportCall(d.phoneNumber,d.date,d.callDuration,d.type)">\n\n                    <small>\n\n                      <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper"></ion-icon>&nbsp;Report</small>\n\n                  </ion-col>\n\n\n\n                </ion-row>\n\n              </ion-item>\n\n              \n\n\n\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'two\'" inset>\n\n              <ion-item ion-item *ngFor="let x of messages">\n\n                <ion-row>\n\n                  <ion-col style="font-size: 12px;">\n\n                     {{x.address}}\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row style="font-size:14px;">\n\n                  <ion-col col-6>\n\n                    <small>\n\n                      <ion-icon class="icon-default-color" ios="ios-text" md="md-text"></ion-icon>&nbsp;{{(x.body | slice:0:22)+"..."}}</small>\n\n                  </ion-col>\n\n                  <ion-col col-3 (click)="reportSms(x.address)">\n\n                    <small>\n\n                      <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper" ></ion-icon>&nbsp;Report</small>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <small>\n\n                      <ion-icon class="icon-default-color" name="ios-clock-outline"></ion-icon>&nbsp;{{x.date | date:\'dd/MM/yyyy\'}}</small>\n\n                  </ion-col>\n\n\n\n                </ion-row>\n\n              </ion-item>              \n\n\n\n            </ion-list>\n\n          </div>\n\n        </ion-card-content>\n\n\n\n      </ion-card>\n\n    </ion-grid>\n\n    <!-- <ion-searchbar padding-top class="trai-my-search" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar> -->\n\n\n\n\n\n    <!-- <ion-card *ngFor="let item of items">\n\n\n\n        <ion-card-content (click)="getuserInfo(item.title)">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12> <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6><ion-icon class="icon-default-color" name="ios-calendar-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{item.date}}</ion-col>\n\n              <ion-col col-6 text-right>{{item.log}}</ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n\n\n    <!-- Ion card comment start -->\n\n    <!-- <ion-card class="card card-md" *ngFor="let item of items">\n\n      <ion-item ion-item class="trai-cal-data-a" (click)="getuserInfo(item.title)">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <small>\n\n              <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;+91 7273099884\n\n            </small>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="trai-cont-set">\n\n          <ion-col col-4>\n\n            <small>\n\n              <ion-icon class="icon-default-color" name="ios-calendar-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;05-08-2018\n\n            </small>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <small>\n\n              Duration:\n\n              <span>5 min</span>\n\n            </small>\n\n          </ion-col>\n\n          <ion-col col-4 text-right>\n\n            <small>\n\n              <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper"></ion-icon>&nbsp;Report\n\n            </small>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item ion-item class="trai-cal-data-a" (click)="getuserInfo(item.title)">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <small>\n\n              <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;+91 7273099884</small>\n\n          </ion-col>\n\n          <ion-col col-6 text-right>\n\n            <small>\n\n              <ion-icon class="icon-default-color" name="ios-trending-up-outline"></ion-icon>&nbsp;1:30m</small>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="trai-cont-set">\n\n          <ion-col col-4>\n\n            <small>\n\n              <img style="width: 10px; display: inline;" src="assets/icon/outgoing.svg" alt="">&nbsp;Outgoing</small>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <small>\n\n              <ion-icon class="icon-default-color" name="ios-clock-outline"></ion-icon>&nbsp;20-08-2018</small>\n\n          </ion-col>\n\n          <ion-col col-4 text-right>\n\n            <small>\n\n              <ion-icon style=" color: #15488a;" ios="ios-paper" md="md-paper"></ion-icon>&nbsp;Report</small>\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-grid class="trai-cal-cont">\n\n        <ion-toolbar padding color="light" mode="md" class="tool-custom" style=" margin-top: 15px;   border-radius: 35px;\n\n          background: #fff; padding: 0;min-height:0;">\n\n          <ion-segment color="dark" mode="md" [(ngModel)]="section">\n\n            <ion-segment-button active value="one" (click)="callLog()">\n\n              Call\n\n            </ion-segment-button>\n\n            <ion-segment-button value="two" (click)="smsLog()">\n\n              SMS\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </ion-toolbar>\n\n      </ion-grid>\n\n\n\n    </ion-card> -->\n\n\n\n    <!-- comment ion card -->\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/complaints/complaints.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ComplaintsPage);
    return ComplaintsPage;
}());

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrauddetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FrauddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrauddetailsPage = (function () {
    function FrauddetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FrauddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrauddetailsPage');
    };
    FrauddetailsPage.prototype.complain = function () {
    };
    FrauddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frauddetails',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/frauddetails/frauddetails.html"*/`<!--\n\n  Generated template for the FrauddetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>frauddetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-card padding class="product-history-card font-15" >          \n\n          <ion-row >\n\n            pankaj joshi               \n\n          </ion-row> \n\n          <ion-row >\n\n           +917042110436               \n\n          </ion-row> \n\n          <ion-row >\n\n          New Delhi               \n\n          </ion-row>                                    \n\n</ion-card> \n\n\n\n<ion-row padding-top  text-center>\n\n         <ion-col col-12 text-center > \n\n        	<button ion-button round>Complain</button>\n\n         </ion-col>\n\n</ion-row> \n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/frauddetails/frauddetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FrauddetailsPage);
    return FrauddetailsPage;
}());

//# sourceMappingURL=frauddetails.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var SetupService = (function () {
    function SetupService(http, network, eventCtrl) {
        this.http = http;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.http = http;
        this.previousStatus = ConnectionStatusEnum.Online;
        this.extarsOnLoad();
        this.userList = [{ title: 'pankaj', date: '11/02/2018', log: '10m' }, { title: 'rashid', date: '11/02/2018', log: '10m' }, { title: 'kunvar', date: '11/02/2018', log: '10m' }, { title: 'gaurav', date: '11/02/2018', log: '10m' }, { title: 'akhil', date: '11/02/2018', log: '10m' }, { title: 'sandeep', date: '11/02/2018', log: '10m' }];
    }
    SetupService.prototype.extarsOnLoad = function () {
        this.basePath = "http://103.201.142.41:4011";
        //this.basePath = "http://192.168.0.124:3000";
    };
    SetupService.prototype.PostRequestUnautorized = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](requestoptions))
            .map(function (res) {
            return [{ status: res.status, json: res.json() }];
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.PostRequest = function (url, data, flag) {
        var TOKEN = localStorage.getItem('token');
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("authorization", "jwt " + TOKEN);
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (res) {
            if (res.status == 200) {
                return [{ status: res.status, json: res }];
            }
        })
            .catch(function (error) {
            if (error.status == 401) {
                localStorage.clear();
                //  this.navCtrl.setRoot(LoginPage);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.GetRequest = function (url) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](this.getRequsetOptions(url)))
            .map(function (res) {
            var jsonObj;
            if (res.status === 204) {
                jsonObj = null;
            }
            else {
                jsonObj = res.json();
            }
            return [{ status: res.status, json: jsonObj }];
        })
            .catch(function (error) {
            if (error.status == 0)
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.getRequsetOptions = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Get,
            url: url,
            headers: headers
        });
        return requestoptions;
    };
    // Console Function
    SetupService.prototype.consoleFun = function (a, b, c, d, f, g) {
        // console.log(a, b, c, d, f, g);
    };
    SetupService.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    SetupService.prototype.filterItems = function (searchTerm) {
        return this.userList.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OtpReceivePage = (function () {
    function OtpReceivePage(userData, alertCtrl, fb, platform, toastCtrl, androidPermissions, loadingCtrl, http, _setupService, navCtrl, navParams) {
        var _this = this;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.androidPermissions = androidPermissions;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this._setupService = _setupService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.otpVerifyDetail = {
            contactNumber: "",
            otp: ""
        };
        this.smsArived = function (result) {
            var sms = result.data;
            console.log('sms', sms);
            var sender = sms.address;
            console.log('sender', sender);
            var otp_text = sms.body;
            console.log('OTP', otp_text);
            _this.otpVerifyDetail.otp = otp_text;
            _this.stopWatchSMS();
        };
        this.userDetails = JSON.parse(localStorage.getItem('logindetail'));
        debugger;
        if (this.userDetails) {
            this.otpVerifyDetail.contactNumber = this.userDetails[0].json.data.mobile;
            this.otpVerifyDetail.otp = "";
        }
        document.addEventListener('onSMSArrive', function (e) {
            var sms = e.data;
            console.log("received sms " + JSON.stringify(sms));
            if (sms.address) {
                var otpArray = sms.body.split(':');
                var otp = otpArray[1];
                this.otpVerifyDetail.otp = otp;
                this.stopSMS();
                this.verify_otp();
            }
        });
    }
    OtpReceivePage.prototype.otpFormInit = function () {
        this.otpForm = this.fb.group({
            'otp': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required),
            'contact': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('')
        });
    };
    OtpReceivePage.prototype.verifyOTP = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
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
        var postData = {
            otp: this.otpVerifyDetail.otp,
            mobile: this.otpVerifyDetail.contactNumber
        };
        var url = this._setupService.basePath + '/verify';
        this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.statusCode == 200) {
                var toast = _this.toastCtrl.create({
                    message: response[0].json.message,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
                localStorage.setItem('hasSeenTutorial', "true");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "something went wrong",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
        //  }
    };
    OtpReceivePage.prototype.ngOnInit = function () {
        this.otpFormInit();
        this.otpForm.reset();
    };
    OtpReceivePage.prototype.watchSMS = function () {
        var _scope = this;
        if (window.SMS)
            window.SMS.startWatch(function () {
                console.log('Succeed to start watching SMS');
                document.addEventListener('onSMSArrive', _scope.smsArived);
            }, function () {
                console.log('failed to start watching SMS');
            });
    };
    OtpReceivePage.prototype.stopWatchSMS = function () {
        if (window.SMS)
            window.SMS.stopWatch(function () {
                console.log('Succeed to stop watching SMS');
            }, function () {
                console.log('failed to stop watching SMS');
            });
    };
    OtpReceivePage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'resend otp please wait...',
            duration: 15000,
        });
        loading.present();
        var url = this._setupService.basePath + '/register';
        var postData = {
            mobile: this.otpVerifyDetail.contactNumber,
        };
        this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.statusCode === 200) {
                var toast = _this.toastCtrl.create({
                    message: "otp sent successfully!!",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 2000
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Somthing went wrong!!",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 2000
                });
                toast.present();
            }
        });
    };
    OtpReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp-receive',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/otp-receive/otp-receive.html"*/`<!--\n  Generated template for the OtpReceivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n    <ion-row>\n        <ion-col col-12 style="margin: 0px auto;">\n            <div class="trai-my-otp">\n                <img src="assets/icon/otp-sms.svg">\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n            <div class="trai-otp-head">\n                <ion-title>Enter OTP</ion-title>\n                <p>We have sent you access code\n                    <br>Via SMS for mobile number verification</p>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="trai-form-otp">\n            <form [formGroup]="otpForm">\n                <ion-item>\n                    <!-- <ion-label floating>Enter OTP</ion-label> -->\n                    <ion-input [(ngModel)]="otpVerifyDetail.otp" formControlName="otp" type="number" required placeholder="1   2   3   4   5   6"></ion-input>\n                    <!-- </div> -->\n                </ion-item>\n                <ion-item *ngIf="otpForm.controls.otp.hasError(\'required\') && otpForm.controls.otp.dirty">\n                    <p style="color:red;">OTP is required!</p>\n                </ion-item>\n                <!--  <ion-item *ngIf="otpForm.controls.email.hasError(\'required\') && otpForm.controls.email.dirty">\n             <p style="color:red;">Otp is required!</p>\n        </ion-item> -->\n                <!-- <button class="button-backcolor" ion-button (click)="verifyOTP()" [disabled]="!otpForm.valid" type="submit" block>Verify</button> -->\n                <!-- <button ion-button (click)="checkPermission()">Receive SMS</button> -->\n            </form>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 padding-top>\n            <div class="trai-right-inp">\n                <button class="button-backcolor" ion-button (click)="verifyOTP()" [disabled]="!otpForm.valid" type="submit" block>\n                    <small>\n                  <ion-icon class="icon-default-color" name="arrow-round-forward"></ion-icon></small>\n                </button>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n            <div class="trai-resend">\n                <p>Didn\'t Recevice the OTP?</p>\n                <span><a (click)="login()"> Resend Code</a></span>\n            </div>\n        </ion-col>\n    </ion-row>\n    <p *ngIf="hidevalue==false"> {{maxTime}}</p>\n</ion-content>`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/otp-receive/otp-receive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__services_setup_service__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OtpReceivePage);
    return OtpReceivePage;
}());

//# sourceMappingURL=otp-receive.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DndPage = (function () {
    function DndPage(navCtrl, toastCtrl, datePicker, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.datePicker = datePicker;
        this.platform = platform;
        this.navParams = navParams;
        this.smsTrue = false;
        this.callTrue = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    DndPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DndPage');
    };
    DndPage.prototype.showDateTimePicker = function (event) {
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            event.target.value = date;
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    DndPage.prototype.submit = function () {
        var toast = this.toastCtrl.create({
            message: "submitted successfully!!",
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 3000
        });
        toast.present();
    };
    DndPage.prototype.daily = function () {
        this.smsTrue = true;
        this.callTrue = true;
        var toast = this.toastCtrl.create({
            message: "daily selected!!",
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 3000
        });
        toast.present();
    };
    DndPage.prototype.weekly = function () {
        this.smsTrue = true;
        this.callTrue = true;
        var toast = this.toastCtrl.create({
            message: "weekly  selected!!",
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 3000
        });
        toast.present();
    };
    DndPage.prototype.weekdays = function () {
        this.smsTrue = true;
        this.callTrue = true;
        var toast = this.toastCtrl.create({
            message: "wekdays selected!!",
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 3000
        });
        toast.present();
    };
    DndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dnd',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/dnd/dnd.html"*/`<!--\n  Generated template for the DndPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n    </button>\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n    <ion-title>\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-col col-6 text-center>\n\n  <div class="trai-compiants" (click)="complaintsStatus()">\n    <img src="assets/icon/status.png" alt="">\n    <h4>Complaints\n      <br> Spam\n    </h4>\n  </div>\n</ion-col>\n\n<ion-content padding-top>\n  <!-- Header start -->\n  <ion-grid class="trai-my-head">\n    <ion-row>\n      <ion-col col-12 class="trai-pref-head" no-padding>\n        <div class="trai-head-img" style="background: #4de9c9;">\n          <img src="assets/icon/dnd.png" />\n        </div>\n        <div class="trai-head-text">\n          <span style="color: #4de9c9;">DND</span>\n        </div>\n        <div class="trai-line"></div>\n        <ion-grid>\n          <ion-row class="trai-pref-c">\n            <ion-col col-12>\n              <div class="dnd-head">\n                <span class="trai-my-head-a" style="color: #0bd600;"> Active DND</span>\n                <span class="trai-my-head-b">\n                  <ion-icon ios="ios-time-outline" md="md-time" style="color: #7f828c;"></ion-icon> From 07:30PM To 12:00AM\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Header end -->\n  <ion-grid class="trai-dnd-content">\n    <ion-row>\n      <ion-col col-3 text-center>\n        <button style="border-radius: 25px; background: #72a4ff;" ion-button (click)="daily()">Daily</button>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <button style="border-radius: 25px; background: #4de9c9;" ion-button (click)="weekly()">Weekend</button>\n      </ion-col>\n      <ion-col col-5 text-center>\n        <button style="border-radius: 25px; background: #4de9c9;" ion-button (click)="weekdays()">weekdays</button>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked color="primary">Start</ion-label>\n          <ion-input [(ngModel)]="start_date" type="text" placeholder="Enter start date" readonly="readonly" (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked color="primary">End</ion-label>\n          <ion-input [(ngModel)]="end_date" type="text" placeholder="Enter end date" readonly="readonly" (focus)="$event.stopPropagation(); showDateTimePicker($event)"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-top>\n      <ion-col class="trai-my-checkb" col-6 text-left>\n        <ion-checkbox padding-left checked={{callTrue}}></ion-checkbox>\n        call\n      </ion-col>\n      <ion-col col-6 text-left>\n        <ion-checkbox padding-left checked={{smsTrue}}></ion-checkbox>\n        sms\n      </ion-col>\n    </ion-row>\n    <ion-row padding-top text-center>\n      <ion-col class="trai-my-btn" col-12 text-center>\n        <button ion-button round (click)="submit()">Submit</button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/dnd/dnd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DndPage);
    return DndPage;
}());

//# sourceMappingURL=dnd.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = (function () {
    function MyprofilePage(navCtrl, setupservice, platform, navParams, toastCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.setupservice = setupservice;
        this.platform = platform;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.name = "";
        this.email = "";
        this.nameEdit = false;
        this.emailEdit = false;
        this.dob = "";
        this.dobEdit = false;
        this.profession = "";
        this.professionEdit = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userDetails = JSON.parse(localStorage.getItem('logindetail'));
        if (this.userDetails) {
            this.ids = this.userDetails[0].json.data._id;
        }
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
    };
    MyprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        var postData = {
            _id: this.ids,
        };
        var url = this.setupservice.basePath + '/viewProfile';
        this.setupservice.PostRequest(url, postData).subscribe(function (response) {
            var res = JSON.parse(response[0].json._body);
            if (res.responseCode === 200) {
                _this.name = res.data.name ? res.data.name : 'NA',
                    _this.email = res.data.email ? res.data.email : 'NA',
                    _this.dob = res.data.DOB ? res.data.DOB : 'NA',
                    _this.profession = res.data.profession ? res.data.profession : 'NA',
                    _this.mobile = res.data.mobile ? res.data.mobile : 'NA',
                    _this.ids = res.data._id ? res.data._id : 'NA';
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "something went wrong",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    MyprofilePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    MyprofilePage.prototype.nameEditFunc = function () {
        this.nameEdit = !this.nameEdit;
        console.log(this.nameEdit);
    };
    MyprofilePage.prototype.emailEditFunc = function () {
        this.emailEdit = !this.emailEdit;
        console.log(this.emailEdit);
    };
    MyprofilePage.prototype.dobEditFunc = function () {
        this.dobEdit = !this.dobEdit;
        console.log(this.dobEdit);
    };
    MyprofilePage.prototype.professionEditFunc = function () {
        this.professionEdit = !this.professionEdit;
        console.log(this.professionEdit);
    };
    MyprofilePage.prototype.submit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'profile updating please wait...'
        });
        loading.present();
        var response = {
            name: "",
            email: "",
            dob: "",
            profession: "",
            mobile: "",
            _id: ""
        };
        var postDatas = {
            _id: this.ids,
            name: this.name,
            email: this.email,
            DOB: this.dob,
            profession: this.profession
        };
        var url = this.setupservice.basePath + '/updateUser';
        this.setupservice.PostRequest(url, postDatas).subscribe(function (responses) {
            loading.dismiss();
            var res = JSON.parse(response[0].json._body);
            if (res.responseCode === 200) {
                _this.name = res.data.name;
                _this.email = res.data.email;
                _this.dob = res.data.DOB;
                _this.profession = res.data.profession;
                _this.mobile = res.data.mobile;
                _this.ids = res.data._id;
                var toast = _this.toastCtrl.create({
                    message: "profile updated successfully!",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "something went wrong",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/myprofile/myprofile.html"*/`<!--\n\n  Generated template for the MyprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n\n    </button>\n\n    <ion-title>\n\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n\n    </ion-title>\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list class="rk-menu">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <img src="assets/icon/my-profile.svg" alt="Account" style=" width: 47%; margin-top: 7%;">\n\n      </ion-col>\n\n      <ion-col col-10>\n\n        <h5 style="line-height: 1px;color:#15488a; font-size: 1.8rem; margin-top: 15px;">My Profile</h5>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-list>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>Name</span>\n\n      </ion-col>\n\n      <ion-col col-8 text-left>\n\n         <ion-input type="text" [(ngModel)]="name" readonly  *ngIf="!nameEdit"></ion-input>\n\n         <ion-input type="text" [(ngModel)]="name"  *ngIf="nameEdit"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-1 text-left>\n\n        <img src="assets/icon/edit.svg" alt="" (click)="nameEditFunc()">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>Mobile No</span>\n\n      </ion-col>\n\n      <ion-col col-8 text-left>\n\n       <ion-input type="text" [(ngModel)]="mobile" readonly></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>EmailId</span>\n\n      </ion-col>\n\n      <ion-col col-8 text-left>\n\n        <ion-input type="text" [(ngModel)]="email" readonly  *ngIf="!emailEdit"></ion-input>\n\n        <ion-input type="text" [(ngModel)]="email"  *ngIf="emailEdit"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-1 text-left>\n\n        <img src="assets/icon/edit.svg" alt="" (click)="emailEditFunc()">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>DOB</span>\n\n      </ion-col>\n\n      <ion-col col-8 text-left>\n\n        <ion-input type="text" [(ngModel)]="dob" readonly  *ngIf="!dobEdit"></ion-input>\n\n        <ion-input type="text" [(ngModel)]="dob"  *ngIf="dobEdit"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-1 text-left>\n\n        <img src="assets/icon/edit.svg" alt="" (click)="dobEditFunc()">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>Profession</span>\n\n      </ion-col>\n\n      <ion-col col-8 text-left>\n\n       <ion-input type="text" [(ngModel)]="profession" readonly  *ngIf="!professionEdit"></ion-input>\n\n        <ion-input type="text" [(ngModel)]="profession"  *ngIf="professionEdit"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-1 text-left>\n\n        <img src="assets/icon/edit.svg" alt="" (click)="professionEditFunc()">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card class="product-history-card font-15">\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <span>URN hash</span>\n\n      </ion-col>\n\n      <ion-col col-9 text-left>\n\n         <ion-input type="text" [(ngModel)]="ids" readonly></ion-input>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-row text-center (click)="submit()">\n\n    <ion-col col-12 text-center>\n\n      <button ion-button round>Submit</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/setting/setting.html"*/`<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n          <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n      </button>\n      <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n      <ion-title>\n        <img class="header-img" alt="" src="assets/icon/header-logo.png">\n      </ion-title>\n\n     \n    </ion-navbar>\n\n  </ion-header>\n\n\n<ion-content padding>\n\n    <!-- <ion-row style="margin-top: 8px;">\n        <ion-col col-4  >\n         <ion-icon name="contact"></ion-icon>\n          <span>Setting</span>\n        </ion-col> -->\n    <!-- </ion-row> -->\n<ion-card no-padding>\n  <!-- <ion-card-header class="font-default-color">\n    <ion-icon name="ios-settings-outline"></ion-icon>&nbsp;&nbsp;Settings\n  </ion-card-header>\n  <hr> -->\n\n  <ion-card-content no-padding>\n    <ion-list class="rk-menu">\n      <ion-row style="margin-top: 6px;">\n        <ion-col col-2>\n          <img src="assets/icon/profile.png" alt="Account" style="margin-left: 12%; width: 70%; margin-top: 7%;">\n          </ion-col>\n        <ion-col col-10>\n          <h5 style="line-height: 1px;color:#15488a;margin-left: 0%; font-size: 1.8rem; margin-top: 15px;">Setting</h5>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-9  >\n            <span>Spam Detection</span>\n          </ion-col>\n           <ion-col col-3  >\n           <!-- <ion-toggle text-right disabled checked="false"></ion-toggle> -->\n           <ion-toggle></ion-toggle>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-10  >\n            <span>Language</span>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-10  >\n            <span>Default Time Preference</span>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-10  >\n            <span>Default Communication Preference</span>\n          </ion-col>\n          <ion-col col-2  >\n            SMS\n          </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-10  >\n            <span>Share</span>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list inset no-margin>\n      <ion-row>\n          <ion-col col-10  >\n            <span>Deactivate Account</span>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n\n  </ion-card-content>\n</ion-card>\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscoverPage = (function () {
    function DiscoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiscoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiscoverPage');
    };
    DiscoverPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/discover/discover.html"*/`<!--\n\n  Generated template for the DiscoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n\n    </button>\n\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n\n\n    <ion-title>\n\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n\n    </ion-title>\n\n\n\n   \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding-top>\n\n   <!-- Header start -->\n\n   <ion-grid padding-0 class="trai-my-head">\n\n      <ion-row>\n\n        <ion-col col-12 class="trai-pref-head" no-padding>\n\n          <div class="trai-head-img" style="background: #f7941c;">\n\n            <img src="assets/icon/discover.png" />\n\n          </div>\n\n          <div class="trai-head-text">\n\n            <span style="color: #f7941c;">Discover</span>\n\n          </div>\n\n          <div class="trai-line"></div>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                  <ion-searchbar padding-top class="trai-disc-search"></ion-searchbar>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <!-- Header end -->\n\n  <ion-grid class="trai-my-disc">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <img src="assets/imgs/addver.jpg" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <img src="assets/imgs/text.jpg" />\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <img src="assets/imgs/text.jpg" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <p>Advertising is an audio or visual form of marketing communication that employs an openly sponsored, non-personal\n\n          message to promote or sell a product, service or idea. </p>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <img src="assets/imgs/text.jpg" />\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/discover/discover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_log__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipe_pipe__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_conference_data__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_setting_setting__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_discover_discover__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_history_history__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_preference_preference__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_complaintsstatus_complaintsstatus__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dnd_dnd__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_frauddetails_frauddetails__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_date_picker__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_otp_receive_otp_receive__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_preference_modal_preference_modal__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
//import { AddcontactPage } from '../pages/addcontact/addcontact';
//import { MessagelistPage } from '../pages/messagelist/messagelist';


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                // HomePage,
                // ListPage,
                // AddcontactPage,
                // MessagelistPage,
                __WEBPACK_IMPORTED_MODULE_16__pipe_pipe__["a" /* FirstCapsPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_preference_preference__["a" /* PreferencePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_dnd_dnd__["a" /* DndPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_frauddetails_frauddetails__["a" /* FrauddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_preference_modal_preference_modal__["a" /* PreferenceModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */], name: 'RegisterPage', segment: 'register' },
                        // { component: HomePage, name: 'HomePage', segment: 'home' },
                        // { component: ListPage, name: 'ListPage', segment: 'list' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */], name: 'DashboardPage', segment: 'dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */], name: 'MyprofilePage', segment: 'myprofile' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_setting_setting__["a" /* SettingPage */], name: 'SettingPage', segment: 'setting' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_discover_discover__["a" /* DiscoverPage */], name: 'DiscoverPage', segment: 'discover' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_history_history__["a" /* HistoryPage */], name: 'HistoryPage', segment: 'history' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_preference_preference__["a" /* PreferencePage */], name: 'PreferencePage', segment: 'preference' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__["a" /* ComplaintsPage */], name: 'ComplaintsPage', segment: 'complaints' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */], name: 'ComplaintsstatusPage', segment: 'complaintsstatus' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_dnd_dnd__["a" /* DndPage */], name: 'DndPage', segment: 'dnd' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail__["a" /* UserDetailPage */], name: 'UserDetailPage', segment: 'userdetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_frauddetails_frauddetails__["a" /* FrauddetailsPage */], name: 'FrauddetailsPage', segment: 'frauddetail' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */], name: 'OtpReceivePage', segment: 'otpreceive' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_preference_modal_preference_modal__["a" /* PreferenceModalPage */], name: 'PreferenceModalPage', segment: 'preference-modal' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                // HomePage,
                // ListPage,
                //MessagelistPage,
                //AddcontactPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_preference_preference__["a" /* PreferencePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_dnd_dnd__["a" /* DndPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_frauddetails_frauddetails__["a" /* FrauddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_preference_modal_preference_modal__["a" /* PreferenceModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_log__["a" /* CallLog */],
                __WEBPACK_IMPORTED_MODULE_17__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_19__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_18__services_setup_service__["a" /* SetupService */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_discover_discover__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_preference_preference__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_complaints_complaints__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_complaintsstatus_complaintsstatus__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(events, userData, menu, platform, storage, splashScreen, app, alertCtrl, statusBar, loadingCtrl) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.pages = [
            { title: 'Dashboard', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'History', name: 'HistoryPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */] },
            { title: 'Preference', name: 'PreferencePage', component: __WEBPACK_IMPORTED_MODULE_10__pages_preference_preference__["a" /* PreferencePage */] },
            { title: 'Complaints', name: 'ComplaintsPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_complaints_complaints__["a" /* ComplaintsPage */] },
            { title: 'Complaints Status', name: 'ComplaintsstatusPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */] },
            { title: 'My Profile', name: 'MyprofilePage', component: __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__["a" /* MyprofilePage */] },
            { title: 'Setting', name: 'SettingPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */] },
            { title: 'Discover', name: 'DiscoverPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_discover_discover__["a" /* DiscoverPage */] }
        ];
        this.others = [
            { title: 'Privacy policy', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Terms & condition', name: 'HistoryPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */] },
            { title: 'Help and feedback', name: 'PreferencePage', component: __WEBPACK_IMPORTED_MODULE_10__pages_preference_preference__["a" /* PreferencePage */] },
            { title: 'About TRAI', name: 'ComplaintsPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_complaints_complaints__["a" /* ComplaintsPage */] },
            { title: 'Version 1.0.0', name: 'ComplaintsstatusPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */] },
        ];
        this.registerBackButtonAction();
        // Check if the user has already seen the tutorial
        var isLogin = localStorage.getItem('hasSeenTutorial');
        if (isLogin) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */];
        }
        this.platformReady();
        // load the conference data
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        events.subscribe('shareObject', function (userData) {
            localStorage.setItem('userprofileEmailId', JSON.stringify(userData));
            _this.userEmail = JSON.parse(localStorage.getItem('userprofileEmailId'));
            _this.emailId = _this.userEmail;
        });
    }
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "DashboardPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        var params = {};
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
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            var loading = this.loadingCtrl.create({
                content: 'Logout please wait...'
            });
            loading.present();
            localStorage.removeItem("logindetail");
            localStorage.removeItem("hasSeenTutorial");
            setTimeout(function () { return _this.welcomeToBack(); }, loading.dismiss(), 1000);
        }
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem("logindetail");
        localStorage.removeItem("hasSeenTutorial");
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]);
    };
    MyApp.prototype.welcomeToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */]);
    };
    // openTutorial() {
    //   this.nav.setRoot(TutorialPage);
    // }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#001f38');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/app/app.html"*/`<ion-menu class="mymenu" [content]="content" style="background: #f7faff;">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title style="color: #fff; padding: 0 20px 1px;" text-left>\n        <ion-avatar item-start class="myphoto">\n          <!-- <img src={{userProfileImg}}  style="height: 70px; width: 71px;border-radius: 50%; font-size: 4.2em;   margin-left: 83px;"> -->\n        </ion-avatar>\n        <br>\n        <ion-row>\n          <ion-col col-12>\n            <img src="assets/icon/header-logo.png" alt="" class="header-img">\n          </ion-col>\n        </ion-row>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class="rk-menu">\n\n      <ion-row style="margin-top: 6px;">\n        <ion-col col-2>\n          <img src="assets/icon/profile.png" alt="Account" style="margin-left: 12%; width: 70%; margin-top: 7%;">\n        </ion-col>\n        <ion-col col-10>\n          <h5 style="line-height: 1px;color:#15488a;margin-left: 0%; ">Account</h5>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n        <button class="rk-my-btn" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </div>\n\n    <div class="rk-menu">\n\n      <ion-row style="margin-top: 6px;">\n        <ion-col col-3>\n          <img src="assets/icon/other.png" alt="Account" style="margin-left: 12%; width: 70%; margin-top: 7%;">\n        </ion-col>\n        <ion-col col-9>\n          <h5 style="line-height: 1px;color:#15488a;margin-left: 0%;">Others</h5>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n        <button class="rk-my-btn" menuClose ion-item *ngFor="let p of others" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </div>\n    <div class="rk-menu">\n\n     <ion-row style="margin-top: 6px;" (click)="logout()">\n       <ion-col col-3>\n         <img src="assets/icon/logout.png" alt="Account" style="margin-left: 12%; width: 40%; margin-top: 7%;">\n       </ion-col>\n       <ion-col col-9>\n         <h5 style="line-height: 1px;color:#15488a;">Logout</h5>\n       </ion-col>\n     </ion-row>\n   </div>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_otp_receive_otp_receive__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(userData, fb, navCtrl, loadingCtrl, toastCtrl, menuCtrl, globalservice, navParams) {
        this.userData = userData;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.globalservice = globalservice;
        this.navParams = navParams;
        this.registerDetail = { contactNo: '', };
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm();
    };
    RegisterPage.prototype.registerForm = function () {
        this.regForm = this.fb.group({
            'contactNo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)])),
        });
    };
    RegisterPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true);
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onLogin = function () {
        var _this = this;
        if (!this.registerDetail.contactNo) {
            var toast = this.toastCtrl.create({
                message: "please enter contact number!!",
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000,
            });
            toast.present();
        }
        else if (this.registerDetail.contactNo.length < 10 || this.registerDetail.contactNo.length > 10) {
            var toast = this.toastCtrl.create({
                message: "number should be 10 degits only!",
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000,
            });
            toast.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Logging please wait...',
                duration: 15000,
            });
            loading_1.present();
            // localStorage.setItem('userNumber',JSON.stringify(this.registerDetail.contactNo));
            // this.navCtrl.setRoot(DashboardPage);
            //  loading.dismiss(); 
            var url = this.globalservice.basePath + '/register';
            var postData = {
                mobile: this.registerDetail.contactNo,
            };
            debugger;
            this.globalservice.PostRequestUnautorized(url, postData).subscribe(function (response) {
                loading_1.dismiss();
                debugger;
                if (response[0].json.statusCode === 200) {
                    localStorage.setItem('logindetail', JSON.stringify(response));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */]);
                    var toast = _this.toastCtrl.create({
                        message: "otp sent successfully!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 2000
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Somthing went wrong!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/register/register.html"*/`<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n\n\n    <!-- <ion-title>Register</ion-title> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="r-bg" padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <img class="trai-logo" src="assets/icon/trai-logo.png">\n\n      <div class="trai-title">\n\n        <ion-title class="trai-wel">\n\n          Welcome to trai\n\n          <p>Unsolicited Commercial Communication</p>\n\n        </ion-title>\n\n      </div>\n\n\n\n    </ion-item>\n\n   <form [formGroup]="regForm">\n\n    <ion-grid class="grid trai-i">\n\n      <ion-row class="row">\n\n        <div class="trai-left-inp pull-right">\n\n          <ion-input name="username" [(ngModel)]="registerDetail.contactNo" formControlName="contactNo" type="text" spellcheck="false" autocapitalize="off" placeholder="Enter Phone Number" required >\n\n          </ion-input>\n\n        </div>\n\n        <div class="trai-right-inp" >\n\n            <img src="assets/icon/login-arrow.png" (click)="onLogin()"/>\n\n        </div>\n\n      </ion-row>\n\n       <ion-item *ngIf="!regForm.controls[\'contactNo\'].valid &&regForm.controls [\'contactNo\'].dirty">\n\n            <span *ngIf="regForm.controls[\'contactNo\'].errors[\'required\']">\n\n                <p style="color:red;">Contact Number cannot be left blank</p>\n\n            </span>\n\n            <span *ngIf="regForm.controls[\'contactNo\'].errors[\'minlength\']">\n\n                 <p style="color:red;">contact Number must be atleast 10 numbers</p>\n\n             </span>\n\n             <span *ngIf="regForm.controls[\'contactNo\'].errors[\'maxlength\']">\n\n                 <p style="color:red;">contact Number should not be greater then 10.</p>\n\n             </span>\n\n            <!-- <span *ngIf="regForm.controls[\'contactNo\'].errors[\'pattern\']">\n\n                <p style="color:red;">Contact Number not valid.</p>\n\n            </span> -->\n\n         </ion-item>\n\n    </ion-grid>\n\n</form>\n\n\n\n  </ion-list>\n\n  <ion-row responsive-sm>\n\n\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        localStorage.setItem(this.HAS_LOGGED_IN, "true");
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstCapsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import * as moment from 'moment';
/**
 * Generated class for the FirstCapsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FirstCapsPipe = (function () {
    function FirstCapsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FirstCapsPipe.prototype.transform = function (value) {
        return value.charAt(0).toUpperCase();
    };
    FirstCapsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'firstCaps',
        })
    ], FirstCapsPipe);
    return FirstCapsPipe;
}());

// @Pipe({name: 'datex'})
// export class DatexPipe implements PipeTransform {
//    transform(value: any ,format:string): string {      
//        var momentDate = moment(value);
//        // If moment didn't understand the value, return it unformatted.
//        if (!momentDate.isValid()) return value;
//        // Otherwise, return the date formatted as requested.
//        return momentDate.format(format);
//    }
// } 
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferenceModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PreferenceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferenceModalPage = (function () {
    function PreferenceModalPage(navCtrl, datePicker, viewCtrl, fb, toastCtrl, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.datePicker = datePicker;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.weekItem = [];
        this.item = navParams.get('type');
        console.log("in modal ts::::::::;", this.item);
    }
    PreferenceModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferenceModalPage');
    };
    PreferenceModalPage.prototype.showDateTimePicker = function (event) {
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            is24Hour: true,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            event.target.value = date;
        }, function (err) { return console.log('Error occurred while getting date: ' + err); });
    };
    PreferenceModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PreferenceModalPage.prototype.weekdays = function (day) {
        console.log("day = = " + day);
        var index = this.weekItem.indexOf(day);
        if (index >= 0) {
            this.weekItem.splice(index, 1);
        }
        else
            this.weekItem.push(day);
    };
    PreferenceModalPage.prototype.submit = function (timeBands, priority) {
        var info = {};
        console.log("item::::::::", timeBands, priority);
        var date = { time: timeBands };
        this.viewCtrl.dismiss({ type: this.item, time: date, priority: priority, weekdays: this.weekItem });
    };
    PreferenceModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preference-modal',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/preference-modal/preference-modal.html"*/`<!--\n  Generated template for the PreferenceModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n <ion-header>\n    	<ion-navbar>\n    		<ion-buttons start>\n    			<button ion-button (click)="dismiss()">Close</button>\n    		</ion-buttons>\n    		<ion-title>Preference</ion-title>\n    	</ion-navbar>\n    </ion-header>\n\n\n<ion-content padding>\n\n\n  <div class="weekDays-selector">  \n		<input type="checkbox" id="weekday-mon" class="weekday" (click)="weekdays(\'31\')"/> \n		 <label for="weekday-mon">M</label>  \n		<input type="checkbox" id="weekday-tue" class="weekday" (click)="weekdays(\'32\')" /> \n		 <label for="weekday-tue">T</label>\n		<input type="checkbox" id="weekday-wed" class="weekday" (click)="weekdays(\'33\')" />  \n		 <label for="weekday-wed">W</label> \n		<input type="checkbox" id="weekday-thu" class="weekday" (click)="weekdays(\'34\')" /> \n		 <label for="weekday-thu">Th</label> \n		<input type="checkbox" id="weekday-fri" class="weekday" (click)="weekdays(\'35\')" />  \n		 <label for="weekday-fri">F</label> \n		<input type="checkbox" id="weekday-sat" class="weekday" (click)="weekdays(\'36\')" /> \n		 <label for="weekday-sat">S</label>  \n		<input type="checkbox" id="weekday-sun" class="weekday" (click)="weekdays(\'37\')" /> \n		 <label for="weekday-sun">Su</label>\n  </div>\n\n   <ion-item>   \n   	<ion-range min="0" max="100" pin="true" [(ngModel)]="contrast" color="secondary">       \n   	       <ion-icon range-left small name="remove"></ion-icon>    \n   	       <ion-icon range-right name="add"></ion-icon> \n   	 </ion-range>\n   </ion-item>\n\n\n   <ion-item>\n      <ion-label>Time</ion-label>     \n      <ion-select [(ngModel)]="timeBands" multiple="true">\n        <ion-option checked="true" value="20">All Time Bands</ion-option>\n        <ion-option value="21">00:00 Hrs to 06:00 Hrs</ion-option>\n        <ion-option value="22">06:00 Hrs to 08:00 Hrs</ion-option>\n        <ion-option value="23">08:00 Hrs to 10:00 Hrs</ion-option>\n        <ion-option value="24">10:00 Hrs to 12:00 Hrs</ion-option>\n        <ion-option value="25">12:00 Hrs to 14:00 Hrs</ion-option>\n        <ion-option value="26">14:00 Hrs to 16:00 Hrs</ion-option>\n        <ion-option value="27">16:00 Hrs to 18:00 Hrs</ion-option>\n        <ion-option value="28">18:00 Hrs to 21:00 Hrs</ion-option>\n        <ion-option value="29">21:00 Hrs to 24:00 Hrs</ion-option>        \n      </ion-select>\n    </ion-item>\n\n <ion-row text-center>\n      <ion-col col-12 text-center>\n        <button ion-button round (click)="submit(timeBands,contrast)">Submit</button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/preference-modal/preference-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PreferenceModalPage);
    return PreferenceModalPage;
}());

//# sourceMappingURL=preference-modal.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_frauddetails_frauddetails__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_complaintsstatus_complaintsstatus__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailPage = (function () {
    function UserDetailPage(fb, navCtrl, loadingCtrl, toastCtrl, menuCtrl, globalservice, navParams) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.globalservice = globalservice;
        this.navParams = navParams;
        this.dndUserStatus = { contactNo: '', duration: '', date: '', callType: '' };
        this.duration = true;
        this.typecall = true;
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user) {
            this.fromNumber = this.user[0].json.data.mobile;
        }
        if (this.navParams.get('num')) {
            this.dndUserStatus.contactNo = this.navParams.get('num');
            this.duration = true;
            this.typecall = true;
        }
        else if (this.navParams.get('objAddress')) {
            this.dndUserStatus.contactNo = this.navParams.get('objAddress');
            this.duration = false;
            this.typecall = false;
        }
        if (this.navParams.get('duraton')) {
            this.dndUserStatus.duration = this.navParams.get('duraton');
        }
        if (this.navParams.get('date')) {
            this.dndUserStatus.date = this.navParams.get('date');
        }
        if (this.navParams.get('typeCall')) {
            this.dndUserStatus.callType = this.navParams.get('typeCall');
        }
    }
    UserDetailPage.prototype.preference = function (item) {
        this.site = item;
        console.log("this.site = = " + this.site);
    };
    UserDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailPage');
    };
    UserDetailPage.prototype.fraud = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_frauddetails_frauddetails__["a" /* FrauddetailsPage */]);
    };
    UserDetailPage.prototype.submit = function () {
        var _this = this;
        if (!this.site) {
            var toast = this.toastCtrl.create({
                message: 'Please select at least one preference!',
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000
            });
            toast.present();
        }
        else if (!this.msg) {
            var toast = this.toastCtrl.create({
                message: 'Please enter complain!',
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000
            });
            toast.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'your complain submiting please wait...',
                duration: 15000,
            });
            loading_1.present();
            var url = this.globalservice.basePath + '/complaint1';
            var postData = {
                mobile: this.fromNumber,
                header: this.dndUserStatus.contactNo,
                data: {
                    to: this.dndUserStatus.contactNo,
                    from: this.fromNumber,
                    compalin: this.msg,
                    status: "pending",
                    type: this.site
                }
            };
            console.log("postData = = " + JSON.stringify(postData));
            this.globalservice.PostRequestUnautorized(url, postData).subscribe(function (response) {
                loading_1.dismiss();
                if (response[0].json.responseCode === 200) {
                    var toast = _this.toastCtrl.create({
                        message: "complain sent successfully!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 2000
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_complaintsstatus_complaintsstatus__["a" /* ComplaintsstatusPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Somthing went wrong!!",
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }
    };
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user-detail',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/user-detail/user-detail.html"*/`<!--\n\n  Generated template for the UserDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n\n    </button>\n\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n\n\n    <ion-title>\n\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <img class="trai-logout" menuToggle src="assets/icon/logout.png" alt="">\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-top>\n\n  <!-- Header start -->\n\n  <ion-grid padding-0 class="trai-my-head">\n\n    <ion-row (click)="getuserInfo(item.title)">\n\n      <ion-col col-12 class="trai-pref-head" no-padding>\n\n        <div class="trai-head-img" style="background: #72a4ff;">\n\n          <img src="assets/icon/complaints.png" />\n\n        </div>\n\n        <div class="trai-head-text">\n\n          <span style="color: #72a4ff;">\n\n            <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{dndUserStatus.contactNo ? dndUserStatus.contactNo : \'NA\'}}</span>\n\n        </div>\n\n        <div class="trai-line"></div>\n\n        <ion-grid class="trai-my-comp-s">\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <small>\n\n                <ion-icon class="icon-default-color" name="ios-calendar-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{dndUserStatus.date | date:\'dd/MM/yyyy\' }}</small>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <small>\n\n                Duration:\n\n                <span>{{dndUserStatus.duration ? dndUserStatus.duration : \'NA\'}} sec</span>\n\n              </small>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <small>\n\n                <img style="width: 10px; display: inline;" src="assets/icon/incoming.svg" alt="">&nbsp;{{dndUserStatus.callType ? dndUserStatus.callType : \'NA\'}}</small>\n\n            </ion-col>\n\n\n\n          </ion-row>\n\n          <ion-row>\n\n\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- Header end -->\n\n  <!-- <ion-card>\n\n\n\n    <ion-card-content (click)="getuserInfo(item.title)">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;+91 1239477732</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-icon class="icon-default-color" name="ios-calendar-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;Pankaj</ion-col>\n\n          <ion-col col-6 text-right>10m</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  <ion-card class="trai-user-d">\n\n    <ion-card-content>\n\n      <ion-list radio-group >\n\n        <ion-item  >\n\n          <ion-radio (click)="preference(\'Tourism\')"></ion-radio>\n\n          <ion-label >\n\n            Tourism\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Banking/Insurance/Financial Products/ Credit Cards\')"></ion-radio>\n\n          <ion-label >\n\n            Banking/Insurance/Financial Products/ Credit Cards\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Real Estate\')"></ion-radio>\n\n          <ion-label>\n\n            Real Estate\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Education\')"></ion-radio>\n\n          <ion-label >\n\n            Education\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Health\')"></ion-radio>\n\n          <ion-label>\n\n            Health\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Consumer Goods and automobile\')"></ion-radio>\n\n          <ion-label>\n\n            Consumer Goods and automobile\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-radio (click)="preference(\'Communication/Broadcasting/Entertainment/IT\')"></ion-radio>\n\n          <ion-label>\n\n            Communication/Broadcasting/Entertainment/IT\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-card class="trai-user-d">\n\n\n\n            <ion-item>\n\n              <ion-label stacked>Message</ion-label>\n\n              <ion-textarea [(ngModel)]="msg"></ion-textarea>\n\n            </ion-item>\n\n\n\n  </ion-card>\n\n\n\n\n\n  <ion-row padding-top text-center>\n\n    <ion-col col-12 text-center>\n\n      <button ion-button round (click)="submit()">Complain</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/user-detail/user-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsstatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConplaintsstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintsstatusPage = (function () {
    function ComplaintsstatusPage(navCtrl, globalservice, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.globalservice = globalservice;
        this.platform = platform;
        this.navParams = navParams;
        this.searchTerm = '';
        this.pending = 0;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userDetails = JSON.parse(localStorage.getItem('logindetail'));
        if (this.userDetails) {
            this.contactNumber = this.userDetails[0].json.data.mobile;
        }
        this.getComplaintStatus();
    }
    ComplaintsstatusPage.prototype.getComplaintStatus = function () {
        var _this = this;
        var url = this.globalservice.basePath + '/getComplaintsByKey';
        var postData = {
            mobile: this.contactNumber
        };
        debugger;
        this.globalservice.PostRequest(url, postData).subscribe(function (response) {
            debugger;
            if (response[0].json.status === 200) {
                var result = response[0].json.json().data;
                for (var i = 0; i < result.length; i++) {
                    if (result[i].status == "pending") {
                        _this.pending++;
                    }
                }
                _this.complaintsStatus = result;
                _this.complaintsLength = _this.complaintsStatus.length;
            }
            else {
            }
        });
    };
    ComplaintsstatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsPage');
        this.setFilteredItems();
    };
    ComplaintsstatusPage.prototype.setFilteredItems = function () {
        this.items = this.globalservice.filterItems(this.searchTerm);
    };
    ComplaintsstatusPage.prototype.getuserInfo = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_user_detail_user_detail__["a" /* UserDetailPage */]);
    };
    ComplaintsstatusPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
    };
    ComplaintsstatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaintsstatus',template:/*ion-inline-start:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/complaintsstatus/complaintsstatus.html"*/`<!--\n  Generated template for the ComplaintsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img class="trai-menu" menuToggle src="assets/icon/menu.png" alt="">\n    </button>\n    <!-- <ion-icon name="menu"><img menuToggle src="assets/icon/menu.png" alt=""></ion-icon> -->\n\n    <ion-title>\n      <img class="header-img" alt="" src="assets/icon/header-logo.png">\n    </ion-title>\n\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n\n  <!-- Header start -->\n  <ion-grid padding-0 class="trai-my-head">\n    <ion-row>\n      <ion-col col-12 class="trai-pref-head" no-padding>\n        <div class="trai-head-img" style="background: #8b72ff;">\n          <img src="assets/icon/complaints-status.png" />\n        </div>\n        <div class="trai-head-text">\n          <span style="color: #8b72ff;">Complaints Status</span>\n        </div>\n        <div class="trai-line"></div>\n        <ion-grid>\n          <ion-row class="trai-pref-c">\n            <ion-col col-6>\n              <div class="dnd-head">\n                <span class="trai-my-head-a" text-center style="color: #747577;"> Total Complaints</span>\n                <span class="trai-my-head-b">{{complaintsLength}}</span>\n              </div>\n            </ion-col>\n            <ion-col col-6>\n                <div class="dnd-head">\n                  <span class="trai-my-head-a" text-center style="color: #747577;"> Pending Complaints</span>\n                  <span class="trai-my-head-b">{{pending}}</span>\n                </div>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Header end -->\n<!--   <ion-searchbar padding-top class="trai-my-search"></ion-searchbar> -->\n  <ion-card>\n    <ion-item ion-item class="trai-cal-data-a" *ngFor="let status of complaintsStatus">\n      <ion-row>\n        <ion-col col-12>\n          <small>\n            <ion-icon class="icon-default-color" name="ios-call-outline"></ion-icon>&nbsp; {{status.to}}</small>\n        </ion-col>\n\n      </ion-row>\n      <ion-row class="trai-cont-set">\n        <ion-col col-6>\n          <small>\n            <ion-icon class="icon-default-color" name="ios-calendar-outline"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{status.date | date:\'dd/MM/yyyy\'}}</small>\n        </ion-col>\n        <ion-col col-6>\n          <small>\n              Status:<span>{{status.status}}</span>\n          </small>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    \n  </ion-card>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Pennyproject/Ionic/traiFrontEnd/traibackup/2-13-08-2018/src/pages/complaintsstatus/complaintsstatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ComplaintsstatusPage);
    return ComplaintsstatusPage;
}());

//# sourceMappingURL=complaintsstatus.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map