import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersListComponent } from './freelancers-list.component';

describe('FreelancersListComponent', () => {
  let component: FreelancersListComponent;
  let fixture: ComponentFixture<FreelancersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
