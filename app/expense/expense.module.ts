import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptRouterModule, NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import {ExpenseComponent} from "./expense.component";

import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    // Forms
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild([
      {path: "", component: ExpenseComponent},

    ])
  ],
  declarations: [
    ExpenseComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExpenseModule {
}
