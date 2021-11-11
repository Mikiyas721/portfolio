import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router'
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private shared: SharedService) {
    window.onload = () => {
      if (this.router.url === "/portfolio/portfolioDetails" && shared.selectedPortfolio === undefined) {
        this.router.navigate(['/portfolio'], {replaceUrl: true})
      }
    }
    if (window.innerWidth < 1025) alert("Please open with a desktop for a better preview.")
  }

  getUnderlined(): number {
    if (this.router.url == '/') return 0
    else if (this.router.url.startsWith('/portfolio') && this.router.url.split('/').length === 2) return 1
    else if (this.router.url === '/resume') return 2
    return 3
  }

  getTitle(): string {
    const route = this.getUnderlined()
    if (route == 0) return 'Basic Information'
    else if (route == 1) return 'Portfolio'
    else if (route == 2) return 'Curriculum Vitae'
    else return 'Project'
  }

}
