import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:3000/user";
  constructor(private http:HttpClient) { 

  }
  getUsers(){
      return this.http.get(this.url);
    }
}
