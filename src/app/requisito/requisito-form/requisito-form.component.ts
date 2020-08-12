import { UserStory } from './../../shared/models/userStory';
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { ConfirmDialogComponent, DialogData } from 'src/app/shared/confirm-dialog/confirm-dialog.component'
import { NotificationService } from '../../core/services/notification.service'
import { Requisito } from '../../shared/models/requisito';
import { RequisitoService } from 'src/app/core/services/requisito.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-requisito-form',
  templateUrl: './requisito-form.component.html',
  styleUrls: ['./requisito-form.component.css']
})
export class RequisitoFormComponent implements OnInit {

  requisito: Requisito = {
    nome: '',
    observacoes: '',
    estado: 'novo',
    userStory: null
  }

  userStory : UserStory = { 
    comoUm: '',
    acao: '',
    paraQueSejaPossivel: '',
    tema: ''
  }
  

  constructor(private dialog: MatDialog, private notification: NotificationService,
    private router: Router, private titleService: Title, private requisitoService : RequisitoService) { }

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
        this.requisito.userStory = this.userStory;
        this.requisitoService.salvar(this.requisito).subscribe();
        this.router.navigate(['/backlog'])
        this.notification.success('Requisito criado com sucesso')
      }
    })
  }

}
