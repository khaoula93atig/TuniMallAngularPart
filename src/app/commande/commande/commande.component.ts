import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { livraisonEntity } from 'src/app/model/livraison';
import { CommandeService } from '../commande.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { produitEntity } from 'src/app/model/produit';
import { ProduitService } from 'src/app/produit/produit.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
    produit:produitEntity;
    codeBar:any;
    commande:livraisonEntity;
  constructor(
    private commandeService :CommandeService,
    private toaster: ToastrService,
    private router: Router,
    private produitservice:ProduitService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.codeBar=params.id;

      })
    this.getbycodebar(this.codeBar);
    console.log(this.codeBar);
    console.log(this.produit);

    this.commande=new livraisonEntity();
    this.commande.produit=new produitEntity();
    }

  processForm(){
    console.log(this.produit);
    this.commande.produit=this.produit;
    this.commande.cout=this.commande.quantiteProduit*this.produit.price;
    console.log(this.commande);

    this.commandeService.create(this.commande).subscribe(
      (commande)=>{
        this.toaster.success(
          `votre commande du produit ${commande.produit.nom} a été envoyée avec succès`
        );
        this.router.navigate(['commande/detail',commande.id]);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
  getbycodebar(code:any){
    this.produitservice.getbyid(code).subscribe(data=>{
      this.produit=data;
      console.log(this.produit);
    }

    );
  }

}
