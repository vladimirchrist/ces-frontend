import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, DialogData } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css']
})
export class SprintFormComponent implements OnInit {

  constructor(private dialog: MatDialog, private notification: NotificationService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nova Sprint');
  }

  cadastrar(): void {
    const config = {
      data: {
        title: 'Confirmação',
        message: 'Deseja criar a sprint?'
      } as DialogData
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, config)
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.router.navigate(['/backlog'])
        this.notification.success('Sprint criada com sucesso')
      }
    })
  }

}
