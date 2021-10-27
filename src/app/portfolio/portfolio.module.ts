import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';


@NgModule({
  declarations: [
    PortfolioHomeComponent,
    PortfolioCardComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [
    PortfolioHomeComponent
  ]
})
export class PortfolioModule {
}
