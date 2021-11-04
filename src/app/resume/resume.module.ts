import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeHomeComponent } from './resume-home/resume-home.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SkillDetailsModalComponent } from './skill-details-modal/skill-details-modal.component';
import { IconedTextComponent } from './iconed-text/iconed-text.component';


@NgModule({
  declarations: [
    ResumeHomeComponent,
    SkillCardComponent,
    SkillDetailsModalComponent,
    IconedTextComponent
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
