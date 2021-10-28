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

  onCardClick() {
    this.eventEmitter.emit()
  }

  downloadFile(){
    window.event?.stopPropagation()
    let link = document.createElement("a");
    link.download = this.portfolio.downloadLink.title;
    link.href = this.portfolio.downloadLink.url;
    link.click();
  }

}
