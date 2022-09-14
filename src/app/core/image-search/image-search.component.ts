import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
})
export class ImageSearchComponent implements OnInit {
  types: any[] = [];
  selectedType!: any;

  stateOptions: any[] = [];
  value1!: any;

  constructor() {}

  ngOnInit(): void {}

  selectProject(e: any) {}
}
