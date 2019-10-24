import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingComponent } from './home-routing.component';
import { HomeComponent } from './components/home.component';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeRoutingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
