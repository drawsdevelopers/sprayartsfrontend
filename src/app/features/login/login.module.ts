import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { LoginRoutingComponent } from './login-routing.component';

const componentsObject = [LoginComponent, LoginRoutingComponent];
@NgModule({
  declarations: [...componentsObject],
  imports: [CommonModule, LoginRoutingModule],
  exports: [...componentsObject]
})
export class LoginModule {}
