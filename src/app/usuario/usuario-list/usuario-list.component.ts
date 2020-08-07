import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Title } from '@angular/platform-browser'

export interface Usuario {
  position: number
  nome: string
  username: string
  ativo: boolean
  email: string
  numProjetosCriados: number
  numProjetosEnvolvidos: number
}

const ELEMENT_DATA: Usuario[] = [
  { position: 1, nome: 'João', username: 'joao', ativo: false, email: 'joao@mail.com', numProjetosCriados: 10, numProjetosEnvolvidos: 5 },
  { position: 2, nome: 'Julio', username: 'joao', ativo: false, email: 'joao@mail.com', numProjetosCriados: 10, numProjetosEnvolvidos: 5 },
  { position: 3, nome: 'Zeca', username: 'joao', ativo: false, email: 'joao@mail.com', numProjetosCriados: 10, numProjetosEnvolvidos: 5 },
  { position: 4, nome: 'Leandro', username: 'joao', ativo: false, email: 'joao@mail.com', numProjetosCriados: 10, numProjetosEnvolvidos: 5 }
]

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nome', 'username', 'ativo', 'email', 'numProjetosCriados', 'numProjetosEnvolvidos', 'acoes']
  dataSource = new MatTableDataSource<Usuario>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Usuários');
    this.dataSource.paginator = this.paginator;
  }

}
