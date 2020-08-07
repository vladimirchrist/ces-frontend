import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { SprintRoutingModule } from './sprint-routing.module';

@NgModule({
  declarations: [SprintFormComponent, SprintListComponent, SprintDetailsComponent],
  imports: [
    CommonModule,
    SprintRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class SprintModule { }
