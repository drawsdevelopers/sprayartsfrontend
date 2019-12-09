import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingComponent } from './home-routing.component';
import { HomeRoutingModule } from './home-routing.module';

const componentsObject = [HomeComponent, HomeRoutingComponent];
@NgModule({
  declarations: [...componentsObject],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [...componentsObject]
})
export class HomeModule {}
