import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { LshooksComponent } from './lshooks/lshooks.component';
import { DirDem0Component } from './dir-dem0/dir-dem0.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {ServiceDiComponent} from './service-di/service-di.component';
import {MyhttpComponent} from './myhttp/myhttp.component';
import {Myhttp1Component} from './myhttp1/myhttp1.component'

const routes: Routes = [
  {path: 'new-component',component:NewcompComponent },
  {path: 'ls-hooks',component:LshooksComponent },
  {path: 'dir-demo',component:DirDem0Component },
  {path: 'pipes-demo',component:PipesDemoComponent },
  {path: '2way-databing-demo',component:TwoWayBindingComponent },
  {path: 'service-di',component:ServiceDiComponent },
  {path: 'http-client',component:MyhttpComponent },
  {path: 'http-client1',component:Myhttp1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
