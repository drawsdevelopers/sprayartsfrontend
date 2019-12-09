import { NgModule } from '@angular/core';
import { CoreModule } from '../../core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainMenuComponent } from './components';
import { fromEventPattern } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';

const componentsObject = [MainMenuComponent];
@NgModule({
  declarations: [...componentsObject],
  imports: [CoreModule, SharedModule, RouterModule],
  exports: [...componentsObject]
})
export class MainMenuModule { }
