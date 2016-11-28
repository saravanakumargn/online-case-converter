/// <reference path="../../typings/index.d.ts"/>

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseConvertComponent } from './case-convert/case-convert.component';

@Component({
  selector: 'case-converter',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes: Routes = [
  {
    path: '',
    component: CaseConvertComponent
  }
];

export const routing = RouterModule.forRoot(routes);
