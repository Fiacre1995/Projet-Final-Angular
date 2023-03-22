import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nom = "";
  prenoms = "";
  email = "";
  password = "";
  genre = "";
  role = "";

  user1: any = [];
  data1: any;

  constructor(private Httpservice: UserService) {
    this.Get()
  }

  submit() {
    this.Httpservice.Post(
      {
       lastname_user:this.nom,
       firstname_user:this.prenoms,
       email_user:this.email,
       password_user:this.password,
       sex_user:this.genre,
       role_user:this.role
       
      })
    window.location.reload();
  }

  Get() {
    this.Httpservice.Get().subscribe(response=>this.user1=response)
  }

  Delete(id: number) {
    this.Httpservice.Delete(id);
    window.location.reload();
  }

  Login() {

    
    this.Httpservice.Get().subscribe(response=>this.user1=response)

    // for (let i = 0; i < this.user1.length; i++) {
    //   if (this.email =   && this.password=) {
    //     this.isConnected = true;
    //   }
    // }
    
    
  }

}
