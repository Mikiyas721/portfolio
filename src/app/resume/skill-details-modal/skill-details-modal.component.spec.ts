import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsModalComponent } from './skill-details-modal.component';

describe('SkillDetailsModalComponent', () => {
  let component: SkillDetailsModalComponent;
  let fixture: ComponentFixture<SkillDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
