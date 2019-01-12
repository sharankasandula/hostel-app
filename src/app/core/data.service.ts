import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, ICustDetails } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        map(customers => {
          let customer = customers.filter((cust: ICustomer) => cust.id === id);
          return (customer && customer.length) ? customer[0] : null;
        }),
        catchError(this.handleError)
      )
  }



  getCustomerDetails(id: number): Observable<ICustDetails[]> {
    return this.http.get<ICustDetails[]>(this.baseUrl + 'customerDetails.json')
      .pipe(
        map(custDetails => {
          let currentCustDetails = custDetails.filter((cust: ICustDetails) => cust.customerId === id);
          return currentCustDetails;
        }),
        catchError(this.handleError)
      );
  }


  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

}