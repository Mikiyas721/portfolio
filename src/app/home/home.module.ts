import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { RecentProjectCardComponent } from './recent-project-card/recent-project-card.component';


@NgModule({
  declarations: [
    HomeHomeComponent,
    RecentProjectCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[
    HomeHomeComponent
  ]
})
export class HomeModule { }
