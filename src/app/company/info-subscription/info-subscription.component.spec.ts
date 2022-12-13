import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubscriptionComponent } from './info-subscription.component';

describe('InfoSubscriptionComponent', () => {
  let component: InfoSubscriptionComponent;
  let fixture: ComponentFixture<InfoSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoSubscriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
