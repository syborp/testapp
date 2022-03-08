import {ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';
import { ModalDatetimepicker } from "nativescript-modal-datetimepicker"
import {NativeScriptFormsModule} from '@nativescript/angular'
import {NativeScriptCommonModule} from "@nativescript/angular";
import {NativeScriptHttpClientModule} from "@nativescript/angular";
import {ModalDialogService} from "@nativescript/angular";
import {NativeScriptModule} from "@nativescript/angular";
import {NativeScriptRouterModule} from "@nativescript/angular";
import {NativeScriptBottomNavigationBarModule} from "nativescript-bottom-navigation/angular";
import {DropDownModule} from "nativescript-drop-down/angular";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {enable as traceEnable} from "@nativescript/core/trace";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {IsEmailDirective, IsNumberDirective, MinLengthDirective} from "./input.directive";
import {ModalDatePickerComponent} from "./modal-datepicker/modal-datepicker.component";
import { DatePipe } from '@angular/common';

traceEnable();

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log("### ErrorHandler Error: " + error.toString());
    console.log("### ErrorHandler Stack: " + error.stack);
  }
}

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    DropDownModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    NativeScriptBottomNavigationBarModule
    ],
  declarations: [
    AppComponent,
    ModalDatePickerComponent,
    MinLengthDirective,
    IsEmailDirective,
    IsNumberDirective
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    ModalDatetimepicker ,
    ModalDialogService,
    DatePipe,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    },
    //{ provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
  ],
  entryComponents: [
    ModalDatePickerComponent
  ]
})
export class AppModule {
}
