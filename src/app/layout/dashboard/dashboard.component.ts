import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppServiceService } from '../../app-service.service'; 


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgbCarouselModule,NgbNavModule,CommonModule,NgbRatingModule,FlexLayoutModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  leftarrow='<';
  productDetails:any;


  constructor(public config: NgbRatingConfig,private service:AppServiceService ){
    config.max = 5;
		config.readonly = true;

  }

  ngOnInit(): void {
   this.getDetailsProduct()
  }

  getDetailsProduct(){
    this.service.getProductdata().subscribe((data:any)=>{
      this.productDetails=data;
    })
  }
  getBackgroundImage(base64Data: string): string {
    return `url(data:image/png;base64,${base64Data})`;
  }


}
