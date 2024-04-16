import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetNgBootstrapComponent } from './pages/get-ng-bootstrap/get-ng-bootstrap.component';
import { GetBootstrapComponent } from './pages/get-bootstrap/get-bootstrap.component';
import { GetPrimeNGComponent } from './pages/get-prime-ng/get-prime-ng.component';
import { GetMaterialUIComponent } from './pages/get-material-ui/get-material-ui.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    GetNgBootstrapComponent,
    GetBootstrapComponent,
    GetPrimeNGComponent,
    GetMaterialUIComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ButtonModule,
    TreeTableModule,
    TableModule,
    ChipModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
