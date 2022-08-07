import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { Photo } from '../Photo';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  private apiUrl = (skip: number) =>  `https://cataas.com/api/cats?&skip=${skip}&limit=5`;

  constructor( private http:HttpClient ) { }

  getPhotos(skip: number): Observable<Photo[]>{  
    return this.http.get<Photo[]>(this.apiUrl(skip))
  }


  getLoved(): Photo[]{ 
    const myPhotos = Object.keys(localStorage)
    const photos = myPhotos.map((item) => {
      const myItem = localStorage.getItem(item)
      if(myItem) {
        return JSON.parse(myItem)
      } else {
        return null;
      }
    })
    return photos;
  }
}

