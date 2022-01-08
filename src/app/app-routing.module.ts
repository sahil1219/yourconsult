import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesMainComponent} from './components/services-main/services-main.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
const routes: Routes = [
  {path:'services',component:ServicesMainComponent},
  {path:'aboutus',component:AboutusComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
