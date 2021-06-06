import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shopEntity } from '../model/shop';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  boutiqueurl="http://localhost:3000/shop";
  constructor(private http:HttpClient) {

  }
  getAllboutiques(): Observable<shopEntity[]> {
    return this.http.get<shopEntity[]>(this.boutiqueurl);
  }
  getBoutiques(){
      return this.http.get(this.boutiqueurl);
    }
    getBoutique(id): Observable<any> {
      return this.http.get(`${this.boutiqueurl}/${id}`);
    }

    createBoutique(data): Observable<any> {
      return this.http.post(this.boutiqueurl, data);
    }

    updateBoutique(id, data): Observable<any> {
      return this.http.put(`${this.boutiqueurl}/${id}`, data);
    }

    deleteBoutique(id): Observable<any> {
      return this.http.delete(`${this.boutiqueurl}/${id}`);
    }
    searchById(id): Observable<any> {
      return this.http.get(`${this.boutiqueurl}?name=${id}`);
    }
}
