import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayListingComponent } from './birthday-listing.component';

describe('BirthdayListingComponent', () => {
  let component: BirthdayListingComponent;
  let fixture: ComponentFixture<BirthdayListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
