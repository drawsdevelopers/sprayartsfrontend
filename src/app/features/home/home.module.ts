import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { ParallaxDirective } from 'src/app/shared';

@NgModule({
  declarations: [HomeComponent, ParallaxDirective],
  imports: [CommonModule, SharedModule],
  exports: []
})
export class HomeModule {}
