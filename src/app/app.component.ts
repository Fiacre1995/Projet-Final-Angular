import { Component } from '@angular/core';
import { ProduitService } from './Services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'essai1';
  libelle = "";
  prix = 0;

  produit: any = [];

  constructor(private Httpservice: ProduitService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({lib_prod:this.libelle,prix_prod:this.prix})
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.produit=response)
  }

  
}


