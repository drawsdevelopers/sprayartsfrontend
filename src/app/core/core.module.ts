import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modulesObject = [CommonModule];

@NgModule({
  declarations: [],
  imports: [
    ...modulesObject
  ],
  exports: [...modulesObject]
})
export class CoreModule { }
