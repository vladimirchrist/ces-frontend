import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-requisito-info',
  templateUrl: './requisito-info.component.html',
  styleUrls: ['./requisito-info.component.css']
})
export class RequisitoInfoComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Informações do Requisito');
  }

}
