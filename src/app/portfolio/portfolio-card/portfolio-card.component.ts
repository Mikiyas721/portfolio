import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() portfolio:any
  @Output('onCardClick') eventEmitter = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.eventEmitter.emit()
  }

}
