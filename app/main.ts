// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "@nativescript/angular";
import {enableProdMode} from '@angular/core';
import {AppModule} from "./app.module";
import {ApplicationEventData, launchEvent, on as applicationOn} from "@nativescript/core/application";

applicationOn(launchEvent, (args: ApplicationEventData) => {
  if (args.android) {
    // For Android applications, args.android is an android.content.Intent class.
    console.log("Launched Android application with the following intent: " + args.android + ".");
  } else if (args.ios !== undefined) {
    // For iOS applications, args.ios is NSDictionary (launchOptions).
    console.log("Launched iOS application with options: " + args.ios);
  }
});
enableProdMode();

platformNativeScriptDynamic().bootstrapModule(AppModule);

