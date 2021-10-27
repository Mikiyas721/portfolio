import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'', loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)},
  {path:'portfolio', loadChildren:()=>import('./portfolio/portfolio.module').then((m)=>m.PortfolioModule)},
  {path:'resume', loadChildren:()=>import('./resume/resume.module').then((m)=>m.ResumeModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
