import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tmodel } from '../models/tmodel.model'

const baseUrl = 'https://safe-ravine-85187.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class MytransactionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tmodel[]> {
    return this.http.get<Tmodel[]>(baseUrl+'/getdata');
  }  

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'/postdata', data);
  }

}


