import { Component, OnInit , Input , ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  @Input() coursesList:any;
  @Input() width: number = 1200;
  @ViewChild('carouselwrapper') elementView;
  childIndex: number = 0;
  amount: number = 0;
  public images: any;
  constructor() {
    this.images = [
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg',
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
    ]}

  ngOnInit() {
    console.log(this.images)
  }
  scroll(forward: boolean, elem: any) {
  this.childIndex += forward ? 1 : -1;
  this.amount = -(this.calcScroll(elem));
}
calcScroll(elem: any) {

  let counter = 0;
  for (let i = this.childIndex - 1; i >= 0; i--) {
    const el = elem.children[i];
    const style = el.currentStyle || window.getComputedStyle(el);
    counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
  }
  return counter;
}

}
