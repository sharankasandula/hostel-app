import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

const routes: Routes = [
    { path: 'customer/:id', component: CustomerDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerDetailsRoutingModule {

}