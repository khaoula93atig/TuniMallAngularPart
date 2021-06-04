import { ProduitService } from './produit.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  data:any;
  constructor(private produit:ProduitService) { 
  }
  ngOnInit(): void {
    this.produit.getData().subscribe((result)=>{
      console.warn(result)
      this.data=result
    })
  }

}
