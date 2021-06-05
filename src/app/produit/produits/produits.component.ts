import { ProduitService } from '../produit.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any;
  constructor(private produit:ProduitService) {
  }
  ngOnInit(): void {
    this.produit.getProduits().subscribe((result)=>{
      this.produits=result;
    })
  }

}
