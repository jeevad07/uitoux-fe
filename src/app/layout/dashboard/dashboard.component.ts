import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgbCarouselModule,NgbNavModule,CommonModule,NgbRatingModule,FlexLayoutModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  leftarrow='<';

  // productDetails=[{
  //   imgUrl:"/src/assets/image/product-1.jpeg",
  //   hot:true,
  //   sku:"A43-44328-B",
  //   name:"Glossy Gray 19' Aluminium Wheel AR-19",
  //   rating:4,
  //   review:26,
  //   rate:"$589"
  // },
  // {
  //   imgUrl:"/src/assets/image/product-1.jpeg",
  //   hot:true,
  //   sku:"A43-44328-B",
  //   name:"Glossy Gray 19' Aluminium Wheel AR-19",
  //   rating:4,
  //   review:26,
  //   rate:"$589"
  // },
  // {
  //   imgUrl:"../../../assets/image/product-1.jpeg",
  //   hot:true,
  //   sku:"A43-44328-B",
  //   name:"Glossy Gray 19' Aluminium Wheel AR-19",
  //   rating:4,
  //   review:26,
  //   rate:"$589"
  // },
  // {
  //   imgUrl:"../../../assets/image/product-1.jpeg",
  //   hot:true,
  //   sku:"A43-44328-B",
  //   name:"Glossy Gray 19' Aluminium Wheel AR-19",
  //   rating:4,
  //   review:26,
  //   rate:"$589"
  // },
  // {
  //   imgUrl:"../../../assets/image/product-1.jpeg",
  //   hot:true,
  //   sku:"A43-44328-B",
  //   name:"Glossy Gray 19' Aluminium Wheel AR-19",
  //   rating:4,
  //   review:26,
  //   rate:"$589"
  // }]


  productDetails=[{
    imgUrl:"/src/assets/image/product-1.jpeg",
    hot:true,
    sku:"A43-44328-B",
    name:"Glossy Gray 19' Aluminium Wheel AR-19",
    rating:4,
    review:26,
    rate:"$589"
  },
  {
    imgUrl:"/src/assets/image/product-1.jpeg",
    hot:true,
    sku:"A43-44328-B",
    name:"Glossy Gray 19' Aluminium Wheel AR-19",
    rating:4,
    review:26,
    rate:"$589"
  },
  {
    imgUrl:"../../../assets/image/product-1.jpeg",
    hot:true,
    sku:"A43-44328-B",
    name:"Glossy Gray 19' Aluminium Wheel AR-19",
    rating:4,
    review:26,
    rate:"$589"
  },
  {
    imgUrl:"../../../assets/image/product-1.jpeg",
    hot:true,
    sku:"A43-44328-B",
    name:"Glossy Gray 19' Aluminium Wheel AR-19",
    rating:4,
    review:26,
    rate:"$589"
  },
  {
    imgUrl:"../../../assets/image/product-1.jpeg",
    hot:true,
    sku:"A43-44328-B",
    name:"Glossy Gray 19' Aluminium Wheel AR-19",
    rating:4,
    review:26,
    rate:"$589"
  }]


  constructor(config: NgbRatingConfig){
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit(): void {
  }

}
