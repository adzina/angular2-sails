import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherAddStudentsComponent } from './view-teacher-add-students.component';

describe('ViewTeacherAddStudentsComponent', () => {
  let component: ViewTeacherAddStudentsComponent;
  let fixture: ComponentFixture<ViewTeacherAddStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeacherAddStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherAddStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
