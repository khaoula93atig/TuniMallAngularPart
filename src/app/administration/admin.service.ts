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
  users: any;
  currentUser = null;
  currentIndex = -1;
  id = '';
  
}
