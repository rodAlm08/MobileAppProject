import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://yummly2.p.rapidapi.com/feeds/list/?rapidapi-key=de0107c861mshb2c1f039e71c62fp10b8b2jsn0cb141c1bf49');
  }
}
