import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _currentNavigation : Subject<any> = new Subject();
  public   currentNavigation = this._currentNavigation.asObservable();
  constructor() { }

  setCurrentNavigation(navigation :any)
  {
    this._currentNavigation.next(navigation)
  }
}
