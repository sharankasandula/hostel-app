import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, CustomerDetailsRoutingModule, SharedModule],
  declarations: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
