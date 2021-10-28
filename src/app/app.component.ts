import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {
  }
  getUnderlined():number{
    if(this.router.url =='/') return 0
    else if(this.router.url ==='/portfolio') return 1
    else if(this.router.url ==='/resume') return 2
    return 3
  }
  getTitle():string{
    const route = this.getUnderlined()
    if(route==0) return 'Basic Information'
    else if (route==1) return 'Portfolio'
    else if(route==2) return 'Curriculum Vitae'
    else return 'Project'
  }
}
