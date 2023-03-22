import { Component } from '@angular/core';
import { FournisseursService } from '../Services/fournisseurs.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {

  libelle = "";
  
  fournisseurs: any = [];

  constructor(private Httpservice: FournisseursService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({lib_four:this.libelle})
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.fournisseurs=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }
}
