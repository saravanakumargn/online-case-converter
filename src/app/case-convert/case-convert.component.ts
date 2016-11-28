import { Component } from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./case-convert.component.html')
})
export class CaseConvertComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
