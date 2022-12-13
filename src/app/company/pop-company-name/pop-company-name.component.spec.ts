import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCompanyNameComponent } from './pop-company-name.component';

describe('PopCompanyNameComponent', () => {
  let component: PopCompanyNameComponent;
  let fixture: ComponentFixture<PopCompanyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopCompanyNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
