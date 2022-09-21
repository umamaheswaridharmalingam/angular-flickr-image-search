import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private searchTextbox: BehaviorSubject<string>;
  private isLoading: BehaviorSubject<boolean>;
  constructor() {
    this.searchTextbox = new BehaviorSubject<string>('');
    this.isLoading = new BehaviorSubject<boolean>(false);
  }

  public getSearchValue(): Observable<string> {
    return this.searchTextbox.asObservable();
  }

  public setSearchValue(value: string) {
    this.searchTextbox.next(value);
  }

  public getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }
}
