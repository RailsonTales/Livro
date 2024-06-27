
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livro } from '../Livro';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'https://localhost:7208/api/Livro';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch livros list
  getLivros(): Observable<Livro> {
    return this.http
      .get<Livro>(this.apiURL + '/livros')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch livro
  getLivro(id: any): Observable<Livro> {
    return this.http
      .get<Livro>(this.apiURL + '/livros/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create livro
  createLivro(livro: any): Observable<Livro> {
    return this.http
      .post<Livro>(
        this.apiURL + '/livros',
        JSON.stringify(livro),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update livro
  updateLivro(id: any, livro: any): Observable<Livro> {
    return this.http
      .put<Livro>(
        this.apiURL + '/livros/' + id,
        JSON.stringify(livro),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete livro
  deleteLivro(id: any) {
    return this.http
      .delete<Livro>(this.apiURL + '/livros/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}