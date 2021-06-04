import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { livraisonEntity } from 'src/app/authentification/livraison';
import { AuthService } from 'src/app/authentification/user.service';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
