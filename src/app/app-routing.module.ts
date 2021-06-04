import { CommandeComponent } from './commande/commande/commande.component';
import { AdminComponent } from './administration/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { BoutiquesComponent } from './boutique/boutiques/boutiques.component';
import { ComplaintComponent } from './complaint/complaint/complaint.component';
import { HeaderComponent } from './composants/header/header.component';
import { TeamComponent } from './composants/team/team.component';
import { ProduitsComponent } from './produit/produits/produits.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produit', component: ProduitsComponent},
  {path: 'boutique', component: BoutiquesComponent},
  {path: 'apropos', component: TeamComponent},
  {path: 'login', component: AuthComponent},
  {path: 'service', component: ComplaintComponent},
  {path: 'commande/:id',component: CommandeComponent},
  {path: 'commande', component: CommandeComponent},
  {path:'auth',children :[{ path: ':id', component:CommandeComponent}]},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
