import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos: Photo[] = [];
  skip: number = 0;
  constructor( private photoService: PhotoService ) { }

  ngOnInit(): void {
    this.getImages()
  }
  getImages(){
    this.skip = this.skip + 5
    this.photoService.getImages(this.skip).subscribe((photos: Photo[]) => this.photos = photos);
  }
}