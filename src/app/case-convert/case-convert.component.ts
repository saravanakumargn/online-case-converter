import { Component } from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./case-convert.component.html')
})
export class CaseConvertComponent {
  public caseText: string;
  public convertedText: string;
  public isSpacialRemove: boolean;
  public isSpaceRemove: boolean;
  public isNumericRemove: boolean;

  constructor() {
    this.defaults();
  }

  defaults() {
    this.caseText = '';
    this.convertedText = '';
    this.isSpacialRemove = false;
    this.isSpaceRemove = false;
    this.isNumericRemove = false;
  }

  get caseTextLen() {
    return this.caseText.length;
  }
  get convertedTextLen() {
    return this.convertedText.length;
  }

  resetAll() {
    this.defaults();
  }

  stringValidation(str: any) {
    if (this.isSpacialRemove) {
      str = str.replace(/[^a-zA-Z0-9 ]/g, '');
    }
    if (this.isSpaceRemove) {
      str = str.replace(/\s+/g,' ').trim();
    }
    if (this.isNumericRemove) {
      str = str.replace(/[0-9]/g, '');
    }
    return str;
  }

  caseUpper() {
    var str = this.stringValidation(this.caseText);
    this.convertedText = str.toUpperCase();
  }
    caseLower() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str.toLowerCase();
    };

    toTitleCase(str: any) {
        return str.replace(/^.| ./g, function(v) {
          return v.toUpperCase();
        })
    }
    caseTitle() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = this.toTitleCase(str);
    };

    singleSpace() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str.replace(/\s+/g,' ').trim();
    };
    caseSnake(){
        var str = this.stringValidation(this.caseText);
        this.convertedText = str.toLowerCase().replace(/ +(?=)/g, '_');
    };
    caseScreamingSnake() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str.toUpperCase().replace(/ +(?=)/g, '_');
    };
    seoUrl() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str.toLowerCase().replace(/[^-_'A-Za-z0-9]+/g, '-');
    };
    uCaseCamel() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str
            .replace(/^.| ./g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s/g, '');
    };
    lCaseCamel() {
        var str = this.stringValidation(this.caseText);
        this.convertedText = str
            .replace(/\s(.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) {
                return $1.toLowerCase();
            });
    };


}
