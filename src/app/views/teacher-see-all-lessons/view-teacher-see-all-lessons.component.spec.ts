import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelLessonsComponent } from './side-panel-lessons.component';

describe('SidePanelLessonsComponent', () => {
  let component: SidePanelLessonsComponent;
  let fixture: ComponentFixture<SidePanelLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanelLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
