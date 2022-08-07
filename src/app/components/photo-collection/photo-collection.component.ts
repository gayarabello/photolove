import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss']
})
export class PhotoCollectionComponent implements OnInit {
  @Input() photos!: Photo[] ;
  @Input() loading!: boolean ;
  @Output() updateLoved = new EventEmitter();
  
  ngOnInit(): void {
  }
  updateLovedPhotos(){
    this.updateLoved.emit()
  }
}
