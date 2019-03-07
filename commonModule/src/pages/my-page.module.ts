// Comment/Uncomment all page to switch from live reload/no live reload

import { MyPage } from './my-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MyPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPage),
  ],
  exports: [
    MyPage
  ]
})
export class MyPageModule { }
