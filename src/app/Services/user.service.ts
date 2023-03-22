import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { } 

  Post(Data:any) {
    this.Http.post("http://localhost:8095/utilisateur",Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  Get() {
    return this.Http.get("http://localhost:8095/utilisateur",{headers : this.httpHeader()})
  }

  Update(Data:any){
    this.Http.put("http://localhost:8095/utilisateur",Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  Delete(Data:number) {
    this.Http.delete("http://localhost:8095/utilisateur/"+Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  // login(username:string,password:string):Observable<any>{
  //   return this.Http.post('http://localhost:8000/utilisateur',{username,password})
  // }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }
}
