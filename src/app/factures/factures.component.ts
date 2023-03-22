import { Component } from '@angular/core';
import { user } from '../models/user.model';
import { CaissesService } from '../Services/caisses.service';
import { ClientsService } from '../Services/clients.service';
import { FacturesService } from '../Services/factures.service';
import { UserService } from '../Services/user.service';
import { VentesService } from '../Services/ventes.service';

import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {

 
  montant = 0;

  id_vente = 0;

  id_cli = 0;

  id_caiss = 0;

  // id_caiss = 0;

  // id_user = 0;

  factures: any = [];

  ventes: any = [];
  
  caisses: any = [];

  clients: any = [];

  // id_cath_prod=0;

  // id_four =0;

  // fournisseurs: any = [];

  // cathegory_produits: any = [];

  // caisses: any = [];

  // utilisateur: any = [];

  // factures: any = [];
  

  constructor(private Httpservice: FacturesService, private Httpservice1: VentesService, private Httpservice2: CaissesService, private Httpservice3: ClientsService) {
    this.Get();
  }
  

  submit() {
  
    let data={
      ventes:{
        "id_vente": this.id_vente
      },
      caisse:{
        "id_caiss": this.id_caiss
      },
      clients:{
        "id_cli": this.id_cli
      }
      
    }

    console.log(data);
      
    this.Httpservice.Post(data)

    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.factures=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }


  ngOnInit(): void {
     
    this.Httpservice1.Get().subscribe(response=>{
       this.ventes=response
    })

    this.Httpservice2.Get().subscribe(response=>{
       this.caisses=response
    })

    this.Httpservice3.Get().subscribe(response=>{
       this.clients=response
    })


  }

}
