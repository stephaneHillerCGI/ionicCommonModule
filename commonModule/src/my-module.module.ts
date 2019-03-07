import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyComponent } from './components/my-component';
import { MyProvider } from './providers/my-provider';
import { MyPage } from "./pages/my-page";


@NgModule({
  declarations: [
    // declare all components that your module uses
    MyComponent,
    // MyPage // Comment/Uncomment to switch from live reload/no live reload
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    MyComponent,
    // MyPage // Comment/Uncomment to switch from live reload/no live reload
  ],
  bootstrap: [IonicApp],
})
export class MyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [
        MyProvider,
       ]
    };
  }
}

