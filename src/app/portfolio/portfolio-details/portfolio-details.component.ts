import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
// @ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';

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
    const element = document.querySelectorAll('.carousel');
    const instance = M.Carousel.init(element,
      this.data.slideCount === 1 ? {
        indicators: true,
        numVisible: 1,
        fullWidth: true
      } : {
        indicators: true,
        numVisible: 5,
        fullWidth: false,

      })
    autoplay();

    function autoplay() {
      instance[0].next()
      setTimeout(autoplay, 2000);
    }
  }

  downloadFile() {
    window.event?.stopPropagation()
    let link = document.createElement("a");
    link.download = this.data.downloadLink.title;
    link.href = this.data.downloadLink.url;
    link.click();
  }

}
