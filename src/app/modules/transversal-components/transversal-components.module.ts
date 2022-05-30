import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionOverScreens } from './../../security/permissionOverScreens';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarGenericComponent } from './components/navbar-generic/navbar-generic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [NavbarGenericComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PermissionOverScreens],
  exports: [
    NavbarGenericComponent
  ]
})
export class TransversalComponentsModule { }
