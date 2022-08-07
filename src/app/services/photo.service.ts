import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { Photo } from '../Photo';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  private apiUrl = (skip: number) =>  `https://cataas.com/api/cats?&skip=${skip}&limit=5`;

  constructor( private http:HttpClient ) { }

  getImages(skip: number): Observable<Photo[]>{ 
    return this.http.get<Photo[]>(this.apiUrl(skip))
  }
}

