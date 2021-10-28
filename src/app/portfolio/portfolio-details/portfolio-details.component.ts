import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
// @ts-ignore
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() data: any
  @Output('onDestroy') emitter = new EventEmitter()

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.data = this.sharedService.selectedPortfolio
  }

  ngOnDestroy(): void {
    this.emitter.emit()
  }

  ngAfterViewInit() {
    bulmaCarousel.attach('#carousel', {
      autoplay: true,
      loop: true,
      pauseOnHover: false,
      slidesToShow:3
    });
  }


}
