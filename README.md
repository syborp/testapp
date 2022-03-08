# Tabbed Template

This is a bare bones tabbed template mobile app using NativeScript and Angular. It has been stripped down from the actual app I am working on.

I have been working on it in Android.

It was building and running in NativeScript 6.5.0 and I have migrated to NativeScript 8.1.5 and am trying to get it building and running but stuck.

Clone and 

```
ns run android
```
This is how it should look.

![Screenshot](app/images/scr.png)

This is the error message I am now stuck on

```
Searching for devices...
Preparing project...
webpack is watching the files...
C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\entry_point_finder\targeted_entry_point_finder.js:40
                throw new Error("The target entry-point \"" + invalidTarget.entryPoint.name + "\" has missing dependencies:\n" +
                ^

Error: The target entry-point "undefined" has missing dependencies:
 - nativescript-angular/element-registry

    at TargetedEntryPointFinder.findEntryPoints (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\entry_point_finder\targeted_entry_point_finder.js:40:23)
    at C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\execution\analyze_entry_points.js:29:41
    at SingleProcessExecutorSync.SingleProcessorExecutorBase.doExecute (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:28:29)
    at C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:57:59
    at SyncLocker.lock (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\locking\sync_locker.js:34:24)
    at SingleProcessExecutorSync.execute (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:57:27)
    at Object.mainNgcc (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\src\main.js:74:25)
    at Object.process (C:\Users\user\testapp\node_modules\@angular\compiler-cli\ngcc\index.js:29:23)
    at NgccProcessor.processModule (C:\Users\user\testapp\node_modules\@ngtools\webpack\src\ngcc_processor.js:175:16)
    at C:\Users\user\testapp\node_modules\@ngtools\webpack\src\ivy\host.js:146:18
    at C:\Users\user\testapp\node_modules\@ngtools\webpack\src\ivy\host.js:76:24
    at Array.map (<anonymous>)
    at Object.host.resolveModuleNames (C:\Users\user\testapp\node_modules\@ngtools\webpack\src\ivy\host.js:74:32)
    at actualResolveModuleNamesWorker (C:\Users\user\testapp\node_modules\typescript\lib\typescript.js:109497:133)
    at resolveModuleNamesWorker (C:\Users\user\testapp\node_modules\typescript\lib\typescript.js:109760:26)
    at resolveModuleNamesReusingOldState (C:\Users\user\testapp\node_modules\typescript\lib\typescript.js:109857:24)
Executing webpack failed with exit code 1.
```
