import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { livraisonEntity } from 'src/app/model/livraison';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-adcommande',
  templateUrl: './adcommande.component.html',
  styleUrls: ['./adcommande.component.css']
})
export class AdcommandeComponent implements OnInit {
  user: any;
  id :any;
  role: "livreur";
  listcommande:livraisonEntity[];
  commande:livraisonEntity;
  constructor(
    private commandeService : CommandeService,
    private userservice : UserAuthService,
    private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;

      })
    this.user=this.userservice.getbyid(this.user,this.id);
    this.role=this.user.role;
    this.getall();
    this.listcommande;
  }
  getall(){
    this.commandeService.getAll().subscribe(data =>{
      this.listcommande =data
    }
      )
  }
  supprimer(com:livraisonEntity){
    this.commandeService.delete(com.id).subscribe(
      (data) => {
        this.toastr.success(
          `La commande de ${com.id} a été supprimé avec succès`
        );
        this.router.navigate(['login/admin',this.role]);
      },
      (erreur) => {
        this.toastr.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }
    );
  }
}


