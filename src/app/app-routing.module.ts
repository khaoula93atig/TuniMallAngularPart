import { HomeComponent } from './home/home.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { BoutiquesComponent } from './boutique/boutiques/boutiques.component';
import { ComplaintComponent } from './complaint/complaint/complaint.component';
import { TeamComponent } from './composants/team/team.component';
import { ProduitsComponent } from './produit/produits/produits.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produit', component: ProduitsComponent},
  {path: 'boutique', component: BoutiquesComponent},
  {path: 'apropos', component: TeamComponent},
  {path: 'login', component: AuthComponent},
  {path: 'service', component: ComplaintComponent},
  {path: 'commande',component: CommandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
