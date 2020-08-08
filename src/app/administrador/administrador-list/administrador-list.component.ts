import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/core/services/administrador.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmDialogComponent, DialogData } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Administrador } from 'src/app/shared/models/administrador';
import { MatTable } from '@angular/material/table';
import { AdministradorReadDataSource } from './administrador-read-datasource';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Administrador>;
  dataSource: AdministradorReadDataSource;

  displayedColumns: string[] = ['position', 'nome', 'username', 'ativo', 'acoes']

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  config = {
    nome: "",
    pagina: 0,
    itemsPorPagina: 20
  }

  search = new FormGroup({
    nome: new FormControl("")
  })

  nome = ""

  constructor(private administradorService: AdministradorService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.dataSource = new AdministradorReadDataSource(this.administradorService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  editar(id: number): void {
    console.log('/administrador/novo/' + id)
    this.router.navigateByUrl('/administradores/novo/' + id);
  }

  excluir(id: number): void {
    const config = {
      data: {
        title: 'Confirmar Exclusão',
        message: 'Deseja excluir o administrador?'
      } as DialogData
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, config)
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.administradorService.excluir(id).subscribe(() => {
          this.notificationService.success('Administrador excluído com sucesso')
          //this.listarAdministradores()
          this.dataSource.deleteAdministrador(id);
        })
      }
    })
  }

}
