import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BacklogService {

  private backlogUrl: string = `${environment.apiUrl}/backlog`

  constructor(private http: HttpClient) { }

  public getBacklog(config: any): Observable<any> {
    let params = new HttpParams();

    params = params.append('sprint', config.numeroSprint)
    params = params.append('nome', config.nomeRequisito)

    return this.http.get<any>(this.backlogUrl, { params })
  }

}
