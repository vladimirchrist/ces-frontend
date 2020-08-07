import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'administradores',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'backlog',
    loadChildren: () => import('./backlog/backlog.module').then(m => m.BacklogModule)
  },
  {
    path: 'requisito',
    loadChildren: () => import('./requisito/requisito.module').then(m => m.RequisitoModule)
  },
  {
    path: 'sprints',
    loadChildren: () => import('./sprint/sprint.module').then(m => m.SprintModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: '',
    redirectTo: 'backlog',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'backlog',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
