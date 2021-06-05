import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  userurl="http://localhost:3000/user";
  getUsers(){
    return this.httpClient.get(this.userurl);
  }

  getUser(id): Observable<any> {
    return this.httpClient.get(`${this.userurl}/${id}`);
  }

  createUser(data): Observable<any> {
    return this.httpClient.post(this.userurl, data);
  }

  updateUser(id, data): Observable<any> {
    return this.httpClient.put(`${this.userurl}/${id}`, data);
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(`${this.userurl}/${id}`);
  }
  searchById(id): Observable<any> {
    return this.httpClient.get(`${this.userurl}?name=${id}`);
  }
}
