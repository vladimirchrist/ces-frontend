import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from '../shared/layout/layout.component'
import { BacklogHomeComponent } from './backlog-home/backlog-home.component'

const routes: Routes = [
  {
    path: 'backlog',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: BacklogHomeComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacklogRoutingModule { }
