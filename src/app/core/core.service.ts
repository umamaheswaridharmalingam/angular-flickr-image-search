import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private searchTextbox: BehaviorSubject<string>;
  constructor() {
    this.searchTextbox = new BehaviorSubject<string>('');
  }

  public getSearchValue(): Observable<string> {
    return this.searchTextbox.asObservable();
  }

  public setSearchValue(value: string) {
    this.searchTextbox.next(value);
  }
}
