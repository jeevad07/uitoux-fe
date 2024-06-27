import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppServiceService } from '../app-service.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  declarations: [
  ],
  bootstrap: [],
  providers: [AppServiceService
  ],
})
export class LayoutModule { }
