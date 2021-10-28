import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() data: any

  constructor() {
  }

  ngOnInit(): void {
  }

}
