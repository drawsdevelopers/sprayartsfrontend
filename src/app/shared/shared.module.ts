import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives';

@NgModule({
  declarations: [ParallaxDirective],
  imports: [CommonModule],
  exports: [ParallaxDirective]
})
export class SharedModule {}
