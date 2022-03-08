import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptRouterModule, NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import {JourneyComponent} from "./journey.component";

import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "journey"},
      { path: "journey", component: JourneyComponent}
    ])
  ],
  
  
  declarations: [
    JourneyComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class JourneyModule {
}
