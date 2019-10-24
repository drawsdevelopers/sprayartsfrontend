import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { LoginRoutingComponent } from './login-routing.component';

@NgModule({
  declarations: [LoginComponent, LoginRoutingComponent],
  imports: [CommonModule, LoginRoutingModule]
})
export class LoginModule {}
