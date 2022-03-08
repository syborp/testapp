import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "@nativescript/angular";
import {isAndroid} from "@nativescript/core";


declare var module: {
  //id: string;
}

@Component({
  selector: "ns-app",
  //moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {


  constructor(
    private routerExtensions: RouterExtensions
    ) {
    // Use the component constructor to inject providers. ok
  }

  ngOnInit(): void {
    this.routerExtensions.navigate(["./tabs/default"], {clearHistory: true});
  }


  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

}
