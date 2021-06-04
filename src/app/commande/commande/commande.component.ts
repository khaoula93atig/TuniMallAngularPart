import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { livraisonEntity } from 'src/app/model/livraison';
import { AuthService } from 'src/app/authentification/user.service';
import { CommandeService } from '../commande.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(
    private commandeService :CommandeService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  processForm(monFormulaire: NgForm){
    this.commandeService.create(monFormulaire.value).subscribe(
      (commande)=>{
        this.toaster.success(
          `votre commande du produit ${commande.produit.codeBar} a été envoyée avec succès`
        );
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
}
