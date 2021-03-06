import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UsuarioModule { }
