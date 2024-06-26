import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgbCarouselModule,NgbNavModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  leftarrow='<';
}
