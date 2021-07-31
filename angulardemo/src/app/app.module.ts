import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { LshooksComponent } from './lshooks/lshooks.component';
import { DirDem0Component } from './dir-dem0/dir-dem0.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ServiceDiComponent } from './service-di/service-di.component';
import { MyhttpComponent } from './myhttp/myhttp.component';
import { Myhttp1Component } from './myhttp1/myhttp1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    LshooksComponent,
    DirDem0Component,
    PipesDemoComponent,
    TwoWayBindingComponent,
    ServiceDiComponent,
    MyhttpComponent,
    Myhttp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
