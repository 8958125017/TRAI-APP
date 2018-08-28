import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AddcontactPage} from '../../pages/addcontact/addcontact';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController,private callNumber: CallNumber,private modalCtrl: ModalController, public navParams: NavParams,private sanitizer: DomSanitizer,private contacts: Contacts) {
   
  }
  contactList = [];

  getContacts(): void {
    this.contacts.find(
      ["displayName", "phoneNumbers","photos"],
      {multiple: true, hasPhoneNumber: true}
      ).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          if(contacts[i].displayName !== null) {
            var contact = {};
            contact["name"]   = contacts[i].displayName;
            contact["number"] = contacts[i].phoneNumbers[0].value;
            if(contacts[i].photos != null) {
              contact["image"] = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
            } else {
              contact["image"] = "assets/imgs/dummy-profile-pic.png";
            }
            this.contactList.push(contact);
          }
        }
    });
  }

   // addContact(): void {
   //   let contact: Contact = this.contacts.create();
   //   contact.name = new ContactName(null, 'Smith', 'John');
   //   let number = new ContactField('mobile', '6471234567');
   //   contact.phoneNumbers = [number];
   //   contact.save().then(
   //     () => console.log('Contact saved!', contact),
   //     (error: any) => console.error('Error saving contact.', error)
   //   );
   // }

    call(num:string){
        this.callNumber.callNumber(num, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }

     addContact(characterNum) {  
              let modal = this.modalCtrl.create(AddcontactPage, { 
                'prop': 'prop1', 
                onFeedBack: (data) => {
               
                }
              });

              modal.onDidDismiss(data => {
               
              });

              modal.present().then(result => {
        
              });
            
          }
  
}
