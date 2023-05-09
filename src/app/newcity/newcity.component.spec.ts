import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcityComponent } from './newcity.component';

describe('NewcityComponent', () => {
  let component: NewcityComponent;
  let fixture: ComponentFixture<NewcityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewcityComponent]
    });
    fixture = TestBed.createComponent(NewcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
