import {Injectable} from '@angular/core';
import {RouterExtensions} from '@nativescript/angular';
import {Subject} from 'rxjs';
import {TabView } from "@nativescript/core";
import {getRootView} from "@nativescript/core/application";
// import { Observable } from 'rxjs/Observable';
// need these for TabView navigation

@Injectable()
export class FRouteService {
  selectedIndex$ = new Subject();

  constructor(router: RouterExtensions) {
  }

  routeto(index) {

    (<TabView>getRootView()).selectedIndex = index;

  }
}
