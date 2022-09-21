import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AccordionModule } from 'primeng/accordion';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    InputMaskModule,
    KeyFilterModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    ToggleButtonModule,
    DropdownModule,
    CardModule,
    RippleModule,
    SidebarModule,
    AvatarModule,
    TieredMenuModule,
    AccordionModule,
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [SearchService],
})
export class SharedModule {}
