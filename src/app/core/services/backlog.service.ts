import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BacklogService {

  private backlogUrl: string = 'http://localhost:8080/backlog'

  constructor(private http: HttpClient) { }

  public getBacklog(config: any): Observable<any> {
    let params = new HttpParams();

    params = params.append('sprint', config.numeroSprint)
    params = params.append('nome', config.nomeRequisito)

    return this.http.get<any>(this.backlogUrl, { params })
  }

}
