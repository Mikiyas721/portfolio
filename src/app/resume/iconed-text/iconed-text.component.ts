import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iconed-text',
  templateUrl: './iconed-text.component.html',
  styleUrls: ['./iconed-text.component.css']
})
export class IconedTextComponent implements OnInit {
  @Input() labels:any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
