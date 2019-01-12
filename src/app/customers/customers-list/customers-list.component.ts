import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: any[] = [];
  @Input() get customers(): any[] {
    return this._customers;
  }

  set customers(value: any[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
    }
  }
  

  filteredCustomers:any[] = [];

  constructor(private sorterService: SorterService ) { }

  ngOnInit() {

  }

  filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: any) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.surname.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.region.toLowerCase().indexOf(data.toLowerCase()) > -1 
            });
          } else {
            this.filteredCustomers = this.customers;
          }
    }
  sort(prop: string){
    this.sorterService.sort(this.filteredCustomers,prop);
  }
}
