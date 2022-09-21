import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Orientation, SearchFilterModel } from 'src/app/shared/model';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
})
export class ImageFilterComponent implements OnInit {
  @Output() onSelect = new EventEmitter<SearchFilterModel>();

  selectedOrientationValues: string[] = [];

  fromDate!: Date;
  toDate!: Date;
  maxDateValue = new Date();

  searchInOptions: any[] = [];
  selectedSearchInOptions: boolean = true;

  imageContentTypes: any[] = [];
  selectedImageContentTypes: any[] = [];
  constructor() {
    this.selectedOrientationValues = Object.values(Orientation);

    this.searchInOptions = [
      { name: 'All ', value: true },
      { name: 'Tags', value: false },
    ];

    this.imageContentTypes = [
      { label: 'Photos', key: 'photo', value: 0 },
      { label: 'Screenshots', key: 'screenshot', value: 1 },
      { label: 'Illustration/Art', key: 'illustration', value: 2 },
      { label: 'Virtual Photography', key: 'vphoto', value: 3 },
    ];

    this.selectedImageContentTypes = this.imageContentTypes;
  }

  ngOnInit(): void {}

  selectOrientation(value: Orientation) {
    if (this.selectedOrientationValues.includes(value)) {
      const index = this.selectedOrientationValues.indexOf(value, 0);
      this.selectedOrientationValues.splice(index, 1);
    } else {
      this.selectedOrientationValues.push(value);
    }
    this.filterEmit();
  }

  selectedOrientation(value: Orientation): boolean {
    return this.selectedOrientationValues.includes(value);
  }
  public get orientation() {
    return Orientation;
  }

  // searchInChange(event: any) {
  //   this.filterEmit();
  // }

  // imageContentTypeChange(event: any) {
  //   this.filterEmit();
  // }

  filterEmit() {
    this.onSelect.emit(
      new SearchFilterModel({
        orientation: this.selectedOrientationValues.toString(),
        searchInText: this.selectedSearchInOptions,
        contentType: this.selectedImageContentTypes
          .map((a) => a.value)
          .toString(),
        fromDate: this.fromDate,
        toDate: this.toDate,
      })
    );
  }
}
