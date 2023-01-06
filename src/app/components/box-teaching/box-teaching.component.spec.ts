import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTeachingComponent } from './box-teaching.component';

describe('BoxTeachingComponent', () => {
  let component: BoxTeachingComponent;
  let fixture: ComponentFixture<BoxTeachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTeachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
