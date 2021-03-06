import { AddproduitComponent } from './administration/produit/addproduit/addproduit.component';
import { AddBoutiqueComponent } from './administration/boutique/add-boutique/add-boutique.component';
import { LivreurComponent } from './livreur/livreur/livreur.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { AdminComponent } from './administration/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { BoutiquesComponent } from './boutique/boutiques/boutiques.component';
import { ComplaintComponent } from './complaint/complaint/complaint.component';
import { TeamComponent } from './composants/team/team.component';
import { ProduitsComponent } from './produit/produits/produits.component';
import { DetailscommandeComponent } from './commande/detailscommande/detailscommande.component';
import { UserComponent } from './administration/user/user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produit', component: ProduitsComponent},
  {path: 'boutique', component: BoutiquesComponent},
  {path: 'apropos', component: TeamComponent},
  {path: 'login',
    children:[
      {path: '', component: AuthComponent },
      {path: 'admin/:role',component: AdminComponent},
      {path:'livreur/:role',component: LivreurComponent},
      {path: 'admin/user/add', component: UserComponent}
]},
  {path: 'complain', component: ComplaintComponent},
  {path:'detail/:id',component:DetailscommandeComponent},
  {path:'commande',children: [
    {path:':id',component: CommandeComponent},

]},
  //{path:'auth',children :[{ path: ':id', component:CommandeComponent}]},
  {path: 'admin', component: AdminComponent},

  {path: 'commande/:id',component: CommandeComponent},
  {path: 'commande', component: CommandeComponent},
  {path:'auth',children :[{ path: ':id', component:CommandeComponent}]},
  {path: 'admin', component: AdminComponent},
  //{path: 'admin/user/add', component: UserComponent},
  {path: 'admin/boutique/add', component: AddBoutiqueComponent},
  {path: 'admin/produit/add', component: AddproduitComponent},
  {path: '**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
