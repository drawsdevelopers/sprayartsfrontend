import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './features/main-menu/main-menu.component';
import { HomeComponent } from './features/home/components/home.component';
import { HomeModule, LoginModule } from './features';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainMenuComponent],

  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
