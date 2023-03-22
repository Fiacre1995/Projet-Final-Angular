import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {

  constructor(private Http: HttpClient) { } 

  Post(Data:any) {
    this.Http.post("http://localhost:8095/facture",Data,{headers : this.httpHeader()}).subscribe({
      next:response=>{  
        console.log(response);
      },
      error:error=>{
        console.log(error);
        
      }
    });
  }

  Get() {
    return this.Http.get("http://localhost:8095/facture",{headers : this.httpHeader()})
  }

  Update(Data:any){
    this.Http.put("http://localhost:8095/facture",Data,{headers : this.httpHeader()}).subscribe((response)=>{
      console.log(response);
    })
  }

  Delete(Data:number) {
    this.Http.delete("http://localhost:8095/facture/"+Data,{headers : this.httpHeader()}).subscribe((response)=>{
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
