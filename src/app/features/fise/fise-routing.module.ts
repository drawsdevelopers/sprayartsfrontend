import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiseComponent } from './components/fise.component';
import { FiseRoutingComponent } from './fise-routing.component';


const fiseRoutes: Routes = [
  {
    path: 'fise',
    component: FiseRoutingComponent,
    children: [
      {
        path: '',
        component: FiseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(fiseRoutes)],
  exports: [RouterModule]
})
export class FiseRoutingModule { }
