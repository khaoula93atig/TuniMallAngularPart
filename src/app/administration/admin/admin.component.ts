import { BoutiqueService } from './../../boutique/boutique.service';
import { UserService } from '../user/user.service';
import { AdminService } from './../admin.service';
import { ProduitService } from './../../produit/produit.service';
import { CommandeService } from 'src/app/commande/commande.service';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/authentification/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produits:any;
  users:any;
  commandes:any;
  boutiques:any;
  role:any;
  id:any;
  constructor(private produit:ProduitService,
    private command:CommandeService,
    private user:UserService,
    private boutique:BoutiqueService,
    public authService:AuthService,
    public router: Router,
    private toaster: ToastrService,
    ) { }
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
    this.boutique.getBoutiques().subscribe((result)=>{
      this.boutiques=result;
    })
  }
  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['login']);
  }

}
