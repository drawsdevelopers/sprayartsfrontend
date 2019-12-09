import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiseRoutingModule } from './fise-routing.module';
import { FiseComponent } from './components';
import { FiseRoutingComponent } from './fise-routing.component';

const objectComponents = [FiseComponent, FiseRoutingComponent];
@NgModule({
  declarations: [...objectComponents],
  imports: [
    CommonModule,
    FiseRoutingModule
  ],
  exports: [...objectComponents]

})
export class FiseModule { }
