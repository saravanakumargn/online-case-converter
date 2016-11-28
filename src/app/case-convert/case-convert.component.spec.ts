/// <reference path="../../../typings/index.d.ts"/>


import {CaseConvertComponent} from './case-convert.component';
import {TestBed, async} from '@angular/core/testing';

describe('Case-Convert component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseConvertComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render hello world', () => {
    const fixture = TestBed.createComponent(CaseConvertComponent);
    fixture.detectChanges();
    const hello = fixture.nativeElement;
    expect(hello.querySelector('h1').textContent).toBe('Hello World!');
  });
});
