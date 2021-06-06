import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentification/auth.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { CommandeService } from 'src/app/commande/commande.service';
import { livraisonEntity } from 'src/app/model/livraison';
import { USER } from 'src/app/model/user';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  listcommande:livraisonEntity[];
  id:any;
  user:any;
  role:any;
  commande:livraisonEntity;

  constructor(
    public authService:AuthService,
    public router: Router,
    private toaster: ToastrService,
    private commandeService : CommandeService,
    private userservice : UserAuthService,
    private activatedRoute:ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;

      })
    this.user=this.userservice.getbyid(this.user,this.id);
    this.role=this.user.role;
    this.getbylivreur();
    this.listcommande;

  }



  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['login']);
  }
  getbylivreur(){
    this.commandeService.getbylivreur().subscribe(data =>{
      this.listcommande =data
    }
      )
      console.log(this.listcommande);
  }

  Retour(comm:livraisonEntity){
    comm.terminer=true;
    this.commandeService.update(comm,comm.id).subscribe(
      (commande)=>{
        this.toaster.success(
          `la commande ${comm.id} a été terminée avec succès`
        );
        this.router.navigate(['login/livreur']);
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
