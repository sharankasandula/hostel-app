import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
import { ICustomer, ICustDetails } from '../shared/interfaces';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerDetails = [];
  customer:ICustomer;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getCustomerDetails(id).subscribe((customerDetails: ICustDetails[]) => {
      this.customerDetails = customerDetails;
    });
    
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });


    
  }

}
