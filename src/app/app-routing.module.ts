import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CaissesComponent } from './caisses/caisses.component';
import { CathegoryProduitComponent } from './cathegory-produit/cathegory-produit.component';
import { ClientsComponent } from './clients/clients.component';
import { FacturesComponent } from './factures/factures.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { UserComponent } from './user/user.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [
  {path: 'update_produit/:id', component:ModifierProduitComponent},
  {path: '', component:AjoutProduitComponent},
  {path: 'acceuil', component:HeaderComponent},
  {path: 'admin1', component:AdministrateurComponent},
  {path: 'employe', component:UtilisateursComponent},
  {path: 'caisses', component:CaissesComponent},
  {path: 'clients', component:ClientsComponent},
  {path: 'user', component:UserComponent},
  {path: 'cathegory_produit', component:CathegoryProduitComponent},
  {path: 'fournisseur', component:FournisseurComponent},
  {path: 'login', component:LoginComponent},
  {path: 'factures', component:FacturesComponent},
  {path: 'produits', component:ProduitsComponent},
  {path: 'ventes', component:VentesComponent}
  // {path: '/admin', component:AdministrateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule 
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
