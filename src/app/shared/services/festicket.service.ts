import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FesticketService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:4200/api/v1/festivals';

  getMenu(): Observable<any[]> {
    return this.http
      .get(this.url, {
        headers: new HttpHeaders()
          .set(
            'Authorization',
            'Token 4472fd1e0aa3d29f4ada9e92a0cbb92d6cf5bae9'
          )
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Methods', 'GET')
          .set('Access-Control-Allow-Origin', '*')
      })
      .pipe(catchError(this.handleError), map(this.jsonToModel));
  }

  private handleError(error: any): Observable<any> {
    console.log('Erro na requisição => ', error);
    return throwError(error);
  }

  private jsonToModel(model: any): any {
    return model;
  }
}
