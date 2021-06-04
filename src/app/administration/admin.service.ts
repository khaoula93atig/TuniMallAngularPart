import { Observable, throwError } from 'rxjs';
import { USER } from './../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:3000/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { 

  }
  
  getUsers(){
      return this.http.get(this.url);
    }
  getbyUserid(user:USER,id:string): Observable<USER> {
      return this.http.get<USER>(this.url+id)
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
    updateUser( user:USER, id :string): Observable<USER> {
      return this.http.put<USER>(this.url + id , JSON.stringify(user),this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
    }
}
