import { ProduitService } from 'src/app/produit/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  produit = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    nom:'',
    type: '',
    categorie: '',
    price: '',
    couleur: '',
    quantite: '',
    image: '',
    codeBar: '',
    shopNom: '',
  };
  submitted = false;
  constructor(private ProduitService:ProduitService) { }

  ngOnInit(): void {
  }
  createProduit(): void {
    const data = {
      nom: this.produit.nom,
      type: this.produit.type,
      categorie: this.produit.categorie,
      price: this.produit.price,
      couleur: this.produit.couleur,
      quantite: this.produit.quantite,
      image: this.produit.image,
      codeBar: this.produit.codeBar,
      shopNom: this.produit.shopNom,

    };

    this.ProduitService.createProduit(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduit(): void {
    this.submitted = false;
    this.produit = {
      createdAt:'',
      updatedAt:'',
      deletedAt:'',
      nom:'',
      type: '',
      categorie: '',
      price: '',
      couleur: '',
      quantite: '',
      image: '',
      codeBar: '',
      shopNom: '',
    };
  }
}
