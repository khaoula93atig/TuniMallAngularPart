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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './authentification/jwt.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './administration/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdcommandeComponent } from './commande/adcommande/adcommande.component';

import { DetailscommandeComponent } from './commande/detailscommande/detailscommande.component';
import { UserComponent } from './administration/user/user.component';
import { AddBoutiqueComponent } from './administration/boutique/add-boutique/add-boutique.component';
import { AddproduitComponent } from './administration/produit/addproduit/addproduit.component';
import { AdmincomplaintComponent } from './complaint/admincomplaint/admincomplaint.component';


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
    AdminComponent,
    HomeComponent,
    AdcommandeComponent,

    DetailscommandeComponent,

    UserComponent,

    AddBoutiqueComponent,

    AddproduitComponent,

    AdmincomplaintComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
}
)
export class AppModule { }
