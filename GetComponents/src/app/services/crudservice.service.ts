import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CRUDserviceService {

  baseURL:string ="https://localhost:7016/api/Car/"

  constructor(private http:HttpClient) { }

  getAll():Observable<CarModel[]>{
    return this.http.get<CarModel[]>(this.baseURL+"GetAll");
  }
}
