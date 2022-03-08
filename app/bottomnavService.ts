import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class BottomnavService {

  private _gotoTabSource = new Subject<number>();

  gotoTab$ = this._gotoTabSource.asObservable();

  sendDestinationTab(tab: number) {
    this._gotoTabSource.next(tab);
  }

}
