import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { ConfirmDialogComponent, DialogData } from 'src/app/shared/confirm-dialog/confirm-dialog.component'
import { NotificationService } from '../../core/services/notification.service'

@Component({
  selector: 'app-requisito-form',
  templateUrl: './requisito-form.component.html',
  styleUrls: ['./requisito-form.component.css']
})
export class RequisitoFormComponent implements OnInit {

  constructor(private dialog: MatDialog, private notification: NotificationService,
    private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Novo Requisito')
  }

  submit(): void {
    this.cadastrar()
  }

  cadastrar(): void {
    const config = {
      data: {
        title: 'Salvar alterações',
        message: 'Deseja salvar as alterações realizadas no registro?'
      } as DialogData
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, config)
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.router.navigate(['/backlog'])
        this.notification.success('Requisito criado com sucesso')
      }
    })
  }

}
