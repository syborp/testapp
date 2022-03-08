import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptRouterModule, NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import {HomeComponent} from "./home.component";

import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {ReactiveFormsModule} from "@angular/forms";

import {DropDownModule} from "nativescript-drop-down/angular";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    DropDownModule,
    NativeScriptRouterModule.forChild([
      {path: "", redirectTo: "home"},
      {path: "home", component: HomeComponent}
    ]),
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
