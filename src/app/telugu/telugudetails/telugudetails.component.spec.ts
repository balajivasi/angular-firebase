import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugudetailsComponent } from './telugudetails.component';

describe('TelugudetailsComponent', () => {
  let component: TelugudetailsComponent;
  let fixture: ComponentFixture<TelugudetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelugudetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelugudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
