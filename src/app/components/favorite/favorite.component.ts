import { Component, OnInit } from '@angular/core';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  photos: Photo[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.updateLovedImages()
  }

  updateLovedImages(){
    const myPhotos = Object.keys(localStorage)
    this.photos = myPhotos.map((item) => {
      const myItem = localStorage.getItem(item)
      if(myItem) {
        return JSON.parse(myItem)
      } else {
        return null;
      }
    })
  }
}
