import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from '../../../../commonModule/src/models/user/user.model';
import { MyProvider } from '../../../../commonModule/src/providers/my-provider';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private myProvider: MyProvider) {

  }

  ngOnInit() {
    let userTest = new User();
    console.log(userTest);

    this.myProvider.myMethod();
  }
  launchMyPage() {
    this.navCtrl.push('MyPage');
  }
}
