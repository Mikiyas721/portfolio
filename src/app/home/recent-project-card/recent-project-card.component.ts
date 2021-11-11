import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recent-project-card',
  templateUrl: './recent-project-card.component.html',
  styleUrls: ['./recent-project-card.component.css']
})
export class RecentProjectCardComponent implements OnInit {
  @Input() recent:any

  constructor() {
  }

  ngOnInit(): void {
  }

}
