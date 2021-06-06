import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentification/user.service';
import { livraisonEntity } from 'src/app/model/livraison';
import { produitEntity } from 'src/app/model/produit';
import { USER } from 'src/app/model/user';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-detailscommande',
  templateUrl: './detailscommande.component.html',
  styleUrls: ['./detailscommande.component.css']
})
export class DetailscommandeComponent implements OnInit {
 idcom : any ;
 commande : any;
 produit : produitEntity;
 livreurs: USER[]=[];
 idprod:any;
 role="livreur";
  constructor(
    private activatedRoute:ActivatedRoute,
    private commandeservice:CommandeService,
    private userService:AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.idcom=params.id;
     })
     this.commande=this.getbyid(this.idcom);
     this.produit=this.commande.produit;
     this.livreurs;
     this.getbyrole(this.role);
     console.log("users");
     console.log(this.livreurs);

    }
    getbyid(code:any){
    this.commandeservice.getbyid(code).subscribe(data=>{
      this.commande=data;
      console.log(this.commande);
    });
  }

  getbyrole(test:any){
    this.userService.getbyrole(test).subscribe(data=>{
      this.livreurs=data

    }

    );
  }
  processForm(){
    console.log(this.commande);
    this.commande.approuver=1;
    this.commandeservice.update(this.commande,this.idcom).subscribe(
      (commande)=>{
        this.toaster.success(
          `votre commande du produit ${commande.produit.nom} a été approuvée avec succès`
        );
        this.router.navigate(['login']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
  updatecommande(comm,code:any){
    this.commandeservice.update(comm,code).subscribe(data=>{this.commande=data})

  }


  }


