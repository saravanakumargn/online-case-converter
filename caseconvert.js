angular.module('caseConvertApp', [])
  .controller('CaseConvertController', function () {
    var caseConvert = this;

    caseConvert.isSpacialRemove = false;
    caseConvert.isSpaceRemove = false;
    caseConvert.isNumericRemove = false;

    caseConvert.resetAll = function () {
      caseConvert.caseText = '';
    };


    stringValidation = function (str) {
      if (caseConvert.isSpacialRemove) {
        str = str.replace(/[^a-zA-Z0-9 ]/g, '');
      }
      if (caseConvert.isSpaceRemove) {
        str = str.replace(/\s+/g, ' ').trim();
      }
      if (caseConvert.isNumericRemove) {
        str = str.replace(/[0-9]/g, '');
      }
      return str;
    }


    caseConvert.caseUpper = function () {
      var str = stringValidation(caseConvert.caseText);
      caseConvert.convertedText = str.toUpperCase();
    };

    caseConvert.caseLower = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str.toLowerCase();
    };

    function toTitleCase(str) {
      return str.replace(/^.| ./g, function (v) {
        return v.toUpperCase();
      })
    }
    caseConvert.caseTitle = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = toTitleCase(str);
    };

    caseConvert.singleSpace = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str.replace(/\s+/g, ' ').trim();
    };
    caseConvert.caseSnake = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str.toLowerCase().replace(/ +(?=)/g, '_');
    };
    caseConvert.caseScreamingSnake = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str.toUpperCase().replace(/ +(?=)/g, '_');
    };
    caseConvert.seoUrl = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str.toLowerCase().replace(/[^-_'A-Za-z0-9]+/g, '-');
    };
    caseConvert.uCaseCamel = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str
        .replace(/^.| ./g, function ($1) {
          return $1.toUpperCase();
        })
        .replace(/\s/g, '');
    };
    caseConvert.lCaseCamel = function () {
      var str = stringValidation(this.caseText);
      this.convertedText = str
        .replace(/\s(.)/g, function ($1) {
          return $1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) {
          return $1.toLowerCase();
        });
    };

    caseConvert.copyText = function() {
      var copyText = document.getElementById("convertedTextInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
    }


  });
