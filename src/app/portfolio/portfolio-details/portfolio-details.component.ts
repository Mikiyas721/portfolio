import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
// @ts-ignore
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
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

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.data = this.sharedService.selectedPortfolio
    console.log("M123")
    console.log(M)

    document.addEventListener('DOMContentLoaded', function(event) {
      console.log("11111 Here")
      var elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems);
    });
  }

  ngOnDestroy(): void {
    this.emitter.emit()
  }

  ngAfterViewInit() {
    /*bulmaCarousel.attach('#carousel', {
      autoplay: true,
      loop: true,
      pauseOnHover: false,
      slidesToShow:this.data.slideCount
    });*/
  }

  downloadFile(){
    window.event?.stopPropagation()
    let link = document.createElement("a");
    link.download = this.data.downloadLink.title;
    link.href = this.data.downloadLink.url;
    link.click();
  }

}
