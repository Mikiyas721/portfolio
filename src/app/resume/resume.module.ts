import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeHomeComponent } from './resume-home/resume-home.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillDetailsModalComponent } from './skill-details-modal/skill-details-modal.component';


@NgModule({
  declarations: [
    ResumeHomeComponent,
    SkillCardComponent,
    SkillDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  exports:[
    ResumeHomeComponent
  ]
})
export class ResumeModule { }
