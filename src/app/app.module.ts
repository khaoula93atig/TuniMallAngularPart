import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiquesComponent } from './boutique/boutiques/boutiques.component';
import { ProduitsComponent } from './produit/produits/produits.component';
import { ServiceComponent } from './produit/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiquesComponent,
    ProduitsComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
