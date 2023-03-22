import { Component, OnInit } from '@angular/core';
import { produit } from '../models/produits.model';
import { CathegoryProduitService } from '../Services/cathegory-produit.service';
import { FournisseursService } from '../Services/fournisseurs.service';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent /*implements OnInit */{

  libelle = "";
  prix = 0;
  quantite = 0;

  id_cath_prod=0;

  id_four =0;

  fournisseurs: any = [];

  cathegory_produits: any = [];

  produit : produit;

  produits: any = [];
  

  constructor(private Httpservice: ProduitService, private Httpservice1: CathegoryProduitService, private Httpservice2: FournisseursService ) {
    this.Get();
    this.produit = new produit();
  }
  

  submit() {
    let data={
      lib_prod:this.libelle,
      prix_prod:this.prix,
      qt_prod:this.quantite ,
      cathegoryproduit:{
         "id_cath_prod": this.id_cath_prod
        },
       fournisseurs:{
         "id_four": this.id_four
       }
    }

    console.log(data);
      
    this.Httpservice.Post(data)

    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.produits=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }


   ngOnInit(): void {
    this.Httpservice1.Get().subscribe(response=>{
       this.cathegory_produits=response
     })

    this.Httpservice2.Get().subscribe(response=>{
    this.fournisseurs=response
     })

  

   }

}
