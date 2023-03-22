import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../ajout-produit/InterfaceProduit';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent {

  labelle = "";
  prix = 0;

  produit: any = [];
  constructor(private Httpservice: ProduitService, private route: ActivatedRoute) {}

  Update(){
    this.Httpservice.Update({lib_prod:this.labelle,prix_prod:this.prix})
  }

  // ngOnInit(): void {

  //   const id: number = +this.route.snapshot.paramMap.get('id')!;

  //   this.Httpservice.Get().subscribe((response: any[])=>{
  //     this.produit = response.find((p=>p.id_prod==id))
  //   })
  //   console.log('id: ', id);
  // }
}
