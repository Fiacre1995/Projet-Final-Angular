import { Component } from '@angular/core';
import { ProduitService } from '../Services/produit.service';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent {

  libelle = "";
  prix = 0;
  produit: any = [];

  constructor(private Httpservice: ProduitService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({lib_prod:this.libelle,prix_prod:this.prix})
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.produit=response)
  }

  Delete(Data:any) {
    
    window.location.reload();
  }

}
