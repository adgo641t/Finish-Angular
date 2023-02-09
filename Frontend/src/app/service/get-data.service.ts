import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  consultaGET(parametros: any){
    return this.http.get('http://localhost:3001',
    {
      params: parametros,
      responseType: "json"
    })
  }
}