import { Component } from '@angular/core';
import { CaissesService } from '../Services/caisses.service';

@Component({
  selector: 'app-caisses',
  templateUrl: './caisses.component.html',
  styleUrls: ['./caisses.component.css']
})
export class CaissesComponent {

  Numero = "";
  
  caisses: any = [];

  constructor(private Httpservice: CaissesService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post({num_caiss:this.Numero})
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.caisses=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }
}
