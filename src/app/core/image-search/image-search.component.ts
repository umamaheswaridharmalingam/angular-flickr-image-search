import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  PhotosRootModel,
  Photo,
  Photos,
  Orientation,
  SearchFilterModel,
} from 'src/app/shared/model';
import { SelectItem } from 'primeng/api';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
})
export class ImageSearchComponent implements OnInit {
  protected destroyActions = new Subject<boolean>();

  photos = new Photos();
  isLoading = false;
  imagesPerPage = 50;
  pageNumber = 1;
  searchText!: string;
  searchFilterModel = new SearchFilterModel();

  constructor(
    public searchService: SearchService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.coreService
      .getSearchValue()
      .pipe(takeUntil(this.destroyActions))
      .subscribe((text: string) => {
        console.log('text', text);
        this.searchText = text;
        this.search();
      });
  }

  filter(searchFilter: SearchFilterModel) {
    this.searchFilterModel = searchFilter;
    this.search();
  }

  search() {
    console.log('search', this.searchFilterModel);
    this.isLoading = true;
    this.searchService
      .searchImage(
        this.searchText,
        this.imagesPerPage,
        this.pageNumber,
        this.searchFilterModel.orientation,
        this.searchFilterModel.searchInText,
        this.searchFilterModel.fromDate,
        this.searchFilterModel.toDate,
        this.searchFilterModel.contentType
      )
      .pipe(takeUntil(this.destroyActions))
      .subscribe((result: PhotosRootModel) => {
        this.isLoading = false;
        //console.log('result', result);
        this.photos = result.photos;
        //this.photoList = result.photos.photo;
      });
  }

  loadNext(event: any) {
    this.pageNumber = event.first / this.imagesPerPage + 1;
    this.search();
  }

  public ngOnDestroy() {
    this.destroyActions.next(true);
    this.destroyActions.complete();
  }
}
