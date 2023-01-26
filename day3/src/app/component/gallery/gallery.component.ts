import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  imgSrc: String ;
  count: number = 0; 
gallery: String[]=[
'assets/images/1.jpg',
'assets/images/2.jpg',
'assets/images/3.jpg',
'assets/images/5.jpg',
]
constructor(){
this.imgSrc =this.gallery[0];

}
showGallery(e: Event){
  e.preventDefault();
  this.count++;

  if (this.count ===this.gallery.length){
    this.count =0;
  }
  this.imgSrc=this.gallery[this.count];
}
}

