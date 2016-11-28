import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {CaseConvertComponent} from './case-convert/case-convert.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    CaseConvertComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
