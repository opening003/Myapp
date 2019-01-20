import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //property
  loginResult;

  constructor(public navCtrl: NavController,public http: HttpClient) {

  }
  //method
  singIn(_username,_password){
    alert('Hello '+_username)
    if (_password=="12345") {
      this.loginResult='Pass';
      this.navCtrl.push("PhoneBookPage");
    } else {
      this.loginResult='Sorry,Please Try Again...'
    }
  }
  
}


