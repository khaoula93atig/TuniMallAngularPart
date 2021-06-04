import { AdminService } from './../admin.service';
import { USER } from './../../authentification/user';
import { ProduitService } from './../../produit/produit.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produits:any;
  users:any;
  constructor(private produit:ProduitService,private user:AdminService) { }
  ngOnInit(): void {
    this.produit.getProduits().subscribe((result)=>{
      this.produits=result
    })
    this.user.getUsers().subscribe((result)=>{
      this.users=result
    })

  }
}
