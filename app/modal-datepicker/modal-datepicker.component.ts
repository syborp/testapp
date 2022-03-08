import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ModalDialogParams} from "@nativescript/angular";
import {DatePicker, Page} from "@nativescript/core";


declare var module: {
  //id: string;
}

// >> passing-parameters
@Component({
  //moduleId: module.id,
  templateUrl: "./modal-datepicker.component.html"
})
export class ModalDatePickerComponent implements OnInit {

  public currentdate: Date;
  // @ViewChild("datepicker") datePickerElement: ElementRef;

  // https://www.nativescript.org/blog/nativescript-now-supports-angular-8
  // Change to
  // @ViewChild("myElement", { static: false }) myElement: ElementRef;
  @ViewChild("datepicker", {static: false}) datePickerElement: ElementRef;

  constructor(private params: ModalDialogParams, private page: Page) {
    this.currentdate = new Date(params.context);
  }

  ngOnInit() {

    let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
    datePicker.year = this.currentdate.getFullYear();
    datePicker.month = this.currentdate.getMonth() + 1;
    datePicker.day = this.currentdate.getDate();
    datePicker.minDate = new Date(1975, 0, 29);
    datePicker.maxDate = new Date(2045, 4, 12);

  }

  public submit() {

    let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
    console.log("date result");
    console.log(datePicker.date);
    this.params.closeCallback(datePicker.date);

  }
}

// << passing-parameters
