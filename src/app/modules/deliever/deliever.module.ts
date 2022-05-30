import { DateFuntions } from 'src/app/shared/functions/date.functions';
import { CanActivateToken } from './../../security/canActivateToken';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelieverRoutingModule } from './deliever-routing.module';
import { DelieverComponent } from './deliever.component';
import { DriverNewsComponent } from './components/driver-news/driver-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TransversalComponentsModule } from '../transversal-components/transversal-components.module';
import { BillingComponent } from './components/driver-news/components/billing/billing.component';
import { PickingDriversComponent } from './components/driver-news/components/picking-drivers/picking-drivers.component';
import { LiveOperationComponent } from './components/driver-news/components/live-operation/live-operation.component';
import { DriversComponent } from './components/driver-news/components/drivers/drivers.component';
import { NoveltyProductsComponent } from './components/driver-news/components/novelty-products/novelty-products.component';


@NgModule({
  declarations: [
    DelieverComponent,
    DriverNewsComponent,
    BillingComponent,
    PickingDriversComponent,
    LiveOperationComponent,
    DriversComponent,
    NoveltyProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TransversalComponentsModule,
    DelieverRoutingModule,
  ],
  providers: [DateFuntions, CanActivateToken],
})
export class DelieverModule { }
