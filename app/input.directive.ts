import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[minlength]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true}]
})
export class MinLengthDirective implements Validator {

  @Input() minlength: string;

  public constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    return !control.value || control.value.length >= this.minlength ? null : {"minlength": true};
  }

}

@Directive({
  selector: '[email]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsEmailDirective, multi: true}]
})
export class IsEmailDirective implements Validator {

  public constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let valid = emailRegEx.test(control.value);
    return control.value < 1 || valid ? null : {'email': true};
  }

}

@Directive({
  selector: '[number]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsNumberDirective, multi: true}]
})
export class IsNumberDirective implements Validator {

  public constructor() {
  }

  public isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    return this.isNumber(control.value) ? null : {'number': true};
  }

}
