import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  url="http://localhost:3000/shop";
  constructor(private http:HttpClient) { 

  }
  getData(){
      return this.http.get(this.url);
    }
}
