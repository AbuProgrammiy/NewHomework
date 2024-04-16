import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetBootstrapComponent } from './pages/get-bootstrap/get-bootstrap.component';
import { GetNgBootstrapComponent } from './pages/get-ng-bootstrap/get-ng-bootstrap.component';
import { GetPrimeNGComponent } from './pages/get-prime-ng/get-prime-ng.component';
import { GetMaterialUIComponent } from './pages/get-material-ui/get-material-ui.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"get-bootstrap",component:GetBootstrapComponent},
  {path:"get-ng-bootstrap",component:GetNgBootstrapComponent},
  {path:"get-prime-ng",component:GetPrimeNGComponent},
  {path:"get-material-ui",component:GetMaterialUIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
