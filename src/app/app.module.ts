import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NewTaskPage } from './new-task/new-task.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    Camera,
    TaskService,
    SplashScreen,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
