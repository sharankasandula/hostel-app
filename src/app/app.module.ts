import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CustomersModule } from "./customers/customers.module";
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DataService } from './core/data.service';
import { SorterService } from './core/sorter.service';
// import { AppRoutingModule } from './app-routing.module';
// import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomersComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule,
    NgbModule,
    HttpClientModule
    // AppRoutingModule,
  ],
  providers: [DataService,SorterService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
