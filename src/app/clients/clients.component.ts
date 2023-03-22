import { Component } from '@angular/core';
import { ClientsService } from '../Services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  nom = "";
  prenoms = "";
  sexe = "";
  clients: any = [];

  constructor(private Httpservice: ClientsService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({nom_cli:this.nom,prenom_cli:this.prenoms,sexe_cli:this.sexe})
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.clients=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }
  
}
