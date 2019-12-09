import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MainMenuComponent } from './main-menu/components/main-menu.component';
import { SharedModule } from '../shared/shared.module';
import { FiseComponent } from './fise/components';
import { HomeModule } from './home';
import { LoginModule } from './login';
import { MainMenuModule } from './main-menu';
import { FiseModule } from './fise';


const modulesObject  = [BrowserModule,
  SharedModule,
  HomeModule,
  LoginModule,
  MainMenuModule,
  FiseModule,
  HttpClientModule, ];

@NgModule({


  declarations: [],

  imports: [
    ...modulesObject
  ],

  exports: [...modulesObject],
  providers: [],
  bootstrap: []
})
export class FeaturesModule { }
