import { AdcommandeComponent } from './../../commande/adcommande/adcommande.component';
import { AdminService } from './../admin.service';
import { ProduitService } from './../../produit/produit.service';
import { CommandeService } from 'src/app/commande/commande.service';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produits:any;
  users:any;
  commandes:any;
  constructor(private produit:ProduitService,private user:AdminService,private command:CommandeService) { }
  ngOnInit(): void {
    this.produit.getProduits().subscribe((result)=>{
      this.produits=result
    })
    this.user.getUsers().subscribe((result)=>{
      this.users=result
    })
    this.command.getAll().subscribe((result)=>{
      this.commandes=result
    })

  }
}
