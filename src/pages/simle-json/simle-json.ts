import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }from '@angular/common/http';
/**
 * Generated class for the SimleJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simle-json',
  templateUrl: 'simle-json.html',
})
export class SimleJsonPage {
  returnMsg="";
  constructor(public navCtrl: NavController, public navParams: NavParams ,public http : HttpClient) {
    this.getjsonobject();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimleJsonPage');
  }
getjsonobject(){
let url = 'http://localhost/Shop/ion-get-simple-string.php';
this.http.get(url).subscribe(
  (data:any )=>{
    console.log(data);
    this.returnMsg=data.return_message;
  }
  ,(error)=>{
    console.log(error)
  }
);
}
}
