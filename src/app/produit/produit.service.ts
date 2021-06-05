import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllJSDocTags } from 'typescript';
import { Observable, throwError } from 'rxjs';
import { produitEntity } from '../model/produit';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url="http://localhost:3000/produit/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) {

  }

  getProduits(){
      return this.http.get(this.url);
    }

  getbyid(codeBar:string): Observable<produitEntity> {
      return this.http.get<produitEntity>(this.url+codeBar)
        .pipe(
          catchError(this.errorHandler)
        )
  }

    errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
