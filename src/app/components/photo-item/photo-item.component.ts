import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../Photo'

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo!: Photo;
  @Output() updateLoved = new EventEmitter();

  liked: boolean = false;
  title = 'photo item';
  constructor() { 
  }

  ngOnInit(): void {
    this.liked = Boolean(localStorage.getItem(String(this.photo.id)))  
  }

  onClick(id: string | undefined): void{
  if(!this.liked){
    localStorage.setItem(`${id}`, JSON.stringify(this.photo));
  } else {
    localStorage.removeItem(`${id}`);
  }
  this.updateLoved.emit()
  this.liked = Boolean(localStorage.getItem(String(this.photo.id)))
  }
}
