import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FesticketService {
  constructor(private http: HttpClient) {}
  private url = 'https://www.festicket.com/api/v1/festivals';

  getMenu(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic 4472fd1e0aa3d29f4ada9e92a0cbb92d6cf5bae9'
      })
    };
    debugger;
    return this.http
      .get<any>(this.url, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Basic 4472fd1e0aa3d29f4ada9e92a0cbb92d6cf5bae9'
        )
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
