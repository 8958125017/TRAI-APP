import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
/**
 * Generated class for the AddcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddcontactPage {

  constructor(public navCtrl: NavController,private contacts: Contacts, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcontactPage');
  }

   addContact(): void {
     // let contact: Contact = this.contacts.create();
     // var firstName="pankaj";
     // var lastName ="joshi";
     // var contactNumber="+91794110436"
     // var ImgUrl="images/Thomas.jpg";
     
     // contact.name = new ContactName(null, name, lastName);
     // let number = new ContactField('mobile', '6471234567');
     // contact.phoneNumbers = [number];
     // contact.name = new ContactName(null, firstName, lastName);        
     // contact.photos = [new ContactField('url', ImgUrl, true)];
     // contact.save().then(
     //   () => console.log('Contact saved!', contact),
     //   (error: any) => console.error('Error saving contact.', error)
     // );
   }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
