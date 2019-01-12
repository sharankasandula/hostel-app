import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersModule } from "./customers/customers.module";
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule,
    NgbModule,
    CoreModule,
    CustomerDetailsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
