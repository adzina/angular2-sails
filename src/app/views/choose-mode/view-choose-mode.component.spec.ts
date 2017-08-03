import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseModeComponent } from './choose-mode.component';

describe('ChooseModeComponent', () => {
  let component: ChooseModeComponent;
  let fixture: ComponentFixture<ChooseModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
