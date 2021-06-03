import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllJSDocTags } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url="http://localhost:3000/produit";
  constructor(private http:HttpClient) { 

  }
  getData(){
      return this.http.get(this.url);
    }
}
