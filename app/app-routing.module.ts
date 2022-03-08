import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NativeScriptRouterModule} from "@nativescript/angular";


export const ROUTES: Routes = [


  {
    path: "tabs",
    loadChildren: () => import("~/tabs/tabs.module").then(m => m.TabsModule)
  },
];
@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(ROUTES, {enableTracing: true}),
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'})
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}



