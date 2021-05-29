import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(auth: {email: string, password: string}) {
    return this.http.post("localhost:3000/user/login", auth);
  }
}
