import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilterTextboxcomponentComponent } from './customers-list/filter-textboxcomponent/filter-textboxcomponent.component';

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxcomponentComponent],
    exports:[CustomersComponent]
})
export class CustomersModule { }
