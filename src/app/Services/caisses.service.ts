import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaissesService {

  constructor(private Http: HttpClient) { } 

  Post(Data:any) {
    this.Http.post("http://localhost:8095/caisse",Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  Get() {
    return this.Http.get("http://localhost:8095/caisse",{headers : this.httpHeader()})
  }

  Update(Data:any){
    this.Http.put("http://localhost:8095/caisse",Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  Delete(Data:number) {
    this.Http.delete("http://localhost:8095/caisse/"+Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }
}
