import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioHomeComponent} from "./portfolio-home/portfolio-home.component";
import {PortfolioDetailsComponent} from "./portfolio-details/portfolio-details.component";

const routes: Routes = [
  {
    path: '', component: PortfolioHomeComponent, children: [
      {
        path: 'portfolioDetails', component: PortfolioDetailsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
