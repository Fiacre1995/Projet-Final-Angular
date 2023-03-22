import { Component } from '@angular/core';
import { CathegoryProduitService } from '../Services/cathegory-produit.service';

@Component({
  selector: 'app-cathegory-produit',
  templateUrl: './cathegory-produit.component.html',
  styleUrls: ['./cathegory-produit.component.css']
})
export class CathegoryProduitComponent {

  libelle = "";

  cathegory_produit: any = [];

  constructor(private Httpservice: CathegoryProduitService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({lib_cath_prod:this.libelle})
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>{
      console.log(response)
      this.cathegory_produit=response
    })
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }
  
}
