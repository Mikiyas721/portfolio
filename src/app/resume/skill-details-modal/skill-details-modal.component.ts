import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-skill-details-modal',
  templateUrl: './skill-details-modal.component.html',
  styleUrls: ['./skill-details-modal.component.css']
})
export class SkillDetailsModalComponent implements OnInit, OnDestroy {
  @Output('onClose') closeEmitter = new EventEmitter()
  @Input() data:any

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.append(this.elementRef.nativeElement)
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove()
  }

  closeModal() {
    this.closeEmitter.emit()
  }

}
