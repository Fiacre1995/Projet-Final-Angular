import { Component } from '@angular/core';
import { ProduitService } from '../Services/produit.service';
import { VentesService } from '../Services/ventes.service';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent {

  quantite = "";
  produit = "";

  produits: any = [];

  ventes: any = [];
  result!: number;

  constructor(private Httpservice: VentesService, private Httpservice1: ProduitService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post(
      {
       qt_vente:this.quantite,
       produit:{
        "id_prod": this.produit
       }
       
      })

    this.calculateResult();
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.ventes=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }

  ngOnInit(): void {
    this.Httpservice1.Get().subscribe(response=>{
       this.produits=response
       this.calculateResult();
     })

    this.Httpservice.Get().subscribe(response=>{
       this.ventes=response
       this.calculateResult();
     })

   }
  
   calculateResult() {
    if (this.ventes && this.produits) {
      this.produits.qt_prod = this.produits.qt_prod - this.ventes.qt_vente;
    }
  }


}
