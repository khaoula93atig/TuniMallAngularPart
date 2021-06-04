import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentification/user.service';
import { livraisonEntity } from 'src/app/authentification/livraison';
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
  constructor(
    private commandeService : CommandeService,
    private userservice : AuthService,
    private activatedRoute:ActivatedRoute,
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
      console.log(data);

    }
      )
  }



}
