import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiquesComponent } from './boutique/boutiques/boutiques.component';
import { ProduitsComponent } from './produit/produits/produits.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { ComplaintComponent } from './complaint/complaint/complaint.component';
import { HeaderComponent } from './composants/header/header.component';
import { TeamComponent } from './composants/team/team.component';
import { LivreurComponent } from './livreur/livreur/livreur.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BoutiquesComponent,
    ProduitsComponent,
    CommandeComponent,
    ComplaintComponent,
    HeaderComponent,
    TeamComponent,
    LivreurComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
