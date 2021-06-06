import { BoutiqueService } from './../../boutique/boutique.service';
import { UserService } from '../user/user.service';
import { AdminService } from './../admin.service';
import { ProduitService } from './../../produit/produit.service';
import { CommandeService } from 'src/app/commande/commande.service';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/authentification/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { USER } from 'src/app/model/user';
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
  id:string;
  public auth:any;
  role="adminachat";

  constructor(private produit:ProduitService,
    private command:CommandeService,
    private user:UserService,
    private boutique:BoutiqueService,
    public authService:AuthService,
    public router: Router,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService : UserAuthService
    ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;

      });
    this.userService.getbyid(this.auth,this.id);
    console.log(this.auth)
    console.log(this.role);

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
  Retour(){
    this.router.navigate(['login/admin/user/add']);
  }

}
