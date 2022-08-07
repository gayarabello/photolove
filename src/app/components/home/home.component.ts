import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  error: boolean = false;
  photos: Photo[] = [];
  skip: number = 0;
  constructor( private photoService: PhotoService ) { }

  ngOnInit(): void {
    this.loadPhotos()
  }
  reloadPhotos(): void {
    this.error = false;
    this.skip = 0;
    this.loadPhotos();
  }
  loadPhotos(): void{
    this.skip = this.skip + 5
    this.loading = true;
    this.photoService
      .getPhotos(this.skip)
      .subscribe({
        next:(photos: Photo[]) => {          
          if(photos.length) {
            this.photos = photos              
            this.error = false
          } else {
            this.error = true
          }             
          this.loading = false
        }
      });
    
  }
}