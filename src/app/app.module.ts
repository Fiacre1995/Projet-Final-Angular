import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { FacturesComponent } from './factures/factures.component';
import { CaissesComponent } from './caisses/caisses.component';
import { ClientsComponent } from './clients/clients.component';
import { CathegoryProduitComponent } from './cathegory-produit/cathegory-produit.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, ROUTES } from '@angular/router';
import { VentesComponent } from './ventes/ventes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ModifierProduitComponent,
    AjoutProduitComponent,
    AdministrateurComponent,
    UtilisateursComponent,
    ProduitsComponent,
    FacturesComponent,
    CaissesComponent,
    ClientsComponent,
    CathegoryProduitComponent,
    FournisseurComponent,
    LoginComponent,
    VentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
