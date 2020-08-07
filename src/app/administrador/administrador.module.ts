import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AdministradorFormComponent } from './administrador-form/administrador-form.component';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorRoutingModule } from './administrador-routing.module';

@NgModule({
  declarations: [AdministradorFormComponent, AdministradorListComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdministradorModule { }
