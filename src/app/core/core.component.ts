import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
})
export class CoreComponent implements OnInit, OnDestroy {
  protected destroyActions = new Subject<boolean>();
  isLoading = false;
  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService
      .getIsLoading()
      .pipe(takeUntil(this.destroyActions))
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
      });
  }

  public ngOnDestroy() {
    this.destroyActions.next(true);
    this.destroyActions.complete();
  }
}
