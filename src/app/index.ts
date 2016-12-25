import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { FormsModule }   from '@angular/forms';

import {CaseConvertComponent} from './case-convert/case-convert.component';

import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    CaseConvertComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
