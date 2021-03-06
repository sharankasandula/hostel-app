import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilterTextboxcomponentComponent } from './customers-list/filter-textboxcomponent/filter-textboxcomponent.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxcomponentComponent],
    exports:[CustomersComponent]
})
export class CustomersModule { }
