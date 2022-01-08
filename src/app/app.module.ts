import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    ServicesMainComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
