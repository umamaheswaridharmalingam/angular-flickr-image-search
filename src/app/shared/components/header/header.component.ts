import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  public searchForm!: FormGroup;
  defaultSearchText = 'Nature';
  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: [
        this.defaultSearchText,
        [Validators.required, Validators.maxLength(254)],
      ],
    });
    this.coreService.setSearchValue(this.defaultSearchText);
  }

  // convenience getter for easy access to form fields
  public get formControls() {
    return this.searchForm.controls;
  }

  onSubmit() {
    this.coreService.setSearchValue(
      this.searchForm.controls['searchText'].value
    );
  }
}
