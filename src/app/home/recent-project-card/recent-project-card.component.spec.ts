import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectCardComponent } from './recent-project-card.component';

describe('RecentProjectCardComponent', () => {
  let component: RecentProjectCardComponent;
  let fixture: ComponentFixture<RecentProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
