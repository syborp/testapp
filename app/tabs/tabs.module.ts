import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent, NativeScriptCommonModule } from "@nativescript/angular";


import {TabsComponent} from "./tabs.component";


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: "default", component: TabsComponent, children: [

          {
            path: "home",
            outlet: "homeTab",
            component: NSEmptyOutletComponent,
            loadChildren: () => import("~/home/home.module").then(m => m.HomeModule),
          },
          {
            path: "expense",
            outlet: "expenseTab",
            component: NSEmptyOutletComponent,
            loadChildren: () => import("~/expense/expense.module").then(m => m.ExpenseModule),
          },
          {
            path: "journey",
            outlet: "journeyTab",
            component: NSEmptyOutletComponent,
            loadChildren: () => import("~/journey/journey.module").then(m => m.JourneyModule),
          },
          {
            path: "reports",
            outlet: "reportsTab",
            component: NSEmptyOutletComponent,
            loadChildren: () => import("~/reports/reports.module").then(m => m.ReportsModule),
          }
        ]
      }
    ])
  ],
  declarations: [
    TabsComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule {
}
