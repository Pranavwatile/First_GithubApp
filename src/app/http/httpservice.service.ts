import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseUrl : string="http://localhost:3000/";

  httpHeaders:HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })
  constructor(private http: HttpClient) { }

  postDataToServer(endPoint:string, body:any){//beacause post accept 2 args
    const url = this.baseUrl+endPoint;
    return this.http.post(url, body, {headers:this.httpHeaders})// 3 requirements for post method 
}
getDataToServer (endPoint:string) {
  const url =this.baseUrl + endPoint;
  return this.http.get (url, {headers:this.httpHeaders })// 2 for get mothods
}
}
