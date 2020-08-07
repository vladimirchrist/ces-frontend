import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, DialogData } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Informações da Sprint');
  }

  iniciarSprint(): void {
    const config = {
      data: {
        title: 'Iniciar Sprint',
        message: 'Deseja iniciar a sprint?'
      } as DialogData
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, config)
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.router.navigate(['/backlog'])
      }
    })
  }

}
