import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterExtensions} from "@nativescript/angular";
//import { BottomNavigation, OnTabSelectedEventData, BottomNavigationTab } from 'nativescript-bottom-navigation';
import {BottomnavService} from '~/bottomnavService';

@Component({
  moduleId: module.id,
  selector: "tabs-page",
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements AfterViewInit {

  @ViewChild("bottomNav", {static: false}) bottomNavChild: ElementRef;

  ngAfterViewInit() {
    //console.log("this.bottomNavChild.nativeElement="+this.bottomNavChild.nativeElement);
    //console.log("this.bottomNavChild.nativeElement.selectedIndex)="+this.bottomNavChild.nativeElement.selectedIndex);
    //this.bottomNavChild.nativeElement.selectedIndex=2;
  }

  constructor(
    private routerExtension: RouterExtensions,
    private bottomnavService: BottomnavService,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bottomnavService.gotoTab$
      .subscribe(
        tab => {
          this.bottomNavChild.nativeElement.selectedIndex = tab;
          //alert("tab="+tab);
        }
      );

    this.routerExtension.navigate(
      [{
        outlets: {
          homeTab: ["home"],
          expenseTab: ["expense"],
          journeyTab: ["journey"],
          reportsTab: ["reports"]
        }
      }],
      {
        relativeTo: this.activeRoute
      });
  }

  navigateToTab(tab: number) {
    console.log("in navigateToTab");
    this.bottomnavService.sendDestinationTab(tab);
  }
}
