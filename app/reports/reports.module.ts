import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptRouterModule, NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import {ReportsComponent} from "./reports.component";

import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {path: "", redirectTo: "reports"},
      {path: "reports", component: ReportsComponent}
    ])
  ],
  declarations: [
    ReportsComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ReportsModule {
}
