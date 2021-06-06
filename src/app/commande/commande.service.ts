import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { livraisonEntity } from '../model/livraison';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiServer = "http://localhost:3000/livraison/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  getAll(): Observable<livraisonEntity[]> {
    return this.http.get<livraisonEntity[]>(this.apiServer) .pipe(
      catchError(this.errorHandler))

  }
  create(livraison:livraisonEntity): Observable<livraisonEntity> {
    return this.http.post<livraisonEntity>(this.apiServer ,JSON.stringify(livraison), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  update(livraison:livraisonEntity,id :string): Observable<livraisonEntity> {
    return this.http.put<livraisonEntity>(this.apiServer + id , JSON.stringify(livraison),this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  delete(id: string){
    return this.http.delete<livraisonEntity>(this.apiServer +  id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getbyid(id:string): Observable<livraisonEntity> {
    return this.http.get<livraisonEntity>(this.apiServer+id)
      .pipe(
        catchError(this.errorHandler)
      )

}
getbylivreur(): Observable<livraisonEntity[]> {
  return this.http.get<livraisonEntity[]>(this.apiServer+"livreur")
    .pipe(
      catchError(this.errorHandler)
    )}

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = "Error Code: ${error.status}\nMessage: ${error.message}";
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

