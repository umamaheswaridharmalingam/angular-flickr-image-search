import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageSearchComponent } from './image-search/image-search.component';

import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageFilterComponent } from './image-filter/image-filter.component';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { CoreService } from './core.service';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    CoreComponent,
    PageNotFoundComponent,
    ImageSearchComponent,
    ImageFilterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ImageModule,
    PanelModule,
    MenubarModule,
    MenuModule,
    SelectButtonModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    CalendarModule,
    MultiSelectModule,
    AccordionModule,
    CheckboxModule,
    TooltipModule,
    BlockUIModule,
    GalleriaModule,
    ProgressBarModule,
  ],
  providers: [CoreService],
})
export class CoreModule {}
