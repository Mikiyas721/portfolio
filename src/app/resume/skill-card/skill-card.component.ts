import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface frameWork {
  title: string,
  iconUrl: string,
  duration: string,
  projects: string[]
}

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  @Input('framework') framework: any
  @Output('onCardClick') event = new EventEmitter<unknown>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onCardClick() {
    this.event.emit()
  }


}
