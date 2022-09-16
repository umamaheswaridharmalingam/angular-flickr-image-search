import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  PhotosRootModel,
  Photo,
  Photos,
  Orientation,
} from 'src/app/shared/model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
})
export class ImageSearchComponent implements OnInit {
  protected destroyActions = new Subject<boolean>();
  //photoList: Photo[] = [];
  photos = new Photos();
  // types: any[] = [];
  // selectedType!: any;

  // stateOptions: any[] = [];
  // value1!: any;

  isLoading = false;
  imagesPerPage = 50;
  pageNumber = 1;
  selectedOrientationValues: string[] = [];

  fromDate!: Date;
  toDate!: Date;

  searchInOptions: any[] = [];
  selectedSearchInOptions: boolean = true;

  imageContentTypes: SelectItem[] = [];
  selectedImageContentTypes: SelectItem[] = [];

  constructor(public searchService: SearchService) {
    //enum keys
    this.selectedOrientationValues = Object.values(Orientation);

    this.searchInOptions = [
      { name: 'All ', value: true },
      { name: 'Tags', value: false },
    ];

    this.imageContentTypes = [
      { label: 'Photos', value: 0 },
      { label: 'Screenshots', value: 1 },
      { label: 'Illustration/Art', value: 2 },
      { label: 'Virtual Photography', value: 3 },
    ];

    this.selectedImageContentTypes = this.imageContentTypes;
  }

  ngOnInit(): void {
    this.search();
  }

  selectProject(e: any) {}

  search() {
    this.isLoading = true;
    this.searchService
      .searchImage(
        'dog',
        this.imagesPerPage,
        this.pageNumber,
        this.selectedOrientationValues.toString(),
        this.selectedSearchInOptions,
        this.fromDate,
        this.toDate
      )
      .pipe(takeUntil(this.destroyActions))
      .subscribe((result: PhotosRootModel) => {
        this.isLoading = false;
        console.log('result', result);
        this.photos = result.photos;
        //this.photoList = result.photos.photo;
      });
  }

  loadNext(event: any) {
    this.pageNumber = event.first / this.imagesPerPage + 1;
    this.search();
  }

  selectOrientation(value: Orientation) {
    if (this.selectedOrientationValues.includes(value)) {
      const index = this.selectedOrientationValues.indexOf(value, 0);
      this.selectedOrientationValues.splice(index, 1);
    } else {
      this.selectedOrientationValues.push(value);
    }
    this.search();
  }

  selectedOrientation(value: Orientation): boolean {
    return this.selectedOrientationValues.includes(value);
  }

  dateTakeChange(event: any) {
    this.search();
  }

  searchInChange(event: any) {
    this.search();
  }

  imageContentTypeChange(event: any) {
    console.log(this.imageContentTypes.map((a) => a.value).toString());
    this.search();
  }

  public get orientation() {
    return Orientation;
  }

  public ngOnDestroy() {
    this.destroyActions.next(true);
    this.destroyActions.complete();
  }
}
