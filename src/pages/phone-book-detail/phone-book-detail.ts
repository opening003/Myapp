import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { Instagram } from '@ionic-native/instagram';


/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {
  contact = {name:'',telephone:'',imageUrl :'',sms :""}

  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms: SMS , private instagram: Instagram ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }
 
call(){
  window.open('tel:'+this.contact.telephone)
}
instagrams(){
  this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
  .then(() => console.log('Shared!'))
  .catch((error: any) => console.error(error));

}
sms(){
  this.mysms.send(this.contact.telephone, 'Hello world! I love You');
}
}//end
