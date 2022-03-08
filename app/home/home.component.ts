import {Component} from "@angular/core";

import {BottomnavService} from "~/bottomnavService";


@Component({
  selector: "Home",

  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent  {

  constructor(
    private bottomnavService: BottomnavService
  ) { }


  navigateToTab(tab: number) {
    this.bottomnavService.sendDestinationTab(tab);
  }




}
