import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  photos: Photo[] = [];
  
  constructor( private photoService: PhotoService ) { }

  ngOnInit(): void {
    this.loadLovedPhotos()
  }

  loadLovedPhotos(){
    this.photos = this.photoService.getLoved()
  }
}
