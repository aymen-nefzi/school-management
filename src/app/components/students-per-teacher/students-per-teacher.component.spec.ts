import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPerTeacherComponent } from './students-per-teacher.component';

describe('StudentsPerTeacherComponent', () => {
  let component: StudentsPerTeacherComponent;
  let fixture: ComponentFixture<StudentsPerTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsPerTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPerTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
