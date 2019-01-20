import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  contactAyyay = [{name:'Arif',telephone:'0863141491', imageUrl: 'assets/imgs/1.jpg',sms :""}
                 ,{name:'Nami',telephone:'093614257', imageUrl: 'assets/imgs/2.jpg',sms :""}
                 ,{name:'Naroto',telephone:'017685464', imageUrl: 'assets/imgs/3.jpg',sms :""}
                 ,{name:'Lora',telephone:'0176293387', imageUrl: 'assets/imgs/4.jpg',sms :""}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item)
  }
}
