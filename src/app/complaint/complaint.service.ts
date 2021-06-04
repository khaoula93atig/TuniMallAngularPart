import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { complainEntity } from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiServer = "http://localhost:3000/complain";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  getAll(): Observable<complainEntity[]> {
    return this.http.get<complainEntity[]>(this.apiServer) .pipe(
      catchError(this.errorHandler))

  }
  create(complain:complainEntity): Observable<complainEntity> {
    return this.http.post<complainEntity>(this.apiServer ,JSON.stringify(complain), this.httpOptions)
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
      errorMessage = "Error Code: ${error.status}\nMessage: ${error.message}";
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
