import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MyPage } from '../../../../commonModule/src/pages/my-page';
import { User } from "../../../../commonModule/src/models/user/user.model";
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
    this.navCtrl.push(MyPage);
  }
}
